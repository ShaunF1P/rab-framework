/**
 * Enterprise Retention & Culture Module — "Value Anchor" Simulator
 * RAB Framework
 */

const RETENTION_HTML = `
<div class="retention-container">
    <div class="retention-intro">
        <h2>Culture Risk &amp; Value Anchor</h2>
        <p style="color:var(--text-dim); margin-top:0.5rem; max-width:600px;">
            Evaluate the true cost of attrition. This simulator uses reverse-risk psychology to calculate the "Total Value Risk" of leaving a current position by quantifying hidden culture perks and social capital.
        </p>
        <div class="anchor-icon-bg">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="3"/><line x1="12" y1="22" x2="12" y2="8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/></svg>
        </div>
    </div>

    <!-- Sync UI (Mock Integration) -->
    <div class="sync-panel" id="sync-panel">
        <div class="sync-info">
            <div class="sync-logo">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
            </div>
            <div>
                <h4 style="margin:0;">Enterprise ERP Sync</h4>
                <div class="sync-status" id="sync-status">
                    <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--text-dim);"></span>
                    Ready to connect
                </div>
            </div>
        </div>
        <div style="display: flex; gap: 1rem; align-items: center;">
            <select id="sim-persona" style="background:var(--bg-deep); border:1px solid var(--border); color:var(--text-primary); padding:0.5rem; border-radius:var(--radius-sm); font-family:var(--font-body); font-size:0.875rem;">
                <option value="mid">Mid-Level Manager</option>
                <option value="exec">Senior SaaS Executive</option>
                <option value="entry">Entry-Level Operator</option>
            </select>
            <button class="btn-secondary" id="btn-sync" onclick="simulateSync()">Auto-Fill Total Rewards</button>
        </div>
    </div>

    <!-- Simulator Layout -->
    <div style="display: grid; grid-template-columns: 1fr 340px; gap: 2rem; margin-top: 2rem;">
        
        <div class="calculator-col">
            <div class="value-split" style="margin-top: 0;">
                <!-- Current Anchor -->
                <div class="value-panel current-offer">
                    <div class="panel-header">
                        <h3>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="5" r="3"/><line x1="12" y1="22" x2="12" y2="8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/></svg>
                            Your Value Anchor (Current)
                        </h3>
                    </div>
                    
                    <div class="value-input-group">
                        <label>Base Salary ($) <span>Required</span></label>
                        <input type="number" id="val-curr-base" value="110000" oninput="calculateAnchor()">
                    </div>
                    
                    <h4 style="font-size:0.875rem; color:var(--text-dim); text-transform:uppercase; margin:1.5rem 0 1rem; letter-spacing:0.05em;">Hidden Value Anchors</h4>
                    
                    <div class="value-input-group">
                        <label>Annual Bonus / Unvested Equity ($) <span id="val-bonus-disp">$15,000</span></label>
                        <div class="slider-container">
                            <input type="range" id="val-curr-bonus" min="0" max="100000" step="1000" value="15000" oninput="updateDisp('val-curr-bonus', 'val-bonus-disp'); calculateAnchor()">
                        </div>
                    </div>

                    <div class="value-input-group" style="background: rgba(20, 184, 166, 0.05); padding: 1rem; border: 1px solid rgba(20, 184, 166, 0.2); border-radius: 8px;">
                        <label style="color:var(--teal);">Valuation Growth Multiplier (Equity Upside) <span id="val-multiplier-disp" style="background:var(--teal);color:#000;padding:2px 6px;border-radius:4px;">1.0x</span></label>
                        <div class="slider-container">
                            <input type="range" id="val-curr-multiplier" min="1" max="5" step="0.5" value="1" oninput="document.getElementById('val-multiplier-disp').textContent = this.value + 'x'; calculateAnchor()">
                        </div>
                        <p style="font-size:0.75rem; color:var(--text-dim); margin-top:0.5rem;">Project the potential value of unvested equity if the company scales before departure.</p>
                    </div>
                    
                    <div class="value-input-group">
                        <label>Subsidized Healthcare / Benefits ($) <span id="val-health-disp">$12,000</span></label>
                        <div class="slider-container">
                            <input type="range" id="val-curr-health" min="0" max="30000" step="500" value="12000" oninput="updateDisp('val-curr-health', 'val-health-disp'); calculateAnchor()">
                        </div>
                    </div>
                    
                    <div class="value-input-group">
                        <label>Culture Perks (Remote, PMP, Gym, Lunches) ($) <span id="val-perks-disp">$5,000</span></label>
                        <div class="slider-container">
                            <input type="range" id="val-curr-perks" min="0" max="25000" step="500" value="5000" oninput="updateDisp('val-curr-perks', 'val-perks-disp'); calculateAnchor()">
                        </div>
                    </div>

                    <div class="value-input-group">
                        <label>Social Capital &amp; Trust (Est. Value) ($) <span id="val-trust-disp">$10,000</span></label>
                        <div class="slider-container">
                            <input type="range" id="val-curr-trust" min="0" max="50000" step="1000" value="10000" oninput="updateDisp('val-curr-trust', 'val-trust-disp'); calculateAnchor()">
                        </div>
                        <p style="font-size:0.75rem; color:var(--text-dim); margin-top:0.25rem;">The monetary equivalent of internal network and established reputation.</p>
                    </div>
                </div>

                <!-- New Offer -->
                <div class="value-panel new-offer">
                    <div class="panel-header">
                        <h3>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                            The Salary Mirage (New Offer)
                        </h3>
                    </div>

                    <div class="value-input-group">
                        <label>New Base Salary ($) <span>Required</span></label>
                        <input type="number" id="val-new-base" value="125000" oninput="calculateAnchor()">
                    </div>

                    <h4 style="font-size:0.875rem; color:var(--text-dim); text-transform:uppercase; margin:1.5rem 0 1rem; letter-spacing:0.05em;">Transition Penalties</h4>

                    <div class="value-input-group">
                        <label>Lost Unvested Equity / 401k Match ($) <span id="val-unvested-disp">$8,000</span></label>
                        <div class="slider-container">
                            <input type="range" id="val-new-unvested" min="0" max="100000" step="1000" value="8000" oninput="updateDisp('val-new-unvested', 'val-unvested-disp'); calculateAnchor()">
                        </div>
                    </div>

                    <div class="value-input-group" style="background: rgba(245, 158, 11, 0.05); padding: 1rem; border: 1px solid rgba(245, 158, 11, 0.2); border-radius: 8px;">
                        <label style="color:var(--amber); display:flex; justify-content:space-between; align-items:center;">
                            <span>Ramp-Up Penalty (Year 1)</span>
                            <span id="val-ramp-disp" style="background:var(--amber);color:#fff;padding:2px 6px;border-radius:4px;">$15,000</span>
                        </label>
                        <div style="margin: 0.5rem 0;">
                            <label style="display:flex; align-items:center; gap:0.5rem; font-size:0.75rem; color:var(--text-dim); cursor:pointer;">
                                <input type="checkbox" id="auto-ramp-calc" checked onchange="calculateAnchor()">
                                Auto-slash 50% of assumed bonus to account for the new job learning curve.
                            </label>
                        </div>
                        <div class="slider-container">
                            <input type="range" id="val-new-ramp" min="0" max="50000" step="1000" value="15000" oninput="document.getElementById('auto-ramp-calc').checked=false; updateDisp('val-new-ramp', 'val-ramp-disp'); calculateAnchor()">
                        </div>
                    </div>

                    <div class="value-input-group">
                        <label>LIFO Layoff Risk Premium ($) <span id="val-lifo-disp">$10,000</span></label>
                        <div class="slider-container">
                            <input type="range" id="val-new-lifo" min="0" max="50000" step="1000" value="10000" oninput="updateDisp('val-new-lifo', 'val-lifo-disp'); calculateAnchor()">
                        </div>
                        <p style="font-size:0.75rem; color:var(--text-dim); margin-top:0.25rem;">Risk discount for being "Last In, First Out".</p>
                    </div>
                    <div class="value-input-group">
                        <label>Geographic Relocation (CoL Risk Penalty)</label>
                        <select id="val-new-geo" onchange="calculateAnchor()" style="width:100%; background:var(--bg-deep); border:1px solid var(--border); color:var(--text-primary); padding:0.75rem; border-radius:var(--radius-sm); font-family:var(--font-body); margin-top:0.5rem;">
                            <option value="none">Same Location / Remote (0%)</option>
                            <option value="tier2">Relocating to Tier 2 City (8% CoL Salary Tax)</option>
                            <option value="tier1">Relocating to Tier 1 Coastal City (15% CoL Salary Tax)</option>
                        </select>
                    </div>

                    <div class="value-input-group">
                        <label>Seasonal Departure (Timing Risk Penalty)</label>
                        <select id="val-new-season" onchange="calculateAnchor()" style="width:100%; background:var(--bg-deep); border:1px solid var(--border); color:var(--text-primary); padding:0.75rem; border-radius:var(--radius-sm); font-family:var(--font-body); margin-top:0.5rem;">
                            <option value="q1">Q1 - Post-Bonus (Optimal Timing: $0)</option>
                            <option value="q2">Q2/Q3 - Mid-Year Disruption ($5,000 Transition Tax)</option>
                            <option value="q4">Q4 - Pre-Bonus (Severe: Forfeit 80% of Current Bonus)</option>
                        </select>
                    </div>
                </div>
            </div>

            <!-- Dashboard output -->
            <div class="anchor-results" id="anchor-results">
                <div class="result-verdict-title">The Calculus of Leaving</div>
                <div class="net-value negative" id="res-net-value">-$6,000</div>
                <h3 id="res-verdict">Net Loss in True Value</h3>
                
                <div class="chart-row">
                    <div class="chart-container">
                        <canvas id="anchor-bar-chart"></canvas>
                    </div>
                    <div class="anchor-weight-viz">
                        <canvas id="anchor-radar-chart"></canvas>
                    </div>
                </div>

                <div class="consultative-msg" id="consultative-msg">
                    Let's evaluate your true holding power...
                </div>
            </div>
        </div>

        <!-- AI Copilot Sidebar -->
        <div class="ai-copilot-col">
            <div style="background:var(--bg-card); border:1px solid rgba(139, 92, 246, 0.4); border-radius:var(--radius-lg); padding:1.5rem; position:sticky; top:2rem;">
                <div style="display:flex; align-items:center; gap:0.75rem; margin-bottom:1.5rem; border-bottom:1px solid var(--border); padding-bottom:1rem;">
                    <div style="width:32px; height:32px; border-radius:50%; background:rgba(139, 92, 246, 0.1); display:flex; align-items:center; justify-content:center; color:var(--violet);">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"></path><path d="M12 12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2z"></path><line x1="3" y1="10" x2="3" y2="14"></line><line x1="21" y1="10" x2="21" y2="14"></line><line x1="7" y1="6" x2="7" y2="18"></line><line x1="17" y1="6" x2="17" y2="18"></line></svg>
                    </div>
                    <h3 style="margin:0; font-family:var(--font-display); font-size:1.125rem;">Sentinel AI Copilot</h3>
                </div>
                
                <div style="color:var(--text-secondary); font-size:0.875rem; line-height:1.5;">
                    <p style="margin-bottom:1rem; color:var(--violet); font-weight:600; text-transform:uppercase; letter-spacing:0.05em; font-size:0.75rem;">Proactive Coaching Script</p>
                    <div id="ai-script-output" style="background:rgba(0,0,0,0.2); padding:1rem; border-radius:8px; border-left:3px solid var(--violet); min-height:150px; font-style:italic;">
                        Awaiting data configuration...
                    </div>
                </div>
                
                <div style="margin-top:1.5rem; font-size:0.75rem; color:var(--text-dim); text-align:center;">
                    AI Analysis updates automatically when simulation parameters change.
                </div>
            </div>
        </div>

    </div>
</div>
`;

