/**
 * Life Leap Assessment — Consumer Risk Analysis Engine
 * Frameworks: SWOT, Risk-Reward Matrix, Decision Matrix
 * RAB Framework by Shaun Muhammad / F1rst Position
 */

// ── Supabase Client ──────────────────────────────────────────────
const SUPABASE_URL = 'https://epxjcrlqgqvgglpohujv.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVweGpjcmxxZ3F2Z2dscG9odWp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4MTUwMzAsImV4cCI6MjA2MDM5MTAzMH0.ND4Y8a_jHO4BPXPF7D25RSm7jgYhCPiJQEMDi-rkq0k';
const sb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
const RELAY_URL = 'https://rab-relay-454433309736.us-east1.run.app';

// ── State ────────────────────────────────────────────────────────
let selectedDecision = null;
let selectedFramework = null;
let currentQuestion = 0;
let answers = [];
let assessmentId = null;

// ── Decision Selection ───────────────────────────────────────────
function selectDecision(el) {
    document.querySelectorAll('.decision-card').forEach(c => c.classList.remove('selected'));
    el.classList.add('selected');
    selectedDecision = el.dataset.decision;
    document.getElementById('btn-to-framework').disabled = false;
}

function selectFramework(el) {
    document.querySelectorAll('.framework-card').forEach(c => c.classList.remove('selected'));
    el.classList.add('selected');
    selectedFramework = el.dataset.framework;
    document.getElementById('btn-to-questions').disabled = false;
}

// ── Navigation ───────────────────────────────────────────────────
function switchView(id) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goToFramework() { switchView('step-framework'); }
function goToDecision() { switchView('step-decision'); }
function goToQuestions() {
    currentQuestion = 0;
    answers = [];
    renderQuestion();
    switchView('step-questions');
}

// ── Question Banks ───────────────────────────────────────────────
function getQuestions() {
    const decision = selectedDecision;
    const decisionLabel = {
        career_change: 'career change',
        entrepreneurship: 'starting a business',
        education: 'going back to school',
        relocation: 'relocating',
        adventure: 'taking a sabbatical/adventure',
        retirement: 'retiring',
        family: 'growing the family',
        vacation: 'the big trip',
        house: 'buying a house',
        marriage: 'getting married'
    }[decision] || 'this change';

    if (selectedFramework === 'swot') return getSWOTQuestions(decisionLabel);
    if (selectedFramework === 'risk_reward') return getRiskRewardQuestions(decisionLabel);
    if (selectedFramework === 'decision_matrix') return getDecisionMatrixQuestions(decisionLabel);
    return [];
}

