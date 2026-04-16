// ═══════════════════════════════════════════════════════════════
// RAB Framework — Main Application Logic
// Supabase-backed, premium SPA
// ═══════════════════════════════════════════════════════════════

// ── Supabase Client Reference ──────────────────────────────────
// window.supabaseClient is set by supabase-config.js (avoids CDN name collision)
const sb = window.supabaseClient;

// ── Global State ───────────────────────────────────────────────
let currentUser = null;
let currentStep = 1;
let assessmentData = {
    assessment_type: '',
    subject_name: '',
    notes: '',
    weights: { strategic: 20, operational: 20, financial: 20, compliance: 20, resilience: 20 },
    responses: {}
};

// ── Initialization ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', async () => {
    setupNavigation();
    setupWeightSliders();
    loadQuestions();
    await checkAuth();
});

// ── Auth ────────────────────────────────────────────────────────
async function checkAuth() {
    try {
        const { data: { session } } = await sb.auth.getSession();
        if (session) {
            currentUser = session.user;
            showApp();
        } else {
            showAuth();
        }
    } catch (err) {
        console.error('Auth check failed:', err);
        showAuth();
    }
    hideLoading();
}

function showAuth() {
    document.getElementById('view-auth').style.display = 'flex';
    document.getElementById('app-shell').style.display = 'none';
}

function showApp() {
    document.getElementById('view-auth').style.display = 'none';
    document.getElementById('app-shell').style.display = 'block';
    
    // Show user name
    const nameEl = document.getElementById('nav-user-name');
    if (currentUser?.user_metadata?.full_name) {
        nameEl.textContent = currentUser.user_metadata.full_name;
    } else {
        nameEl.textContent = currentUser?.email || '';
    }
    
    loadAllResults();
}

function switchAuthTab(tab) {
    document.querySelectorAll('.auth-tab').forEach(t => {
        t.classList.toggle('active', t.dataset.tab === tab);
    });
    document.getElementById('login-form').style.display = tab === 'login' ? 'block' : 'none';
    document.getElementById('signup-form').style.display = tab === 'signup' ? 'block' : 'none';
    // Clear errors
    document.getElementById('login-error').style.display = 'none';
    document.getElementById('signup-error').style.display = 'none';
}

async function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const errorEl = document.getElementById('login-error');

    try {
        const { data, error } = await sb.auth.signInWithPassword({ email, password });
        if (error) throw error;
        currentUser = data.user;
        showApp();
        showToast('Welcome back!', 'success');
    } catch (err) {
        errorEl.textContent = err.message || 'Login failed';
        errorEl.style.display = 'block';
    }
}

async function handleSignup(e) {
    e.preventDefault();
    const name = document.getElementById('signup-name').value;
    const org = document.getElementById('signup-org').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const errorEl = document.getElementById('signup-error');

    try {
        const { data, error } = await sb.auth.signUp({
            email,
            password,
            options: {
                data: {
                    full_name: name,
                    organization: org
                }
            }
        });
        if (error) throw error;

        // If auto-confirm is enabled, sign in immediately
        if (data.session) {
            currentUser = data.user;
            
            // Create org and user profile
            await createUserProfile(data.user, name, org);
            
            showApp();
            showToast('Account created! Welcome to RAB Framework.', 'success');
        } else {
            showToast('Check your email to confirm your account.', 'info');
            switchAuthTab('login');
        }
    } catch (err) {
        errorEl.textContent = err.message || 'Signup failed';
        errorEl.style.display = 'block';
    }
}

async function createUserProfile(user, name, orgName) {
    try {
        // Create org
        let orgId = null;
        if (orgName) {
            const { data: orgData } = await sb
                .from('organizations')
                .insert({ name: orgName })
                .select()
                .single();
            if (orgData) orgId = orgData.id;
        }
        
        // Create user profile
        await sb.from('users').insert({
            id: user.id,
            full_name: name,
            org_id: orgId,
            role: 'admin'
        });
    } catch (err) {
        console.error('Profile creation error:', err);
    }
}

async function handleLogout() {
    await sb.auth.signOut();
    currentUser = null;
    showAuth();
    showToast('Signed out', 'info');
}

// ── Navigation ─────────────────────────────────────────────────
function setupNavigation() {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            switchView(btn.dataset.view);
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
}

function switchView(viewName) {
    document.querySelectorAll('#app-shell .view').forEach(v => v.classList.remove('active'));
    const target = document.getElementById(`view-${viewName}`);
    if (target) {
        target.classList.add('active');
        if (viewName === 'results') loadAllResults();
        if (viewName === 'compare') loadCompareOptions();
        if (viewName === 'retention') initRetentionView();
    }
    // Hide detail view on nav
    document.getElementById('view-detail').style.display = 'none';
}

function startAssessment() {
    switchView('assessment');
    document.querySelectorAll('.nav-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.view === 'assessment');
    });
    resetAssessment();
}

function viewResults() {
    switchView('results');
    document.querySelectorAll('.nav-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.view === 'results');
    });
}

function backToResults() {
    document.getElementById('view-detail').style.display = 'none';
    switchView('results');
}

// ── Weight Sliders ─────────────────────────────────────────────
function setupWeightSliders() {
    document.querySelectorAll('.weight-slider').forEach(s => {
        s.addEventListener('input', updateWeights);
    });
}

function updateWeights() {
    const dims = ['strategic', 'operational', 'financial', 'compliance', 'resilience'];
    let total = 0;

    dims.forEach(d => {
        const val = parseInt(document.getElementById(`weight-${d}`).value);
        document.getElementById(`weight-${d}-value`).textContent = `${val}%`;
        assessmentData.weights[d] = val;
        total += val;
    });

    document.getElementById('weight-total').textContent = `${total}%`;
    const container = document.getElementById('weight-total-container');
    const warning = document.getElementById('weight-warning');

    if (total === 100) {
        warning.style.display = 'none';
        container.classList.remove('invalid');
        container.classList.add('valid');
    } else {
        warning.style.display = 'block';
        container.classList.remove('valid');
        container.classList.add('invalid');
    }
}

