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
            <div class="sync-logo">F1</div>
            <div>
                <h4 style="margin:0;">F1rst Position ERP Sync</h4>
                <div class="sync-status" id="sync-status">
                    <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--text-dim);"></span>
                    Ready to connect
                </div>
            </div>
        </div>
        <div>
            <button class="btn-secondary" id="btn-sync" onclick="simulateSync()">Auto-Fill Total Rewards</button>
        </div>
    </div>

    <!-- Simulator -->
    <div class="value-split">
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
                <label>Annual Bonus / Equity Vest ($) <span id="val-bonus-disp">$15,000</span></label>
                <div class="slider-container">
                    <input type="range" id="val-curr-bonus" min="0" max="100000" step="1000" value="15000" oninput="updateDisp('val-curr-bonus', 'val-bonus-disp'); calculateAnchor()">
                </div>
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
                <p style="font-size:0.75rem; color:var(--text-dim); margin-top:0.25rem;">The monetary equivalent of your internal network, unspoken trust, and ease of execution.</p>
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

            <div class="value-input-group">
                <label>Ramp-Up Penalty (6-mo Stress) ($) <span id="val-ramp-disp">$15,000</span></label>
                <div class="slider-container">
                    <input type="range" id="val-new-ramp" min="0" max="50000" step="1000" value="15000" oninput="updateDisp('val-new-ramp', 'val-ramp-disp'); calculateAnchor()">
                </div>
                <p style="font-size:0.75rem; color:var(--text-dim); margin-top:0.25rem;">Psychological cost of re-establishing yourself and working overtime.</p>
            </div>

            <div class="value-input-group">
                <label>LIFO Layoff Risk Premium ($) <span id="val-lifo-disp">$10,000</span></label>
                <div class="slider-container">
                    <input type="range" id="val-new-lifo" min="0" max="50000" step="1000" value="10000" oninput="updateDisp('val-new-lifo', 'val-lifo-disp'); calculateAnchor()">
                </div>
                <p style="font-size:0.75rem; color:var(--text-dim); margin-top:0.25rem;">Risk discount for being "Last In, First Out" in the event of new company restructuring.</p>
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
            Let's evaluate your true holding power. A raw salary bump can be an illusion when factoring in lost social capital, unvested benefits, and transition risk. To break even on this move, your new offer needs to be at least <strong>$141,000</strong>.
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
    
    btn.disabled = true;
    btn.textContent = 'Authenticating...';
    status.innerHTML = '<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--amber);box-shadow:0 0 8px var(--amber);"></span> Connecting to F1rst Position...';
    
    setTimeout(() => {
        btn.textContent = 'Pulling Data...';
        status.innerHTML = '<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--amber);box-shadow:0 0 8px var(--amber);"></span> Syncing Total Rewards Module...';
        
        setTimeout(() => {
            btn.textContent = 'Synced';
            panel.style.borderColor = 'var(--teal)';
            panel.style.background = 'linear-gradient(135deg, rgba(20, 184, 166, 0.1), transparent)';
            status.innerHTML = '<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--teal);box-shadow:0 0 8px var(--teal);"></span> Synced with Employee Profile';
            
            // Auto-fill realistic anchored values
            document.getElementById('val-curr-base').value = 115000;
            document.getElementById('val-curr-bonus').value = 18500;
            document.getElementById('val-curr-health').value = 14000;
            document.getElementById('val-curr-perks').value = 6500;
            
            ['bonus', 'health', 'perks'].forEach(id => {
                updateDisp(\`val-curr-\${id}\`, \`val-\${id}-disp\`);
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
    const currBonus = parseInt(document.getElementById('val-curr-bonus').value) || 0;
    const currHealth = parseInt(document.getElementById('val-curr-health').value) || 0;
    const currPerks = parseInt(document.getElementById('val-curr-perks').value) || 0;
    const currTrust = parseInt(document.getElementById('val-curr-trust').value) || 0;
    
    const trueCurrentValue = currBase + currBonus + currHealth + currPerks + currTrust;

    // New Offer Mirage
    const newBase = parseInt(document.getElementById('val-new-base').value) || 0;
    const newUnvested = parseInt(document.getElementById('val-new-unvested').value) || 0;
    const newRamp = parseInt(document.getElementById('val-new-ramp').value) || 0;
    const newLifo = parseInt(document.getElementById('val-new-lifo').value) || 0;
    
    // We assume the new job provides basic health and bonus equivalent to current base, 
    // but subtract the penalties from the overall value
    const trueNewValue = (newBase + currBonus + currHealth + currPerks) - (newUnvested + newRamp + newLifo);
    
    const rawDiff = newBase - currBase;
    const netValue = trueNewValue - trueCurrentValue;
    
    const netValEl = document.getElementById('res-net-value');
    const verdictEl = document.getElementById('res-verdict');
    const msgEl = document.getElementById('consultative-msg');
    
    netValEl.textContent = (netValue > 0 ? '+' : '-') + '$' + Math.abs(netValue).toLocaleString();
    
    // Break-even is what is needed to make netValue = 0.
    const breakEven = trueCurrentValue + (newUnvested + newRamp + newLifo) - (currBonus + currHealth + currPerks);

    if (netValue > 0) {
        netValEl.className = 'net-value positive';
        verdictEl.textContent = 'Net Gain in True Value';
        msgEl.innerHTML = \`While this transition represents a net gain, ensure the cultural fit aligns with your risk tolerance. Your current anchor value is strong, but the new offer overcomes the transition friction.\`;
    } else {
        netValEl.className = 'net-value negative';
        verdictEl.textContent = 'Net Loss in True Value';
        msgEl.innerHTML = \`Let's evaluate your true holding power. A raw salary bump of <strong>$\${rawDiff.toLocaleString()}</strong> can be a <em>Salary Mirage</em> when factoring in lost social capital, unvested benefits, and transition risk. To break even on this move without taking a hidden loss, your new offer needs to be at least <strong>$\${breakEven.toLocaleString()}</strong>.\`;
    }

    renderAnchorCharts(trueCurrentValue, trueNewValue, {
        base: [currBase, newBase],
        hidden: [currBonus + currHealth + currPerks + currTrust, currBonus + currHealth + currPerks],
        penalty: [0, newUnvested + newRamp + newLifo]
    });
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