function getSWOTQuestions(label) {
    return [
        // Strengths (3)
        { category: 'Strengths', text: `What unique skills or experiences make you well-suited for ${label}?`, context: 'Think about what sets you apart.', options: [
            { text: 'I have highly relevant, in-demand skills', score: 5 },
            { text: 'I have some transferable skills', score: 3 },
            { text: 'I would need significant upskilling', score: 1 }
        ]},
        { category: 'Strengths', text: 'How strong is your professional network for this transition?', context: 'Mentors, industry contacts, potential partners.', options: [
            { text: 'Strong — I have key connections already', score: 5 },
            { text: 'Moderate — some relevant contacts', score: 3 },
            { text: 'Weak — I would need to build from scratch', score: 1 }
        ]},
        { category: 'Strengths', text: 'How would you rate your financial readiness for this leap?', context: 'Emergency fund, savings, alternative income.', options: [
            { text: '12+ months of runway saved', score: 5 },
            { text: '3-6 months of savings', score: 3 },
            { text: 'Living paycheck to paycheck', score: 1 }
        ]},
        // Weaknesses (3)
        { category: 'Weaknesses', text: 'What is your biggest skill gap for this transition?', context: 'Be honest about areas where you need growth.', options: [
            { text: 'Minor gaps — easily addressed', score: 5 },
            { text: 'Moderate gaps — will take 3-6 months', score: 3 },
            { text: 'Significant gaps — 1+ years to close', score: 1 }
        ]},
        { category: 'Weaknesses', text: 'How dependent are others on your current income?', context: 'Spouse, children, family obligations.', options: [
            { text: 'No dependents / shared income with partner', score: 5 },
            { text: 'Some dependents but manageable', score: 3 },
            { text: 'Primary breadwinner with dependents', score: 1 }
        ]},
        { category: 'Weaknesses', text: 'How much experience do you have in the area you\'re leaping into?', context: 'Direct or adjacent experience counts.', options: [
            { text: 'Extensive — 3+ years of relevant exposure', score: 5 },
            { text: 'Some — I\'ve dabbled or studied it', score: 3 },
            { text: 'None — this is completely new territory', score: 1 }
        ]},
        // Opportunities (3)
        { category: 'Opportunities', text: 'How would you rate the market demand or timing for this move?', context: 'Is this a growing field/opportunity?', options: [
            { text: 'Excellent timing — high demand, growing market', score: 5 },
            { text: 'Decent — stable but not booming', score: 3 },
            { text: 'Uncertain — market is saturated or declining', score: 1 }
        ]},
        { category: 'Opportunities', text: 'What is the potential upside in 3-5 years if this works?', context: 'Income growth, fulfillment, lifestyle.', options: [
            { text: 'Life-changing — 2x+ income or dream lifestyle', score: 5 },
            { text: 'Meaningful improvement over current path', score: 3 },
            { text: 'Similar or slightly better than now', score: 1 }
        ]},
        { category: 'Opportunities', text: 'Are there mentors, programs, or communities that can accelerate your transition?', context: 'Incubators, alumni networks, industry groups.', options: [
            { text: 'Yes — strong support systems available', score: 5 },
            { text: 'Some resources I could tap into', score: 3 },
            { text: 'I would be largely on my own', score: 1 }
        ]},
        // Threats (3)
        { category: 'Threats', text: 'What is the worst realistic outcome if this doesn\'t work?', context: 'Financial loss, career setback, personal impact.', options: [
            { text: 'Minimal — I can easily return to my current path', score: 5 },
            { text: 'Moderate — some financial and career setback', score: 3 },
            { text: 'Severe — significant financial or personal damage', score: 1 }
        ]},
        { category: 'Threats', text: 'How would this leap affect your health insurance, benefits, and stability?', context: 'Healthcare, retirement contributions, steady income.', options: [
            { text: 'Covered — partner\'s plan or savings to bridge', score: 5 },
            { text: 'Some gaps but manageable', score: 3 },
            { text: 'Major loss of benefits with no backup', score: 1 }
        ]},
        { category: 'Threats', text: 'How likely are external factors (economy, industry changes) to derail this plan?', context: 'Recession risk, AI disruption, market shifts.', options: [
            { text: 'Low risk — resilient to macro changes', score: 5 },
            { text: 'Some exposure to external risks', score: 3 },
            { text: 'Highly vulnerable to external disruption', score: 1 }
        ]}
    ];
}