function setPresetWeights(preset) {
    const presets = {
        balanced: { strategic: 20, operational: 20, financial: 20, compliance: 20, resilience: 20 },
        strategic: { strategic: 40, operational: 15, financial: 20, compliance: 15, resilience: 10 },
        operational: { strategic: 15, operational: 40, financial: 20, compliance: 15, resilience: 10 }
    };

    const w = presets[preset];
    Object.keys(w).forEach(d => {
        document.getElementById(`weight-${d}`).value = w[d];
    });

    // Update preset button styles (event may be undefined if called programmatically)
    document.querySelectorAll('.preset-buttons .btn-small').forEach(b => b.classList.remove('active'));
    const clickedBtn = document.querySelector(`.preset-buttons .btn-small[onclick*="${preset}"]`);
    if (clickedBtn) clickedBtn.classList.add('active');

    updateWeights();
}

// ── Questions ──────────────────────────────────────────────────
function loadQuestions() {
    const strategicContainer = document.getElementById('strategic-questions');
    strategicContainer.innerHTML = QUESTIONS.strategic.map(q => createQuestionHTML(q)).join('');

    const opFinContainer = document.getElementById('operational-financial-questions');
    opFinContainer.innerHTML = [...QUESTIONS.operational, ...QUESTIONS.financial].map(q => createQuestionHTML(q)).join('');

    const complianceContainer = document.getElementById('compliance-questions');
    complianceContainer.innerHTML = QUESTIONS.compliance.map(q => createQuestionHTML(q)).join('');

    const resilienceContainer = document.getElementById('resilience-questions');
    resilienceContainer.innerHTML = QUESTIONS.resilience.map(q => createQuestionHTML(q)).join('');
}

function createQuestionHTML(question) {
    let html = `<div class="question-card" data-question-id="${question.id}">`;
    html += `<div class="question-text">${question.text}</div>`;
    if (question.scenario) {
        html += `<div class="scenario-text">${question.scenario}</div>`;
    }
    html += `<div class="question-text" style="font-weight:500;font-size:0.9rem;">${question.question}</div>`;

    if (question.type === 'likert') {
        html += `<div class="likert-scale">`;
        question.options.forEach(opt => {
            html += `
                <label class="likert-option">
                    <input type="radio" name="${question.id}" value="${opt.value}" required>
                    <span class="likert-label">${opt.label}</span>
                </label>`;
        });
        html += `</div>`;
    }
    html += `</div>`;
    return html;
}