// Initialize view
function initRetentionView() {
    const container = document.getElementById('view-retention');
    if (container) {
        container.innerHTML = RETENTION_HTML;
        calculateAnchor();
    }
}

// Utility for updating display values
function updateDisp(inputId, dispId) {
    const val = parseInt(document.getElementById(inputId).value);
    document.getElementById(dispId).textContent = '$' + val.toLocaleString();
}

// Sync Simulation
function simulateSync() {
    const btn = document.getElementById('btn-sync');
    const status = document.getElementById('sync-status');
    const panel = document.getElementById('sync-panel');
    const persona = document.getElementById('sim-persona')?.value || 'mid';
    
    btn.disabled = true;
    btn.textContent = 'Authenticating...';
    status.innerHTML = '<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--amber);box-shadow:0 0 8px var(--amber);"></span> Connecting to Enterprise ERP...';
    
    setTimeout(() => {
        btn.textContent = 'Pulling Data...';
        status.innerHTML = '<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--amber);box-shadow:0 0 8px var(--amber);"></span> Syncing Total Rewards Module...';
        
        setTimeout(() => {
            btn.textContent = 'Synced';
            panel.style.borderColor = 'var(--teal)';
            panel.style.background = 'linear-gradient(135deg, rgba(20, 184, 166, 0.1), transparent)';
            status.innerHTML = '<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--teal);box-shadow:0 0 8px var(--teal);"></span> Synced with Employee Profile';
            
            // Auto-fill realistic anchored values based on Persona
            let base, bonus, health, perks;
            if (persona === 'exec') {
                base = 225000;
                bonus = 65000;
                health = 18000;
                perks = 12000;
            } else if (persona === 'entry') {
                base = 65000;
                bonus = 2000;
                health = 6000;
                perks = 1500;
            } else {
                base = 115000;
                bonus = 18500;
                health = 14000;
                perks = 6500;
            }

            document.getElementById('val-curr-base').value = base;
            document.getElementById('val-curr-bonus').value = bonus;
            document.getElementById('val-curr-health').value = health;
            document.getElementById('val-curr-perks').value = perks;
            
            ['bonus', 'health', 'perks'].forEach(id => {
                updateDisp(`val-curr-${id}`, `val-${id}-disp`);
            });
            
            calculateAnchor();
        }, 1500);
    }, 1000);
}