function getRiskRewardQuestions(label) {
    return [
        // Risk Assessment (5)
        { category: 'Risk', text: `How much financial risk does ${label} involve?`, context: 'Consider lost income, startup costs, debt.', options: [
            { text: 'Low — minimal financial exposure', score: 2 },
            { text: 'Moderate — some investment required', score: 5 },
            { text: 'High — significant capital at risk', score: 8 },
            { text: 'Very High — betting the farm', score: 10 }
        ]},
        { category: 'Risk', text: 'What is the career risk if this doesn\'t work out?', context: 'Resume gap, reputation, re-entry difficulty.', options: [
            { text: 'Low — easy to return to current field', score: 2 },
            { text: 'Moderate — some explaining to do', score: 5 },
            { text: 'High — hard to re-enter at same level', score: 8 },
            { text: 'Very High — bridges burned', score: 10 }
        ]},
        { category: 'Risk', text: 'How much personal/relationship risk is involved?', context: 'Impact on family, partner, social life.', options: [
            { text: 'Minimal — full support from loved ones', score: 2 },
            { text: 'Some tension but manageable', score: 5 },
            { text: 'Significant strain expected', score: 8 },
            { text: 'Could damage key relationships', score: 10 }
        ]},
        { category: 'Risk', text: 'How long until you know if this is working?', context: 'Time to proficiency, first revenue, or results.', options: [
            { text: '1-3 months', score: 2 },
            { text: '3-6 months', score: 4 },
            { text: '6-12 months', score: 7 },
            { text: '1-3 years', score: 10 }
        ]},
        { category: 'Risk', text: 'How reversible is this decision?', context: 'Can you go back if it doesn\'t work?', options: [
            { text: 'Fully reversible — easy to undo', score: 2 },
            { text: 'Mostly reversible with some cost', score: 5 },
            { text: 'Partially reversible — significant cost', score: 8 },
            { text: 'Irreversible — one-way door', score: 10 }
        ]},
        // Reward Assessment (5)
        { category: 'Reward', text: 'What is the income potential in 3 years?', context: 'Compared to your current earning trajectory.', options: [
            { text: 'Similar or lower than current', score: 2 },
            { text: '10-30% increase potential', score: 5 },
            { text: '50-100% increase potential', score: 8 },
            { text: '2x+ income potential', score: 10 }
        ]},
        { category: 'Reward', text: 'How much would this improve your daily fulfillment?', context: 'Purpose, passion, work-life satisfaction.', options: [
            { text: 'Marginal improvement', score: 2 },
            { text: 'Noticeable improvement', score: 5 },
            { text: 'Significant improvement', score: 8 },
            { text: 'Transformative — dream scenario', score: 10 }
        ]},
        { category: 'Reward', text: 'How much would this accelerate your long-term growth?', context: 'Skills, network, career trajectory.', options: [
            { text: 'Minimal growth acceleration', score: 2 },
            { text: 'Moderate growth boost', score: 5 },
            { text: 'Major career accelerator', score: 8 },
            { text: 'Career-defining opportunity', score: 10 }
        ]},
        { category: 'Reward', text: 'How aligned is this leap with your core values and identity?', context: 'Does this feel like the "real you"?', options: [
            { text: 'Somewhat aligned', score: 3 },
            { text: 'Well aligned', score: 6 },
            { text: 'Deeply aligned — this is who I am', score: 10 }
        ]},
        { category: 'Reward', text: 'What legacy or impact could this create?', context: 'Beyond personal gain — contribution to others.', options: [
            { text: 'Minimal broader impact', score: 2 },
            { text: 'Positive impact on my immediate circle', score: 5 },
            { text: 'Could impact my community or industry', score: 8 },
            { text: 'Could change lives at scale', score: 10 }
        ]}
    ];
}

function getDecisionMatrixQuestions(label) {
    return [
        // Importance weights (6)
        { category: 'Weight', text: 'How important is financial stability to you right now?', context: 'Rate the importance of this factor in your decision.', options: [
            { text: 'Not very important', score: 1 },
            { text: 'Somewhat important', score: 3 },
            { text: 'Very important', score: 5 },
            { text: 'Critical — non-negotiable', score: 7 }
        ]},
        { category: 'Weight', text: 'How important is career growth and advancement?', context: 'Climbing the ladder, expanding your capabilities.', options: [
            { text: 'Not very important', score: 1 },
            { text: 'Somewhat important', score: 3 },
            { text: 'Very important', score: 5 },
            { text: 'Critical — non-negotiable', score: 7 }
        ]},
        { category: 'Weight', text: 'How important is work-life balance?', context: 'Time for family, hobbies, health, relationships.', options: [
            { text: 'Not very important', score: 1 },
            { text: 'Somewhat important', score: 3 },
            { text: 'Very important', score: 5 },
            { text: 'Critical — non-negotiable', score: 7 }
        ]},
        { category: 'Weight', text: 'How important is personal fulfillment and purpose?', context: 'Passion, meaning, doing work that matters.', options: [
            { text: 'Not very important', score: 1 },
            { text: 'Somewhat important', score: 3 },
            { text: 'Very important', score: 5 },
            { text: 'Critical — non-negotiable', score: 7 }
        ]},
        { category: 'Weight', text: 'How important is your risk tolerance / comfort with uncertainty?', context: 'How much stability do you need?', options: [
            { text: 'I thrive on uncertainty', score: 1 },
            { text: 'I can handle moderate uncertainty', score: 3 },
            { text: 'I prefer predictability', score: 5 },
            { text: 'I need high stability', score: 7 }
        ]},
        { category: 'Weight', text: 'How important is family/relationship impact?', context: 'Effect on your partner, children, close ones.', options: [
            { text: 'Not a major factor', score: 1 },
            { text: 'Somewhat important', score: 3 },
            { text: 'Very important', score: 5 },
            { text: 'The most important factor', score: 7 }
        ]},
        // Current path scores (3)
        { category: 'Current', text: `How does your current path score on fulfillment?`, context: 'Rate your current situation honestly.', options: [
            { text: 'Deeply unfulfilled', score: 1 },
            { text: 'Somewhat satisfied', score: 3 },
            { text: 'Fairly fulfilled', score: 5 },
            { text: 'Very fulfilled', score: 7 }
        ]},
        { category: 'Current', text: 'How does your current path score on growth potential?', context: 'Where will you be in 5 years on the current track?', options: [
            { text: 'Stagnant — ceiling reached', score: 1 },
            { text: 'Slow growth expected', score: 3 },
            { text: 'Steady growth ahead', score: 5 },
            { text: 'Rapid growth trajectory', score: 7 }
        ]},
        { category: 'Current', text: 'How does your current path score on financial trajectory?', context: 'Income growth, wealth building, benefits.', options: [
            { text: 'Declining or flat', score: 1 },
            { text: 'Modest increases expected', score: 3 },
            { text: 'Solid growth ahead', score: 5 },
            { text: 'Excellent financial trajectory', score: 7 }
        ]},
        // New path scores (3)
        { category: 'New', text: `How does ${label} score on fulfillment potential?`, context: 'Rate the potential of the new path.', options: [
            { text: 'Uncertain fulfillment', score: 2 },
            { text: 'Moderate fulfillment expected', score: 4 },
            { text: 'High fulfillment likely', score: 6 },
            { text: 'Dream-level fulfillment', score: 8 }
        ]},
        { category: 'New', text: `How does ${label} score on growth potential?`, context: 'Learning, advancement, skill development.', options: [
            { text: 'Limited growth', score: 2 },
            { text: 'Moderate growth', score: 4 },
            { text: 'Strong growth trajectory', score: 6 },
            { text: 'Explosive growth potential', score: 8 }
        ]},
        { category: 'New', text: `How does ${label} score on financial potential (3-5 year view)?`, context: 'Long-term earning power, not just year one.', options: [
            { text: 'Likely lower income', score: 2 },
            { text: 'Similar to current', score: 4 },
            { text: 'Higher income potential', score: 6 },
            { text: 'Significantly higher potential', score: 8 }
        ]}
    ];
}