// ── Step Navigation ────────────────────────────────────────────
function nextStep() {
    if (!validateStep(currentStep)) {
        showToast('Please complete all required fields.', 'error');
        return;
    }
    saveStepData(currentStep);

    if (currentStep < 7) {
        document.getElementById(`step-${currentStep}`).classList.remove('active');
        currentStep++;
        document.getElementById(`step-${currentStep}`).classList.add('active');
        updateProgress();
        updateNavButtons();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function prevStep() {
    if (currentStep > 1) {
        document.getElementById(`step-${currentStep}`).classList.remove('active');
        currentStep--;
        document.getElementById(`step-${currentStep}`).classList.add('active');
        updateProgress();
        updateNavButtons();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function validateStep(step) {
    switch (step) {
        case 1: return !!document.querySelector('input[name="assessment_type"]:checked');
        case 2: return document.getElementById('subject_name').value.trim() !== '';
        case 3: return Object.values(assessmentData.weights).reduce((a, b) => a + b, 0) === 100;
        case 4: case 5: case 6: case 7:
            const el = document.getElementById(`step-${step}`);
            const names = new Set();
            el.querySelectorAll('input[type="radio"]').forEach(r => names.add(r.name));
            for (let name of names) {
                if (!el.querySelector(`input[name="${name}"]:checked`)) return false;
            }
            return true;
        default: return true;
    }
}

function saveStepData(step) {
    switch (step) {
        case 1:
            assessmentData.assessment_type = document.querySelector('input[name="assessment_type"]:checked').value;
            break;
        case 2:
            assessmentData.subject_name = document.getElementById('subject_name').value.trim();
            assessmentData.notes = document.getElementById('notes').value.trim();
            break;
        case 4: case 5: case 6: case 7:
            document.getElementById(`step-${step}`).querySelectorAll('input[type="radio"]:checked').forEach(r => {
                assessmentData.responses[r.name] = parseInt(r.value);
            });
            break;
    }
}

function updateProgress() {
    const pct = (currentStep / 7) * 100;
    document.getElementById('progress-fill').style.width = `${pct}%`;
    document.getElementById('progress-text').textContent = `Step ${currentStep} of 7`;
}

function updateNavButtons() {
    document.getElementById('btn-prev').disabled = currentStep === 1;
    document.getElementById('btn-next').style.display = currentStep === 7 ? 'none' : 'inline-flex';
    document.getElementById('btn-submit').style.display = currentStep === 7 ? 'inline-flex' : 'none';
}

// ── Scoring ────────────────────────────────────────────────────
function calculateScores() {
    const scores = {};
    Object.keys(QUESTIONS).forEach(dim => {
        let total = 0, count = 0;
        QUESTIONS[dim].forEach(q => {
            if (assessmentData.responses[q.id]) {
                total += assessmentData.responses[q.id];
                count++;
            }
        });
        scores[dim] = count > 0 ? Math.round(((total / count - 1) / 4) * 100) : 0;
    });

    const overall = Math.round(
        Object.keys(scores).reduce((sum, dim) => {
            return sum + (scores[dim] * assessmentData.weights[dim] / 100);
        }, 0)
    );

    return { overall, ...scores };
}

function getRiskProfile(score) {
    if (score < 40) return 'Conservative';
    if (score < 70) return 'Moderate';
    return 'Aggressive';
}

function generateRecommendations(scores) {
    const recs = [];
    Object.keys(scores).forEach(dim => {
        if (dim === 'overall') return;
        const s = scores[dim];
        const level = s < 40 ? 'low' : s < 70 ? 'moderate' : 'high';
        const dimRecs = RECOMMENDATIONS[dim]?.[level] || [];
        dimRecs.forEach(r => {
            recs.push({
                dimension: dim.charAt(0).toUpperCase() + dim.slice(1),
                priority: r.priority,
                recommendation_text: r.text,
                rationale: r.rationale
            });
        });
    });
    return recs;
}

// ── Submit Assessment ──────────────────────────────────────────
async function submitAssessment() {
    try {
        saveStepData(7);
        const scores = calculateScores();
        const profile = getRiskProfile(scores.overall);
        const recs = generateRecommendations(scores);

        const assessment = {
            created_by: currentUser?.id || null,
            assessment_type: assessmentData.assessment_type,
            subject_name: assessmentData.subject_name,
            notes: assessmentData.notes,
            overall_score: scores.overall,
            strategic_score: scores.strategic,
            operational_score: scores.operational,
            financial_score: scores.financial,
            compliance_score: scores.compliance,
            resilience_score: scores.resilience,
            risk_profile: profile,
            responses: assessmentData.responses,
            weights: assessmentData.weights,
            assessment_date: new Date().toISOString()
        };

        const { data: saved, error } = await sb
            .from('assessments')
            .insert(assessment)
            .select()
            .single();

        if (error) throw error;

        // Save recommendations
        if (recs.length > 0) {
            const recsWithId = recs.map(r => ({ ...r, assessment_id: saved.id }));
            await sb.from('recommendations').insert(recsWithId);
        }

        showToast('Assessment completed successfully!', 'success');

        // Fire webhook for Telegram notification (non-blocking)
        notifyAssessmentComplete(saved, profile);

        viewAssessmentDetail(saved.id);
        resetAssessment();
    } catch (err) {
        console.error('Submit error:', err);
        showToast('Error saving assessment. Please try again.', 'error');
    }
}

// ── Webhook Notification ───────────────────────────────────────
async function notifyAssessmentComplete(assessment, profile) {
    if (!CLOUD_SERVER_URL) return; // Skip if no relay server configured
    try {
        await fetch(`${CLOUD_SERVER_URL}/webhook`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                event: 'assessment_completed',
                assessment: {
                    id: assessment.id,
                    subject_name: assessment.subject_name,
                    assessment_type: assessment.assessment_type,
                    overall_score: assessment.overall_score,
                    strategic_score: assessment.strategic_score,
                    operational_score: assessment.operational_score,
                    financial_score: assessment.financial_score,
                    compliance_score: assessment.compliance_score,
                    resilience_score: assessment.resilience_score,
                    risk_profile: profile
                },
                user: {
                    name: currentUser?.user_metadata?.full_name || currentUser?.email,
                    organization: currentUser?.user_metadata?.organization || ''
                }
            })
        });
    } catch (err) {
        console.warn('Webhook notification failed (non-critical):', err.message);
    }
}

function resetAssessment() {
    currentStep = 1;
    assessmentData = {
        assessment_type: '',
        subject_name: '',
        notes: '',
        weights: { strategic: 20, operational: 20, financial: 20, compliance: 20, resilience: 20 },
        responses: {}
    };
    document.getElementById('subject_name').value = '';
    document.getElementById('notes').value = '';
    document.querySelectorAll('.assessment-step input[type="radio"]').forEach(r => r.checked = false);
    document.querySelectorAll('.assessment-step').forEach(s => s.classList.remove('active'));
    document.getElementById('step-1').classList.add('active');
    setPresetWeights('balanced');
    updateProgress();
    updateNavButtons();
}

// ── Load Results ───────────────────────────────────────────────
async function loadAllResults() {
    try {
        const { data: assessments, error } = await sb
            .from('assessments')
            .select('*')
            .order('created_at', { ascending: false })
            .limit(50);

        if (error) throw error;

        const container = document.getElementById('results-list');
        if (!assessments || assessments.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">—</div>
                    <h3>No Assessments Yet</h3>
                    <p>Start your first risk appetite assessment to see results here.</p>
                    <button class="btn-primary" onclick="startAssessment()">Start Assessment</button>
                </div>`;
            return;
        }

        container.innerHTML = assessments.map(a => createResultCard(a)).join('');
    } catch (err) {
        console.error('Load results error:', err);
        document.getElementById('results-list').innerHTML = `
            <div class="empty-state"><p>Error loading results. Please refresh.</p></div>`;
    }
}

function createResultCard(a) {
    const date = new Date(a.assessment_date || a.created_at).toLocaleDateString();
    const profileClass = (a.risk_profile || '').toLowerCase();
    return `
        <div class="result-card" onclick="viewAssessmentDetail('${a.id}')">
            <div class="result-header">
                <div class="result-title">${a.subject_name}</div>
                <div class="result-badge ${profileClass}">${a.risk_profile}</div>
            </div>
            <div class="result-meta">${(a.assessment_type || '').replace('_', ' ').toUpperCase()} · ${date}</div>
            <div class="result-score">${a.overall_score}</div>
            <div class="dimension-bars">
                <div class="dimension-bar">
                    <div class="dimension-bar-label"><span>Strategic</span><span>${a.strategic_score}</span></div>
                    <div class="dimension-bar-fill"><div class="dimension-bar-progress" style="width:${a.strategic_score}%"></div></div>
                </div>
                <div class="dimension-bar">
                    <div class="dimension-bar-label"><span>Operational</span><span>${a.operational_score}</span></div>
                    <div class="dimension-bar-fill"><div class="dimension-bar-progress" style="width:${a.operational_score}%"></div></div>
                </div>
                <div class="dimension-bar">
                    <div class="dimension-bar-label"><span>Financial</span><span>${a.financial_score}</span></div>
                    <div class="dimension-bar-fill"><div class="dimension-bar-progress" style="width:${a.financial_score}%"></div></div>
                </div>
                <div class="dimension-bar">
                    <div class="dimension-bar-label"><span>Compliance</span><span>${a.compliance_score}</span></div>
                    <div class="dimension-bar-fill"><div class="dimension-bar-progress" style="width:${a.compliance_score}%"></div></div>
                </div>
                <div class="dimension-bar">
                    <div class="dimension-bar-label"><span>Resilience</span><span>${a.resilience_score}</span></div>
                    <div class="dimension-bar-fill"><div class="dimension-bar-progress" style="width:${a.resilience_score}%"></div></div>
                </div>
            </div>
        </div>`;
}

// ── Detail View ────────────────────────────────────────────────
async function viewAssessmentDetail(id) {
    try {
        const { data: a, error } = await sb.from('assessments').select('*').eq('id', id).single();
        if (error) throw error;

        const { data: recs } = await sb.from('recommendations').select('*').eq('assessment_id', id);

        document.getElementById('view-detail').style.display = 'block';
        document.querySelectorAll('#app-shell .view').forEach(v => v.classList.remove('active'));
        renderDetail(a, recs || []);
    } catch (err) {
        console.error('Detail load error:', err);
        showToast('Error loading assessment details.', 'error');
    }
}

function renderDetail(a, recs) {
    const date = new Date(a.assessment_date || a.created_at).toLocaleDateString();
    const html = `
        <div class="detail-header">
            <h2>${a.subject_name}</h2>
            <p style="color:var(--text-secondary);margin-top:0.5rem;">${(a.assessment_type||'').replace('_',' ').toUpperCase()} · ${date}</p>
            ${a.notes ? `<p style="color:var(--text-dim);margin-top:0.75rem;font-size:0.9375rem;">${a.notes}</p>` : ''}
        </div>
        <div class="detail-score-display">
            <div class="score-circle" style="--score-percent:${a.overall_score}%">
                <span>${a.overall_score}</span>
            </div>
            <div>
                <h3>Risk Profile: <span class="text-gradient">${a.risk_profile}</span></h3>
                <p>This ${(a.assessment_type||'').replace('_',' ')} demonstrates a <strong>${(a.risk_profile||'').toLowerCase()}</strong> risk appetite across evaluated dimensions.</p>
            </div>
        </div>
        <div class="chart-container">
            <h3>Dimension Analysis</h3>
            <canvas id="radar-chart"></canvas>
        </div>
        <div class="chart-container">
            <h3>Dimension Scores</h3>
            <canvas id="bar-chart"></canvas>
        </div>
        <div class="recommendations-section">
            <h3>Recommended Actions</h3>
            ${recs.map(r => `
                <div class="recommendation-card ${r.priority}">
                    <div class="recommendation-header">
                        <span class="recommendation-dimension">${r.dimension}</span>
                        <span class="priority-badge ${r.priority}">${r.priority}</span>
                    </div>
                    <div class="recommendation-text">${r.recommendation_text}</div>
                    <div class="recommendation-rationale">${r.rationale}</div>
                </div>
            `).join('')}
        </div>
        </div>
        <div class="detail-actions">
            <button class="btn-pdf" onclick="generateBoardReport('${a.id}')">Download Board Report (PDF)</button>
            <button class="btn-primary" onclick="loadAIInsights('${a.id}')">Generate AI Insights</button>
            <button class="btn-secondary" onclick="exportToPDF('${a.id}')">Export Raw Data</button>
        </div>`;

    document.getElementById('detail-content').innerHTML = html;
    document.getElementById('ai-insights-panel').style.display = 'none';
    document.getElementById('ai-insights-panel').innerHTML = '';
    setTimeout(() => {
        renderRadarChart(a);
        renderBarChart(a);
    }, 150);
}

// ── Charts ─────────────────────────────────────────────────────
function renderRadarChart(a) {
    const ctx = document.getElementById('radar-chart');
    if (!ctx) return;
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Strategic', 'Operational', 'Financial', 'Compliance', 'Resilience'],
            datasets: [{
                label: 'Risk Appetite',
                data: [a.strategic_score, a.operational_score, a.financial_score, a.compliance_score, a.resilience_score],
                backgroundColor: 'rgba(79, 110, 247, 0.15)',
                borderColor: 'rgba(79, 110, 247, 0.8)',
                borderWidth: 2,
                pointBackgroundColor: '#4f6ef7',
                pointBorderColor: '#141937',
                pointBorderWidth: 2,
                pointRadius: 5,
                pointHoverRadius: 7
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: { stepSize: 20, color: '#545b7a', backdropColor: 'transparent' },
                    grid: { color: 'rgba(255,255,255,0.06)' },
                    angleLines: { color: 'rgba(255,255,255,0.06)' },
                    pointLabels: { color: '#8b92b3', font: { size: 12, family: 'Inter' } }
                }
            },
            plugins: { legend: { display: false } }
        }
    });
}

function renderBarChart(a) {
    const ctx = document.getElementById('bar-chart');
    if (!ctx) return;
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Strategic', 'Operational', 'Financial', 'Compliance', 'Resilience'],
            datasets: [{
                label: 'Score',
                data: [a.strategic_score, a.operational_score, a.financial_score, a.compliance_score, a.resilience_score],
                backgroundColor: [
                    'rgba(79, 110, 247, 0.7)',
                    'rgba(34, 197, 94, 0.7)',
                    'rgba(245, 158, 11, 0.7)',
                    'rgba(168, 85, 247, 0.7)',
                    'rgba(236, 72, 153, 0.7)'
                ],
                borderColor: ['#4f6ef7', '#22c55e', '#f59e0b', '#a855f7', '#ec4899'],
                borderWidth: 1,
                borderRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: { color: '#545b7a', stepSize: 20 },
                    grid: { color: 'rgba(255,255,255,0.06)' }
                },
                x: {
                    ticks: { color: '#8b92b3' },
                    grid: { display: false }
                }
            },
            plugins: { legend: { display: false } }
        }
    });
}

// ── Compare ────────────────────────────────────────────────────
async function loadCompareOptions() {
    try {
        const { data: assessments } = await sb
            .from('assessments')
            .select('*')
            .order('created_at', { ascending: false })
            .limit(20);

        const container = document.getElementById('compare-checkboxes');
        if (!assessments || assessments.length === 0) {
            container.innerHTML = '<p style="color:var(--text-dim)">No assessments available for comparison.</p>';
            return;
        }

        container.innerHTML = assessments.map(a => `
            <label class="compare-checkbox">
                <input type="checkbox" value="${a.id}" class="compare-check">
                <div>
                    <strong>${a.subject_name}</strong><br>
                    <small style="color:var(--text-dim)">${a.risk_profile} (${a.overall_score}) · ${new Date(a.assessment_date || a.created_at).toLocaleDateString()}</small>
                </div>
            </label>
        `).join('');
    } catch (err) {
        console.error('Compare load error:', err);
    }
}

async function generateComparison() {
    const selected = Array.from(document.querySelectorAll('.compare-check:checked')).map(cb => cb.value);
    if (selected.length < 2 || selected.length > 4) {
        showToast('Please select 2–4 assessments to compare.', 'error');
        return;
    }

    try {
        const { data: assessments } = await sb
            .from('assessments')
            .select('*')
            .in('id', selected);

        const output = document.getElementById('comparison-output');
        const colors = [
            { bg: 'rgba(79, 110, 247, 0.2)', border: '#4f6ef7' },
            { bg: 'rgba(34, 197, 94, 0.2)', border: '#22c55e' },
            { bg: 'rgba(245, 158, 11, 0.2)', border: '#f59e0b' },
            { bg: 'rgba(236, 72, 153, 0.2)', border: '#ec4899' }
        ];

        output.innerHTML = `
            <div class="chart-container">
                <h3>Profile Comparison</h3>
                <canvas id="compare-radar"></canvas>
            </div>
            <div class="chart-container">
                <h3>Score Comparison</h3>
                <canvas id="compare-bar"></canvas>
            </div>`;

        setTimeout(() => {
            // Radar
            new Chart(document.getElementById('compare-radar'), {
                type: 'radar',
                data: {
                    labels: ['Strategic', 'Operational', 'Financial', 'Compliance', 'Resilience'],
                    datasets: assessments.map((a, i) => ({
                        label: a.subject_name,
                        data: [a.strategic_score, a.operational_score, a.financial_score, a.compliance_score, a.resilience_score],
                        backgroundColor: colors[i].bg,
                        borderColor: colors[i].border,
                        borderWidth: 2,
                        pointRadius: 4
                    }))
                },
                options: {
                    responsive: true,
                    scales: {
                        r: {
                            beginAtZero: true, max: 100,
                            ticks: { color: '#545b7a', backdropColor: 'transparent' },
                            grid: { color: 'rgba(255,255,255,0.06)' },
                            angleLines: { color: 'rgba(255,255,255,0.06)' },
                            pointLabels: { color: '#8b92b3', font: { size: 12 } }
                        }
                    },
                    plugins: {
                        legend: { labels: { color: '#8b92b3', font: { size: 12 } } }
                    }
                }
            });

            // Grouped bar
            new Chart(document.getElementById('compare-bar'), {
                type: 'bar',
                data: {
                    labels: ['Strategic', 'Operational', 'Financial', 'Compliance', 'Resilience'],
                    datasets: assessments.map((a, i) => ({
                        label: a.subject_name,
                        data: [a.strategic_score, a.operational_score, a.financial_score, a.compliance_score, a.resilience_score],
                        backgroundColor: colors[i].bg,
                        borderColor: colors[i].border,
                        borderWidth: 1,
                        borderRadius: 4
                    }))
                },
                options: {
                    responsive: true,
                    scales: {
                        y: { beginAtZero: true, max: 100, ticks: { color: '#545b7a' }, grid: { color: 'rgba(255,255,255,0.06)' } },
                        x: { ticks: { color: '#8b92b3' }, grid: { display: false } }
                    },
                    plugins: { legend: { labels: { color: '#8b92b3' } } }
                }
            });
        }, 150);
    } catch (err) {
        console.error('Comparison error:', err);
        showToast('Error generating comparison.', 'error');
    }
}

// ── PDF Export ──────────────────────────────────────────────────
async function exportToPDF(id) {
    showToast('Generating PDF...', 'info');
    try {
        const content = document.getElementById('detail-content');
        const canvas = await html2canvas(content, {
            backgroundColor: '#111631',
            scale: 2,
            useCORS: true
        });
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgWidth = 210;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        pdf.addImage(canvas.toDataURL('image/jpeg', 0.95), 'JPEG', 0, 0, imgWidth, imgHeight);
        pdf.save(`RAB-Assessment-${id.slice(0, 8)}.pdf`);
        showToast('PDF downloaded!', 'success');
    } catch (err) {
        console.error('PDF error:', err);
        showToast('Error generating PDF.', 'error');
    }
}

// ── Utilities ──────────────────────────────────────────────────
function hideLoading() {
    const overlay = document.getElementById('loading-overlay');
    overlay.classList.add('hidden');
    setTimeout(() => overlay.remove(), 500);
}

function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<span class="toast-message">${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(20px)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}

// ═══════════════════════════════════════════════════════════════
//  PREMIUM FEATURES — v2.0
// ═══════════════════════════════════════════════════════════════

// ── AI-Powered Insights ────────────────────────────────────────
async function loadAIInsights(assessmentId) {
    const panel = document.getElementById('ai-insights-panel');
    panel.style.display = 'block';
    panel.innerHTML = `<div class="ai-loading"><div class="loader"></div><p>Generating AI insights...</p></div>`;
    panel.scrollIntoView({ behavior: 'smooth', block: 'start' });

    try {
        const { data: a } = await sb.from('assessments').select('*').eq('id', assessmentId).single();
        const user = currentUser;

        const resp = await fetch(`${CLOUD_SERVER_URL}/ai/insights`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ assessment: a, user: { name: user?.user_metadata?.full_name, organization: user?.user_metadata?.organization } })
        });

        const result = await resp.json();
        if (!result.ok) throw new Error(result.error);

        renderAIInsights(result.insights, a);
    } catch (err) {
        console.error('AI Insights error:', err);
        panel.innerHTML = `<div class="ai-loading"><p>Unable to generate insights. Please try again.</p></div>`;
    }
}

function renderAIInsights(insights, assessment) {
    const panel = document.getElementById('ai-insights-panel');
    const sourceLabel = insights._source === 'gemini' ? 'Gemini AI' : 'RAB Analytics';

    panel.innerHTML = `
        <div class="ai-section-header">
            <h3>Executive Risk Intelligence</h3>
            <span class="ai-badge">${sourceLabel}</span>
        </div>

        <div class="ai-card narrative">
            <h4>Executive Summary</h4>
            <p>${insights.executive_summary || ''}</p>
        </div>

        <div class="ai-grid">
            <div class="ai-card">
                <h4>Key Strengths</h4>
                <ul>${(insights.strengths || []).map(s => `<li>${s}</li>`).join('')}</ul>
            </div>
            <div class="ai-card">
                <h4>Areas of Concern</h4>
                <ul>${(insights.concerns || []).map(c => `<li>${c}</li>`).join('')}</ul>
            </div>
            <div class="ai-card grade">
                <h4>Risk-Strategy Alignment</h4>
                <div class="ai-grade-letter">${insights.risk_alignment_grade || 'B'}</div>
                <div class="ai-grade-label">Alignment Grade</div>
            </div>
            <div class="ai-card">
                <h4>Benchmark Context</h4>
                <p>${insights.benchmark_context || ''}</p>
            </div>
        </div>

        <div class="ai-card narrative" style="margin-bottom:1.5rem;">
            <h4>Strategic Risk Narrative</h4>
            <p>${insights.risk_narrative || ''}</p>
        </div>

        <h4 style="font-size:0.875rem;font-weight:600;margin-bottom:0.75rem;">Strategic Recommendations</h4>
        <div class="ai-recs-list">
            ${(insights.strategic_recommendations || []).map(r => `
                <div class="ai-rec-item ${r.priority}">
                    <div class="ai-rec-header">
                        <span class="ai-rec-title">${r.title}</span>
                        <span class="priority-badge ${r.priority}">${r.priority}</span>
                    </div>
                    <div class="ai-rec-detail">${r.detail}</div>
                </div>
            `).join('')}
        </div>

        ${insights.board_talking_points ? `
        <div class="ai-card" style="margin-top:1rem;">
            <h4>Board Talking Points</h4>
            <ul>${insights.board_talking_points.map(p => `<li>${p}</li>`).join('')}</ul>
        </div>` : ''}
    `;
}

// ── PDF Board Report ───────────────────────────────────────────
async function generateBoardReport(assessmentId) {
    showToast('Generating board report...', 'info');
    try {
        const { data: a } = await sb.from('assessments').select('*').eq('id', assessmentId).single();
        const { data: recs } = await sb.from('recommendations').select('*').eq('assessment_id', assessmentId);
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF('p', 'mm', 'a4');
        const W = 210, H = 297;
        let y = 0;

        // Header bar
        pdf.setFillColor(13, 27, 42);
        pdf.rect(0, 0, W, 40, 'F');
        pdf.setTextColor(255, 255, 255);
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(18);
        pdf.text('RAB Framework', 15, 18);
        pdf.setFontSize(9);
        pdf.setFont('helvetica', 'normal');
        pdf.text('Enterprise Risk Appetite Governance', 15, 26);
        pdf.text(`Board Report  |  ${new Date().toLocaleDateString()}`, 15, 33);

        // Reset text color
        pdf.setTextColor(30, 30, 30);
        y = 50;

        // Subject header
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(16);
        pdf.text(a.subject_name || 'Assessment', 15, y);
        y += 7;
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(10);
        pdf.setTextColor(100, 100, 100);
        pdf.text(`${(a.assessment_type || '').replace('_', ' ').toUpperCase()}  |  ${new Date(a.assessment_date || a.created_at).toLocaleDateString()}`, 15, y);
        y += 12;

        // Overall Score box
        pdf.setFillColor(240, 245, 255);
        pdf.roundedRect(15, y, W - 30, 30, 4, 4, 'F');
        pdf.setTextColor(30, 30, 30);
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(28);
        pdf.text(`${a.overall_score}`, 30, y + 20);
        pdf.setFontSize(11);
        pdf.text(`Risk Profile: ${a.risk_profile}`, 60, y + 15);
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(9);
        pdf.text(`Overall RAB Score out of 100`, 60, y + 22);
        y += 40;

        // Dimension scores
        pdf.setTextColor(30, 30, 30);
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(12);
        pdf.text('Dimension Analysis', 15, y);
        y += 8;

        const dims = [
            { name: 'Strategic Risk', score: a.strategic_score, color: [59, 130, 246] },
            { name: 'Operational Risk', score: a.operational_score, color: [16, 185, 129] },
            { name: 'Financial Risk', score: a.financial_score, color: [217, 119, 6] },
            { name: 'Compliance Risk', score: a.compliance_score, color: [124, 58, 237] },
            { name: 'Resilience Risk', score: a.resilience_score, color: [8, 145, 178] }
        ];

        dims.forEach(d => {
            pdf.setFont('helvetica', 'normal');
            pdf.setFontSize(9);
            pdf.setTextColor(80, 80, 80);
            pdf.text(d.name, 15, y + 4);
            pdf.text(`${d.score}/100`, W - 30, y + 4);
            // Bar background
            pdf.setFillColor(230, 230, 235);
            pdf.roundedRect(60, y, 110, 5, 2, 2, 'F');
            // Bar fill
            pdf.setFillColor(...d.color);
            pdf.roundedRect(60, y, Math.max(110 * d.score / 100, 2), 5, 2, 2, 'F');
            y += 10;
        });
        y += 5;

        // Recommendations
        if (recs && recs.length > 0) {
            pdf.setFont('helvetica', 'bold');
            pdf.setFontSize(12);
            pdf.setTextColor(30, 30, 30);
            pdf.text('Recommended Actions', 15, y);
            y += 8;

            recs.forEach(r => {
                if (y > H - 30) { pdf.addPage(); y = 20; }
                pdf.setFont('helvetica', 'bold');
                pdf.setFontSize(9);
                pdf.setTextColor(30, 30, 30);
                pdf.text(`${r.dimension}  [${r.priority}]`, 15, y);
                y += 5;
                pdf.setFont('helvetica', 'normal');
                pdf.setFontSize(8);
                pdf.setTextColor(60, 60, 60);
                const lines = pdf.splitTextToSize(r.recommendation_text, W - 30);
                pdf.text(lines, 15, y);
                y += lines.length * 4 + 4;
            });
        }

        // Footer
        pdf.setFontSize(7);
        pdf.setTextColor(150, 150, 150);
        pdf.text('RAB Framework  |  Enterprise Risk Appetite Governance  |  Johns Hopkins Carey Business School', W / 2, H - 10, { align: 'center' });
        pdf.text('Confidential — For Board Use Only', W / 2, H - 6, { align: 'center' });

        pdf.save(`RAB-Board-Report-${a.subject_name?.replace(/\s+/g, '-') || 'Assessment'}.pdf`);
        showToast('Board report downloaded', 'success');
    } catch (err) {
        console.error('Board report error:', err);
        showToast('Error generating report', 'error');
    }
}

// ── Risk Trend Analysis ────────────────────────────────────────
let trendsOverallChart = null;
let trendsDimensionChart = null;

async function loadTrends() {
    try {
        const { data: assessments } = await sb
            .from('assessments')
            .select('*')
            .order('created_at', { ascending: true })
            .limit(50);

        if (!assessments || assessments.length === 0) {
            document.getElementById('trends-stats').innerHTML = `
                <div class="empty-state" style="grid-column:1/-1;">
                    <h3>No Assessment Data</h3>
                    <p>Complete assessments to see trend analysis</p>
                </div>`;
            return;
        }

        renderTrendsCharts(assessments);
        renderTrendsStats(assessments);
    } catch (err) {
        console.error('Trends error:', err);
    }
}

function renderTrendsCharts(assessments) {
    const labels = assessments.map(a => new Date(a.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
    const chartColors = {
        grid: 'rgba(148, 163, 184, 0.06)',
        text: '#94a3b8'
    };

    // Overall score over time
    if (trendsOverallChart) trendsOverallChart.destroy();
    const ctx1 = document.getElementById('trends-overall-chart');
    if (ctx1) {
        trendsOverallChart = new Chart(ctx1, {
            type: 'line',
            data: {
                labels,
                datasets: [{
                    label: 'Overall RAB Score',
                    data: assessments.map(a => a.overall_score),
                    borderColor: '#3b82f6',
                    backgroundColor: 'rgba(59, 130, 246, 0.08)',
                    fill: true,
                    tension: 0.4,
                    borderWidth: 2,
                    pointRadius: 4,
                    pointBackgroundColor: '#3b82f6'
                }]
            },
            options: {
                responsive: true,
                plugins: { legend: { display: false } },
                scales: {
                    y: { min: 0, max: 100, grid: { color: chartColors.grid }, ticks: { color: chartColors.text, font: { size: 11 } } },
                    x: { grid: { display: false }, ticks: { color: chartColors.text, font: { size: 11 } } }
                }
            }
        });
    }

    // Dimension scores over time
    if (trendsDimensionChart) trendsDimensionChart.destroy();
    const ctx2 = document.getElementById('trends-dimension-chart');
    if (ctx2) {
        trendsDimensionChart = new Chart(ctx2, {
            type: 'line',
            data: {
                labels,
                datasets: [
                    { label: 'Strategic', data: assessments.map(a => a.strategic_score), borderColor: '#3b82f6', borderWidth: 2, tension: 0.4, pointRadius: 3 },
                    { label: 'Operational', data: assessments.map(a => a.operational_score), borderColor: '#10b981', borderWidth: 2, tension: 0.4, pointRadius: 3 },
                    { label: 'Financial', data: assessments.map(a => a.financial_score), borderColor: '#d97706', borderWidth: 2, tension: 0.4, pointRadius: 3 },
                    { label: 'Compliance', data: assessments.map(a => a.compliance_score), borderColor: '#7c3aed', borderWidth: 2, tension: 0.4, pointRadius: 3 },
                    { label: 'Resilience', data: assessments.map(a => a.resilience_score), borderColor: '#0891b2', borderWidth: 2, tension: 0.4, pointRadius: 3 }
                ]
            },
            options: {
                responsive: true,
                plugins: { legend: { labels: { color: chartColors.text, font: { size: 11 }, usePointStyle: true, pointStyle: 'circle' } } },
                scales: {
                    y: { min: 0, max: 100, grid: { color: chartColors.grid }, ticks: { color: chartColors.text, font: { size: 11 } } },
                    x: { grid: { display: false }, ticks: { color: chartColors.text, font: { size: 11 } } }
                }
            }
        });
    }
}

function renderTrendsStats(assessments) {
    const latest = assessments[assessments.length - 1];
    const prev = assessments.length > 1 ? assessments[assessments.length - 2] : null;
    const avg = Math.round(assessments.reduce((s, a) => s + a.overall_score, 0) / assessments.length);
    const change = prev ? latest.overall_score - prev.overall_score : 0;
    const changeClass = change > 0 ? 'up' : change < 0 ? 'down' : 'neutral';
    const changeText = change > 0 ? `+${change} from previous` : change < 0 ? `${change} from previous` : 'No change';

    // Profile distribution
    const profiles = { Conservative: 0, Moderate: 0, Aggressive: 0 };
    assessments.forEach(a => { if (profiles[a.risk_profile] !== undefined) profiles[a.risk_profile]++; });

    document.getElementById('trends-stats').innerHTML = `
        <div class="trend-stat-card">
            <div class="trend-stat-value">${latest.overall_score}</div>
            <div class="trend-stat-label">Latest Score</div>
            <div class="trend-stat-change ${changeClass}">${changeText}</div>
        </div>
        <div class="trend-stat-card">
            <div class="trend-stat-value">${avg}</div>
            <div class="trend-stat-label">Average Score</div>
            <div class="trend-stat-change neutral">${assessments.length} assessments</div>
        </div>
        <div class="trend-stat-card">
            <div class="trend-stat-value">${profiles.Conservative}</div>
            <div class="trend-stat-label">Conservative</div>
            <div class="trend-stat-change neutral">Assessments</div>
        </div>
        <div class="trend-stat-card">
            <div class="trend-stat-value">${profiles.Moderate}</div>
            <div class="trend-stat-label">Moderate</div>
            <div class="trend-stat-change neutral">Assessments</div>
        </div>
        <div class="trend-stat-card">
            <div class="trend-stat-value">${profiles.Aggressive}</div>
            <div class="trend-stat-label">Aggressive</div>
            <div class="trend-stat-change neutral">Assessments</div>
        </div>
    `;
}

// ── Scenario Simulator ─────────────────────────────────────────
let simRadarChart = null;

function updateSimulation() {
    const dims = ['strategic', 'operational', 'financial', 'compliance', 'resilience'];
    const scores = {};
    dims.forEach(d => {
        const val = parseInt(document.getElementById(`sim-${d}`).value);
        scores[d] = val;
        document.getElementById(`sim-${d}-val`).textContent = val;
    });

    const overall = Math.round((scores.strategic + scores.operational + scores.financial + scores.compliance + scores.resilience) / 5);
    const profile = overall >= 70 ? 'Aggressive' : overall >= 40 ? 'Moderate' : 'Conservative';
    const profileDescs = {
        Conservative: 'Risk-averse posture prioritizing stability and protection',
        Moderate: 'Balanced approach with measured risk-taking and safeguards',
        Aggressive: 'Growth-oriented stance favoring bold strategic moves'
    };

    document.getElementById('sim-overall-score').textContent = overall;
    document.getElementById('sim-profile').textContent = profile;
    document.getElementById('sim-profile-desc').textContent = profileDescs[profile];

    // Radar chart
    renderSimRadar(scores);

    // Recommendations
    renderSimRecommendations(scores, overall, profile);

    // Benchmarking
    renderSimBenchmark(scores, overall, profile);
}

function renderSimRadar(scores) {
    if (simRadarChart) simRadarChart.destroy();
    const ctx = document.getElementById('sim-radar-chart');
    if (!ctx) return;
    simRadarChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Strategic', 'Operational', 'Financial', 'Compliance', 'Resilience'],
            datasets: [
                {
                    label: 'Simulated Profile',
                    data: [scores.strategic, scores.operational, scores.financial, scores.compliance, scores.resilience],
                    borderColor: '#3b82f6',
                    backgroundColor: 'rgba(59, 130, 246, 0.12)',
                    borderWidth: 2,
                    pointRadius: 4,
                    pointBackgroundColor: '#3b82f6'
                },
                {
                    label: 'Fortune 500 Average',
                    data: [52, 45, 48, 38, 44],
                    borderColor: '#c9a84c',
                    backgroundColor: 'rgba(201, 168, 76, 0.06)',
                    borderWidth: 1.5,
                    borderDash: [4, 4],
                    pointRadius: 3,
                    pointBackgroundColor: '#c9a84c'
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                r: {
                    min: 0, max: 100,
                    grid: { color: 'rgba(148, 163, 184, 0.06)' },
                    angleLines: { color: 'rgba(148, 163, 184, 0.06)' },
                    pointLabels: { color: '#94a3b8', font: { size: 11, weight: '500' } },
                    ticks: { display: false }
                }
            },
            plugins: { legend: { labels: { color: '#94a3b8', font: { size: 11 }, usePointStyle: true } } }
        }
    });
}

function renderSimRecommendations(scores, overall, profile) {
    const dims = Object.entries(scores).sort((a, b) => a[1] - b[1]);
    const lowest = dims[0];
    const highest = dims[dims.length - 1];
    const gap = highest[1] - lowest[1];

    let recsHtml = '<h4>Scenario Recommendations</h4>';
    recsHtml += `<div class="sim-rec-item"><strong>${capitalize(lowest[0])} Risk</strong> is the weakest dimension (${lowest[1]}/100). Consider increasing risk tolerance to improve balance.</div>`;
    recsHtml += `<div class="sim-rec-item"><strong>${capitalize(highest[0])} Risk</strong> is the strongest dimension (${highest[1]}/100). Ensure governance controls match this appetite level.</div>`;

    if (gap > 30) {
        recsHtml += `<div class="sim-rec-item"><strong>Dimensional Gap:</strong> ${gap}-point spread between highest and lowest dimensions indicates potential governance misalignment.</div>`;
    }

    if (profile === 'Aggressive') {
        recsHtml += `<div class="sim-rec-item"><strong>Aggressive Profile:</strong> Ensure board-level risk oversight is proportional. Consider quarterly RAB reassessments.</div>`;
    } else if (profile === 'Conservative') {
        recsHtml += `<div class="sim-rec-item"><strong>Conservative Profile:</strong> Review if risk appetite is constraining strategic growth. Benchmark against industry leaders.</div>`;
    }

    document.getElementById('sim-recommendations').innerHTML = recsHtml;
}

function renderSimBenchmark(scores, overall, profile) {
    const benchmarks = { strategic: 52, operational: 45, financial: 48, compliance: 38, resilience: 44 };
    const f500Avg = 45;

    let html = '<h4>Industry Benchmarking</h4>';
    html += `<p>Your simulated score of <strong>${overall}</strong> is `;
    if (overall > f500Avg + 15) html += `<strong>significantly above</strong>`;
    else if (overall > f500Avg + 5) html += `<strong>above</strong>`;
    else if (overall > f500Avg - 5) html += `<strong>in line with</strong>`;
    else html += `<strong>below</strong>`;
    html += ` the Fortune 500 average of ${f500Avg}. `;

    const aboveBench = Object.entries(scores).filter(([k, v]) => v > benchmarks[k]);
    const belowBench = Object.entries(scores).filter(([k, v]) => v < benchmarks[k]);

    if (aboveBench.length > 0) {
        html += `You exceed industry benchmarks in ${aboveBench.map(([k]) => capitalize(k)).join(', ')}. `;
    }
    if (belowBench.length > 0) {
        html += `You fall below benchmarks in ${belowBench.map(([k]) => capitalize(k)).join(', ')}.`;
    }
    html += '</p>';

    document.getElementById('sim-benchmark').innerHTML = html;
}

function setSimPreset(preset) {
    const presets = {
        conservative: { strategic: 25, operational: 20, financial: 15, compliance: 10, resilience: 20 },
        balanced:     { strategic: 50, operational: 50, financial: 50, compliance: 50, resilience: 50 },
        aggressive:   { strategic: 85, operational: 70, financial: 80, compliance: 55, resilience: 65 },
        growth:       { strategic: 90, operational: 60, financial: 75, compliance: 40, resilience: 55 }
    };
    const vals = presets[preset] || presets.balanced;
    Object.entries(vals).forEach(([k, v]) => {
        document.getElementById(`sim-${k}`).value = v;
    });
    updateSimulation();
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// ── View Navigation Enhancement ────────────────────────────────
// Override switchView to load data for new views
const _originalSwitchView = typeof switchView === 'function' ? switchView : null;
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const view = this.dataset.view;
        if (view === 'trends') setTimeout(loadTrends, 100);
        if (view === 'simulator') setTimeout(() => {
            updateSimulation();
        }, 100);
    });
});

// Initialize simulator on first load
setTimeout(() => {
    if (document.getElementById('sim-strategic')) {
        updateSimulation();
    }
}, 500);
