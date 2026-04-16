// RAB Framework - Questions Database & Recommendation Engine
// Original concept by Bukola Olajire — Johns Hopkins Carey Business School

const QUESTIONS = {
    strategic: [
        {
            id: 's1',
            text: 'Innovation Investment Scenario',
            scenario: 'Your organization has the opportunity to invest in a disruptive technology that could capture 25% market share within 3 years but requires significant upfront investment and has a 40% chance of failure.',
            question: 'How would you approach this opportunity?',
            type: 'likert',
            options: [
                { value: 1, label: 'Avoid — Too risky for our organization' },
                { value: 2, label: 'Proceed cautiously with a small pilot' },
                { value: 3, label: 'Balanced investment with milestones' },
                { value: 4, label: 'Aggressive pursuit with dedicated team' },
                { value: 5, label: 'All-in commitment — first-mover advantage' }
            ]
        },
        {
            id: 's2',
            text: 'Market Expansion Risk',
            question: 'When considering expansion into new geographic markets, what is your primary consideration?',
            type: 'likert',
            options: [
                { value: 1, label: 'Market stability and certainty' },
                { value: 2, label: 'Moderate growth potential' },
                { value: 3, label: 'Balance of risk and return' },
                { value: 4, label: 'High growth potential' },
                { value: 5, label: 'First-mover advantage at any cost' }
            ]
        },
        {
            id: 's3',
            text: 'Competitive Positioning',
            scenario: 'A competitor has launched a product that threatens your core business. Response options range from incremental improvements to a complete business model pivot.',
            question: 'What strategic response aligns with your risk appetite?',
            type: 'likert',
            options: [
                { value: 1, label: 'Defend current position' },
                { value: 2, label: 'Incremental improvements' },
                { value: 3, label: 'Significant product refresh' },
                { value: 4, label: 'New product line launch' },
                { value: 5, label: 'Complete business model transformation' }
            ]
        },
        {
            id: 's4',
            text: 'Strategic Partnership Risk',
            question: 'Your organization is considering a strategic partnership with a high-growth startup. The partnership could accelerate innovation but introduces dependency risks.',
            type: 'likert',
            options: [
                { value: 1, label: 'Avoid partnerships with uncertain entities' },
                { value: 2, label: 'Small-scale collaboration only' },
                { value: 3, label: 'Structured partnership with clear exit' },
                { value: 4, label: 'Deep integration with shared roadmap' },
                { value: 5, label: 'Full merger or acquisition' }
            ]
        }
    ],

    operational: [
        {
            id: 'o1',
            text: 'Capacity–Quality Tradeoff',
            scenario: 'Your operations are running at 85% capacity utilization. Increasing to 95% would boost throughput by 12% but may increase defect rates from 2% to 5% and employee burnout risk.',
            question: 'What is your preferred operating level?',
            type: 'likert',
            options: [
                { value: 1, label: 'Maintain 70–75% for quality assurance' },
                { value: 2, label: 'Maintain 80–85% for balanced performance' },
                { value: 3, label: 'Push to 90% with monitoring systems' },
                { value: 4, label: 'Maximize to 95% for throughput gains' },
                { value: 5, label: 'Run at 100% capacity' }
            ]
        },
        {
            id: 'o2',
            text: 'Supply Chain Resilience',
            question: 'How much redundancy should the organization build into its supply chain?',
            type: 'likert',
            options: [
                { value: 1, label: 'Single supplier for cost efficiency' },
                { value: 2, label: 'Primary + backup supplier' },
                { value: 3, label: 'Dual sourcing for critical items' },
                { value: 4, label: 'Multiple suppliers with inventory buffers' },
                { value: 5, label: 'Fully redundant supply chain' }
            ]
        },
        {
            id: 'o3',
            text: 'Process Standardization vs. Flexibility',
            scenario: 'The organization can standardize processes to achieve 15% cost reduction but will reduce ability to customize for clients.',
            question: 'Where do you stand on this tradeoff?',
            type: 'likert',
            options: [
                { value: 1, label: 'Maintain full flexibility' },
                { value: 2, label: 'Limited standardization' },
                { value: 3, label: 'Balanced approach' },
                { value: 4, label: 'Significant standardization' },
                { value: 5, label: 'Complete standardization' }
            ]
        },
        {
            id: 'o4',
            text: 'Technology Infrastructure Investment',
            question: 'Your current systems work but are aging. Upgrading would cost $2M and cause temporary disruptions. What is your approach?',
            type: 'likert',
            options: [
                { value: 1, label: 'Maintain current systems indefinitely' },
                { value: 2, label: 'Incremental patches only' },
                { value: 3, label: 'Phased upgrade over 3 years' },
                { value: 4, label: 'Complete upgrade within 1 year' },
                { value: 5, label: 'Aggressive 6-month transformation' }
            ]
        }
    ],

    financial: [
        {
            id: 'f1',
            text: 'Leverage and Debt Tolerance',
            scenario: 'An acquisition opportunity would increase debt-to-equity ratio from 0.3 to 1.2 but could generate 20% ROI.',
            question: 'What is your comfort level with this leverage?',
            type: 'likert',
            options: [
                { value: 1, label: 'Unacceptable — maintain low leverage' },
                { value: 2, label: 'Only to 0.5 ratio' },
                { value: 3, label: 'Up to 0.8 with clear payback plan' },
                { value: 4, label: 'Willing to go to 1.2 for growth' },
                { value: 5, label: 'Maximize leverage for opportunity' }
            ]
        },
        {
            id: 'f2',
            text: 'Cash Reserve Strategy',
            question: 'What level of cash reserves should the organization maintain relative to operating expenses?',
            type: 'likert',
            options: [
                { value: 1, label: '12+ months of operating expenses' },
                { value: 2, label: '6–9 months' },
                { value: 3, label: '3–6 months' },
                { value: 4, label: '1–3 months' },
                { value: 5, label: 'Minimal — deploy all capital' }
            ]
        },
        {
            id: 'f3',
            text: 'Investment Return Expectations',
            scenario: 'You are evaluating two projects: Project A has 90% probability of 8% return. Project B has 50% probability of 25% return but 50% chance of 10% loss.',
            question: 'Which aligns with your risk appetite?',
            type: 'likert',
            options: [
                { value: 1, label: 'Strongly prefer Project A' },
                { value: 2, label: 'Lean toward Project A' },
                { value: 3, label: 'Split investment equally' },
                { value: 4, label: 'Lean toward Project B' },
                { value: 5, label: 'Strongly prefer Project B' }
            ]
        },
        {
            id: 'f4',
            text: 'Currency and Market Risk',
            question: 'Your organization operates globally. How should foreign exchange risk be managed?',
            type: 'likert',
            options: [
                { value: 1, label: 'Fully hedge all exposure' },
                { value: 2, label: 'Hedge 75% of exposure' },
                { value: 3, label: 'Hedge 50% — natural hedge rest' },
                { value: 4, label: 'Hedge 25% — accept volatility' },
                { value: 5, label: 'No hedging — pursue potential upside' }
            ]
        }
    ],

    compliance: [
        {
            id: 'c1',
            text: 'Regulatory Interpretation',
            scenario: 'A new regulation has ambiguous language. Conservative interpretation means missing a market opportunity. Aggressive interpretation carries regulatory risk.',
            question: 'How would you proceed?',
            type: 'likert',
            options: [
                { value: 1, label: 'Most conservative interpretation' },
                { value: 2, label: 'Conservative with legal review' },
                { value: 3, label: 'Balanced with compliance input' },
                { value: 4, label: 'Aggressive with documented rationale' },
                { value: 5, label: 'Push boundaries — seek forgiveness later' }
            ]
        },
        {
            id: 'c2',
            text: 'Ethical Dilemma',
            question: 'A business practice is legal but raises ethical concerns among some stakeholders. It generates 5% of revenue. What is your stance?',
            type: 'likert',
            options: [
                { value: 1, label: 'Immediately discontinue' },
                { value: 2, label: 'Phase out over 12 months' },
                { value: 3, label: 'Modify to address concerns' },
                { value: 4, label: 'Continue with transparency' },
                { value: 5, label: 'Continue — legal compliance is sufficient' }
            ]
        },
        {
            id: 'c3',
            text: 'Data Privacy and Innovation',
            scenario: 'A new AI product could provide competitive advantage but requires collecting additional customer data. Privacy advocates express concern.',
            question: 'How do you balance innovation and privacy?',
            type: 'likert',
            options: [
                { value: 1, label: 'Abandon — privacy is paramount' },
                { value: 2, label: 'Pursue with opt-in only' },
                { value: 3, label: 'Balanced approach with safeguards' },
                { value: 4, label: 'Pursue with disclosure' },
                { value: 5, label: 'Maximize data use within the law' }
            ]
        },
        {
            id: 'c4',
            text: 'Reputational Risk Management',
            question: 'A potential client has controversial political ties. The contract is lucrative but may generate negative publicity. How do you evaluate this?',
            type: 'likert',
            options: [
                { value: 1, label: 'Decline — reputation is critical' },
                { value: 2, label: 'Decline unless clearly beneficial' },
                { value: 3, label: 'Accept with stakeholder communication' },
                { value: 4, label: 'Accept — it\'s a business decision' },
                { value: 5, label: 'Accept — all legal business is welcome' }
            ]
        }
    ],

    resilience: [
        {
            id: 'r1',
            text: 'Crisis Preparedness Investment',
            question: 'What percentage of budget should be allocated to business continuity and disaster recovery?',
            type: 'likert',
            options: [
                { value: 1, label: 'Less than 1%' },
                { value: 2, label: '1–2%' },
                { value: 3, label: '2–4%' },
                { value: 4, label: '4–6%' },
                { value: 5, label: 'More than 6%' }
            ]
        },
        {
            id: 'r2',
            text: 'Workforce Flexibility',
            scenario: 'The organization can reduce fixed costs by converting 30% of employees to contractors, but this reduces organizational knowledge and loyalty.',
            question: 'What workforce model do you prefer?',
            type: 'likert',
            options: [
                { value: 1, label: '90%+ permanent employees' },
                { value: 2, label: '75–90% permanent' },
                { value: 3, label: '60–75% permanent' },
                { value: 4, label: '50–60% permanent' },
                { value: 5, label: 'Maximize contractor flexibility' }
            ]
        },
        {
            id: 'r3',
            text: 'Scenario Planning and Adaptability',
            question: 'How much emphasis should leadership place on scenario planning for low-probability, high-impact events?',
            type: 'likert',
            options: [
                { value: 1, label: 'Minimal — focus on current reality' },
                { value: 2, label: 'Annual scenario review' },
                { value: 3, label: 'Quarterly scenario planning' },
                { value: 4, label: 'Monthly monitoring with triggers' },
                { value: 5, label: 'Continuous real-time scenario modeling' }
            ]
        },
        {
            id: 'r4',
            text: 'Organizational Slack',
            scenario: 'Your organization is considering eliminating all "slack" resources (extra capacity, time buffers, redundant systems) to maximize efficiency and reduce costs by 8%.',
            question: 'What is your position?',
            type: 'likert',
            options: [
                { value: 1, label: 'Maintain 15–20% slack for resilience' },
                { value: 2, label: 'Maintain 10–15% slack' },
                { value: 3, label: 'Maintain 5–10% slack' },
                { value: 4, label: 'Reduce to 2–5% minimal slack' },
                { value: 5, label: 'Eliminate all slack for efficiency' }
            ]
        }
    ]
};