// ── Question Renderer ────────────────────────────────────────────
function renderQuestion() {
    const questions = getQuestions();
    const q = questions[currentQuestion];
    const total = questions.length;
    const pct = ((currentQuestion + 1) / total * 100).toFixed(0);

    const container = document.getElementById('question-container');
    container.innerHTML = `
        <div class="question-progress">
            <span class="progress-text">${currentQuestion + 1} of ${total}</span>
            <div class="progress-bar-bg"><div class="progress-bar-fill" style="width:${pct}%"></div></div>
            <span class="progress-text">${q.category}</span>
        </div>
        <div class="question-text">${q.text}</div>
        <div class="question-context">${q.context}</div>
        <div class="answer-options">
            ${q.options.map((opt, i) => `
                <button class="answer-option" onclick="selectAnswer(${i}, ${opt.score})">
                    <span class="answer-dot"></span>
                    ${opt.text}
                </button>
            `).join('')}
        </div>
        <div class="question-nav">
            <button class="btn btn-secondary" onclick="${currentQuestion === 0 ? 'goToFrameworkFromQ()' : 'prevQuestion()'}">${currentQuestion === 0 ? 'Back' : 'Previous'}</button>
            <button class="btn btn-primary" id="btn-next-q" disabled onclick="nextQuestion()">
                ${currentQuestion === total - 1 ? 'See Results' : 'Next'}
            </button>
        </div>
    `;
}

function selectAnswer(index, score) {
    const opts = document.querySelectorAll('.answer-option');
    opts.forEach(o => o.classList.remove('selected'));
    opts[index].classList.add('selected');
    answers[currentQuestion] = { index, score };
    document.getElementById('btn-next-q').disabled = false;
}

function nextQuestion() {
    const questions = getQuestions();
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        renderQuestion();
        // Restore selection if going back
        if (answers[currentQuestion]) {
            const opts = document.querySelectorAll('.answer-option');
            opts[answers[currentQuestion].index]?.classList.add('selected');
            document.getElementById('btn-next-q').disabled = false;
        }
    } else {
        calculateResults();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        renderQuestion();
        if (answers[currentQuestion]) {
            const opts = document.querySelectorAll('.answer-option');
            opts[answers[currentQuestion].index]?.classList.add('selected');
            document.getElementById('btn-next-q').disabled = false;
        }
    }
}

function goToFrameworkFromQ() { switchView('step-framework'); }