// Global chart references
let anchorBarChart = null;
let anchorRadarChart = null;

// Calculus
function calculateAnchor() {
    // Current Anchor
    const currBase = parseInt(document.getElementById('val-curr-base').value) || 0;
    const currBonusRaw = parseInt(document.getElementById('val-curr-bonus').value) || 0;
    
    // --- PAVE KILLER: Equity Upside Multiplier ---
    const equityMultiplier = parseFloat(document.getElementById('val-curr-multiplier')?.value || 1);
    const currBonus = currBonusRaw * equityMultiplier; // Exponentially spike unvested equity holding power
    
    const currHealth = parseInt(document.getElementById('val-curr-health').value) || 0;
    const currPerks = parseInt(document.getElementById('val-curr-perks').value) || 0;
    const currTrust = parseInt(document.getElementById('val-curr-trust').value) || 0;
    
    const trueCurrentValue = currBase + currBonus + currHealth + currPerks + currTrust;

    // New Offer Mirage
    const newBase = parseInt(document.getElementById('val-new-base').value) || 0;
    const newUnvested = parseInt(document.getElementById('val-new-unvested').value) || 0;
    
    // --- COMPPORT KILLER: Year 1 Ramp-Up Penalty Auto-Slashing ---
    let newRamp = parseInt(document.getElementById('val-new-ramp').value) || 0;
    const autoRamp = document.getElementById('auto-ramp-calc');
    if (autoRamp && autoRamp.checked) {
        // Automatically assume they lose 50% of whatever bonus the new company "promises" (we assume promised bonus is similar to current bonus)
        newRamp = Math.floor(currBonusRaw * 0.5);
        const rampInput = document.getElementById('val-new-ramp');
        if (rampInput) rampInput.value = newRamp;
        updateDisp('val-new-ramp', 'val-ramp-disp');
    }
    
    const newLifo = parseInt(document.getElementById('val-new-lifo').value) || 0;
    
    // Culture Risk Anchors (Geo & Season)
    const valGeo = document.getElementById('val-new-geo')?.value || 'none';
    const valSeason = document.getElementById('val-new-season')?.value || 'q1';
    
    let geoPenalty = 0;
    if (valGeo === 'tier2') geoPenalty = newBase * 0.08;
    if (valGeo === 'tier1') geoPenalty = newBase * 0.15;
    
    let seasonalityPenalty = 0;
    if (valSeason === 'q2') seasonalityPenalty = 5000;
    if (valSeason === 'q4') seasonalityPenalty = currBonusRaw * 0.8;
    
    // Total Penalties
    const totalPenalties = newUnvested + newRamp + newLifo + geoPenalty + seasonalityPenalty;
    const trueNewValue = (newBase + currBonusRaw + currHealth + currPerks) - totalPenalties;
    
    const rawDiff = newBase - currBase;
    const netValue = trueNewValue - trueCurrentValue;
    
    const netValEl = document.getElementById('res-net-value');
    const verdictEl = document.getElementById('res-verdict');
    const msgEl = document.getElementById('consultative-msg');
    
    netValEl.textContent = (netValue > 0 ? '+' : '-') + '$' + Math.abs(netValue).toLocaleString();
    
    // Break-even needed to make netValue = 0
    const breakEven = trueCurrentValue + totalPenalties - (currBonusRaw + currHealth + currPerks);

    if (netValue > 0) {
        netValEl.className = 'net-value positive';
        verdictEl.textContent = 'Net Gain in True Value';
        msgEl.innerHTML = `While this transition represents a net gain, ensure the cultural fit aligns with your risk tolerance. Your current anchor value is strong, but the new offer overcomes the transition friction.`;
    } else {
        netValEl.className = 'net-value negative';
        verdictEl.textContent = 'Net Loss in True Value';
        msgEl.innerHTML = `Let's evaluate your true holding power. A raw salary bump of <strong>$${rawDiff.toLocaleString()}</strong> can be a <em>Salary Mirage</em> when factoring in lost social capital, unvested benefits, relocation taxes, and transition risk. To break even on this move without taking a hidden loss, your new offer needs to be at least <strong>$${breakEven.toLocaleString()}</strong>.`;
    }

    renderAnchorCharts(trueCurrentValue, trueNewValue, {
        base: [currBase, newBase],
        hidden: [currBonus + currHealth + currPerks + currTrust, currBonusRaw + currHealth + currPerks],
        penalty: [0, totalPenalties]
    });
    
    // --- TRIGGER AI COPILOT SCRIPT ---
    generateAiScript(rawDiff, netValue, equityMultiplier, newRamp, geoPenalty, seasonalityPenalty);
}