// Recommendation templates based on dimension scores
const RECOMMENDATIONS = {
    strategic: {
        low: [
            {
                priority: 'High',
                text: 'Establish a formal innovation review process',
                rationale: 'Low strategic risk appetite may cause the organization to miss growth opportunities. Implement a structured process to evaluate innovations with clear risk-return frameworks.'
            },
            {
                priority: 'Medium',
                text: 'Conduct competitive landscape assessment',
                rationale: 'Conservative strategic positioning requires vigilant market monitoring to avoid disruption.'
            }
        ],
        moderate: [
            {
                priority: 'Medium',
                text: 'Develop strategic optionality framework',
                rationale: 'Moderate risk appetite benefits from maintaining strategic options while managing downside exposure.'
            }
        ],
        high: [
            {
                priority: 'High',
                text: 'Implement stage-gate risk controls',
                rationale: 'High strategic risk appetite requires robust governance to prevent excessive exposure. Establish decision checkpoints for major initiatives.'
            },
            {
                priority: 'High',
                text: 'Stress-test strategic assumptions',
                rationale: 'Aggressive strategies should be validated against multiple scenarios to identify vulnerability points.'
            }
        ]
    },
    operational: {
        low: [
            {
                priority: 'Medium',
                text: 'Evaluate efficiency improvement opportunities',
                rationale: 'Very conservative operational approach may create cost disadvantages. Assess selective automation and process optimization.'
            }
        ],
        moderate: [
            {
                priority: 'Low',
                text: 'Continue balanced operational approach',
                rationale: 'Moderate operational risk appetite aligns with sustainable performance. Maintain current capacity-quality balance.'
            }
        ],
        high: [
            {
                priority: 'High',
                text: 'Establish burnout monitoring systems',
                rationale: 'High utilization strategies require proactive workforce health metrics (Hip Op case study insight).'
            },
            {
                priority: 'High',
                text: 'Build quality safeguards at bottleneck stations',
                rationale: 'Aggressive capacity utilization must include defect detection to prevent quality deterioration.'
            }
        ]
    },
    financial: {
        low: [
            {
                priority: 'Medium',
                text: 'Assess the cost of a conservative capital structure',
                rationale: 'Very low financial risk appetite may limit growth. Quantify the opportunity cost of current leverage levels.'
            }
        ],
        moderate: [
            {
                priority: 'Low',
                text: 'Maintain current financial discipline',
                rationale: 'Balanced financial risk appetite supports sustainable growth trajectory.'
            }
        ],
        high: [
            {
                priority: 'High',
                text: 'Implement dynamic liquidity stress testing',
                rationale: 'Aggressive financial strategies require continuous monitoring of liquidity ratios and covenant compliance.'
            },
            {
                priority: 'Medium',
                text: 'Develop contingency funding arrangements',
                rationale: 'High leverage strategies should include pre-negotiated credit facilities for downside scenarios.'
            }
        ]
    },
    compliance: {
        low: [
            {
                priority: 'Low',
                text: 'Maintain conservative compliance posture',
                rationale: 'Low compliance risk appetite aligns with strong ethical culture and brand protection priorities.'
            }
        ],
        moderate: [
            {
                priority: 'Medium',
                text: 'Document regulatory interpretation rationale',
                rationale: 'Moderate compliance approaches require clear documentation of decision frameworks for regulatory examinations.'
            }
        ],
        high: [
            {
                priority: 'High',
                text: 'Strengthen compliance oversight function',
                rationale: 'Aggressive regulatory interpretations require enhanced compliance monitoring and board visibility.'
            },
            {
                priority: 'High',
                text: 'Reserve for potential regulatory actions',
                rationale: 'High compliance risk appetite should be reflected in financial reserves for contingent liabilities.'
            }
        ]
    },
    resilience: {
        low: [
            {
                priority: 'High',
                text: 'Increase business continuity investment',
                rationale: 'Low resilience risk appetite creates vulnerability to disruptions. The Littlefield simulation showed that cash constraints limit strategic flexibility.'
            },
            {
                priority: 'Medium',
                text: 'Build organizational slack',
                rationale: 'Some inefficiency is necessary for adaptability. Consider adding capacity buffers for critical operations.'
            }
        ],
        moderate: [
            {
                priority: 'Low',
                text: 'Continue balanced resilience approach',
                rationale: 'Moderate resilience investment provides adequate protection while maintaining efficiency.'
            }
        ],
        high: [
            {
                priority: 'Medium',
                text: 'Validate resilience ROI',
                rationale: 'High resilience investment should demonstrate clear value creation or risk mitigation justification.'
            }
        ]
    }
};