// ── Results Calculation ──────────────────────────────────────────
async function calculateResults() {
    const questions = getQuestions();
    let results = {};

    if (selectedFramework === 'swot') {
        results = calculateSWOT(questions);
    } else if (selectedFramework === 'risk_reward') {
        results = calculateRiskReward(questions);
    } else if (selectedFramework === 'decision_matrix') {
        results = calculateDecisionMatrix(questions);
    }

    // Save to Supabase
    try {
        const { data } = await sb.from('leap_assessments').insert({
            decision_type: selectedDecision,
            framework: selectedFramework,
            results: results,
            overall_score: results.overallScore || 0,
            risk_profile: results.verdict || '',
            recommendation: results.recommendation || ''
        }).select().single();
        assessmentId = data?.id;
    } catch (e) { console.error('Save error:', e); }

    // Notify relay
    try {
        fetch(`${RELAY_URL}/webhook`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                event: 'leap_completed',
                assessment: { decision_type: selectedDecision, framework: selectedFramework, score: results.overallScore, verdict: results.verdict }
            })
        });
    } catch (e) {}

    renderResults(results);
    switchView('step-results');
}

function calculateSWOT(questions) {
    const cats = { Strengths: [], Weaknesses: [], Opportunities: [], Threats: [] };
    questions.forEach((q, i) => {
        const score = answers[i]?.score || 3;
        cats[q.category].push({ question: q.text, score, answer: q.options[answers[i]?.index]?.text || '' });
    });

    const avgScore = (arr) => Math.round(arr.reduce((s, a) => s + a.score, 0) / arr.length * 20);
    const scores = {
        strengths: avgScore(cats.Strengths),
        weaknesses: avgScore(cats.Weaknesses),
        opportunities: avgScore(cats.Opportunities),
        threats: avgScore(cats.Threats)
    };

    const overall = Math.round((scores.strengths + scores.weaknesses + scores.opportunities + scores.threats) / 4);
    const verdict = overall >= 73 ? 'Ready to Leap' : overall >= 47 ? 'Proceed with Caution' : 'Not Yet — Strengthen First';
    
    // Whimsical tone branching
    const isWhimsical = ['family', 'vacation', 'marriage'].includes(selectedDecision);

    return {
        type: 'swot',
        overallScore: overall,
        verdict,
        recommendation: overall >= 73
            ? (isWhimsical ? 'Your heart and your foundation are perfectly aligned for this! Your strengths and opportunities completely outshine the risks.' : 'Your SWOT analysis shows strong readiness. Your strengths and opportunities outweigh the risks.')
            : overall >= 47
            ? (isWhimsical ? 'You have a great foundation, but slow down for a second. Make sure you address the little worries before fully committing to the magic.' : 'You have a foundation but should address weaknesses before committing. Develop a mitigation plan.')
            : (isWhimsical ? 'There are a few too many stressful gaps right now. Focus on building peace of mind, savings, and your support circle first so you can truly enjoy this.' : 'Significant gaps exist. Focus on building skills, savings, and support systems before making this move.'),
        scores,
        details: cats
    };
}

function calculateRiskReward(questions) {
    let riskTotal = 0, riskCount = 0, rewardTotal = 0, rewardCount = 0;
    questions.forEach((q, i) => {
        const score = answers[i]?.score || 5;
        if (q.category === 'Risk') { riskTotal += score; riskCount++; }
        else { rewardTotal += score; rewardCount++; }
    });

    const riskAvg = Math.round(riskTotal / riskCount * 10);
    const rewardAvg = Math.round(rewardTotal / rewardCount * 10);
    const overall = Math.round((rewardAvg - riskAvg + 100) / 2);

    const isWhimsical = ['family', 'vacation', 'marriage'].includes(selectedDecision);

    let verdict, recommendation;
    if (rewardAvg >= 70 && riskAvg <= 40) {
        verdict = 'Go For It'; 
        recommendation = isWhimsical ? 'The memories and joy this will bring heavily outweigh any stress. This is a beautiful opportunity.' : 'High reward with manageable risk — this is a strong opportunity.';
    } else if (rewardAvg >= 50 && riskAvg <= 60) {
        verdict = 'Proceed with Plan'; 
        recommendation = isWhimsical ? 'The reward is totally worth it, but make sure you have a solid backup plan to keep the stress low!' : 'Reward justifies the risk, but develop a solid contingency plan.';
    } else if (rewardAvg <= 40 && riskAvg >= 60) {
        verdict = 'Reconsider'; 
        recommendation = isWhimsical ? 'The stress and risk might overshadow the core memories right now. It is okay to wait for better timing.' : 'Risk outweighs reward significantly. Re-evaluate or find ways to reduce risk.';
    } else {
        verdict = 'Carefully Consider'; 
        recommendation = isWhimsical ? 'Mixed feelings are normal. Deep dive into the specific worries you have before springing for this.' : 'Mixed signals. Deep dive into the specific risk factors before deciding.';
    }

    return {
        type: 'risk_reward',
        overallScore: overall,
        verdict,
        recommendation,
        riskScore: riskAvg,
        rewardScore: rewardAvg,
        details: { risk: [], reward: [] }
    };
}