function generateAiScript(rawDiff, netValue, equityMultiplier, rampPenalty, geoPenalty, seasonPenalty) {
    const aiOutput = document.getElementById('ai-script-output');
    if (!aiOutput) return;

    if (rawDiff <= 0) {
        aiOutput.innerHTML = "They aren't even getting a base salary bump. <br><br><strong>Say this:</strong> <em>'I see you're exploring other options, but mathematically this move is a severe downgrade across the board. You are taking on massive transition risk for zero guaranteed upside.'</em>";
        return;
    }

    if (netValue > 0) {
        aiOutput.innerHTML = "The outside offer is legitimately strong enough to overcome our retention anchors.<br><br><strong>Manager Directive:</strong> Do not try to fight this with math. You must pivot to Career Pathing, Title Promotion, or offer an immediate RSU grant to widen the gap. <em>'I know they are throwing cash at you, but let's talk about where you will be on the org chart in 24 months.'</em>";
        return;
    }

    // AI Synthesis for Net Loss scenarios
    let script = `I see they offered you a $${rawDiff.toLocaleString()} bump in base salary. It looks great on paper. `;
    
    if (equityMultiplier > 1.2) {
        script += `But you are walking away right before our valuation scales. With a realistic ${equityMultiplier}x multiple on your unvested equity, you are permanently forfeiting wealth for a temporary cash bump. `;
    }
    if (rampPenalty > 10000) {
        script += `Furthermore, have you factored in the Year 1 learning curve? Our data shows you will likely miss out on $${rampPenalty.toLocaleString()} in bonuses while you rebuild your pipeline over there. `;
    }
    if (geoPenalty > 0) {
        script += `And once you pay the relocation and cost-of-living tax, that salary bump entirely evaporates. `;
    }
    
    script += `<br><br>When you do the math on the transition penalties, you will actually net <strong>$${Math.abs(netValue).toLocaleString()} LESS</strong> this year if you take that job.`;

    aiOutput.innerHTML = "<strong>Your Conversation Script:</strong><br><br>\"" + script + "\"";
}

