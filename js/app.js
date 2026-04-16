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
                    <div class="empty-state-icon">📊</div>
                    <h3>No Assessments Yet</h3>
                    <p>Start your first risk appetite assessment to see results here.</p>
                    <button class="btn-primary" onclick="startAssessment()">✦ Start Assessment</button>
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
        <div style="text-align:center;margin-top:2rem;">
            <button class="btn-primary" onclick="exportToPDF('${a.id}')">📄 Export to PDF</button>
        </div>`;

    document.getElementById('detail-content').innerHTML = html;
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