function calculateDecisionMatrix(questions) {
    const weights = answers.slice(0, 6).map(a => a?.score || 3);
    const currentScores = answers.slice(6, 9).map(a => a?.score || 3);
    const newScores = answers.slice(9, 12).map(a => a?.score || 4);

    const factors = ['Financial Stability', 'Career Growth', 'Work-Life Balance', 'Fulfillment', 'Risk Comfort', 'Family Impact'];
    const currentWeighted = currentScores.reduce((s, v, i) => s + v * weights[i], 0);
    const newWeighted = newScores.reduce((s, v, i) => s + v * weights[i], 0);
    const totalWeight = weights.reduce((s, v) => s + v, 0);
    const currentPct = Math.round(currentWeighted / (totalWeight * 8) * 100);
    const newPct = Math.round(newWeighted / (totalWeight * 8) * 100);
    const overall = Math.round((newPct + (100 - currentPct)) / 2);

    const isWhimsical = ['family', 'vacation', 'marriage'].includes(selectedDecision);

    let verdict, recommendation;
    if (newPct > currentPct + 15) {
        verdict = 'New Path Wins'; 
        recommendation = isWhimsical ? 'This beautiful transition aligns perfectly with your deepest priorities. Take the leap!' : 'The new path scores significantly higher across your weighted priorities. This leap is well-aligned.';
    } else if (newPct > currentPct) {
        verdict = 'Slight Edge — New Path'; 
        recommendation = isWhimsical ? 'It feels like the right move, but the margin is thin. Trust your gut on what tip the scales.' : 'The new path edges ahead, but the margin is thin. Consider what would tip the scales further.';
    } else if (currentPct > newPct + 10) {
        verdict = 'Stay the Course'; 
        recommendation = isWhimsical ? 'Honestly, your current stability is scoring higher. You don\'t need to rush this right now.' : 'Your current path scores higher. The leap may not be worth it at this time.';
    } else {
        verdict = 'Too Close to Call'; 
        recommendation = isWhimsical ? 'It\'s a tie between your head and your heart. Take a walk, talk to someone you trust, and see how you feel tomorrow.' : 'Both paths score similarly. Additional factors (timing, gut feeling, mentorship) should guide your decision.';
    }

    return {
        type: 'decision_matrix',
        overallScore: overall,
        verdict,
        recommendation,
        currentScore: currentPct,
        newScore: newPct,
        factors,
        weights,
        currentScores,
        newScores
    };
}

// ── Results Renderer ─────────────────────────────────────────────
function renderResults(results) {
    const container = document.getElementById('results-container');
    let html = `
        <div class="result-hero">
            <div class="result-score">${results.overallScore}</div>
            <div class="result-verdict">${results.verdict}</div>
            <div class="result-desc">${results.recommendation}</div>
        </div>
    `;

    if (results.type === 'swot') html += renderSWOTResults(results);
    if (results.type === 'risk_reward') html += renderRiskRewardResults(results);
    if (results.type === 'decision_matrix') html += renderDecisionMatrixResults(results);

    // Email capture
    html += `
        <div class="email-capture" id="email-capture">
            <h3>Get Your Full Report</h3>
            <p>Enter your email for a detailed PDF with AI-powered strategic recommendations</p>
            <div class="email-form">
                <input type="email" id="leap-email" placeholder="you@email.com">
                <button class="btn btn-cta" onclick="captureEmail()">Send Report</button>
            </div>
        </div>
    `;

    // Share
    html += `
        <div class="share-row">
            <button class="share-btn" onclick="shareResult('twitter')">Share on X</button>
            <button class="share-btn" onclick="shareResult('linkedin')">Share on LinkedIn</button>
            <button class="share-btn" onclick="shareResult('copy')">Copy Link</button>
        </div>
    `;

    // Try another
    html += `
        <div style="text-align:center;margin-top:2rem;">
            <button class="btn btn-secondary" onclick="resetAssessment()" style="margin-right:0.5rem;">Try Another Framework</button>
            <a href="index.html" class="btn btn-small" style="text-decoration:none;display:inline-block;padding:0.75rem 1.25rem;">Enterprise RAB Framework</a>
        </div>
    `;

    container.innerHTML = html;

    // Render charts after DOM update
    setTimeout(() => {
        if (results.type === 'swot') renderSWOTChart(results);
        if (results.type === 'risk_reward') renderRRChart(results);
        if (results.type === 'decision_matrix') renderDMChart(results);
    }, 200);
}