function renderAnchorCharts(currTotal, newTotal, stacks) {
    const ctxBar = document.getElementById('anchor-bar-chart');
    const ctxRadar = document.getElementById('anchor-radar-chart');
    if (!ctxBar || !ctxRadar) return;

    if (anchorBarChart) anchorBarChart.destroy();
    if (anchorRadarChart) anchorRadarChart.destroy();

    // Bar Chart
    anchorBarChart = new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: ['Current Anchor', 'New Offer (Mirage)'],
            datasets: [
                {
                    label: 'Base Compensation',
                    data: stacks.base,
                    backgroundColor: 'rgba(79, 110, 247, 0.8)',
                    borderColor: '#4f6ef7',
                    borderWidth: 1
                },
                {
                    label: 'Hidden Perks & Social Capital',
                    data: stacks.hidden,
                    backgroundColor: 'rgba(20, 184, 166, 0.8)',
                    borderColor: '#14b8a6',
                    borderWidth: 1
                },
                {
                    label: 'Transition Penalties',
                    data: stacks.penalty.map(v => -v), // display as negative
                    backgroundColor: 'rgba(239, 68, 68, 0.8)',
                    borderColor: '#ef4444',
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: { stacked: true, grid: { display: false }, ticks: { color: '#94a3b8' } },
                y: { 
                    stacked: true, 
                    grid: { color: 'rgba(148,163,184,0.06)' }, 
                    ticks: { 
                        color: '#94a3b8',
                        callback: function(value) { return '$' + (value/1000) + 'k'; }
                    } 
                }
            },
            plugins: {
                legend: { labels: { color: '#94a3b8' } },
                tooltip: { callbacks: { label: (c) => c.dataset.label + ': $' + Math.abs(c.raw).toLocaleString() } }
            }
        }
    });

    // Radar Chart (Culture Mapping)
    anchorRadarChart = new Chart(ctxRadar, {
        type: 'radar',
        data: {
            labels: ['Financial Security', 'Social Capital', 'Work-Life Balance', 'Job Stability'],
            datasets: [
                {
                    label: 'Current Path',
                    data: [80, 90, 75, 85],
                    backgroundColor: 'rgba(20, 184, 166, 0.15)',
                    borderColor: 'rgba(20, 184, 166, 0.8)',
                    borderWidth: 2,
                    pointBackgroundColor: '#14b8a6'
                },
                {
                    label: 'New Offer',
                    data: [85, 30, 50, 40],
                    backgroundColor: 'rgba(245, 158, 11, 0.15)',
                    borderColor: 'rgba(245, 158, 11, 0.8)',
                    borderWidth: 2,
                    pointBackgroundColor: '#f59e0b'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    beginAtZero: true, max: 100,
                    grid: { color: 'rgba(148,163,184,0.06)' }, angleLines: { color: 'rgba(148,163,184,0.06)' },
                    ticks: { display: false },
                    pointLabels: { color: '#94a3b8', font: { size: 12 } }
                }
            },
            plugins: { legend: { position: 'bottom', labels: { color: '#94a3b8' } } }
        }
    });

    // Add CSS fix for canvas heights
    ctxBar.parentElement.style.height = '350px';
    ctxRadar.parentElement.style.height = '350px';
}