function renderSWOTResults(r) {
    const categories = ['Strengths', 'Weaknesses', 'Opportunities', 'Threats'];
    const classMap = { Strengths: 'strength', Weaknesses: 'weakness', Opportunities: 'opportunity', Threats: 'threat' };

    let html = '<div class="result-grid">';
    categories.forEach(cat => {
        html += `
            <div class="result-card">
                <h4 class="${classMap[cat]}">${cat} (${r.scores[cat.toLowerCase()]}%)</h4>
                <ul>${r.details[cat].map(d => `<li>${d.answer}</li>`).join('')}</ul>
            </div>
        `;
    });
    html += '</div>';
    html += `<div class="chart-card"><h4>SWOT Radar</h4><canvas id="swot-chart"></canvas></div>`;
    return html;
}

function renderRiskRewardResults(r) {
    return `
        <div class="result-grid">
            <div class="result-card">
                <h4 class="threat">Risk Score</h4>
                <p style="font-size:2rem;font-weight:800;color:var(--red);">${r.riskScore}%</p>
                <p style="font-size:0.8125rem;color:var(--text-dim);margin-top:0.5rem;">Combined financial, career, and personal risk assessment</p>
            </div>
            <div class="result-card">
                <h4 class="strength">Reward Score</h4>
                <p style="font-size:2rem;font-weight:800;color:var(--green);">${r.rewardScore}%</p>
                <p style="font-size:0.8125rem;color:var(--text-dim);margin-top:0.5rem;">Combined income, fulfillment, growth, and impact potential</p>
            </div>
        </div>
        <div class="chart-card"><h4>Risk vs. Reward Position</h4><canvas id="rr-chart"></canvas></div>
    `;
}

function renderDecisionMatrixResults(r) {
    return `
        <div class="result-grid">
            <div class="result-card">
                <h4 class="threat">Current Path Score</h4>
                <p style="font-size:2rem;font-weight:800;color:var(--amber);">${r.currentScore}%</p>
            </div>
            <div class="result-card">
                <h4 class="strength">New Path Score</h4>
                <p style="font-size:2rem;font-weight:800;color:var(--teal);">${r.newScore}%</p>
            </div>
        </div>
        <div class="chart-card"><h4>Weighted Decision Comparison</h4><canvas id="dm-chart"></canvas></div>
    `;
}

// ── Charts ───────────────────────────────────────────────────────
function renderSWOTChart(r) {
    const ctx = document.getElementById('swot-chart');
    if (!ctx) return;
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Strengths', 'Weaknesses', 'Opportunities', 'Threats'],
            datasets: [{
                label: 'SWOT Score',
                data: [r.scores.strengths, r.scores.weaknesses, r.scores.opportunities, r.scores.threats],
                borderColor: '#14b8a6',
                backgroundColor: 'rgba(20, 184, 166, 0.12)',
                borderWidth: 2,
                pointRadius: 5,
                pointBackgroundColor: '#14b8a6'
            }]
        },
        options: {
            responsive: true,
            scales: {
                r: { min: 0, max: 100, grid: { color: 'rgba(148,163,184,0.06)' }, angleLines: { color: 'rgba(148,163,184,0.06)' }, pointLabels: { color: '#94a3b8', font: { size: 13, weight: '600' } }, ticks: { display: false } }
            },
            plugins: { legend: { display: false } }
        }
    });
}

function renderRRChart(r) {
    const ctx = document.getElementById('rr-chart');
    if (!ctx) return;
    new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Your Decision',
                data: [{ x: r.riskScore, y: r.rewardScore }],
                backgroundColor: '#14b8a6',
                pointRadius: 12,
                pointHoverRadius: 14
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: { min: 0, max: 100, title: { display: true, text: 'Risk Level', color: '#94a3b8' }, grid: { color: 'rgba(148,163,184,0.06)' }, ticks: { color: '#94a3b8' } },
                y: { min: 0, max: 100, title: { display: true, text: 'Reward Potential', color: '#94a3b8' }, grid: { color: 'rgba(148,163,184,0.06)' }, ticks: { color: '#94a3b8' } }
            },
            plugins: {
                legend: { display: false },
                annotation: {}
            }
        }
    });
}

function renderDMChart(r) {
    const ctx = document.getElementById('dm-chart');
    if (!ctx) return;
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Fulfillment', 'Growth', 'Financial'],
            datasets: [
                { label: 'Current Path', data: r.currentScores, backgroundColor: 'rgba(245, 158, 11, 0.6)', borderColor: '#f59e0b', borderWidth: 1 },
                { label: 'New Path', data: r.newScores, backgroundColor: 'rgba(20, 184, 166, 0.6)', borderColor: '#14b8a6', borderWidth: 1 }
            ]
        },
        options: {
            responsive: true,
            scales: {
                y: { min: 0, max: 8, grid: { color: 'rgba(148,163,184,0.06)' }, ticks: { color: '#94a3b8' } },
                x: { grid: { display: false }, ticks: { color: '#94a3b8' } }
            },
            plugins: { legend: { labels: { color: '#94a3b8', usePointStyle: true } } }
        }
    });
}

// ── Email Capture ────────────────────────────────────────────────
async function captureEmail() {
    const email = document.getElementById('leap-email').value.trim();
    if (!email || !email.includes('@')) return;

    try {
        await sb.from('leap_leads').insert({
            email,
            decision_type: selectedDecision,
            framework: selectedFramework,
            assessment_id: assessmentId,
            source: 'direct'
        });
        document.getElementById('email-capture').innerHTML = `
            <h3>Report Sent</h3>
            <p style="color:var(--teal);">Check your inbox for your personalized risk analysis report.</p>
        `;
    } catch (e) {
        console.error('Email capture error:', e);
    }
}

// ── Social Sharing ───────────────────────────────────────────────
function shareResult(platform) {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`I just took the Life Leap assessment and scored ${document.querySelector('.result-score')?.textContent || '??'}! Should I take the leap? Find out yours:`);

    if (platform === 'twitter') {
        window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
    } else if (platform === 'linkedin') {
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
    } else {
        navigator.clipboard.writeText(window.location.href);
        const btn = event.target;
        btn.textContent = 'Copied!';
        setTimeout(() => btn.textContent = 'Copy Link', 2000);
    }
}

// ── Reset ────────────────────────────────────────────────────────
function resetAssessment() {
    selectedFramework = null;
    currentQuestion = 0;
    answers = [];
    assessmentId = null;
    document.querySelectorAll('.framework-card').forEach(c => c.classList.remove('selected'));
    document.getElementById('btn-to-questions').disabled = true;
    switchView('step-framework');
}

// ── Theme & Init ─────────────────────────────────────────────────
function initTheme() {
    const saved = localStorage.getItem('rab-theme');
    if (saved === 'light' || (!saved && window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches)) {
        document.documentElement.classList.add('light-theme');
        updateThemeIcons('light');
    }
}

function toggleTheme() {
    const isLight = document.documentElement.classList.toggle('light-theme');
    localStorage.setItem('rab-theme', isLight ? 'light' : 'dark');
    updateThemeIcons(isLight ? 'light' : 'dark');
    
    // Rerender charts if results view is active (wait a short bit for CSS vars to apply)
    if (document.getElementById('step-results').classList.contains('active') && selectedFramework) {
        setTimeout(calculateResults, 100);
    }
}

function updateThemeIcons(theme) {
    const moons = document.querySelectorAll('.theme-icon-moon');
    const suns = document.querySelectorAll('.theme-icon-sun');
    if (theme === 'light') {
        moons.forEach(m => m.style.display = 'none');
        suns.forEach(s => s.style.display = 'block');
    } else {
        moons.forEach(m => m.style.display = 'block');
        suns.forEach(s => s.style.display = 'none');
    }
}

window.addEventListener('DOMContentLoaded', initTheme);
