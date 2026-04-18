
// ── Profile Knowledge Base ───────────────────────────────────────────
// Rich descriptions, strengths, blind spots, and action steps for each profile
const PROFILES = {
    // ── APEST ──
    apest: {
        apostle: {
            title: 'The Apostle', emoji: '🌐',
            tagline: 'You are a boundary-pusher. You build what doesn\'t yet exist.',
            description: 'Apostles are wired to pioneer new territory — new organizations, new movements, new systems. You don\'t fit neatly into existing structures because you were designed to build new ones. You are catalytic, entrepreneurial, and cross-cultural in your thinking. You feel most alive when you are starting something from scratch and challenging the status quo.',
            strengths: ['Visionary architecture and new initiative launch', 'Bridging different cultures, teams, or sectors', 'Creating alignment across diverse groups', 'High risk tolerance for kingdom-building ventures'],
            watchouts: ['Leaving people behind while chasing the next thing', 'Undervaluing the "maintenance" needed in what you\'ve built', 'Surrounding yourself only with people who always agree'],
            nextSteps: ['Identify the one "new territory" you\'re called to break into in the next 12 months', 'Build a team of shepherds and teachers around you — they sustain what you start', 'Read: "Ephesians" (Eph 4:11), "The Shaping of Things to Come" by Frost & Hirsch']
        },
        prophet: {
            title: 'The Prophet', emoji: '🔥',
            tagline: 'You see what others refuse to see. And you\'ll say it.',
            description: 'Prophets are truth-tellers at the cellular level. You have a deep, almost uncomfortable sensitivity to what is misaligned, compromised, or off-course. You feel spiritual and organizational drift before anyone else can see it, and you carry an internal fire to realign people with what is true and right. You are not just intense — you are necessary.',
            strengths: ['Identifying hidden sin, drift, or compromise in systems', 'Calling organizations back to their original DNA', 'Intercessory depth and spiritual discernment', 'Creating urgency around what matters'],
            watchouts: ['Operating without mercy and creating fear rather than growth', 'Confusing personal opinion with divine mandates', 'Burning bridges instead of building them'],
            nextSteps: ['Pair with an evangelist who can communicate your truth with charm', 'Practice delivering hard truths with specific, grace-filled language', 'Journal three ways your voice has BROKEN something vs. BUILT something this year']
        },
        evangelist: {
            title: 'The Evangelist', emoji: '📣',
            tagline: 'You make people believe. In the mission. In themselves. In what\'s possible.',
            description: 'Evangelists carry the gift of persuasion toward something good. You have an almost supernatural ability to see someone outside the mission and compel them to join it. You are the recruitment engine of any team, the reason people show up, and the fire that spreads the message. You are not just a great talker — you are a great bridge-builder between people and purpose.',
            strengths: ['Compelling storytelling and mass mobilization', 'Building bridges between the uninitiated and the mission', 'Creating momentum and excitement in stagnant environments', 'Individual connection and invitation'],
            watchouts: ['Moving shallow and wide at the expense of deep and transformative', 'Chasing results (conversions/numbers) over genuine transformation', 'Neglecting the discipleship that comes after the decision'],
            nextSteps: ['Document 3 specific stories of transformation you\'ve witnessed — practice telling them compellingly', 'Build a discipleship pipeline for the people you bring in', 'Partner with a teacher or shepherd to sustain what you harvest']
        },
        shepherd: {
            title: 'The Shepherd', emoji: '🛡️',
            tagline: 'You protect, heal, and carry people through their worst seasons.',
            description: 'Shepherds are the emotional and relational backbone of any community. Where others move fast, you make sure no one is left behind. You are wired for deep, individual care — the kind that holds people through crisis, names their pain, and believes in their healing when they can\'t believe for themselves. Organizations without shepherds burn their people out. With you, they flourish.',
            strengths: ['Pastoral care and deep one-on-one discipleship', 'Creating safe, healthy community environments', 'Long-term faithfulness to individuals through difficult seasons', 'Emotional intelligence and trauma-informed leadership'],
            watchouts: ['Enabling unhealthy behavior by protecting people from necessary consequences', 'Building unhealthy emotional dependency', 'Sacrificing vision for the sake of keeping everyone comfortable'],
            nextSteps: ['Identify the 5 people in your sphere who need the deepest care right now — and create a rhythm of intentional connection', 'Establish personal boundaries so you can sustain your care capacity without burnout', 'Build a referral network of counselors, coaches, and mentors for cases beyond your capacity']
        },
        teacher: {
            title: 'The Teacher', emoji: '📖',
            tagline: 'You don\'t just know things. You make them understandable. That is a superpower.',
            description: 'Teachers carry the gift of clarity. You see complexity and instinctively know how to break it into accessible, memorable truth. You are the person who can take a 10-volume systematic theology and distill it to a single compelling session. Without teachers, organizations drift doctrinally and people operate on spiritual assumptions rather than foundations. You build the architecture of shared understanding.',
            strengths: ['Biblical and theological depth and accuracy', 'Translating complex concepts into applicable lessons', 'Building curriculum, training systems, and discipleship tracks', 'Long-term formation of others\' worldview and doctrine'],
            watchouts: ['Becoming inaccessible or too academic to serve the average person', 'Privileging intellectual formation over relational depth', 'Critiquing rather than equipping'],
            nextSteps: ['Build one complete discipleship or training curriculum this year', 'Commit to teaching in a context where you receive real-time feedback from learners', 'Ask 3 people: "What did I teach you this year that you actually applied?"']
        }
    },

    // ── Spiritual Gifts ──
    gifts: {
        prophecy: {
            title: 'The Voice', emoji: '🎯',
            tagline: 'You carry divine urgency. The world needs truth-tellers willing to pay the price.',
            description: 'Your gift is prophetic declaration — you see through compromise, name what is drifting, and call people back to truth. This gift is both powerful and costly. It requires the wisdom to deliver revelation with grace and the courage to speak when silence is the comfortable option.',
            strengths: ['Bold declaration and truth-telling', 'Moral clarity in ambiguous situations', 'Prayer and intercession depth'],
            watchouts: ['Delivering truth without love creates damage, not healing', 'Confusion between personal conviction and divine commission'],
            nextSteps: ['Develop a consistent intercessory prayer practice to sharpen your discernment', 'Learn to frame prophetic truths as questions before declarations', 'Find a mature mentor who carries this same gift and can hold you accountable']
        },
        serving: {
            title: 'The Servant', emoji: '🙌',
            tagline: 'You don\'t need the spotlight. You just need a need and the ability to meet it.',
            description: 'Your gift is joyful, practical service — seeing what needs to be done and doing it without waiting to be asked. You are the glue of every community you enter. Without servants, vision stays theoretical. You make the mission physically real.',
            strengths: ['Practical support and behind-the-scenes faithfulness', 'Meeting tangible needs that others overlook', 'Consistency and reliability without public recognition'],
            watchouts: ['Resentment when service is taken for granted', 'Inability to say no leading to exploitation and burnout'],
            nextSteps: ['Identify 3 "invisible" needs in your community this week and address one', 'Practice receiving help — servants often make terrible receivers', 'Create a service schedule with built-in Sabbath to protect your capacity']
        },
        encouragement: {
            title: 'The Encourager', emoji: '⚡',
            tagline: 'You see gold in people before they can see it themselves.',
            description: 'Your gift is the ministry of courage-restoration. You enter situations charged with discouragement and you leave people believing again. This is not flattery — it is a spiritual gift that specifically speaks to what God is doing in someone and calls them forward toward it.',
            strengths: ['Building resilience and renewing motivation in others', 'Seeing potential and calling it out specifically', 'Meeting people in their lowest and most vulnerable moments'],
            watchouts: ['Offering encouragement that bypasses necessary truth or accountability', 'Exhausting yourself serving others\' emotional needs while neglecting your own'],
            nextSteps: ['Write one specific, intentional encouragement letter per week to someone in your sphere', 'Ask God to show you 3 people who are one conversation away from quitting — and reach out', 'Study Acts 4:36 — the life of Barnabas as the biblical model for this gift']
        },
        giving: {
            title: 'The Giver', emoji: '💎',
            tagline: 'You see generosity as oxygen. It is not what you do — it is who you are.',
            description: 'Your gift of giving is not about money — it is about the supernatural compulsion to route resources (financial, relational, influence) toward where they are needed most. You experience deep joy in enabling the mission of others. God trusts givers with more because they can be trusted to release what they receive.',
            strengths: ['Strategic generosity that maximizes Kingdom impact', 'Identifying and meeting financial needs quickly', 'Inspiring others toward a culture of generosity'],
            watchouts: ['Allowing generosity to create leverage or entitlement in relationships', 'Using giving to avoid deeper relational investment'],
            nextSteps: ['Create a personal "giving plan" for the next 12 months — not just amounts, but causes', 'Invite others into a generosity culture around you — host a "generous dinner"', 'Study 2 Corinthians 9:6-8 as the theological anchor for your gift']
        },
        leadership: {
            title: 'The Leader', emoji: '🦅',
            tagline: 'You see the destination clearly and you cannot rest until everyone arrives.',
            description: 'Your gift of leadership is the divine capacity to organize people, resources, and energy toward a shared destination. You are not a positional leader — you are a gift-driven leader. People naturally orient toward you when chaos enters because you bring clarity, direction, and decisive action.',
            strengths: ['Organizational vision and strategic planning', 'Creating alignment across diverse teams', 'Decisive action under pressure and uncertainty'],
            watchouts: ['Running past people in the pursuit of outcomes', 'Creating performance cultures that crush the weak'],
            nextSteps: ['Identify the 3 people under your leadership who are most at risk of burning out — design support for them this month', 'Read: "Spiritual Leadership" by Oswald Sanders', 'Create a quarterly vision review to ensure your team\'s daily work connects to the larger mission']
        },
        mercy: {
            title: 'The Mercy-Giver', emoji: '🌊',
            tagline: 'You feel what others feel. And that capacity to absorb pain is your gift.',
            description: 'Your gift of mercy is an extraordinary empathy — a supernatural ability to sit in pain with others without trying to fix, explain, or escape it. You are drawn to the forgotten, the broken, and the marginalized. Where others see problems, you see people. Where others see messy situations, you see wounded souls who need presence.',
            strengths: ['Deep empathetic presence in crisis and suffering', 'Advocacy for marginalized and overlooked populations', 'Creating environments where the broken feel safe'],
            watchouts: ['Absorbing so much pain that you become unable to function', 'Confusing mercy with enabling destructive behavior'],
            nextSteps: ['Establish clear emotional processing habits — journaling, prayer, therapy — to sustain your capacity', 'Learn to distinguish between mercy and codependency', 'Connect with one specific vulnerable population and commit to sustained presence, not just occasional service']
        },
        teaching: {
            title: 'The Theologian', emoji: '📚',
            tagline: 'Truth lives in you. Your job is to make it live in others.',
            description: 'Your gift of teaching is the divine ability to handle truth accurately and communicate it in ways that change how people think, believe, and live. You are a steward of biblical revelation. Organizations need teachers to prevent drift. Communities need teachers to mature. Without you, spiritual formation is stunted at the surface level.',
            strengths: ['Exegetical depth and doctrinal accuracy', 'Building transformative curriculum and training systems', 'Developing others into mature, self-feeding disciples'],
            watchouts: ['Creating dependency rather than building self-feeders', 'Privileging intellectual precision over relational warmth'],
            nextSteps: ['Commit to teaching in a setting where your learners can ask hard questions', 'Develop a personal reading and study plan that feeds your own formation first', 'Measure your teaching impact by changed behavior, not audience size']
        }
    },

    // ── DISC ──
    disc: {
        D: {
            title: 'Dominance', emoji: '⚔️',
            tagline: 'Results or nothing. You don\'t just set the pace — you are the pace.',
            description: 'You are wired for outcomes. D-types are decisive, competitive, and direct. You see obstacles as problems to be solved immediately, not situations to be managed slowly. You thrive in high-stakes, high-autonomy environments where results speak louder than relationships. Your energy changes the temperature of every room you enter.',
            strengths: ['Decisive action under pressure', 'Driving outcomes and breaking through obstacles', 'Cutting through bureaucracy to get things done', 'Taking calculated risks others avoid'],
            watchouts: ['Collateral relational damage from your pace and directness', 'Creating fear-based cultures rather than ownership cultures', 'Confusing speed with quality — not everything should move at D-speed'],
            nextSteps: ['This week, practice asking one question before giving one directive', 'Identify one team member your directness may have damaged — invest in that relationship specifically', 'Read: "Good to Great" by Jim Collins — specifically the research on Level 5 Leadership, which challenges pure D-drive']
        },
        I: {
            title: 'Influence', emoji: '🌟',
            tagline: 'You don\'t just walk into rooms. You change them.',
            description: 'I-types are the energy of every organization. You are optimistic, persuasive, and socially magnetic. You build relationships effortlessly and you inspire people to believe in missions, products, and possibilities that they would otherwise dismiss. You are the reason people say yes. You are the reason people stay.',
            strengths: ['Infectious enthusiasm and crowd mobilization', 'Building trust and relationships rapidly', 'Generating new ideas and creative alternatives', 'Making complex ideas accessible and exciting'],
            watchouts: ['Starting more things than you finish — accountability is your weak side', 'Confusing social popularity with organizational impact', 'Avoiding necessary conflict because you need people to like you'],
            nextSteps: ['Build a 30-60-90 day execution tracker for your top 3 commitments', 'Identify one relationship where you\'ve been avoiding a hard conversation — schedule it this week', 'Partner with a C-type who will manage your detail; your combination is unbeatable']
        },
        S: {
            title: 'Steadiness', emoji: '🏔️',
            tagline: 'While everyone else burns out, you endure. And that is worth everything.',
            description: 'S-types are the anchor of every high-performing team. You bring consistency, reliability, and relational depth that no other quadrant can replicate. You listen better than anyone. You create the psychological safety that allows teams to take risks. When everything is on fire, you are the calm that allows everyone else to think.',
            strengths: ['Deep loyalty and sustained commitment to people and mission', 'Creating stable, psychologically safe environments', 'Listening with extraordinary depth and patience', 'Long-term follow-through when others have moved on'],
            watchouts: ['Resistance to necessary change — your love of stability can become rigidity', 'Absorbing others\' stress without processing your own', 'Avoiding conflict until it explodes rather than addressing it early'],
            nextSteps: ['Practice speaking your opinion first in one meeting per week before hearing others', 'Identify one area of change you\'ve been resisting — articulate exactly what fear is underneath it', 'Create a regular rhythm of expressing your own needs, not just responding to others\'']
        },
        C: {
            title: 'Conscientiousness', emoji: '🔬',
            tagline: 'You don\'t just do things right. You define what "right" actually means.',
            description: 'C-types are the quality control of the human experience. You are analytical, systematic, and precise. You catch what everyone else misses. You establish the standards that make organizations trustworthy. You build systems that outlast their builders. Your work is not just done — it is done correctly.',
            strengths: ['Extraordinary analytical precision and accuracy', 'Establishing and maintaining high standards', 'Building systems and processes that scale', 'Risk identification and mitigation before others see it'],
            watchouts: ['Analysis paralysis — perfectionism that prevents launch', 'Difficulty trusting others to execute at your standard', 'Social detachment creating the impression of arrogance or coldness'],
            nextSteps: ['Define "good enough" for your top 3 active projects — and launch at that standard', 'Identify one relationship where you\'ve been managing expectations but not actually connecting', 'Practice giving positive feedback before constructive feedback in every team interaction']
        }
    },

    // ── Enneagram ──
    enneagram: {
        heart: {
            title: 'The Heart Triad', emoji: '❤️',
            tagline: 'Love, identity, and image are your battleground. Your strength is your depth of feeling.',
            description: 'You process life through the emotional center. You are deeply relational, empathetic, and image-aware. Types 2, 3, and 4 all live in this triad — the Giver, the Achiever, and the Individualist. Your core questions are: "Am I loved?", "Am I successful?", and "Am I unique?" Your greatest strength is your capacity for deep connection. Your greatest risk is building your identity on how others see you.',
            strengths: ['Extraordinary relational depth and emotional intelligence', 'Ability to inspire, connect, and mobilize through story', 'Sensitivity to pain and beauty that others miss'],
            watchouts: ['Identity collapse when you lose the approval of key relationships', 'Performing for love rather than receiving it freely', 'Suppressing or over-amplifying emotions based on what seems acceptable'],
            nextSteps: ['Practice distinguishing between what you genuinely feel and what you perform', 'Identify one relationship where you\'ve been earning love rather than receiving it', 'Read: "The Wisdom of the Enneagram" by Riso & Hudson — specifically Types 2, 3, 4 chapters']
        },
        head: {
            title: 'The Head Triad', emoji: '🧠',
            tagline: 'You think before you feel. Your mind is both your sanctuary and your prison.',
            description: 'You process life through the thinking center. Types 5, 6, and 7 all operate in this triad — the Investigator, the Loyalist, and the Enthusiast. Your core questions are: "Am I safe?", "Am I certain?", and "Am I satisfied?" You are analytical, scenario-planning, and often brilliant. But your relationship with fear drives more of your behavior than you\'d like to admit.',
            strengths: ['Strategic depth, pattern recognition, and long-range thinking', 'Building robust systems and contingency plans', 'Insatiable curiosity and knowledge acquisition'],
            watchouts: ['Using analysis as a substitute for action and commitment', 'Retreating into your mind when emotional engagement is needed', 'Catastrophic thinking masquerading as rational risk assessment'],
            nextSteps: ['In the next high-stakes moment, commit to a decision with 70% of the information you think you need', 'Identify the core fear underneath your top 3 hesitations right now', 'Build a daily practice that forces embodied, non-cognitive presence (movement, breath, silence)']
        },
        body: {
            title: 'The Body Triad', emoji: '⚡',
            tagline: 'You lead with gut instinct. Your intuition is almost always right — when your ego gets out of the way.',
            description: 'You process life through the instinctual center. Types 8, 9, and 1 operate in this triad — the Challenger, the Peacemaker, and the Reformer. Your core questions are: "Am I in control?", "Am I at peace?", and "Am I doing this right?" You have a visceral, immediate sense of what is just, what is wrong, and who is trustworthy. Your gut is your most powerful instrument.',
            strengths: ['Decisive instinctual leadership and moral integrity', 'Protecting others and standing for what is right', 'Bringing order and justice to chaotic situations'],
            watchouts: ['Defaulting to anger, control, or withdrawal when threatened', 'Confusing instinct with wisdom — not all gut reactions are from God', 'Crushing others with your intensity, even when well-intentioned'],
            nextSteps: ['Practice the pause between stimulus and response — 24 hours before major reactive decisions', 'Identify the last time your gut reaction created relational damage — trace the pattern', 'Study how each of the 3 body types (8, 9, 1) expresses rage differently to identify your subtype']
        }
    },

    // ── Insights ──
    insights: {
        red: {
            title: 'Fiery Red Energy', emoji: '🔴',
            tagline: 'Competitive. Bold. Results-first. You don\'t do slow.',
            description: 'Fiery Red is the color of action energy. You drive to outcomes with a directness that others find either inspiring or confronting depending on their own energy type. You are decisive, competitive, and highly motivated by challenge and results. You are at your best when given autonomy, clear targets, and the authority to execute.',
            strengths: ['Getting things done faster than anyone else', 'Making tough calls when others freeze', 'Challenging the status quo and driving change'],
            watchouts: ['Your directness reads as aggression to Green and Blue types', 'Movement without reflection can create avoidable disasters', 'Your impatience burns out high-potential team members'],
            nextSteps: ['In your next important conversation with a Green or Blue person, ask one more question than you want to ask', 'Identify the last decision you rushed — what did the cost look like? Build 48 hours of reflection into your next major call', 'Read: "Insights Discovery" by Andy Lothian for the full color-blending framework']
        },
        yellow: {
            title: 'Sunshine Yellow Energy', emoji: '🟡',
            tagline: 'Optimistic. Infectious. You make people believe it\'s possible.',
            description: 'Sunshine Yellow is the color of social energy. You are expressive, enthusiastic, and persuasive. You build relationships naturally and you bring optimism into situations where others see only problems. You are the person who makes the meeting enjoyable, the recruiter who gets people excited, and the culture architect who makes the workplace somewhere people want to be.',
            strengths: ['Mobilizing people around ideas and vision', 'Creating environments of creative optimism', 'Making complex ideas feel exciting and accessible'],
            watchouts: ['Overcommitting because of your enthusiasm and underdelivering on execution', 'Avoiding difficult truths because you want to keep the energy positive', 'Moving into new initiatives before sustaining the ones you started'],
            nextSteps: ['Create a completion inventory — list every initiative you\'ve started in the last 2 years and track what actually got finished', 'Practice delivering one piece of difficult feedback this week with intention and care', 'Build an accountability partnership with a Red or Blue type who will track your follow-through']
        },
        green: {
            title: 'Earth Green Energy', emoji: '🟢',
            tagline: 'Patient. Empathetic. The person who actually holds everything together.',
            description: 'Earth Green is the color of relationship energy. You are the anchor of your team — the person who ensures that people feel seen, heard, and valued while the mission marches forward. You have a deep commitment to harmony and genuine care for individuals that is irreplaceable in any high-functioning team. When you leave an organization, the culture changes.',
            strengths: ['Deep listening and genuine empathy', 'Building trust-based, long-term relationships', 'Creating psychological safety that enables risk-taking'],
            watchouts: ['Avoiding necessary conflict until it becomes a crisis', 'Absorbing others\' emotional weight to the point of depletion', 'Mistaking keeping the peace for actual resolution'],
            nextSteps: ['Identify one conversation you\'ve been avoiding for more than 2 weeks — book it this week', 'Practice "green assertion" — expressing your own needs and perspectives before processing for others', 'Read: "Boundaries" by Cloud & Townsend — essential for Green types who over-extend']
        },
        blue: {
            title: 'Cool Blue Energy', emoji: '🔵',
            tagline: 'Precise. Reliable. The person who knows the answer when everyone else is guessing.',
            description: 'Cool Blue is the color of analytical energy. You bring rigor, standards, and precision to every environment you enter. You are not just careful — you are reliably correct. You build systems that work and processes that scale. You are the reason deadlines are met, financial projections are accurate, and compliance doesn\'t become a crisis.',
            strengths: ['Extraordinary analytical precision and accuracy', 'Logical decision-making processes free from emotional bias', 'Building reliable, replicable systems and standards'],
            watchouts: ['Paralysis by analysis — perfectionism that prevents momentum', 'Social coldness that makes others feel evaluated rather than valued', 'Over-critiquing ideas in the early "divergent thinking" phase of projects'],
            nextSteps: ['Practice "good enough" thinking — define a minimum viable standard for your top 3 projects and actually launch at that level', 'Spend 15 minutes per day in unstructured conversation with team members, not task-focused', 'When brainstorming begins, commit to 10 minutes of "no critique" mode — just listen and receive']
        }
    },

    // ── Servant Leadership ──
    servant: {
        humility: {
            title: 'Humility Anchor', emoji: '🙏',
            tagline: 'You don\'t need the credit. You need the mission to succeed.',
            description: 'Your dominant servant leadership trait is humility — the bedrock of all sustainable leadership. You deflect recognition, amplify others, and model a posture that gives permission to everyone around you to be honest and growing. This trait builds the deepest, most loyal organizations because people trust you without agenda.',
            strengths: ['Building high-trust cultures where people self-disclose honestly', 'Attracting high-character team members who are values-aligned', 'Long-term team retention and relational stability'],
            watchouts: ['Undervaluing yourself to the point of becoming invisible in the leadership hierarchy', 'Allowing false humility to prevent necessary decisive leadership', 'Being taken advantage of by those who mistake your humility for weakness'],
            nextSteps: ['Identify 3 wins in the last 90 days that you contributed to significantly — practice owning them without deflecting', 'Read: "Humilitas" by John Dickson — the case for leadership humility from ancient to modern contexts', 'Ask a trusted leader: "Where do you think I under-use my authority out of false humility?"']
        },
        empathy: {
            title: 'Empathy Anchor', emoji: '💙',
            tagline: 'You see the human being underneath the employee. That changes everything.',
            description: 'Your primary servant leadership trait is empathy — the capacity to perceive and share the internal state of another person and use that perception to inform how you lead. Empathetic leaders build organizations where people consistently outperform expectations because they feel valued as people, not just performers.',
            strengths: ['Identifying burnout and disengagement before it becomes departure', 'Navigating team conflict with nuance and care', 'Building deeply loyal, high-trust relationships at every organizational level'],
            watchouts: ['Empathy without boundary becomes enabling', 'Absorbing team stress until your own capacity collapses', 'Making decisions based on emotional data when you also need analytical data'],
            nextSteps: ['Create a "listening calendar" — 30-minute 1-on-1s with each direct report this month, agenda: "how are you actually doing?"', 'Study your organization\'s turnover data and identify the emotional signals that preceded departures', 'Build a personal processing rhythm (journaling, therapy, mentoring) so empathy flows through you, not from you']
        },
        stewardship: {
            title: 'Stewardship Anchor', emoji: '📊',
            tagline: 'You don\'t own anything. You\'re just responsible for it. And that responsibility is everything.',
            description: 'Your primary servant leadership trait is stewardship — the conviction that resources (people, finances, time, influence) are entrusted to you for a specific purpose, not for personal accumulation. You manage with unusual care, precision, and accountability because you feel the weight of what\'s been placed in your hands.',
            strengths: ['Financial stewardship and operational efficiency', 'Building accountable systems and transparent reporting', 'Long-term resource planning that outlasts leadership transitions'],
            watchouts: ['Over-optimization creating cultures with no margin for creativity or risk', 'Confusing stewardship of resources with control of people', 'Letting stewardship anxiety prevent bold, necessary investment'],
            nextSteps: ['Audit your top 3 stewardship responsibilities — where are you the bottleneck that needs to release control?', 'Build a "next leader" succession stewardship plan for your top role', 'Ask: am I stewarding well because I love the mission, or because I fear losing control?']
        },
        vision: {
            title: 'Vision Anchor', emoji: '🔭',
            tagline: 'You live in the future. Your team needs you to visit — but also to stay present.',
            description: 'Your primary servant leadership trait is vision — the ability to see a preferred, compelling future and sustain the organizational energy to move toward it even when obstacles appear. Vision-anchored servant leaders serve their teams by providing orientation, meaning, and direction. Without you, execution has no north star.',
            strengths: ['Inspiring long-term strategic direction and purpose clarity', 'Generating organizational motivation through compelling narrative', 'Providing hope and orientation in times of crisis or stagnation'],
            watchouts: ['Living so far in the future that you fail to sustain current operations', 'Leaving your team without enough clarity on how today connects to tomorrow', 'Pivoting the vision before the last one has been fully implemented'],
            nextSteps: ['Create a 1-page "vision translation document" that connects daily work to 3-year destination for your full team', 'Build quarterly vision reinforcement touchpoints into your leadership calendar', 'Identify your 3 most vision-resistant team members — design specific conversations that make the future tangible for them']
        }
    },

    // ── EQ ──
    eq: {
        high: {
            title: 'High Emotional Intelligence', emoji: '🧘',
            tagline: 'You are the thermostat — not the thermometer. You set the temperature.',
            description: 'At this EQ level, you have developed the rare capacity to separate what you feel from how you respond. You recognize emotional patterns — in yourself and others — before they become behavioral damage. You enter conflict with curiosity rather than reactivity. This is the baseline capacity of the most effective leaders, negotiators, therapists, and coaches in the world.',
            strengths: ['Remaining effective under high-pressure, high-stakes situations', 'De-escalating conflict and creating psychological safety rapidly', 'Reading group dynamics and adjusting your approach in real-time'],
            watchouts: ['High EQ can become emotionally manipulative if not anchored in genuine ethics', 'Others may underestimate their own impact on you since you rarely react publicly'],
            nextSteps: ['Use your EQ capacity to become a coach-leader — one conversation per week intentionally developing someone else\'s emotional intelligence', 'Read: "Emotional Intelligence 2.0" by Bradberry & Greaves to optimize your specific EQ subscores', 'Identify a relationship where your emotional regulation has allowed patterns of mistreatment to continue unchallenged — and address it']
        },
        developing: {
            title: 'Developing Emotional Intelligence', emoji: '🌱',
            tagline: 'You are aware enough to know you need more. That self-awareness is the beginning.',
            description: 'Your EQ at this level suggests that emotional overwhelm, reactive responses, or difficulty reading social situations may be limiting your leadership effectiveness. This is not a ceiling — it is a starting point. The highest-EQ leaders in the world were not born with it. They built it through intentional, often painful, self-awareness work.',
            strengths: ['If you\'re here, you have enough self-awareness to want to grow — that is the critical first ingredient', 'Your authenticity about emotional struggles often creates space for others to be similarly honest'],
            watchouts: ['Reactive communication under stress that damages key relationships', 'Difficulty giving or receiving feedback without personalization', 'Using emotional intensity to control conversations or outcomes'],
            nextSteps: ['Schedule 1 session with a certified executive coach or therapist this month — invest in structured emotional development', 'Practice the 90-second rule: when triggered, wait 90 seconds before responding — the neurochemical reaction peaks and subsides in that window', 'Keep an "emotional reaction journal" for 30 days — document trigger, your response, and the outcome. Patterns will emerge.']
        }
    },

    // ── Strategy ──
    strategy: {
        action: {
            title: 'Action Bias', emoji: '🚀',
            tagline: 'You build planes while you\'re falling. The market rewards your courage.',
            description: 'Your dominant strategic orientation is action bias — you prefer executing with incomplete information over waiting for the perfect plan. You are the person who ships the MVP, launches the pilot, and learns by doing. In fast-moving environments, your bias creates extraordinary competitive advantage. In complex, high-stakes environments, it creates avoidable catastrophic debt.',
            strengths: ['Speed to market and rapid iteration', 'Momentum generation and team activation', 'Comfort with ambiguity and uncertainty'],
            watchouts: ['Technical, financial, or relational debt created by moving before adequate planning', 'Burning team members who need more clarity before they can execute their best work', 'Confusing activity with progress'],
            nextSteps: ['Before your next major launch or decision, run a 2-hour "pre-mortem" — ask: what could go wrong, and how do we prevent it now', 'Partner with at least one optimization-biased thinker on every major initiative', 'Create minimum viable planning templates for recurring decision types so you don\'t start from zero every time']
        },
        optimization: {
            title: 'Optimization Bias', emoji: '⚙️',
            tagline: 'You refuse to ship mediocre. That standard is your competitive edge — and your biggest risk.',
            description: 'Your dominant strategic orientation is optimization bias — you prefer comprehensive planning and high-quality execution over speed and iteration. You are the person who defines the standard, builds the right system, and prevents the costly mistakes that action-biased thinkers create. In complex, high-quality-sensitive environments, your bias is essential. In fast-moving markets, it becomes a liability.',
            strengths: ['Building robust, high-quality systems and processes', 'Risk identification and mitigation before it becomes crisis', 'Defining standards that create sustainable excellence'],
            watchouts: ['Analysis paralysis that costs market position and team motivation', 'Micromanagement of execution that prevents team ownership', 'Confusing the perfect plan with the right plan'],
            nextSteps: ['Define a "ship date" before you start planning — constrain the optimization window', 'Identify 3 decisions you\'ve been sitting on for more than 2 weeks and make all 3 by Friday', 'Partner with an action-biased thinker and agree: they launch, you audit. Use the tension productively.']
        }
    }
};
/**
 * Life Leap Assessment — Consumer Risk Analysis Engine
 * Frameworks: SWOT, Risk-Reward Matrix, Decision Matrix
 * RAB Framework by Shaun Muhammad / RAB Engineering
 */

// ── Supabase Client ──────────────────────────────────────────────
const SUPABASE_URL = 'https://epxjcrlqgqvgglpohujv.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVweGpjcmxxZ3F2Z2dscG9odWp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4MTUwMzAsImV4cCI6MjA2MDM5MTAzMH0.ND4Y8a_jHO4BPXPF7D25RSm7jgYhCPiJQEMDi-rkq0k';
const sb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
const RELAY_URL = 'https://rab-relay-242550975427.us-east1.run.app';

// ── State ────────────────────────────────────────────────────────
let selectedDomain = null;
let selectedDecision = null;
let selectedFramework = null;
let selectedLength = 'medium'; // default
let currentQuestion = 0;
let answers = [];
let assessmentId = null;
let victoryLapData = null;


// ── Score Serializer (safe for HTML onclick attributes) ────────────
function serializeScore(score) {
    return typeof score === 'string' ? "'" + score + "'" : score;
}

// ── Domain Selection ─────────────────────────────────────────────
function selectDomain(el) {
    document.querySelectorAll('.decision-card').forEach(c => c.classList.remove('selected'));
    el.classList.add('selected');
    selectedDomain = el.dataset.domain;
    document.getElementById('btn-to-next-step').disabled = false;
}

function routeFromDomain() {
    if (selectedDomain === 'leap_risk') {
        switchView('step-decision');
    } else {
        renderDynamicFrameworks();
        switchView('step-framework');
    }
}

function routeBackToDomain() {
    selectedDomain = null;
    document.getElementById('btn-to-next-step').disabled = true;
    document.querySelectorAll('.decision-card').forEach(c => c.classList.remove('selected'));
    switchView('step-domain');
}

// ── Decision Selection ───────────────────────────────────────────
function selectDecision(el) {
    document.querySelectorAll('.decision-card').forEach(c => c.classList.remove('selected'));
    el.classList.add('selected');
    selectedDecision = el.dataset.decision;
    document.getElementById('btn-to-framework').disabled = false;
}

function selectLength(len) {
    document.querySelectorAll('.step-length-btn').forEach(btn => btn.classList.remove('selected'));
    document.querySelector(`.step-length-btn[data-len="${len}"]`).classList.add('selected');
    selectedLength = len;
}

// ── Dynamic Frameworks ───────────────────────────────────────────
function renderDynamicFrameworks() {
    const grid = document.getElementById('dynamic-framework-grid');
    const desc = document.getElementById('framework-desc-text');
    let html = '';

    if (selectedDomain === 'personality') {
        desc.textContent = "Select the behavioral psychology model to map against.";
        html = `
            <div class="framework-card" data-framework="insights" onclick="selectFramework(this)">
                <div class="tag">Color Energies</div><h3>Insights Profile</h3>
                <p>Maps personality across Fiery Red, Earth Green, Sunshine Yellow, and Cool Blue dynamics.</p>
            </div>
            <div class="framework-card" data-framework="disc" onclick="selectFramework(this)">
                <div class="tag">4 Quadrants</div><h3>DISC Assessment</h3>
                <p>Dominance, Influence, Steadiness, and Conscientiousness behavioral mapping.</p>
            </div>
            <div class="framework-card" data-framework="enneagram" onclick="selectFramework(this)">
                <div class="tag">Core Motif</div><h3>Enneagram</h3>
                <p>Core fears and desires across the Head, Heart, and Body triads.</p>
            </div>
            <div class="framework-card" data-framework="mbti" onclick="selectFramework(this)">
                <div class="tag">16 Types</div><h3>Myers-Briggs (MBTI)</h3>
                <p>Find your 4-letter cognitive type across I/E, N/S, T/F, J/P dimensions.</p>
            </div>
            <div class="framework-card" data-framework="strengths" onclick="selectFramework(this)">
                <div class="tag">CliftonStrengths</div><h3>StrengthsFinder Domains</h3>
                <p>Identify your dominant strength domain: Executing, Influencing, Relationship, or Strategic.</p>
            </div>
            <div class="framework-card" data-framework="cognitive_bias" onclick="selectFramework(this)">
                <div class="tag">Mental Models</div><h3>Cognitive Bias Audit</h3>
                <p>Surface your dominant reasoning blind spots and decision distortions.</p>
            </div>
        `;
        document.getElementById('step-length').style.display = 'block';

    } else if (selectedDomain === 'spiritual') {
        desc.textContent = "Select the theological or calling framework to evaluate.";
        html = `
            <div class="framework-card" data-framework="apest" onclick="selectFramework(this)">
                <div class="tag">Ephesians 4</div><h3>APEST Calling Matrix</h3>
                <p>Apostle, Prophet, Evangelist, Shepherd, or Teacher — find your primary wiring.</p>
            </div>
            <div class="framework-card" data-framework="gifts" onclick="selectFramework(this)">
                <div class="tag">Romans 12</div><h3>Spiritual Gifts Test</h3>
                <p>Identify your primary operational giftings within the church body.</p>
            </div>
            <div class="framework-card" data-framework="servant" onclick="selectFramework(this)">
                <div class="tag">Character</div><h3>Servant Leadership Index</h3>
                <p>Score your humility, empathy, stewardship, and vision execution.</p>
            </div>
            <div class="framework-card" data-framework="kingdom_mountain" onclick="selectFramework(this)">
                <div class="tag">7 Mountains</div><h3>Kingdom Mountain Profile</h3>
                <p>Identify which sphere of cultural influence you are called to shape.</p>
            </div>
            <div class="framework-card" data-framework="shape" onclick="selectFramework(this)">
                <div class="tag">Calling Map</div><h3>SHAPE Assessment</h3>
                <p>Spiritual gifts, Heart passion, Abilities, Personality, and Experience profile.</p>
            </div>
            <div class="framework-card" data-framework="spiritual_formation" onclick="selectFramework(this)">
                <div class="tag">Journey Stage</div><h3>Spiritual Formation Stage</h3>
                <p>Identify where you are on the formation journey from infant to elder.</p>
            </div>
        `;
        document.getElementById('step-length').style.display = 'block';

    } else if (selectedDomain === 'cognitive') {
        desc.textContent = "Cognitive pattern recognition, logic stress testing, and mindset diagnostics.";
        html = `
            <div class="framework-card" data-framework="logic" onclick="selectFramework(this)">
                <div class="tag">Tactical Logic</div><h3>Alpha Logic Test</h3>
                <p>Rapid deduction puzzles measuring pattern recognition under constraint.</p>
            </div>
            <div class="framework-card" data-framework="eq" onclick="selectFramework(this)">
                <div class="tag">Empathy</div><h3>Emotional Intelligence (EQ)</h3>
                <p>Assess situational empathy and emotional conflict resolution capacity.</p>
            </div>
            <div class="framework-card" data-framework="strategy" onclick="selectFramework(this)">
                <div class="tag">Execution</div><h3>Strategic Action Matrix</h3>
                <p>Map your bias for action against your requirement for optimization.</p>
            </div>
            <div class="framework-card" data-framework="growth_mindset" onclick="selectFramework(this)">
                <div class="tag">Dweck</div><h3>Growth Mindset Index</h3>
                <p>Measure where you sit on the fixed-to-growth mindset continuum.</p>
            </div>
            <div class="framework-card" data-framework="decision_fatigue" onclick="selectFramework(this)">
                <div class="tag">Mental Stamina</div><h3>Decision Fatigue Profile</h3>
                <p>How your decision quality degrades under cognitive load and pressure.</p>
            </div>
            <div class="framework-card" data-framework="mental_toughness" onclick="selectFramework(this)">
                <div class="tag">4Cs Model</div><h3>Mental Toughness (MTQ)</h3>
                <p>Control, Commitment, Challenge, and Confidence — the 4 pillars of resilience.</p>
            </div>
        `;
        document.getElementById('step-length').style.display = 'none';

    } else if (selectedDomain === 'leadership') {
        desc.textContent = "Decode your command instinct, situational wiring, conflict style, team role, and power base.";
        html = `
            <div class="framework-card" data-framework="leadership_style" onclick="selectFramework(this)">
                <div class="tag">Goleman</div><h3>Leadership Style Audit</h3>
                <p>Visionary, Coaching, Affiliative, Democratic, Pacesetting, or Commanding — your dominant style.</p>
            </div>
            <div class="framework-card" data-framework="situational" onclick="selectFramework(this)">
                <div class="tag">Hersey-Blanchard</div><h3>Situational Leadership</h3>
                <p>Directing, Coaching, Supporting, or Delegating — your adaptive command mode.</p>
            </div>
            <div class="framework-card" data-framework="conflict_resolution" onclick="selectFramework(this)">
                <div class="tag">Thomas-Kilmann</div><h3>Conflict Resolution Style</h3>
                <p>Competing, Collaborating, Compromising, Avoiding, or Accommodating under pressure.</p>
            </div>
            <div class="framework-card" data-framework="team_role" onclick="selectFramework(this)">
                <div class="tag">Belbin</div><h3>Team Role Profile</h3>
                <p>Your natural function on a high-performing team: Thinker, Action, or People roles.</p>
            </div>
            <div class="framework-card" data-framework="power_dynamics" onclick="selectFramework(this)">
                <div class="tag">French & Raven</div><h3>Power Dynamics Index</h3>
                <p>How you actually influence others: Expert, Referent, Reward, Coercive, or Legitimate.</p>
            </div>
            <div class="framework-card" data-framework="leadership_ei" onclick="selectFramework(this)">
                <div class="tag">EI Leadership</div><h3>Leadership EI Domains</h3>
                <p>Self-awareness, Self-management, Social Awareness, and Relationship Management applied to leading.</p>
            </div>
        `;
        document.getElementById('step-length').style.display = 'none';

    } else if (selectedDomain === 'relational') {
        desc.textContent = "Map how you give, receive, and build connection across every relational context.";
        html = `
            <div class="framework-card" data-framework="love_languages" onclick="selectFramework(this)">
                <div class="tag">Chapman</div><h3>5 Love Languages</h3>
                <p>Words, Acts, Gifts, Time, or Touch — how you give and need to receive love.</p>
            </div>
            <div class="framework-card" data-framework="appreciation_work" onclick="selectFramework(this)">
                <div class="tag">Chapman + White</div><h3>Languages of Appreciation</h3>
                <p>How you feel most valued and seen in professional environments.</p>
            </div>
            <div class="framework-card" data-framework="attachment" onclick="selectFramework(this)">
                <div class="tag">Bowlby</div><h3>Attachment Style</h3>
                <p>Secure, Anxious, Avoidant, or Disorganized — your relational security wiring.</p>
            </div>
            <div class="framework-card" data-framework="gottman" onclick="selectFramework(this)">
                <div class="tag">Gottman</div><h3>Relationship Pattern</h3>
                <p>Your dominant relational dynamic across friendship, conflict, and shared meaning.</p>
            </div>
            <div class="framework-card" data-framework="relational_needs" onclick="selectFramework(this)">
                <div class="tag">Core Needs</div><h3>Relational Needs Profile</h3>
                <p>Your deepest psychological need in every relationship: Comfort, Respect, or Belonging.</p>
            </div>
            <div class="framework-card" data-framework="communication_style" onclick="selectFramework(this)">
                <div class="tag">Assertiveness</div><h3>Communication Style</h3>
                <p>Passive, Aggressive, Passive-Aggressive, or Assertive — your default communication wiring.</p>
            </div>
        `;
        document.getElementById('step-length').style.display = 'none';

    } else {
        // leap_risk fallback
        desc.textContent = "Choose the mental model to process your decision through.";
        html = `
            <div class="framework-card" data-framework="swot" onclick="selectFramework(this)">
                <div class="tag">Foundation</div><h3>SWOT Analysis</h3>
                <p>Map internal Strengths & Weaknesses against external Opportunities & Threats.</p>
            </div>
            <div class="framework-card" data-framework="risk_reward" onclick="selectFramework(this)">
                <div class="tag">Asymmetry</div><h3>Risk-Reward Matrix</h3>
                <p>Isolate the downside exposure versus the maximum potential upside.</p>
            </div>
            <div class="framework-card" data-framework="decision_matrix" onclick="selectFramework(this)">
                <div class="tag">Comprehensive</div><h3>Weighted Decision Matrix</h3>
                <p>Score the new path against your current path using priority-weighted factors.</p>
            </div>
        `;
        document.getElementById('step-length').style.display = 'none';
    }

    grid.innerHTML = html;
}

function selectFramework(el) {
    if (el.style.opacity === '0.5') return; // disabled
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

function goToFramework() { 
    if (selectedDomain === 'leap_risk') renderDynamicFrameworks();
    switchView('step-framework'); 
}
function goToDecision() { switchView('step-decision'); }
function goToQuestions() {
    currentQuestion = 0;
    answers = [];
    victoryLapData = null;
    renderQuestion();
    switchView('step-questions');
}

// ── Question Banks ───────────────────────────────────────────────
function getQuestions() {
    if (selectedDomain === 'personality') {
        if (selectedFramework === 'insights') return getInsightsQuestions(selectedLength);
        if (selectedFramework === 'disc') return getDiscQuestions(selectedLength);
        if (selectedFramework === 'enneagram') return getEnneagramQuestions(selectedLength);
        if (selectedFramework === 'mbti') return getMbtiQuestions();
        if (selectedFramework === 'strengths') return getStrengthsQuestions();
        if (selectedFramework === 'cognitive_bias') return getCognitiveBiasQuestions();
    }
    if (selectedDomain === 'spiritual') {
        if (selectedFramework === 'apest') return getApestQuestions(selectedLength);
        if (selectedFramework === 'gifts') return getGiftsQuestions(selectedLength);
        if (selectedFramework === 'servant') return getServantQuestions(selectedLength);
        if (selectedFramework === 'kingdom_mountain') return getKingdomMountainQuestions();
        if (selectedFramework === 'shape') return getShapeQuestions();
        if (selectedFramework === 'spiritual_formation') return getSpiritualFormationQuestions();
    }
    if (selectedDomain === 'cognitive') {
        if (selectedFramework === 'logic') return getLogicQuestions();
        if (selectedFramework === 'eq') return getEqQuestions();
        if (selectedFramework === 'strategy') return getStrategyQuestions();
        if (selectedFramework === 'growth_mindset') return getGrowthMindsetQuestions();
        if (selectedFramework === 'decision_fatigue') return getDecisionFatigueQuestions();
        if (selectedFramework === 'mental_toughness') return getMentalToughnessQuestions();
    }
    if (selectedDomain === 'leadership') {
        if (selectedFramework === 'leadership_style') return getLeadershipStyleQuestions();
        if (selectedFramework === 'situational') return getSituationalQuestions();
        if (selectedFramework === 'conflict_resolution') return getConflictResolutionQuestions();
        if (selectedFramework === 'team_role') return getTeamRoleQuestions();
        if (selectedFramework === 'power_dynamics') return getPowerDynamicsQuestions();
        if (selectedFramework === 'leadership_ei') return getLeadershipEiQuestions();
    }
    if (selectedDomain === 'relational') {
        if (selectedFramework === 'love_languages') return getLoveLanguagesQuestions();
        if (selectedFramework === 'appreciation_work') return getAppreciationWorkQuestions();
        if (selectedFramework === 'attachment') return getAttachmentQuestions();
        if (selectedFramework === 'gottman') return getGottmanQuestions();
        if (selectedFramework === 'relational_needs') return getRelationalNeedsQuestions();
        if (selectedFramework === 'communication_style') return getCommunicationStyleQuestions();
    }

    // Default: Leap Risk
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

// ── Psychometric Question Banks ──────────────────────────────────
function getInsightsQuestions(length) {
    // 5 Questions for Micro
    const base = [
        { category: 'Under Pressure', text: 'When a project suddenly goes off track and you are under immense pressure, how do you instinctively react?', context: 'Select your immediate, unfiltered reaction.', options: [
            { text: 'I take immediate control and bark orders to fix it quickly.', score: 'red' },
            { text: 'I rally the team, keep morale high, and figure it out together.', score: 'yellow' },
            { text: 'I pause to ensure everyone is okay and avoid blaming anyone.', score: 'green' },
            { text: 'I step back, analyze the data, and find the logical root cause.', score: 'blue' }
        ]},
        { category: 'Communication', text: 'If someone is pitching an idea to you, what is the fastest way for them to lose your attention?', context: 'What annoys you most in a presentation?', options: [
            { text: 'Taking too long to get to the bottom-line ROI.', score: 'red' },
            { text: 'Being too rigid, boring, and lacking enthusiasm.', score: 'yellow' },
            { text: 'Being aggressive, pushy, or ignoring the human impact.', score: 'green' },
            { text: 'Presenting ideas without hard data or factual proof.', score: 'blue' }
        ]},
        { category: 'Motivation', text: 'What primarily drives you to get out of bed on a Monday morning?', context: 'Your core internal driver.', options: [
            { text: 'Winning, achieving goals, and conquering challenges.', score: 'red' },
            { text: 'Excitement, new experiences, and being around people.', score: 'yellow' },
            { text: 'Helping others, deep connection, and creating stability.', score: 'green' },
            { text: 'Solving complex problems and mastering my craft.', score: 'blue' }
        ]},
        { category: 'Conflict', text: 'When someone directly challenges your work in a meeting, how do you respond?', context: 'Your conflict management style.', options: [
            { text: 'I push back immediately and aggressively defend my position.', score: 'red' },
            { text: 'I try to gloss over it or use humor to shift the tension.', score: 'yellow' },
            { text: 'I feel hurt, internalize it, and try to restore peace later.', score: 'green' },
            { text: 'I ask them for their data and methodically prove why I am right.', score: 'blue' }
        ]},
        { category: 'Decision Making', text: 'When making a major purchase (like a car), what is your process?', context: 'How you evaluate choices.', options: [
            { text: 'Fast. I know what I want and I execute the purchase immediately.', score: 'red' },
            { text: 'Impulsive. I buy what feels exciting and looks the best.', score: 'yellow' },
            { text: 'Cautious. I consult my family/friends to see what they think.', score: 'green' },
            { text: 'Analytical. I build a spreadsheet comparing specs, prices, and reviews.', score: 'blue' }
        ]}
    ];

    if (length === 'micro') return base;
    
    // Add 5 more for Medium
    base.push(
        { category: 'Work Environment', text: 'Which type of workspace do you thrive in?', context: '', options: [
            { text: 'Fast-paced, competitive, and highly driven.', score: 'red' },
            { text: 'Vibrant, open, loud, and highly collaborative.', score: 'yellow' },
            { text: 'Quiet, harmonious, and deeply supportive.', score: 'green' },
            { text: 'Structured, organized, private, and precise.', score: 'blue' }
        ]},
        { category: 'Leadership', text: 'As a leader, what is your primary focus?', context: '', options: [
            { text: 'Driving results and hitting targets at all costs.', score: 'red' },
            { text: 'Inspiring the vision and motivating the crowd.', score: 'yellow' },
            { text: 'Nurturing the well-being and growth of my team.', score: 'green' },
            { text: 'Creating flawless processes and high-quality standards.', score: 'blue' }
        ]}
    );
    return base;
}

function getApestQuestions(length) {
    const base = [
        { category: 'Core Passion', text: 'What breaks your heart the most when you look at an organization or a church?', context: '', options: [
            { text: 'That we are stagnant and not breaking new ground or starting new things.', score: 'apostle' },
            { text: 'That we are compromising truth and drifting from God\'s pure standard.', score: 'prophet' },
            { text: 'That people outside the walls don\'t know the message yet.', score: 'evangelist' },
            { text: 'That people inside the walls are hurting, lonely, or falling through the cracks.', score: 'shepherd' },
            { text: 'That people are scripturally illiterate and don\'t understand deep theology.', score: 'teacher' }
        ]},
        { category: 'Energy Source', text: 'Which of these activities gives you the most energy?', context: '', options: [
            { text: 'Architecting a brand new initiative from scratch.', score: 'apostle' },
            { text: 'Calling out injustice and confronting the status-quo.', score: 'prophet' },
            { text: 'Convincing someone to believe in the mission.', score: 'evangelist' },
            { text: 'Sitting 1-on-1 for hours counseling someone through a crisis.', score: 'shepherd' },
            { text: 'Studying complex concepts for hours to explain them simply.', score: 'teacher' }
        ]},
        { category: 'Conflict', text: 'How do you tend to handle relational conflict?', context: '', options: [
            { text: 'I ignore it if it gets in the way of building the vision.', score: 'apostle' },
            { text: 'I welcome it if it means unearthing the brutal truth.', score: 'prophet' },
            { text: 'I try to persuade everyone to just get on the same page.', score: 'evangelist' },
            { text: 'I prioritize healing the relationship above all else.', score: 'shepherd' },
            { text: 'I try to resolve it by analyzing who is objectively right.', score: 'teacher' }
        ]},
        { category: 'Blind Spot', text: 'If someone is going to critique you, what are they most likely to say?', context: 'Be honest.', options: [
            { text: '"You leave people behind while chasing the next big thing."', score: 'apostle' },
            { text: '"You are too intense, judgmental, and lack grace."', score: 'prophet' },
            { text: '"You care more about the crowd than individual depth."', score: 'evangelist' },
            { text: '"You hate conflict so much you let toxic behavior slide."', score: 'shepherd' },
            { text: '"You are too academic and disconnected from real life."', score: 'teacher' }
        ]},
        { category: 'Ideal Role', text: 'If you had to pick a role on a team, you would be the...', context: '', options: [
            { text: 'Entrepreneur / Founder', score: 'apostle' },
            { text: 'Agitator / Conscience', score: 'prophet' },
            { text: 'Marketer / Recruiter', score: 'evangelist' },
            { text: 'HR / Caretaker', score: 'shepherd' },
            { text: 'Systematizer / Researcher', score: 'teacher' }
        ]}
    ];
    if (length === 'micro') return base;
    base.push(
        { category: 'Legacy', text: 'In 20 years, what would make you feel you truly fulfilled your calling?', context: '', options: [
            { text: 'I planted and multiplied movements into unreached places.', score: 'apostle' },
            { text: 'I lived with uncompromised integrity and spoke truth regardless of cost.', score: 'prophet' },
            { text: 'Thousands came to faith through my direct influence.', score: 'evangelist' },
            { text: 'I discipled a generation of people who are now healthy and thriving.', score: 'shepherd' },
            { text: 'I produced resources that formed people in solid theological foundations.', score: 'teacher' }
        ]},
        { category: 'Challenge', text: 'What mission would you most want to tackle in the next season of your life?', context: '', options: [
            { text: 'Breaking into a completely new mission field or cultural context.', score: 'apostle' },
            { text: 'Calling a compromised institution back to its founding values.', score: 'prophet' },
            { text: 'Reaching a demographic or people group that no one is reaching yet.', score: 'evangelist' },
            { text: 'Building a community where the most broken people find deep healing.', score: 'shepherd' },
            { text: 'Creating theological education accessible to the global church.', score: 'teacher' }
        ]},
        { category: 'Shadow', text: 'When you are operating out of fear or insecurity, you tend to...', context: 'Deep reflection required.', options: [
            { text: 'Abandon ships early — start new things to avoid fixing broken ones.', score: 'apostle' },
            { text: 'Become harsh, self-righteous, and isolate from anyone who disagrees.', score: 'prophet' },
            { text: 'Become performative — collecting decisions for ego, not transformation.', score: 'evangelist' },
            { text: 'Enable broken behavior to avoid the hard conversation.', score: 'shepherd' },
            { text: 'Become condescending and intellectually arrogant toward simpler faith expressions.', score: 'teacher' }
        ]},
        { category: 'Reception', text: 'The best possible response to something you have delivered is...', context: '', options: [
            { text: 'They launched something new they were afraid to start.', score: 'apostle' },
            { text: 'They repented, made amends, and realigned their life with truth.', score: 'prophet' },
            { text: 'They brought 10 friends to hear it next time.', score: 'evangelist' },
            { text: 'They called months later to say they finally found healing.', score: 'shepherd' },
            { text: 'They said it was the clearest explanation they had ever heard.', score: 'teacher' }
        ]},
        { category: 'Motivation', text: 'What is the deepest reason you do what you do?', context: '', options: [
            { text: 'There is unexplored ground that needs to be taken and I cannot rest until it is.', score: 'apostle' },
            { text: 'Something deep in me cannot tolerate compromise of what I know to be true.', score: 'prophet' },
            { text: 'Every person who does not know the truth is someone I want to reach.', score: 'evangelist' },
            { text: 'People matter to me more than almost anything and I want them whole.', score: 'shepherd' },
            { text: 'I love truth itself and will spend my life helping others understand it.', score: 'teacher' }
        ]}
    );
    return base;
}

function getLogicQuestions() {
    return [
        { category: 'Pattern Recognition', text: 'What comes next in the sequence: 2, 6, 12, 20, 30, ?', context: 'Identify the mathematical progression.', options: [
            { text: '40', score: 0 }, { text: '42', score: 1 }, { text: '46', score: 0 }, { text: '50', score: 0 }
        ]},
        { category: 'Deduction', text: 'Some blips are blops. All blops are blaps. Therefore...', context: 'Formal logic.', options: [
            { text: 'All blips are blaps.', score: 0 },
            { text: 'Some blips are blaps.', score: 1 },
            { text: 'All blaps are blips.', score: 0 },
            { text: 'None of the above.', score: 0 }
        ]}
    ];
}

function getDiscQuestions(length) {
    const base = [
        { category: 'Pacing', text: 'When assigning tasks, you prefer people to...', context: '', options: [
            { text: 'Execute immediately. Don\'t overthink it.', score: 'D' },
            { text: 'Have fun with it and collaborate.', score: 'I' },
            { text: 'Take their time and ensure it is fully secure.', score: 'S' },
            { text: 'Analyze all the details and get it absolutely perfect.', score: 'C' }
        ]},
        { category: 'Environment', text: 'You feel most comfortable in an environment that is...', context: '', options: [
            { text: 'Challenging and outcome-focused.', score: 'D' },
            { text: 'Sociable, lively, and optimistic.', score: 'I' },
            { text: 'Predictable, calm, and harmonious.', score: 'S' },
            { text: 'Structured, analytical, and precise.', score: 'C' }
        ]},
        { category: 'Fears', text: 'Your biggest professional fear is...', context: '', options: [
            { text: 'Losing control or being taken advantage of.', score: 'D' },
            { text: 'Social rejection or loss of influence.', score: 'I' },
            { text: 'Sudden unpredictable changes.', score: 'S' },
            { text: 'Being criticized for incorrect data.', score: 'C' }
        ]},
        { category: 'Value', text: 'You bring the most value to a group by...', context: '', options: [
            { text: 'Driving results and breaking through obstacles.', score: 'D' },
            { text: 'Motivating people and generating enthusiasm.', score: 'I' },
            { text: 'Providing reliable support and listening.', score: 'S' },
            { text: 'Defining standards and ensuring high quality.', score: 'C' }
        ]},
        { category: 'Communication', text: 'When writing an email, you tend to...', context: '', options: [
            { text: 'Use bullet points. Be brief.', score: 'D' },
            { text: 'Use exclamation marks and emojis.', score: 'I' },
            { text: 'Start by asking how their weekend was.', score: 'S' },
            { text: 'Attach a spreadsheet and outline the exact methodology.', score: 'C' }
        ]}
    ];
    return base;
}

function getEnneagramQuestions(length) {
    const base = [
        { category: 'Core Motif', text: 'When entering a room full of strangers, what is your first internal thought?', context: '', options: [
            { text: 'Who is in charge here, and how do I assert myself? (Body/Gut)', score: 'body' },
            { text: 'How do people perceive me, and who do I need to connect with? (Heart/Feeling)', score: 'heart' },
            { text: 'What is happening, and how do I stay safe and figure this out? (Head/Thinking)', score: 'head' }
        ]},
        { category: 'Under Stress', text: 'When things go catastrophically wrong, your immediate reflex is to...', context: '', options: [
            { text: 'Get angry, take severe control, or numb out.', score: 'body' },
            { text: 'Feel deep shame, try to fix relationships, or perform to look good.', score: 'heart' },
            { text: 'Retreat to my mind, over-analyze, and plan for worst-case scenarios.', score: 'head' }
        ]},
        { category: 'Desire', text: 'Your deepest core desire is to...', context: '', options: [
            { text: 'Be autonomous, comfortable, and have integrity.', score: 'body' },
            { text: 'Be loved, valued, and find an authentic identity.', score: 'heart' },
            { text: 'Be secure, capable, and have guidance.', score: 'head' }
        ]}
    ];
    return base;
}

function getGiftsQuestions(length) {
    const base = [
        { category: 'Response', text: 'Someone in your community has suddenly lost their job. Your first instinct is to...', context: '', options: [
            { text: 'Call them to remind them of God\'s sovereignty and challenge their faith.', score: 'prophecy' },
            { text: 'Send them a check or buy them groceries immediately.', score: 'giving' },
            { text: 'Go sit with them, cry with them, and just listen.', score: 'mercy' },
            { text: 'Look at their resume and help them architect a strategy to get a new job.', score: 'leadership' },
            { text: 'Send them a book or scripture explaining the theology of suffering.', score: 'teaching' }
        ]},
        { category: 'Joy', text: 'You feel the most alive when you are...', context: '', options: [
            { text: 'Calling out sin or declaring truth boldly.', score: 'prophecy' },
            { text: 'Working behind the scenes setting up chairs or cooking meals.', score: 'serving' },
            { text: 'Reminding someone of their potential and cheering them on.', score: 'encouragement' },
            { text: 'Organizing a massive volunteer effort to get a project done.', score: 'leadership' },
            { text: 'Opening the Bible and dissecting the original Greek meaning.', score: 'teaching' }
        ]},
        { category: 'Frustration', text: 'You get most frustrated when...', context: '', options: [
            { text: 'People compromise on what is right.', score: 'prophecy' },
            { text: 'People refuse to help with the physical labor.', score: 'serving' },
            { text: 'People are pessimistic and refuse to see hope.', score: 'encouragement' },
            { text: 'People refuse to give generously.', score: 'giving' },
            { text: 'The organization has no vision or direction.', score: 'leadership' }
        ]}
    ];
    if (length === 'micro') return base;
    base.push(
        { category: 'Surplus', text: 'When you have surplus time, money, or energy, your instinct is to...', context: '', options: [
            { text: 'Find the person or community most in need and give it.', score: 'giving' },
            { text: 'Use it to create learning resources or teach someone.', score: 'teaching' },
            { text: 'Take care of a practical need no one else has addressed.', score: 'serving' },
            { text: 'Seek out the emotionally broken and sit with them.', score: 'mercy' },
            { text: 'Organize a community effort to address a systemic need.', score: 'leadership' }
        ]},
        { category: 'Gathering', text: 'When a group of people comes together, your natural role is...', context: '', options: [
            { text: 'The one who speaks what everyone is thinking but afraid to say.', score: 'prophecy' },
            { text: 'The one setting up the space and making everyone feel welcomed.', score: 'serving' },
            { text: 'The one who spots the discouraged person and goes straight to them.', score: 'encouragement' },
            { text: 'The one who makes sure the event finances are handled well.', score: 'giving' },
            { text: 'The one who steps up and leads when no one else will.', score: 'leadership' }
        ]},
        { category: 'Growth', text: 'What kind of growth in others excites you most?', context: '', options: [
            { text: 'Moral conviction and spiritual sharpness.', score: 'prophecy' },
            { text: 'Consistent faithfulness in serving without recognition.', score: 'serving' },
            { text: 'Renewed hope, courage, and resilience.', score: 'encouragement' },
            { text: 'Growing generosity and stewarding resources for the Kingdom.', score: 'giving' },
            { text: 'Mercy, compassion, and care for the most broken.', score: 'mercy' }
        ]},
        { category: 'Suffering', text: 'When you encounter someone in pain and suffering, your first response is...', context: '', options: [
            { text: 'Speak truth to them, even hard truth, to help them see clearly.', score: 'prophecy' },
            { text: 'Get busy meeting their practical needs immediately.', score: 'serving' },
            { text: 'Speak words of hope and tell them what God sees in them.', score: 'encouragement' },
            { text: 'Give whatever you have to help them materially.', score: 'giving' },
            { text: 'Sit quietly, enter their pain, and just weep with them.', score: 'mercy' }
        ]},
        { category: 'Community', text: 'Your ideal community looks like...', context: '', options: [
            { text: 'Courageous, honest, and uncompromising in its convictions.', score: 'prophecy' },
            { text: 'One where everyone serves and no one waits to be asked.', score: 'serving' },
            { text: 'Full of people who build each other up and never tear down.', score: 'encouragement' },
            { text: 'Radically generous and materially caring for the vulnerable.', score: 'giving' },
            { text: 'A refuge for the broken, messy, and overlooked.', score: 'mercy' }
        ]}
    );
    return base;
}

function getServantQuestions(length) {
    const base = [
        { category: 'Credit', text: 'When your team completes a massive project...', context: '', options: [
            { text: 'I deflect all praise to the team members individually.', score: 'humility' },
            { text: 'I focus on ensuring they feel emotionally validated.', score: 'empathy' },
            { text: 'I make sure the resources were managed efficiently.', score: 'stewardship' },
            { text: 'I immediately point them to the next horizon.', score: 'vision' }
        ]},
        { category: 'Crisis', text: 'When a team member makes a massive error...', context: '', options: [
            { text: 'I take the blame publicly on their behalf.', score: 'humility' },
            { text: 'I check on their mental health before discussing the error.', score: 'empathy' },
            { text: 'I review the systems protocols to see where we failed them.', score: 'stewardship' },
            { text: 'I re-align them to the core mission to get them back on track.', score: 'vision' }
        ]}
    ];
    if (length === 'micro') return base;
    base.push(
        { category: 'Decision', text: 'When making a major organizational decision, what matters most to you?', context: '', options: [
            { text: 'That my motives are genuinely pure and not self-serving.', score: 'humility' },
            { text: 'That no one is left collaterally damaged by the decision.', score: 'empathy' },
            { text: 'That we have the resources and processes to sustain it long term.', score: 'stewardship' },
            { text: 'That it moves us closer to the 5-year destination.', score: 'vision' }
        ]},
        { category: 'Feedback', text: 'When someone tells you that you have done something wrong, you...', context: '', options: [
            { text: 'Genuinely consider it without defensiveness. You want to be corrected.', score: 'humility' },
            { text: 'Try to understand how it made them feel before any defense.', score: 'empathy' },
            { text: 'Immediately review the processes and accountability systems in place.', score: 'stewardship' },
            { text: 'Ask whether this correction pulls us toward or away from the mission.', score: 'vision' }
        ]},
        { category: 'Investment', text: 'Where you invest most of your personal development time is...', context: '', options: [
            { text: 'Books and practices that keep me grounded and free from ego.', score: 'humility' },
            { text: 'Therapy, coaching, and EQ development so I can care for people better.', score: 'empathy' },
            { text: 'Operational skills, financial literacy, and systems improvement.', score: 'stewardship' },
            { text: 'Strategy, vision-setting, and long-range thinking frameworks.', score: 'vision' }
        ]},
        { category: 'Failure', text: 'When a project you led fails publicly, your immediate move is...', context: '', options: [
            { text: 'Own it completely and publicly without deflecting to anyone.', score: 'humility' },
            { text: 'Focus first on how the people on the team are feeling.', score: 'empathy' },
            { text: 'Conduct a complete post-mortem and close every operational gap.', score: 'stewardship' },
            { text: 'Re-cast the vision to help the team see failure as part of the journey.', score: 'vision' }
        ]},
        { category: 'Power', text: 'When you are given more authority or positional power, you...', context: '', options: [
            { text: 'Feel uncomfortable and work to distribute power broadly.', score: 'humility' },
            { text: 'Immediately think about who is most vulnerable and how to protect them.', score: 'empathy' },
            { text: 'Think about how to use it responsibly for long-term organizational health.', score: 'stewardship' },
            { text: 'See it as a vehicle to accelerate the vision and remove obstacles.', score: 'vision' }
        ]}
    );
    return base;
}

function getEqQuestions() {
    return [
        { category: 'Self-Regulation', text: 'A colleague takes credit for your idea in a meeting. You...', context: '', options: [
            { text: 'Publicly confront them immediately.', score: 0 },
            { text: 'Say nothing and harbor resentment.', score: 0 },
            { text: 'Make a passive aggressive comment.', score: 0 },
            { text: 'Maintain composure, and address it with them privately later.', score: 100 }
        ]},
        { category: 'Empathy', text: 'An employee\'s performance drops suddenly. You...', context: '', options: [
            { text: 'Put them on a Performance Improvement Plan.', score: 0 },
            { text: 'Tell them to work harder.', score: 0 },
            { text: 'Ask them what is going on in their personal life.', score: 100 },
            { text: 'Ignore it and hope it improves.', score: 0 }
        ]}
    ];
}

function getStrategyQuestions() {
    return [
        { category: 'The Launch', text: 'You have a product that is 80% complete. You...', context: '', options: [
            { text: 'Ship it immediately and fix bugs later.', score: 'action' },
            { text: 'Wait until it is 100% perfect before releasing.', score: 'optimization' }
        ]},
        { category: 'The Meeting', text: 'After a 2-hour strategic planning meeting, you feel...', context: '', options: [
            { text: 'Frustrated that we didn\'t just start building.', score: 'action' },
            { text: 'Relieved that we finally have a comprehensive roadmap.', score: 'optimization' }
        ]}
    ];
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
                <button class="answer-option" onclick="selectAnswer(${i}, ${serializeScore(opt.score)})">
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
    if (!opts || opts.length === 0) {
        console.error('[RAB] selectAnswer: No .answer-option elements found in DOM');
        return;
    }
    if (!opts[index]) {
        console.error('[RAB] selectAnswer: No element at index', index);
        return;
    }
    opts.forEach(o => o.classList.remove('selected'));
    opts[index].classList.add('selected');
    answers[currentQuestion] = { index, score };
    const nextBtn = document.getElementById('btn-next-q');
    if (nextBtn) nextBtn.disabled = false;
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
        const isWhimsical = ['family', 'vacation', 'marriage', 'house'].includes(selectedDecision);
        if (isWhimsical) {
            promptVictoryLap();
        } else {
            calculateResults();
        }
    }
}

function promptVictoryLap() {
    switchView('step-victory-lap');
}

function skipVictoryLap() {
    victoryLapData = null;
    calculateResults();
}

function submitVictoryLap() {
    const win1 = document.getElementById('vl-win-1').value;
    const win2 = document.getElementById('vl-win-2').value;
    victoryLapData = { win1, win2 };
    
    // Track Analytics silently
    if (assessmentId) {
        sb.from('leap_assessments')
          .update({ victory_lap_taken: true })
          .eq('id', assessmentId)
          .then(() => console.log('Victory lap tracked.'));
    }

    calculateResults();
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

    if (selectedFramework === 'insights') {
        results = calculateInsights(questions);
    } else if (selectedFramework === 'disc') {
        results = calculateDisc(questions);
    } else if (selectedFramework === 'enneagram') {
        results = calculateEnneagram(questions);
    } else if (selectedFramework === 'apest') {
        results = calculateApest(questions);
    } else if (selectedFramework === 'gifts') {
        results = calculateGifts(questions);
    } else if (selectedFramework === 'servant') {
        results = calculateServant(questions);
    } else if (selectedFramework === 'mbti') {
        results = calculateMbti(questions);
    } else if (selectedFramework === 'strengths') {
        results = calculateStrengths(questions);
    } else if (selectedFramework === 'cognitive_bias') {
        results = calculateCognitiveBias(questions);
    } else if (selectedFramework === 'kingdom_mountain') {
        results = calculateKingdomMountain(questions);
    } else if (selectedFramework === 'shape') {
        results = calculateShape(questions);
    } else if (selectedFramework === 'spiritual_formation') {
        results = calculateSpiritualFormation(questions);
    } else if (selectedFramework === 'logic') {
        results = calculateLogic(questions);
    } else if (selectedFramework === 'eq') {
        results = calculateEq(questions);
    } else if (selectedFramework === 'strategy') {
        results = calculateStrategy(questions);
    } else if (selectedFramework === 'growth_mindset') {
        results = calculateGrowthMindset(questions);
    } else if (selectedFramework === 'decision_fatigue') {
        results = calculateDecisionFatigue(questions);
    } else if (selectedFramework === 'mental_toughness') {
        results = calculateMentalToughness(questions);
    } else if (selectedFramework === 'leadership_style') {
        results = calculateLeadershipStyle(questions);
    } else if (selectedFramework === 'situational') {
        results = calculateSituational(questions);
    } else if (selectedFramework === 'conflict_resolution') {
        results = calculateConflictResolution(questions);
    } else if (selectedFramework === 'team_role') {
        results = calculateTeamRole(questions);
    } else if (selectedFramework === 'power_dynamics') {
        results = calculatePowerDynamics(questions);
    } else if (selectedFramework === 'leadership_ei') {
        results = calculateLeadershipEi(questions);
    } else if (selectedFramework === 'love_languages') {
        results = calculateLoveLanguages(questions);
    } else if (selectedFramework === 'appreciation_work') {
        results = calculateAppreciationWork(questions);
    } else if (selectedFramework === 'attachment') {
        results = calculateAttachment(questions);
    } else if (selectedFramework === 'gottman') {
        results = calculateGottman(questions);
    } else if (selectedFramework === 'relational_needs') {
        results = calculateRelationalNeeds(questions);
    } else if (selectedFramework === 'communication_style') {
        results = calculateCommunicationStyle(questions);
    } else if (selectedFramework === 'swot') {
        results = calculateSWOT(questions);
    } else if (selectedFramework === 'risk_reward') {
        results = calculateRiskReward(questions);
    } else if (selectedFramework === 'decision_matrix') {
        results = calculateDecisionMatrix(questions);
    }

    // Save to Supabase
    try {
        const { data } = await sb.from('leap_assessments').insert({
            decision_type: selectedDecision || selectedDomain,
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

function calculateInsights(questions) {
    const scores = { red: 0, yellow: 0, green: 0, blue: 0 };
    answers.forEach(a => { if (a && a.score) scores[a.score]++; });
    
    let primary = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    let total = answers.length;
    let overall = Math.round((scores[primary] / total) * 100);

    return { 
        type: 'insights', 
        scores, 
        overallScore: overall, 
        verdict: primary.toUpperCase() + ' DOMINANT', 
        recommendation: 'Based on your answers, this is your primary behavioral energy profile.' 
    };
}

function calculateApest(questions) {
    const scores = { apostle: 0, prophet: 0, evangelist: 0, shepherd: 0, teacher: 0 };
    answers.forEach(a => { if (a && a.score) scores[a.score]++; });
    
    let primary = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    let overall = Math.round((scores[primary] / answers.length) * 100);

    return { 
        type: 'apest', 
        scores, 
        overallScore: overall, 
        verdict: primary.toUpperCase(), 
        recommendation: 'This represents your primary theological wiring and organizational calling.' 
    };
}

function calculateLogic(questions) {
    let score = 0;
    answers.forEach(a => { if (a && a.score) score += a.score; });
    let overall = Math.round((score / answers.length) * 100);
    return { 
        type: 'logic', 
        overallScore: overall, 
        verdict: overall >= 80 ? 'Elite Logic' : 'Standard', 
        recommendation: 'Your tactical deduction capability.' 
    };
}

function calculateDisc(questions) {
    const scores = { D: 0, I: 0, S: 0, C: 0 };
    answers.forEach(a => { if (a && a.score) scores[a.score]++; });
    let primary = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    let overall = Math.round((scores[primary] / answers.length) * 100);
    return { type: 'disc', scores, overallScore: overall, verdict: primary + ' QUADRANT', recommendation: 'Your primary DISC behavior.' };
}

function calculateEnneagram(questions) {
    const scores = { heart: 0, head: 0, body: 0 };
    answers.forEach(a => { if (a && a.score) scores[a.score]++; });
    let primary = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    let overall = Math.round((scores[primary] / answers.length) * 100);
    return { type: 'enneagram', scores, overallScore: overall, verdict: primary.toUpperCase() + ' TRIAD', recommendation: 'Core Enneagram Motivation.' };
}

function calculateGifts(questions) {
    const scores = { prophecy: 0, serving: 0, encouragement: 0, giving: 0, leadership: 0, mercy: 0, teaching: 0 };
    answers.forEach(a => { if (a && a.score) scores[a.score]++; });
    let primary = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    let overall = Math.round((scores[primary] / answers.length) * 100);
    return { type: 'gifts', scores, overallScore: overall, verdict: primary.toUpperCase(), recommendation: 'Primary Spiritual Gift.' };
}

function calculateServant(questions) {
    const scores = { humility: 0, empathy: 0, stewardship: 0, vision: 0 };
    answers.forEach(a => { if (a && a.score) scores[a.score]++; });
    let primary = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    let overall = Math.round((scores[primary] / answers.length) * 100);
    return { type: 'servant', scores, overallScore: overall, verdict: primary.toUpperCase(), recommendation: 'Strongest Servant Leadership trait.' };
}

function calculateEq(questions) {
    let score = 0;
    answers.forEach(a => { if (a && a.score) score += a.score; });
    let overall = answers.length ? Math.round((score / answers.length)) : 0;
    return { type: 'eq', overallScore: overall, verdict: overall >= 80 ? 'High EQ' : 'Development Needed', recommendation: 'Emotional Intelligence Baseline.' };
}

function calculateStrategy(questions) {
    const scores = { action: 0, optimization: 0 };
    answers.forEach(a => { if (a && a.score) scores[a.score]++; });
    let primary = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    let overall = Math.round((scores[primary] / answers.length) * 100);
    return { type: 'strategy', scores, overallScore: overall, verdict: primary.toUpperCase() + ' BIAS', recommendation: 'Strategic Execution Tendency.' };
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
    let aiScript = generateLeapAiInsights(results);

    let html = `
        <div class="result-hero" style="position:relative; overflow:hidden;">
            <div style="position:absolute; top:-20px; right:-20px; width:150px; height:150px; background:radial-gradient(circle, var(--teal) 0%, transparent 70%); opacity:0.1; filter:blur(10px);"></div>
            <div class="result-score">${results.overallScore}</div>
            <div class="result-verdict">${results.verdict}</div>
            <div class="result-desc">${results.recommendation}</div>
        </div>

        <!-- ── Sentinel AI Briefing ── -->
        <div class="result-card" style="margin-bottom: 2rem; border: 1px solid rgba(139, 92, 246, 0.4); background: rgba(139, 92, 246, 0.05);">
            <div style="display:flex; align-items:center; gap:0.5rem; color:var(--violet); font-size:0.875rem; text-transform:uppercase; letter-spacing:0.1em; font-weight:600; margin-bottom:1rem;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"></path><path d="M12 12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2z"></path><line x1="3" y1="10" x2="3" y2="14"></line><line x1="21" y1="10" x2="21" y2="14"></line><line x1="7" y1="6" x2="7" y2="18"></line><line x1="17" y1="6" x2="17" y2="18"></line></svg>
                AI Decision Analyst
            </div>
            <div style="font-size:1.05rem; line-height:1.6; color:var(--text-primary); font-style:italic;">
                ${aiScript}
            </div>
        </div>
    `;

    if (results.type === 'swot') html += renderSWOTResults(results);
    if (results.type === 'risk_reward') html += renderRiskRewardResults(results);
    if (results.type === 'decision_matrix') html += renderDecisionMatrixResults(results);
    if (results.type === 'insights') html += renderInsightsResults(results);
    if (results.type === 'apest') html += renderApestResults(results);
    if (results.type === 'logic') html += renderLogicResults(results);
    if (results.type === 'disc') html += renderDiscResults(results);
    if (results.type === 'enneagram') html += renderEnneagramResults(results);
    if (results.type === 'gifts') html += renderGiftsResults(results);
    if (results.type === 'servant') html += renderServantResults(results);
    if (results.type === 'eq') html += renderEqResults(results);
    if (results.type === 'strategy') html += renderStrategyResults(results);
    if (results.type === 'mbti') html += renderMbtiResults(results);
    if (results.type === 'strengths') html += renderStrengthsResults(results);
    if (results.type === 'cognitive_bias') html += renderCognitiveBiasResults(results);
    if (results.type === 'kingdom_mountain') html += renderKingdomMountainResults(results);
    if (results.type === 'shape') html += renderShapeResults(results);
    if (results.type === 'spiritual_formation') html += renderSpiritualFormationResults(results);
    if (results.type === 'growth_mindset') html += renderGrowthMindsetResults(results);
    if (results.type === 'decision_fatigue') html += renderDecisionFatigueResults(results);
    if (results.type === 'mental_toughness') html += renderMentalToughnessResults(results);
    if (results.type === 'leadership_style') html += renderLeadershipStyleResults(results);
    if (results.type === 'situational') html += renderSituationalResults(results);
    if (results.type === 'conflict_resolution') html += renderConflictResolutionResults(results);
    if (results.type === 'team_role') html += renderTeamRoleResults(results);
    if (results.type === 'power_dynamics') html += renderPowerDynamicsResults(results);
    if (results.type === 'leadership_ei') html += renderLeadershipEiResults(results);
    if (results.type === 'love_languages') html += renderLoveLanguagesResults(results);
    if (results.type === 'appreciation_work') html += renderAppreciationWorkResults(results);
    if (results.type === 'attachment') html += renderAttachmentResults(results);
    if (results.type === 'gottman') html += renderGottmanResults(results);
    if (results.type === 'relational_needs') html += renderRelationalNeedsResults(results);
    if (results.type === 'communication_style') html += renderCommunicationStyleResults(results);

    // Brag Receipt
    if (victoryLapData) {
        const decisionLabel = {
            family: 'Growing the Family',
            vacation: 'The Big Trip',
            house: 'A New Home',
            marriage: 'Getting Married'
        }[selectedDecision] || 'This Leap';

        html += `
            <div class="brag-receipt" id="brag-receipt">
                <h3>Achievement Unlocked</h3>
                <div class="brag-equation">
                    <div class="brag-item">${victoryLapData.win1}</div>
                    <div class="brag-plus">+</div>
                    <div class="brag-item">${victoryLapData.win2}</div>
                    <div class="brag-equals">=</div>
                    <div class="brag-result">${decisionLabel}</div>
                </div>
                <div class="brag-footer">Validated by RAB Framework | Leap Score</div>
            </div>
            <div style="text-align:center;margin-bottom:2rem;">
                <button class="btn btn-primary" onclick="downloadBragReceipt()" style="background:var(--teal);color:#fff;">Download Infographic</button>
            </div>
        `;
    }

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
        if (results.type === 'insights') renderInsightsChart(results);
        if (results.type === 'apest') renderApestChart(results);
        if (results.type === 'disc') renderDiscChart(results);
        if (results.type === 'enneagram') renderEnneagramChart(results);
        if (results.type === 'gifts') renderGiftsChart(results);
        if (results.type === 'servant') renderServantChart(results);
        if (results.type === 'strategy') renderStrategyChart(results);
        if (results.type === 'mbti') renderMbtiChart(results);
        if (results.type === 'strengths') renderStrengthsChart(results);
        if (results.type === 'cognitive_bias') renderCognitiveBiasChart(results);
        if (results.type === 'kingdom_mountain') renderKingdomMountainChart(results);
        if (results.type === 'spiritual_formation') renderSpiritualFormationChart(results);
        if (results.type === 'growth_mindset') renderGrowthMindsetChart(results);
        if (results.type === 'decision_fatigue') renderDecisionFatigueChart(results);
        if (results.type === 'mental_toughness') renderMentalToughnessChart(results);
        if (results.type === 'leadership_style') renderLeadershipStyleChart(results);
        if (results.type === 'situational') renderSituationalChart(results);
        if (results.type === 'conflict_resolution') renderConflictResolutionChart(results);
        if (results.type === 'team_role') renderTeamRoleChart(results);
        if (results.type === 'power_dynamics') renderPowerDynamicsChart(results);
        if (results.type === 'leadership_ei') renderLeadershipEiChart(results);
        if (results.type === 'love_languages') renderLoveLanguagesChart(results);
        if (results.type === 'appreciation_work') renderAppreciationWorkChart(results);
        if (results.type === 'attachment') renderAttachmentChart(results);
        if (results.type === 'gottman') renderGottmanChart(results);
        if (results.type === 'relational_needs') renderRelationalNeedsChart(results);
        if (results.type === 'communication_style') renderCommunicationStyleChart(results);
    }, 200);
}

function getProfileData(type, key) {
    if (!PROFILES[type] || !PROFILES[type][key]) return null;
    return PROFILES[type][key];
}

function renderProfileCard(profile, accent) {
    if (!profile) return '';
    const color = accent || 'var(--teal)';
    return `
        <div class="result-card" style="margin-bottom:1.25rem; border-color: ${color}30;">
            <div style="display:flex; align-items:center; gap:0.75rem; margin-bottom:1rem;">
                <div style="font-size:2rem;">${profile.emoji}</div>
                <div>
                    <div style="font-size:1.25rem; font-weight:800; color:${color}; font-family:var(--font-display);">${profile.title}</div>
                    <div style="font-size:0.875rem; color:var(--text-secondary); font-style:italic;">${profile.tagline}</div>
                </div>
            </div>
            <p style="font-size:0.9rem; line-height:1.7; color:var(--text-secondary); margin-bottom:1.5rem;">${profile.description}</p>

            <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem; margin-bottom:1.25rem;">
                <div style="background:rgba(34,197,94,0.06); border:1px solid rgba(34,197,94,0.15); border-radius:var(--radius-sm); padding:1rem;">
                    <div style="font-size:0.6875rem; text-transform:uppercase; letter-spacing:0.08em; color:var(--green); font-weight:700; margin-bottom:0.625rem;">⚡ Core Strengths</div>
                    <ul style="list-style:none; padding:0; margin:0;">
                        ${profile.strengths.map(s => `<li style="font-size:0.8125rem; color:var(--text-secondary); padding:0.25rem 0; border-bottom:1px solid rgba(34,197,94,0.08);">${s}</li>`).join('')}
                    </ul>
                </div>
                <div style="background:rgba(239,68,68,0.06); border:1px solid rgba(239,68,68,0.15); border-radius:var(--radius-sm); padding:1rem;">
                    <div style="font-size:0.6875rem; text-transform:uppercase; letter-spacing:0.08em; color:var(--red); font-weight:700; margin-bottom:0.625rem;">⚠️ Watch Out For</div>
                    <ul style="list-style:none; padding:0; margin:0;">
                        ${profile.watchouts.map(w => `<li style="font-size:0.8125rem; color:var(--text-secondary); padding:0.25rem 0; border-bottom:1px solid rgba(239,68,68,0.08);">${w}</li>`).join('')}
                    </ul>
                </div>
            </div>

            <div style="background:rgba(20,184,166,0.06); border:1px solid rgba(20,184,166,0.15); border-radius:var(--radius-sm); padding:1rem;">
                <div style="font-size:0.6875rem; text-transform:uppercase; letter-spacing:0.08em; color:var(--teal); font-weight:700; margin-bottom:0.75rem;">🎯 Your Next 3 Steps</div>
                <ol style="list-style:none; padding:0; margin:0; counter-reset:steps;">
                    ${profile.nextSteps.map((s, i) => `
                        <li style="font-size:0.8125rem; color:var(--text-secondary); padding:0.5rem 0; border-bottom:1px solid rgba(20,184,166,0.08); display:flex; gap:0.75rem; align-items:flex-start;">
                            <span style="background:var(--teal); color:#fff; border-radius:50%; width:22px; height:22px; min-width:22px; display:flex; align-items:center; justify-content:center; font-size:0.625rem; font-weight:800;">${i+1}</span>
                            <span>${s}</span>
                        </li>
                    `).join('')}
                </ol>
            </div>
        </div>
    `;
}

function renderInsightsResults(r) {
    const sorted = Object.keys(r.scores).sort((a, b) => r.scores[b] - r.scores[a]);
    const primary = sorted[0];
    const secondary = sorted[1];
    const primaryProfile = getProfileData('insights', primary);
    const secondaryProfile = getProfileData('insights', secondary);
    const colorMap = { red: 'var(--red)', yellow: 'var(--amber)', green: 'var(--green)', blue: 'var(--blue)' };
    const labelMap = { red: 'Fiery Red', yellow: 'Sunshine Yellow', green: 'Earth Green', blue: 'Cool Blue' };
    const showSecondary = r.scores[secondary] >= 1 && (r.scores[primary] - r.scores[secondary]) <= 2;
    const blendNote = showSecondary ? `
        <div class="result-card" style="margin-bottom:1.25rem; border-color:var(--amber)30; background:rgba(245,158,11,0.04);">
            <div style="font-size:0.7rem; text-transform:uppercase; letter-spacing:0.08em; color:var(--amber); font-weight:700; margin-bottom:0.5rem;">BLEND DETECTED</div>
            <p style="font-size:0.875rem; color:var(--text-secondary); margin:0;">Your <strong style="color:${colorMap[primary]};">${labelMap[primary]}</strong> primary is closely paired with a strong <strong style="color:${colorMap[secondary]};">${labelMap[secondary]}</strong> secondary — only ${r.scores[primary] - r.scores[secondary]} point${r.scores[primary] - r.scores[secondary] !== 1 ? 's' : ''} apart. You operate as a <strong>${labelMap[primary]}/${labelMap[secondary]} blend</strong>. Read both profiles below — both shape how you show up.</p>
        </div>` : '';
    return `
        <div class="result-grid" style="margin-bottom:1.25rem;">
            ${sorted.map((k, idx) => `
                <div class="result-card" style="border-color:${idx === 0 ? colorMap[k] : idx === 1 ? colorMap[k]+'80' : 'var(--border)'};">
                    <h4 style="color:${colorMap[k]};">${labelMap[k]}</h4>
                    <p style="font-size:2rem;font-weight:800;color:${colorMap[k]};">${r.scores[k]}</p>
                    <p style="font-size:0.75rem;color:${idx===0 ? colorMap[k] : 'var(--text-dim)'};">${idx===0 ? 'Primary' : idx===1 ? 'Secondary' : ''}</p>
                </div>
            `).join('')}
        </div>
        <div class="chart-card" style="margin-bottom:1.25rem;"><h4>Color Energy Profile</h4><canvas id="insights-chart"></canvas></div>
        ${blendNote}
        ${renderProfileCard(primaryProfile, colorMap[primary])}
        ${showSecondary ? '<div style="margin-top:0.5rem; padding:0.5rem 0; border-top:1px solid var(--border);"><p style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.08em; color:var(--text-dim); font-weight:700; margin-bottom:0.75rem;">SECONDARY PROFILE</p></div>' + renderProfileCard(secondaryProfile, colorMap[secondary]) : ''}
    `;
}

function renderApestResults(r) {
    const sorted = Object.keys(r.scores).sort((a, b) => r.scores[b] - r.scores[a]);
    const primary = sorted[0];
    const secondary = sorted[1];
    const labelMap = { apostle: 'Apostle', prophet: 'Prophet', evangelist: 'Evangelist', shepherd: 'Shepherd', teacher: 'Teacher' };
    const primaryProfile = getProfileData('apest', primary);
    const secondaryProfile = getProfileData('apest', secondary);
    const gap = r.scores[primary] - r.scores[secondary];
    const showSecondary = r.scores[secondary] >= 1 && gap <= 2;
    const blendNote = showSecondary ? `
        <div class="result-card" style="margin-bottom:1.25rem; border-color:var(--coral)30; background:rgba(249,115,22,0.04);">
            <div style="font-size:0.7rem; text-transform:uppercase; letter-spacing:0.08em; color:var(--coral); font-weight:700; margin-bottom:0.5rem;">DUAL CALLING DETECTED</div>
            <p style="font-size:0.875rem; color:var(--text-secondary); margin:0;">Your <strong style="color:var(--teal);">${labelMap[primary]}</strong> primary and <strong style="color:var(--coral);">${labelMap[secondary]}</strong> secondary are only ${gap} point${gap !== 1 ? 's' : ''} apart. This is a <strong>${labelMap[primary]}/${labelMap[secondary]} blend</strong> — an uncommon and powerful combination. Both profiles define your calling. Read both deeply.</p>
        </div>` : '';
    return `
        <div class="result-grid" style="margin-bottom:1.25rem;">
            ${sorted.map((k, idx) => `
                <div class="result-card" style="border-color:${idx === 0 ? 'var(--teal)' : idx === 1 && showSecondary ? 'var(--coral)' : 'var(--border)'};">
                    <h4 style="text-transform:capitalize; color:${idx===0 ? 'var(--teal)' : idx===1 && showSecondary ? 'var(--coral)' : 'var(--text-secondary)'};">${labelMap[k]}</h4>
                    <p style="font-size:1.75rem;font-weight:800;color:${idx===0 ? 'var(--teal)' : idx===1 && showSecondary ? 'var(--coral)' : 'var(--text-dim)'};">${r.scores[k]}</p>
                    <p style="font-size:0.7rem;color:${idx===0 ? 'var(--teal)' : idx===1 && showSecondary ? 'var(--coral)' : 'var(--text-dim)'};">${idx===0 ? 'Primary' : idx===1 ? 'Secondary' : ''}</p>
                </div>
            `).join('')}
        </div>
        <div class="chart-card" style="margin-bottom:1.25rem;"><h4>Calling Matrix</h4><canvas id="apest-chart"></canvas></div>
        ${blendNote}
        ${renderProfileCard(primaryProfile, 'var(--teal)')}
        ${showSecondary ? '<div style="margin-top:0.5rem; padding:0.5rem 0; border-top:1px solid var(--border);"><p style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.08em; color:var(--coral); font-weight:700; margin-bottom:0.75rem;">SECONDARY CALLING</p></div>' + renderProfileCard(secondaryProfile, 'var(--coral)') : ''}
    `;
}

function renderLogicResults(r) {
    const tier = r.overallScore >= 80 ? {label:'Elite Tactical Thinker', color:'var(--teal)', desc:'You operate in the top percentile of pattern recognition and logical deduction under pressure. This indicates exceptional analytical capacity — the baseline of elite operators, strategists, and commanders.'} :
                 r.overallScore >= 60 ? {label:'Above Average Logic', color:'var(--blue)', desc:'Your deductive reasoning is solid. You catch patterns that most people miss and you can follow complex logical chains. With targeted practice, you can move into the elite tier.'} :
                 {label:'Developing Logic Muscle', color:'var(--amber)', desc:'Your current deductive baseline has significant room for development. This is a trainable skill — consistent exposure to logic puzzles, strategic games, and structured problem-solving will move this score meaningfully.'};
    return `
        <div class="result-card" style="margin-bottom:1.25rem; border-color:${tier.color}30;">
            <div style="text-align:center; padding:1rem 0;">
                <div style="font-size:4rem; font-weight:900; color:${tier.color};">${r.overallScore}%</div>
                <div style="font-size:1.1rem; font-weight:700; color:${tier.color}; margin-bottom:0.5rem;">${tier.label}</div>
                <p style="font-size:0.875rem; color:var(--text-secondary); max-width:500px; margin:0 auto;">${tier.desc}</p>
            </div>
        </div>
        <div class="result-card" style="margin-bottom:1.25rem;">
            <div style="font-size:0.6875rem; text-transform:uppercase; letter-spacing:0.08em; color:var(--teal); font-weight:700; margin-bottom:1rem;">🎯 How to Develop This Muscle</div>
            <ul style="list-style:none; padding:0; margin:0;">
                ${['Spend 10 minutes per day on logic puzzles — BrainBashers.com or chess.com puzzles are ideal',
                   'Practice first-principles thinking: strip all assumptions from your top 3 active problems',
                   'Read: "Thinking, Fast and Slow" by Daniel Kahneman — understanding how your brain actually processes information',
                   'Debrief every major decision 30 days later: was your logic correct? where did emotion override reason?'].map(s =>
                    `<li style="font-size:0.8125rem; color:var(--text-secondary); padding:0.5rem 0; border-bottom:1px solid var(--border);">${s}</li>`
                ).join('')}
            </ul>
        </div>
    `;
}

function renderDiscResults(r) {
    const primary = Object.keys(r.scores).reduce((a, b) => r.scores[a] > r.scores[b] ? a : b);
    const profile = getProfileData('disc', primary);
    const colorMap = { D: 'var(--red)', I: 'var(--amber)', S: 'var(--green)', C: 'var(--blue)' };
    const labelMap = { D: 'Dominance', I: 'Influence', S: 'Steadiness', C: 'Conscientiousness' };
    return `
        <div class="result-grid" style="margin-bottom:1.25rem;">
            ${Object.entries(r.scores).map(([k,v]) => `
                <div class="result-card" style="${k===primary ? 'border-color:'+colorMap[k]+';' : ''}">
                    <h4 style="color:${colorMap[k]};">${labelMap[k]}</h4>
                    <p style="font-size:2rem;font-weight:800;color:${colorMap[k]};">${v}</p>
                </div>
            `).join('')}
        </div>
        <div class="chart-card" style="margin-bottom:1.25rem;"><h4>Behavioral Map</h4><canvas id="disc-chart"></canvas></div>
        ${renderProfileCard(profile, colorMap[primary])}
    `;
}

function renderEnneagramResults(r) {
    const primary = Object.keys(r.scores).reduce((a, b) => r.scores[a] > r.scores[b] ? a : b);
    const profile = getProfileData('enneagram', primary);
    const colorMap = { heart: 'var(--red)', head: 'var(--blue)', body: 'var(--amber)' };
    return `
        <div class="result-grid" style="margin-bottom:1.25rem;">
            ${Object.entries(r.scores).map(([k,v]) => `
                <div class="result-card" style="${k===primary ? 'border-color:'+colorMap[k]+';' : ''}">
                    <h4 style="text-transform:capitalize; color:${colorMap[k]};">${k} Triad</h4>
                    <p style="font-size:2rem;font-weight:800;color:${colorMap[k]};">${v}</p>
                </div>
            `).join('')}
        </div>
        <div class="chart-card" style="margin-bottom:1.25rem;"><h4>Triad Balance</h4><canvas id="enneagram-chart"></canvas></div>
        ${renderProfileCard(profile, colorMap[primary])}
    `;
}

function renderGiftsResults(r) {
    const primary = Object.keys(r.scores).reduce((a, b) => r.scores[a] > r.scores[b] ? a : b);
    const profile = getProfileData('gifts', primary);
    return `
        <div class="chart-card" style="margin-bottom:1.25rem;"><h4>Gift Distribution</h4><canvas id="gifts-chart"></canvas></div>
        ${renderProfileCard(profile, 'var(--violet)')}
    `;
}

function renderServantResults(r) {
    const primary = Object.keys(r.scores).reduce((a, b) => r.scores[a] > r.scores[b] ? a : b);
    const profile = getProfileData('servant', primary);
    return `
        <div class="chart-card" style="margin-bottom:1.25rem;"><h4>Character Index</h4><canvas id="servant-chart"></canvas></div>
        ${renderProfileCard(profile, 'var(--amber)')}
    `;
}

function renderEqResults(r) {
    const key = r.overallScore >= 80 ? 'high' : 'developing';
    const profile = getProfileData('eq', key);
    const color = r.overallScore >= 80 ? 'var(--green)' : r.overallScore >= 50 ? 'var(--amber)' : 'var(--red)';
    return `
        <div class="result-card" style="text-align:center; margin-bottom:1.25rem; border-color:${color}30;">
            <div style="font-size:4rem; font-weight:900; color:${color};">${r.overallScore}%</div>
            <div style="font-size:0.875rem; color:var(--text-secondary);">EQ Baseline Score</div>
        </div>
        ${renderProfileCard(profile, color)}
    `;
}

function renderStrategyResults(r) {
    const primary = Object.keys(r.scores).reduce((a, b) => r.scores[a] > r.scores[b] ? a : b);
    const profile = getProfileData('strategy', primary);
    const secondary = primary === 'action' ? 'optimization' : 'action';
    return `
        <div class="result-grid" style="margin-bottom:1.25rem;">
            <div class="result-card" style="${primary==='action' ? 'border-color:var(--red);' : ''}">
                <h4 style="color:var(--red);">Action Bias</h4>
                <p style="font-size:2rem;font-weight:800;color:var(--red);">${r.scores.action}</p>
            </div>
            <div class="result-card" style="${primary==='optimization' ? 'border-color:var(--blue);' : ''}">
                <h4 style="color:var(--blue);">Optimization Bias</h4>
                <p style="font-size:2rem;font-weight:800;color:var(--blue);">${r.scores.optimization}</p>
            </div>
        </div>
        <div class="chart-card" style="margin-bottom:1.25rem;"><h4>Strategy vs Action Split</h4><canvas id="strategy-chart"></canvas></div>
        ${renderProfileCard(profile, primary === 'action' ? 'var(--red)' : 'var(--blue)')}
    `;
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

function generateLeapAiInsights(r) {
    if (r.type === 'swot') {
        if (r.scores.threats > r.scores.strengths) {
            return `<strong>Warning:</strong> Your external threat multiplier (${r.scores.threats}%) is actively eclipsing your internal strengths (${r.scores.strengths}%). Do not make this leap until you have secured an aggressive mitigation plan or emergency runway.`;
        } else if (r.scores.opportunities > 80) {
            return `<strong>Greenlight:</strong> The external opportunity math is overwhelming (${r.scores.opportunities}%). Combine this with your internal strengths framework, and the cost of inaction is actually much higher than the risk of failure.`;
        }
        return `The foundational math suggests a moderate environment. Focus intensely on turning your current weaknesses into hard skillsets over the next 90 days before fully committing.`;
    } 
    
    if (r.type === 'risk_reward') {
        if (r.riskScore > 65) {
            return `<strong>Critical Flag:</strong> You are accepting an asymmetric risk profile (${r.riskScore}% risk load vs ${r.rewardScore}% potential). Mathematically, this is a dangerous transition. Pause operations immediately.`;
        } else if (r.rewardScore > 75 && r.riskScore < 40) {
            return `<strong>Optimal Asymmetry:</strong> You have isolated a highly asymmetric upside. Your reward ceiling (${r.rewardScore}%) vastly outpaces the downside risk (${r.riskScore}%). Execute immediately.`;
        }
        return `Your risk-to-reward ratio is operating inside standard deviation. It is safe to proceed, but expect moderate friction and require a 6-month resilience plan.`;
    }

    if (r.type === 'decision_matrix') {
        const delta = r.newScore - r.currentScore;
        if (delta > 20) {
            return `<strong>Urgent Direction:</strong> The data proves your current trajectory is failing your core priorities. The new path provides a massive +${delta}% alignment jump. The transition friction is entirely justified.`;
        } else if (delta < 0) {
            return `<strong>Illusion Warning:</strong> The "shiny object syndrome" is active. Based on your raw, weighted priorities, taking this leap actively damages what you care about most by ${Math.abs(delta)}%. Stay the course.`;
        }
        return `The analytical delta between these two paths is statistically negligible (${Math.abs(delta)}%). You must optimize your current path first before absorbing the massive disruption cost of a transition.`;
    }

    if (r.type === 'disc') {
        if (r.verdict === 'D') return `<strong>High Dominance Alert:</strong> Your relentless drive for results often leaves collateral damage. You must force yourself to pause and build consensus, otherwise team burnout is statistically guaranteed.`;
        if (r.verdict === 'I') return `<strong>Influence Over-indexing:</strong> You are highly persuasive but significantly struggle with follow-through. You must hire or partner with a high-C operator immediately to execute your vision.`;
        return `<strong>Action Required:</strong> Over-indexing on stability or analysis can paralyze momentum. Establish forcing functions to ensure you actually execute instead of just planning.`;
    }

    if (r.type === 'enneagram') {
        if (r.verdict.includes('HEAD')) return `<strong>Analysis Paralysis:</strong> You retreat to logic and data when stressed. Your operational challenge is to take action with incomplete information. Stop researching and start executing.`;
        if (r.verdict.includes('HEART')) return `<strong>Validation Trap:</strong> You are modulating your identity based on external approval. You must decouple your self-worth from organizational performance. Learn to say no.`;
        if (r.verdict.includes('BODY')) return `<strong>Control Mechanism:</strong> When stressed, you default to force and anger. You must learn to surrender autonomy and trust decentralized leadership structures to scale effectively.`;
    }

    if (r.type === 'gifts') {
        if (r.verdict === 'PROPHECY' || r.verdict === 'TEACHING') return `<strong>Intellectual Arrogance Warning:</strong> Your ability to discern truth often lacks relational empathy. Do not deploy truth without a foundation of mercy, or you will isolate your congregation.`;
        if (r.verdict === 'MERCY' || r.verdict === 'SERVING') return `<strong>Burnout Protocol:</strong> You are carrying the emotional and physical weight of the entire organization. You must establish rigorous boundaries immediately or ministry collapse is imminent.`;
        return `<strong>Organizational Calling:</strong> Your baseline suggests structural and leadership capacities. Focus intensely on building systems and releasing others rather than doing the work yourself.`;
    }

    if (r.type === 'servant') {
        if (r.scores.empathy < 30) return `<strong>Critical EQ Failure:</strong> Your empathy score indicates a massive blind spot. You are managing resources, not leading people. If this continues, your turnover rate will skyrocket.`;
        if (r.scores.stewardship < 30) return `<strong>Operational Hemorrhaging:</strong> You cast great vision but fail to manage what you already have. Stop seeking new territory and optimize your current systems.`;
        return `<strong>Servant Anchor Strong:</strong> You exhibit strong foundational humility, but continue to audit your execution vector to ensure you aren't sacrificing vision for harmony.`;
    }

    if (r.type === 'eq') {
        if (r.overallScore < 50) return `<strong>Extreme Volatility Risk:</strong> Your emotional regulation metrics are critically low. Your inability to separate stimulus from reaction is currently the primary bottleneck of your own career. Seek active coaching.`;
        if (r.overallScore > 80) return `<strong>High Equilibrium:</strong> You possess elite emotional regulation. Leverage this by entering high-stress conflict mediation scenarios where others fail.`;
        return `<strong>Moderate EQ detected:</strong> You function adequately in standard environments but remain susceptible to emotional hijacking under severe stress. Systematize your responses.`;
    }

    if (r.type === 'strategy') {
        if (r.verdict.includes('ACTION')) return `<strong>Execution Bias Warning:</strong> You build airplanes while falling. While this guarantees momentum, your lack of strategic planning will eventually result in catastrophic technical or organizational debt.`;
        return `<strong>Optimization Trap:</strong> You require the perfect plan before moving. This is a fear mechanism disguised as intelligence. Ship the MVP now and course-correct later.`;
    }
    
    return "Analyzed structural readiness. Proceed with caution.";
}

// ── Charts ───────────────────────────────────────────────────────
function renderApestChart(r) {
    const ctx = document.getElementById('apest-chart');
    if (!ctx) return;
    const labelMap = { apostle: 'Apostle', prophet: 'Prophet', evangelist: 'Evangelist', shepherd: 'Shepherd', teacher: 'Teacher' };
    const sorted = Object.keys(r.scores).sort((a, b) => r.scores[b] - r.scores[a]);
    const colors = sorted.map((k, i) => i === 0 ? 'rgba(20,184,166,0.85)' : i === 1 ? 'rgba(249,115,22,0.6)' : 'rgba(148,163,184,0.25)');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: sorted.map(k => labelMap[k]),
            datasets: [{ data: sorted.map(k => r.scores[k]), backgroundColor: colors, borderRadius: 6, borderSkipped: false }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            plugins: { legend: { display: false } },
            scales: {
                x: { display: false, grid: { display: false } },
                y: { ticks: { color: '#94a3b8', font: { size: 13, weight: '600' } }, grid: { display: false } }
            }
        }
    });
}

function renderInsightsChart(r) {
    const ctx = document.getElementById('insights-chart');
    if (!ctx) return;
    const labelMap = { red: 'Fiery Red', yellow: 'Sunshine Yellow', green: 'Earth Green', blue: 'Cool Blue' };
    const colorFill = { red: 'rgba(239,68,68,0.7)', yellow: 'rgba(245,158,11,0.7)', green: 'rgba(34,197,94,0.7)', blue: 'rgba(59,130,246,0.7)' };
    const keys = Object.keys(r.scores);
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: keys.map(k => labelMap[k]),
            datasets: [{ data: keys.map(k => r.scores[k]), backgroundColor: keys.map(k => colorFill[k]), borderWidth: 0 }]
        },
        options: {
            plugins: {
                legend: { position: 'bottom', labels: { color: '#94a3b8', usePointStyle: true, pointStyleWidth: 10, padding: 16, font: { size: 12 } } }
            }
        }
    });
}

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

function renderDiscChart(r) {
    const ctx = document.getElementById('disc-chart');
    if (!ctx) return;
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Dominance (C)', 'Influence (I)', 'Steadiness (S)', 'Conscientious (C)'],
            datasets: [{ label: 'DISC Profile', data: [r.scores.D, r.scores.I, r.scores.S, r.scores.C], backgroundColor: 'rgba(20, 184, 166, 0.4)', borderColor: '#14b8a6' }]
        },
        options: { scales: { r: { min: 0 } }, plugins: { legend: { display: false } } }
    });
}

function renderEnneagramChart(r) {
    const ctx = document.getElementById('enneagram-chart');
    if (!ctx) return;
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Heart (2/3/4)', 'Head (5/6/7)', 'Body (8/9/1)'],
            datasets: [{ data: [r.scores.heart, r.scores.head, r.scores.body], backgroundColor: ['#ef4444', '#3b82f6', '#f59e0b'], borderWidth: 0 }]
        },
        options: { plugins: { legend: { labels: { color: '#94a3b8' } } } }
    });
}

function renderGiftsChart(r) {
    const ctx = document.getElementById('gifts-chart');
    if (!ctx) return;
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Prophecy', 'Serving', 'Encouragement', 'Giving', 'Leadership', 'Mercy', 'Teaching'],
            datasets: [{ label: 'Gift Intensity', data: Object.values(r.scores), backgroundColor: 'rgba(139, 92, 246, 0.7)' }]
        },
        options: { indexAxis: 'y', plugins: { legend: { display: false } }, scales: { x: { display: false }, y: { ticks: { color: '#94a3b8' } } } }
    });
}

function renderServantChart(r) {
    const ctx = document.getElementById('servant-chart');
    if (!ctx) return;
    new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: ['Humility', 'Empathy', 'Stewardship', 'Vision'],
            datasets: [{ data: [r.scores.humility, r.scores.empathy, r.scores.stewardship, r.scores.vision], backgroundColor: ['#10b981', '#ef4444', '#f59e0b', '#3b82f6'], borderWidth: 0 }]
        },
        options: { plugins: { legend: { labels: { color: '#94a3b8' } } }, scales: { r: { ticks: { display: false } } } }
    });
}

function renderStrategyChart(r) {
    const ctx = document.getElementById('strategy-chart');
    if (!ctx) return;
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Action / Execution', 'Strategy / Optimization'],
            datasets: [{ data: [r.scores.action, r.scores.optimization], backgroundColor: ['#ef4444', '#3b82f6'], borderWidth: 0 }]
        },
        options: { plugins: { legend: { labels: { color: '#94a3b8' } } } }
    });
}


// ══ PERSONALITY: MBTI ════════════════════════════════════════════════════════
function getMbtiQuestions() {
    return [
        { q: 'At a party you prefer to:', options: [
            { text: 'Interact with many, including strangers', score: 'E' },
            { text: 'Interact with a few close friends', score: 'I' }
        ]},
        { q: 'You tend to be more:', options: [
            { text: 'A practical, realistic person', score: 'S' },
            { text: 'An imaginative, innovative person', score: 'N' }
        ]},
        { q: 'When making decisions you tend to rely more on:', options: [
            { text: 'Logic and objective analysis', score: 'T' },
            { text: 'Personal values and how people are affected', score: 'F' }
        ]},
        { q: 'You prefer your life to be:', options: [
            { text: 'Planned and organized', score: 'J' },
            { text: 'Spontaneous and flexible', score: 'P' }
        ]},
        { q: 'After a long day, you recharge by:', options: [
            { text: 'Going out and socializing', score: 'E' },
            { text: 'Spending quiet time alone', score: 'I' }
        ]},
        { q: 'You are more interested in:', options: [
            { text: 'What is real and actual', score: 'S' },
            { text: 'Concepts and ideas behind things', score: 'N' }
        ]},
        { q: 'You are more impressed by:', options: [
            { text: 'Principles and analysis', score: 'T' },
            { text: 'Empathy and human connection', score: 'F' }
        ]},
        { q: 'You prefer:', options: [
            { text: 'Having matters settled and decided', score: 'J' },
            { text: 'Keeping your options open', score: 'P' }
        ]}
    ];
}

function calculateMbti(questions) {
    const counts = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    answers.forEach((a) => { if (a && a.score && counts[a.score] !== undefined) counts[a.score]++; });
    const type = (counts.E >= counts.I ? 'E' : 'I') +
                 (counts.S >= counts.N ? 'S' : 'N') +
                 (counts.T >= counts.F ? 'T' : 'F') +
                 (counts.J >= counts.P ? 'J' : 'P');
    return { type: 'mbti', mbtiType: type, scores: counts, verdict: type };
}

// ── PERSONALITY: StrengthsFinder Domains ─────────────────────────────────────
function getStrengthsQuestions() {
    return [
        { q: 'When you join a project, you immediately start thinking about:', options: [
            { text: 'How to get it done efficiently and on time', score: 'executing' },
            { text: 'How to get more people excited about it', score: 'influencing' },
            { text: 'How everyone on the team is feeling', score: 'relationship' },
            { text: 'How to think through the best long-term direction', score: 'strategic' }
        ]},
        { q: 'Your colleagues would most likely describe you as:', options: [
            { text: 'The one who gets things done', score: 'executing' },
            { text: 'The one who drives momentum', score: 'influencing' },
            { text: 'The one who builds real relationships', score: 'relationship' },
            { text: 'The one with the ideas', score: 'strategic' }
        ]},
        { q: 'At your best you are:', options: [
            { text: 'Making things happen — results, output, delivery', score: 'executing' },
            { text: 'Persuading and moving people to action', score: 'influencing' },
            { text: 'Investing in people and building trust over time', score: 'relationship' },
            { text: 'Seeing patterns and solving complex problems', score: 'strategic' }
        ]},
        { q: 'What frustrates you most in a team?', options: [
            { text: 'People who talk without doing', score: 'executing' },
            { text: 'Teams with low energy or engagement', score: 'influencing' },
            { text: 'Leaders who ignore the human side of things', score: 'relationship' },
            { text: 'Plans that lack strategic depth', score: 'strategic' }
        ]},
        { q: 'Your natural contribution to a team is:', options: [
            { text: 'Discipline and follow-through', score: 'executing' },
            { text: 'Vision-selling and motivation', score: 'influencing' },
            { text: 'Harmony and genuine care', score: 'relationship' },
            { text: 'Analysis and big picture thinking', score: 'strategic' }
        ]}
    ];
}

function calculateStrengths(questions) {
    const scores = { executing: 0, influencing: 0, relationship: 0, strategic: 0 };
    answers.forEach((a) => { if (a && a.score && scores[a.score] !== undefined) scores[a.score]++; });
    const primary = Object.keys(scores).reduce((a, b) => scores[a] >= scores[b] ? a : b);
    return { type: 'strengths', scores, verdict: primary };
}

// ── PERSONALITY: Cognitive Bias Audit ────────────────────────────────────────
function getCognitiveBiasQuestions() {
    return [
        { q: 'When you hear a statistic that confirms something you already believe, you:', options: [
            { text: 'Accept it quickly without digging deeper', score: 'confirmation' },
            { text: 'Immediately wonder if the sample size is valid', score: 'none' },
            { text: 'Share it — it confirms what I thought', score: 'confirmation' },
            { text: 'Feel suspicious because it is too convenient', score: 'none' }
        ]},
        { q: 'You are deciding whether to keep investing in a business that is struggling. You have already put significant resources in. You:', options: [
            { text: 'Keep going because of what is already invested', score: 'sunk_cost' },
            { text: 'Evaluate purely on future return potential', score: 'none' },
            { text: 'Feel like stopping now would be giving up', score: 'sunk_cost' },
            { text: 'Consult the data and exit if it warrants', score: 'none' }
        ]},
        { q: 'Your friend just went through something scary in that neighbourhood. When you drive through it you feel:', options: [
            { text: 'Much more nervous than usual', score: 'availability' },
            { text: 'Fine — one incident does not change statistics', score: 'none' },
            { text: 'Like something bad is likely to happen here', score: 'availability' },
            { text: 'Alert but not overwhelmed by it', score: 'none' }
        ]},
        { q: 'The first salary figure in a negotiation:', options: [
            { text: 'Strongly shapes what I think is fair', score: 'anchoring' },
            { text: 'Is irrelevant — I know my target number', score: 'none' },
            { text: 'Usually becomes my mental reference point', score: 'anchoring' },
            { text: 'Is just a starting position I ignore', score: 'none' }
        ]},
        { q: 'After learning a new skill, you tend to:', options: [
            { text: 'Feel confident you now know more than most', score: 'dunning_kruger' },
            { text: 'Realize how much more there is still to learn', score: 'none' },
            { text: 'Give people advice based on what I just learned', score: 'dunning_kruger' },
            { text: 'Start seeing how complex the topic really is', score: 'none' }
        ]}
    ];
}

function calculateCognitiveBias(questions) {
    const scores = { confirmation: 0, sunk_cost: 0, availability: 0, anchoring: 0, dunning_kruger: 0 };
    answers.forEach((a) => { if (a && a.score && scores[a.score] !== undefined) scores[a.score]++; });
    const primary = Object.keys(scores).reduce((a, b) => scores[a] >= scores[b] ? a : b);
    return { type: 'cognitive_bias', scores, verdict: primary };
}

// ══ SPIRITUAL: Kingdom Mountain Profile ══════════════════════════════════════
function getKingdomMountainQuestions() {
    return [
        { q: 'If you could spend 10 years shaping one area of society, it would be:', options: [
            { text: 'Commerce, startups, and economic systems', score: 'business' },
            { text: 'Policy, governance, and law', score: 'government' },
            { text: 'News, publishing, and digital narrative', score: 'media' },
            { text: 'Schools, curriculum, and youth formation', score: 'education' },
            { text: 'Marriage, parenting, and family health', score: 'family' },
            { text: 'Music, film, visual arts, and culture', score: 'arts' },
            { text: 'The local church and spiritual community', score: 'religion' }
        ]},
        { q: 'You feel most alive when you are:', options: [
            { text: 'Building products and generating value', score: 'business' },
            { text: 'Advocating for justice or public service', score: 'government' },
            { text: 'Telling stories that shape how people think', score: 'media' },
            { text: 'Teaching and developing minds', score: 'education' },
            { text: 'Strengthening family and community bonds', score: 'family' },
            { text: 'Creating beauty that moves people', score: 'arts' },
            { text: 'Leading worship, prayer, or discipleship', score: 'religion' }
        ]},
        { q: 'When you read the news, what angers you most?', options: [
            { text: 'Corruption in business and exploitation of workers', score: 'business' },
            { text: 'Political corruption and injustice', score: 'government' },
            { text: 'Media bias and manipulation of public perception', score: 'media' },
            { text: 'Failing education systems and illiteracy', score: 'education' },
            { text: 'Family breakdown and fatherlessness', score: 'family' },
            { text: 'Degradation of culture and moral relativism in arts', score: 'arts' },
            { text: 'Spiritual compromise and dead religion', score: 'religion' }
        ]},
        { q: 'Your natural circle of influence tends to be:', options: [
            { text: 'Entrepreneurs and professionals', score: 'business' },
            { text: 'Civic leaders and activists', score: 'government' },
            { text: 'Journalists, content creators, and communicators', score: 'media' },
            { text: 'Students, teachers, and mentors', score: 'education' },
            { text: 'Parents, couples, and community builders', score: 'family' },
            { text: 'Artists, musicians, and creatives', score: 'arts' },
            { text: 'Pastors, ministry leaders, and intercessors', score: 'religion' }
        ]},
        { q: 'Your life message, if distilled to one sentence, is most about:', options: [
            { text: 'Redeeming capitalism through ethical enterprise', score: 'business' },
            { text: 'Fighting for justice in broken systems', score: 'government' },
            { text: 'Reclaiming the narrative for truth', score: 'media' },
            { text: 'Raising a generation that thinks differently', score: 'education' },
            { text: 'Healing families and restoring covenant love', score: 'family' },
            { text: 'Making heaven visible through creativity', score: 'arts' },
            { text: 'Building a church that transforms a city', score: 'religion' }
        ]}
    ];
}

function calculateKingdomMountain(questions) {
    const scores = { business: 0, government: 0, media: 0, education: 0, family: 0, arts: 0, religion: 0 };
    answers.forEach((a) => { if (a && a.score && scores[a.score] !== undefined) scores[a.score]++; });
    const primary = Object.keys(scores).reduce((a, b) => scores[a] >= scores[b] ? a : b);
    return { type: 'kingdom_mountain', scores, verdict: primary };
}

// ── SPIRITUAL: SHAPE Assessment ───────────────────────────────────────────────
function getShapeQuestions() {
    return [
        { q: 'Which spiritual gift do you naturally operate in most?', options: [
            { text: 'Teaching, preaching, or explaining truth', score: 'S' },
            { text: 'Healing, miracles, or prophetic insight', score: 'S' },
            { text: 'Serving quietly behind the scenes', score: 'S' }
        ]},
        { q: 'What cause produces the most passion in your heart?', options: [
            { text: 'Reaching the lost and church planting', score: 'H' },
            { text: 'Justice, poverty, and social transformation', score: 'H' },
            { text: 'Discipleship and leadership development', score: 'H' }
        ]},
        { q: 'What do people most often ask you to help with?', options: [
            { text: 'Organizing, planning, or administration', score: 'A' },
            { text: 'Counseling, listening, or encouragement', score: 'A' },
            { text: 'Creative work, communication, or design', score: 'A' }
        ]},
        { q: 'Your personality type is best described as:', options: [
            { text: 'Introverted — I process internally and work alone', score: 'P' },
            { text: 'Extroverted — I energize through people and groups', score: 'P' },
            { text: 'Ambiverted — flexible depending on context', score: 'P' }
        ]},
        { q: 'What life experience has most shaped your ministry perspective?', options: [
            { text: 'Overcoming hardship, illness, or loss', score: 'E' },
            { text: 'Career and marketplace experience', score: 'E' },
            { text: 'Cross-cultural, missions, or global exposure', score: 'E' }
        ]}
    ];
}

function calculateShape(questions) {
    const scores = { S: 0, H: 0, A: 0, P: 0, E: 0 };
    answers.forEach((a, i) => { if (questions[i] && a && a.score) scores[a.score] = (scores[a.score] || 0) + 1; });
    const labelMap = { S: 'spiritual_gifts', H: 'heart_passion', A: 'abilities', P: 'personality', E: 'experience' };
    const primary = Object.keys(scores).reduce((a, b) => scores[a] >= scores[b] ? a : b);
    return { type: 'shape', scores, verdict: labelMap[primary] || primary };
}

// ── SPIRITUAL: Spiritual Formation Stage ─────────────────────────────────────
function getSpiritualFormationQuestions() {
    return [
        { q: 'How do you primarily relate to God right now?', options: [
            { text: 'I am still discovering who He is and what I believe', score: 'infant' },
            { text: 'I follow the rules and do the right things', score: 'developing' },
            { text: 'I pursue intimacy and genuine relationship with Him', score: 'maturing' },
            { text: 'I simply rest in Him and respond from overflow', score: 'elder' }
        ]},
        { q: 'How do you handle spiritual doubt or dry seasons?', options: [
            { text: 'They destabilize me and I feel lost', score: 'infant' },
            { text: 'I double down on disciplines and church attendance', score: 'developing' },
            { text: 'I sit in the questions and trust His faithfulness', score: 'maturing' },
            { text: 'I welcome them as invitations to deeper surrender', score: 'elder' }
        ]},
        { q: 'Your primary motivation in serving others is:', options: [
            { text: 'I am still figuring out what I have to offer', score: 'infant' },
            { text: 'Duty, obedience, and wanting to do what is right', score: 'developing' },
            { text: 'Genuine love for people and a sense of calling', score: 'maturing' },
            { text: 'Pure overflow — it costs me nothing to give', score: 'elder' }
        ]},
        { q: 'How do you respond when someone wounds you or your ministry?', options: [
            { text: 'I feel hurt and pull back from community', score: 'infant' },
            { text: 'I try to forgive but it is a real struggle', score: 'developing' },
            { text: 'I process it with God and extend forgiveness intentionally', score: 'maturing' },
            { text: 'I bless them quickly — the wound rarely sticks', score: 'elder' }
        ]},
        { q: 'What best describes your spiritual ambition right now?', options: [
            { text: 'I want to understand the basics and get established', score: 'infant' },
            { text: 'I want to serve well and grow in holiness', score: 'developing' },
            { text: 'I want to know Him deeply and help others do the same', score: 'maturing' },
            { text: 'I want to leave a legacy that outlasts my lifetime', score: 'elder' }
        ]}
    ];
}

function calculateSpiritualFormation(questions) {
    const scores = { infant: 0, developing: 0, maturing: 0, elder: 0 };
    answers.forEach((a) => { if (a && a.score && scores[a.score] !== undefined) scores[a.score]++; });
    const primary = Object.keys(scores).reduce((a, b) => scores[a] >= scores[b] ? a : b);
    return { type: 'spiritual_formation', scores, verdict: primary };
}

// ══ COGNITIVE: Growth Mindset Index ══════════════════════════════════════════
function getGrowthMindsetQuestions() {
    return [
        { q: 'When you fail at something important, you think:', options: [
            { text: 'I am not good at this — maybe it is not for me', score: 'fixed' },
            { text: 'What can I learn from this to do better next time', score: 'growth' }
        ]},
        { q: 'You believe your intelligence and talent are:', options: [
            { text: 'Largely fixed — you are born with what you have', score: 'fixed' },
            { text: 'Expandable through hard work and good strategy', score: 'growth' }
        ]},
        { q: 'When someone outperforms you, you feel:', options: [
            { text: 'Threatened or diminished', score: 'fixed' },
            { text: 'Inspired and curious about how they did it', score: 'growth' }
        ]},
        { q: 'You avoid challenges when:', options: [
            { text: 'I might look incompetent or fail publicly', score: 'fixed' },
            { text: 'Honestly, I lean into challenges — they develop me', score: 'growth' }
        ]},
        { q: 'Receiving constructive feedback makes you feel:', options: [
            { text: 'Defensive or criticized', score: 'fixed' },
            { text: 'Grateful — it helps me improve', score: 'growth' }
        ]}
    ];
}

function calculateGrowthMindset(questions) {
    const scores = { fixed: 0, growth: 0 };
    answers.forEach((a) => { if (a && a.score && scores[a.score] !== undefined) scores[a.score]++; });
    const total = scores.fixed + scores.growth;
    const growthPct = total > 0 ? Math.round((scores.growth / total) * 100) : 0;
    let verdict;
    if (growthPct >= 80) verdict = 'strong_growth';
    else if (growthPct >= 60) verdict = 'growth';
    else if (growthPct >= 40) verdict = 'developing';
    else verdict = 'fixed';
    return { type: 'growth_mindset', scores, growthPct, verdict };
}

// ── COGNITIVE: Decision Fatigue Profile ───────────────────────────────────────
function getDecisionFatigueQuestions() {
    return [
        { q: 'By the end of a full work day you tend to:', options: [
            { text: 'Make faster, less considered decisions', score: 'high' },
            { text: 'Maintain roughly the same decision quality', score: 'low' },
            { text: 'Avoid making decisions and defer everything', score: 'high' }
        ]},
        { q: 'When you have made many small choices throughout the day:', options: [
            { text: 'I notice my willpower for harder choices is depleted', score: 'high' },
            { text: 'I batch decisions or avoid wasting energy on small things', score: 'low' },
            { text: 'I tend to go with default options to conserve energy', score: 'high' }
        ]},
        { q: 'Your best quality thinking happens:', options: [
            { text: 'Early in the day, before too much has happened', score: 'high' },
            { text: 'Any time — I manage my energy throughout', score: 'low' },
            { text: 'Inconsistently — hard to predict', score: 'high' }
        ]},
        { q: 'When overwhelmed with decisions, you:', options: [
            { text: 'Make impulsive choices just to reduce the burden', score: 'high' },
            { text: 'Pause, reset, and build in a decision-free buffer', score: 'low' },
            { text: 'Procrastinate on everything until I recover', score: 'high' }
        ]},
        { q: 'Your decision-making routines are:', options: [
            { text: 'Reactive — I handle things as they come', score: 'high' },
            { text: 'Structured — I protect my best hours for key decisions', score: 'low' }
        ]}
    ];
}

function calculateDecisionFatigue(questions) {
    const scores = { high: 0, low: 0 };
    answers.forEach((a) => { if (a && a.score && scores[a.score] !== undefined) scores[a.score]++; });
    const total = scores.high + scores.low;
    const riskPct = total > 0 ? Math.round((scores.high / total) * 100) : 0;
    let verdict;
    if (riskPct >= 70) verdict = 'high_risk';
    else if (riskPct >= 40) verdict = 'moderate';
    else verdict = 'resilient';
    return { type: 'decision_fatigue', scores, riskPct, verdict };
}

// ── COGNITIVE: Mental Toughness (4Cs) ─────────────────────────────────────────
function getMentalToughnessQuestions() {
    return [
        { q: 'Under significant pressure, you typically:', options: [
            { text: 'Feel in control of your emotions and responses', score: 'control' },
            { text: 'Stay committed even when you want to quit', score: 'commitment' },
            { text: 'See pressure as a challenge to rise to', score: 'challenge' },
            { text: 'Trust your ability to handle what comes', score: 'confidence' }
        ]},
        { q: 'What most describes your response to setbacks?', options: [
            { text: 'I regulate my emotional state and stay level', score: 'control' },
            { text: 'I recommit to the goal and get back up', score: 'commitment' },
            { text: 'I treat them as feedback and try harder', score: 'challenge' },
            { text: 'I back myself even when others doubt me', score: 'confidence' }
        ]},
        { q: 'Your biggest mental strength is:', options: [
            { text: 'Staying calm when everything is chaotic', score: 'control' },
            { text: 'Following through no matter the cost', score: 'commitment' },
            { text: 'Thriving in high-stakes, competitive situations', score: 'challenge' },
            { text: 'Performing under scrutiny without wilting', score: 'confidence' }
        ]},
        { q: 'What do teammates notice about you in crunch time?', options: [
            { text: 'I remain composed and steady the room', score: 'control' },
            { text: 'I never give up — I keep everything moving', score: 'commitment' },
            { text: 'I raise my game when it matters most', score: 'challenge' },
            { text: 'I perform best with stakes on the line', score: 'confidence' }
        ]},
        { q: 'The mental quality you most want to develop is:', options: [
            { text: 'Emotional control and self-regulation', score: 'control' },
            { text: 'Consistency and grit over long periods', score: 'commitment' },
            { text: 'Embracing competition and high stakes', score: 'challenge' },
            { text: 'Unshakeable belief in my own ability', score: 'confidence' }
        ]}
    ];
}

function calculateMentalToughness(questions) {
    const scores = { control: 0, commitment: 0, challenge: 0, confidence: 0 };
    answers.forEach((a) => { if (a && a.score && scores[a.score] !== undefined) scores[a.score]++; });
    const primary = Object.keys(scores).reduce((a, b) => scores[a] >= scores[b] ? a : b);
    return { type: 'mental_toughness', scores, verdict: primary };
}

// ══ LEADERSHIP DNA: Leadership Style Audit ═══════════════════════════════════
function getLeadershipStyleQuestions() {
    return [
        { q: 'When leading a team through change, you tend to:', options: [
            { text: 'Cast a compelling vision for the destination', score: 'visionary' },
            { text: 'Coach individuals through their fears and blockers', score: 'coaching' },
            { text: 'Create unity and buy-in through relationships', score: 'affiliative' },
            { text: 'Consult the team and build consensus', score: 'democratic' },
            { text: 'Set a high pace and expect everyone to follow', score: 'pacesetting' },
            { text: 'Give clear, direct directives and expect execution', score: 'commanding' }
        ]},
        { q: 'When a team member is underperforming, you first:', options: [
            { text: 'Connect their work to the bigger mission meaning', score: 'visionary' },
            { text: 'Have a coaching conversation to find the root cause', score: 'coaching' },
            { text: 'Check in on how they are doing personally', score: 'affiliative' },
            { text: 'Ask the team what they think should be done', score: 'democratic' },
            { text: 'Model what great performance looks like yourself', score: 'pacesetting' },
            { text: 'Set clear expectations and consequences directly', score: 'commanding' }
        ]},
        { q: 'Your most natural leadership gift is:', options: [
            { text: 'Communicating a future people want to run toward', score: 'visionary' },
            { text: 'Developing people and unlocking their potential', score: 'coaching' },
            { text: 'Building belonging and psychological safety', score: 'affiliative' },
            { text: 'Making sure all voices are heard before deciding', score: 'democratic' },
            { text: 'Raising the standard through your own example', score: 'pacesetting' },
            { text: 'Making hard calls quickly in a crisis', score: 'commanding' }
        ]},
        { q: 'The phrase that best describes your leadership philosophy:', options: [
            { text: 'Start with why — purpose over process', score: 'visionary' },
            { text: 'People grow faster with the right coach than the right plan', score: 'coaching' },
            { text: 'A team that trusts each other will outperform every time', score: 'affiliative' },
            { text: 'The best leaders listen more than they speak', score: 'democratic' },
            { text: 'Excellence is contagious — lead from the front', score: 'pacesetting' },
            { text: 'In a crisis, decisiveness is kindness', score: 'commanding' }
        ]},
        { q: 'Your team would describe your leadership as:', options: [
            { text: 'Inspiring and future-focused', score: 'visionary' },
            { text: 'Developmental and invested in my growth', score: 'coaching' },
            { text: 'Warm, relational, and human-first', score: 'affiliative' },
            { text: 'Collaborative and genuinely hearing us', score: 'democratic' },
            { text: 'High-bar and driven — raises the whole team', score: 'pacesetting' },
            { text: 'Direct, clear, and decisive under pressure', score: 'commanding' }
        ]}
    ];
}

function calculateLeadershipStyle(questions) {
    const scores = { visionary: 0, coaching: 0, affiliative: 0, democratic: 0, pacesetting: 0, commanding: 0 };
    answers.forEach((a) => { if (a && a.score && scores[a.score] !== undefined) scores[a.score]++; });
    const primary = Object.keys(scores).reduce((a, b) => scores[a] >= scores[b] ? a : b);
    return { type: 'leadership_style', scores, verdict: primary };
}

// ── LEADERSHIP: Situational Leadership ────────────────────────────────────────
function getSituationalQuestions() {
    return [
        { q: 'When a new, inexperienced team member joins, you:', options: [
            { text: 'Give clear step-by-step instructions and supervise closely', score: 'directing' },
            { text: 'Explain the why behind tasks and invite their questions', score: 'coaching_sl' },
            { text: 'Ask them what they need and offer full support', score: 'supporting' },
            { text: 'Give them the goal and let them figure out the path', score: 'delegating' }
        ]},
        { q: 'When a competent team member loses motivation, you:', options: [
            { text: 'Reinstate clear goals and closer monitoring', score: 'directing' },
            { text: 'Have a coaching conversation about what has changed', score: 'coaching_sl' },
            { text: 'Focus on encouragement and removing obstacles', score: 'supporting' },
            { text: 'Give them space — they know what to do', score: 'delegating' }
        ]},
        { q: 'With a high performer who knows their job, you:', options: [
            { text: 'Continue to give direction to maintain standards', score: 'directing' },
            { text: 'Stay close but shift to mentoring mode', score: 'coaching_sl' },
            { text: 'Make yourself available but let them lead', score: 'supporting' },
            { text: 'Fully delegate and trust their judgment', score: 'delegating' }
        ]},
        { q: 'Your default belief about people and work autonomy is:', options: [
            { text: 'Most people need more structure than they think', score: 'directing' },
            { text: 'People grow fastest with coaching and clear dialogue', score: 'coaching_sl' },
            { text: 'People do their best when feel trusted and supported', score: 'supporting' },
            { text: 'The best work happens when people own their space fully', score: 'delegating' }
        ]},
        { q: 'In a crisis situation, your instinct is to:', options: [
            { text: 'Take control and direct the team step by step', score: 'directing' },
            { text: 'Brief the team and coach them through in real time', score: 'coaching_sl' },
            { text: 'Rally the team emotionally and remove blockers', score: 'supporting' },
            { text: 'Trust competent people to handle their areas', score: 'delegating' }
        ]}
    ];
}

function calculateSituational(questions) {
    const scores = { directing: 0, coaching_sl: 0, supporting: 0, delegating: 0 };
    answers.forEach((a) => { if (a && a.score && scores[a.score] !== undefined) scores[a.score]++; });
    const primary = Object.keys(scores).reduce((a, b) => scores[a] >= scores[b] ? a : b);
    return { type: 'situational', scores, verdict: primary };
}

// ── LEADERSHIP: Conflict Resolution Style ─────────────────────────────────────
function getConflictResolutionQuestions() {
    return [
        { q: 'When there is a significant disagreement in your team, you:', options: [
            { text: 'Assert your position clearly and push for your outcome', score: 'competing' },
            { text: 'Bring everyone together to find a solution that works for all', score: 'collaborating' },
            { text: 'Look for a middle-ground both sides can live with', score: 'compromising' },
            { text: 'Stay out of it unless absolutely necessary', score: 'avoiding' },
            { text: 'Prioritize the other person or team feeling heard', score: 'accommodating' }
        ]},
        { q: 'A colleague challenges your idea in a meeting. You:', options: [
            { text: 'Defend your position with evidence and confidence', score: 'competing' },
            { text: 'Explore their perspective — maybe there is something better', score: 'collaborating' },
            { text: 'Offer to incorporate some of their ideas into yours', score: 'compromising' },
            { text: 'Let it go to avoid derailing the meeting', score: 'avoiding' },
            { text: 'Yield — keeping harmony matters more here', score: 'accommodating' }
        ]},
        { q: 'Under significant pressure, your instinct in conflict is to:', options: [
            { text: 'Win the argument — losing feels costly', score: 'competing' },
            { text: 'Work it through properly even if it takes longer', score: 'collaborating' },
            { text: 'Find what everyone can agree on fast', score: 'compromising' },
            { text: 'Withdraw and let things settle on their own', score: 'avoiding' },
            { text: 'Give in to reduce tension in the room', score: 'accommodating' }
        ]},
        { q: 'You believe conflict in an organization is:', options: [
            { text: 'Something to win — being right matters', score: 'competing' },
            { text: 'An opportunity if handled with depth and courage', score: 'collaborating' },
            { text: 'Best resolved through pragmatic give-and-take', score: 'compromising' },
            { text: 'Often better handled by time than confrontation', score: 'avoiding' },
            { text: 'Best de-escalated through generosity and yielding', score: 'accommodating' }
        ]},
        { q: 'After a conflict, what matters most to you?', options: [
            { text: 'That the right outcome was achieved', score: 'competing' },
            { text: 'That both sides felt truly heard and respected', score: 'collaborating' },
            { text: 'That a workable solution was reached quickly', score: 'compromising' },
            { text: 'That the tension has passed and people have moved on', score: 'avoiding' },
            { text: 'That the relationship was preserved above all', score: 'accommodating' }
        ]}
    ];
}

function calculateConflictResolution(questions) {
    const scores = { competing: 0, collaborating: 0, compromising: 0, avoiding: 0, accommodating: 0 };
    answers.forEach((a) => { if (a && a.score && scores[a.score] !== undefined) scores[a.score]++; });
    const primary = Object.keys(scores).reduce((a, b) => scores[a] >= scores[b] ? a : b);
    return { type: 'conflict_resolution', scores, verdict: primary };
}

// ── LEADERSHIP: Team Role Profile ─────────────────────────────────────────────
function getTeamRoleQuestions() {
    return [
        { q: 'On a project team, you naturally gravitate toward:', options: [
            { text: 'Generating new ideas and solving complex problems', score: 'thinker' },
            { text: 'Getting things done, tracking, and delivering results', score: 'action' },
            { text: 'Developing team cohesion and managing relationships', score: 'people' }
        ]},
        { q: 'The role you most enjoy on a team is:', options: [
            { text: 'The strategist — I see what others miss', score: 'thinker' },
            { text: 'The implementer — I ship and execute', score: 'action' },
            { text: 'The connector — I hold the team together', score: 'people' }
        ]},
        { q: 'Your biggest value-add in a group is:', options: [
            { text: 'Deep analysis and distinctive thinking', score: 'thinker' },
            { text: 'Reliable follow-through and output', score: 'action' },
            { text: 'Building trust and making everyone feel included', score: 'people' }
        ]},
        { q: 'What do team members come to you for most?', options: [
            { text: 'New perspectives and expert insights', score: 'thinker' },
            { text: 'Help getting things organized and completed', score: 'action' },
            { text: 'Emotional support and team morale', score: 'people' }
        ]},
        { q: 'When a project stalls, you contribute by:', options: [
            { text: 'Reframing the problem and finding a creative way forward', score: 'thinker' },
            { text: 'Pushing for urgency and breaking the logjam with action', score: 'action' },
            { text: 'Reigniting team motivation and resolving interpersonal tension', score: 'people' }
        ]}
    ];
}

function calculateTeamRole(questions) {
    const scores = { thinker: 0, action: 0, people: 0 };
    answers.forEach((a) => { if (a && a.score && scores[a.score] !== undefined) scores[a.score]++; });
    const primary = Object.keys(scores).reduce((a, b) => scores[a] >= scores[b] ? a : b);
    return { type: 'team_role', scores, verdict: primary };
}

// ── LEADERSHIP: Power Dynamics Index ──────────────────────────────────────────
function getPowerDynamicsQuestions() {
    return [
        { q: 'People most often follow your lead because:', options: [
            { text: 'They respect my knowledge and expertise', score: 'expert' },
            { text: 'They like me and want to be associated with me', score: 'referent' },
            { text: 'I control resources, rewards, or opportunities they value', score: 'reward' },
            { text: 'They know there are real consequences for not complying', score: 'coercive' },
            { text: 'I hold the formal title or authority in this context', score: 'legitimate' }
        ]},
        { q: 'When you need to persuade someone who resists, you typically:', options: [
            { text: 'Present data, credentials, and evidence of expertise', score: 'expert' },
            { text: 'Leverage the relationship and appeal to trust', score: 'referent' },
            { text: 'Show them what they stand to gain by agreeing', score: 'reward' },
            { text: 'Make the cost of non-compliance clear', score: 'coercive' },
            { text: 'Invoke the authority of my role or position', score: 'legitimate' }
        ]},
        { q: 'You feel most powerful when:', options: [
            { text: 'Others seek your counsel and view you as the expert', score: 'expert' },
            { text: 'People admire you and want to be around you', score: 'referent' },
            { text: 'You can reward and recognize people for their work', score: 'reward' },
            { text: 'You have the ability to enforce real accountability', score: 'coercive' },
            { text: 'Your authority is formally recognized and respected', score: 'legitimate' }
        ]},
        { q: 'Your natural influence style in a room of peers is:', options: [
            { text: 'Credibility-based — my track record speaks', score: 'expert' },
            { text: 'Relational — people trust and like me', score: 'referent' },
            { text: 'Value-based — I can create upside for you', score: 'reward' },
            { text: 'Consequence-based — I set clear expectations', score: 'coercive' },
            { text: 'Authority-based — I represent the organization', score: 'legitimate' }
        ]},
        { q: 'If you lost your formal title tomorrow, your influence would:', options: [
            { text: 'Remain — my expertise is still valuable', score: 'expert' },
            { text: 'Remain — people follow me, not my title', score: 'referent' },
            { text: 'Diminish significantly without the budget control', score: 'reward' },
            { text: 'Collapse — I need enforcement power to lead', score: 'coercive' },
            { text: 'Collapse — the title is what gives me standing', score: 'legitimate' }
        ]}
    ];
}

function calculatePowerDynamics(questions) {
    const scores = { expert: 0, referent: 0, reward: 0, coercive: 0, legitimate: 0 };
    answers.forEach((a) => { if (a && a.score && scores[a.score] !== undefined) scores[a.score]++; });
    const primary = Object.keys(scores).reduce((a, b) => scores[a] >= scores[b] ? a : b);
    return { type: 'power_dynamics', scores, verdict: primary };
}

// ── LEADERSHIP: Leadership EI Domains ─────────────────────────────────────────
function getLeadershipEiQuestions() {
    return [
        { q: 'In a high-pressure moment, you are most aware of:', options: [
            { text: 'My own emotional state and how it is affecting me', score: 'self_awareness' },
            { text: 'How I am managing my reactions in real time', score: 'self_management' },
            { text: 'The emotional undercurrent in the room around me', score: 'social_awareness' },
            { text: 'How to use the moment to strengthen the relationship', score: 'relationship_mgmt' }
        ]},
        { q: 'Your greatest leadership blind spot is more likely in:', options: [
            { text: 'Not fully understanding how my emotions drive my decisions', score: 'self_awareness' },
            { text: 'Letting frustration or anxiety leak into my communication', score: 'self_management' },
            { text: 'Missing what others are feeling in the room', score: 'social_awareness' },
            { text: 'Neglecting to invest in relational trust with my team', score: 'relationship_mgmt' }
        ]},
        { q: 'After a hard conversation, you typically:', options: [
            { text: 'Reflect on what I was feeling and why it triggered me', score: 'self_awareness' },
            { text: 'Assess how well I regulated myself in the moment', score: 'self_management' },
            { text: 'Think about how the other person was feeling', score: 'social_awareness' },
            { text: 'Follow up to repair or strengthen the relationship', score: 'relationship_mgmt' }
        ]},
        { q: 'The EI skill you are most naturally strong in is:', options: [
            { text: 'Knowing my triggers, values, and emotional patterns', score: 'self_awareness' },
            { text: 'Staying composed and professional under fire', score: 'self_management' },
            { text: 'Reading rooms and people with accuracy', score: 'social_awareness' },
            { text: 'Building genuine trust and influence with people', score: 'relationship_mgmt' }
        ]},
        { q: 'The teams you lead perform best when:', options: [
            { text: 'I am clear about what drives me and where I stand', score: 'self_awareness' },
            { text: 'I model emotional steadiness in difficult seasons', score: 'self_management' },
            { text: 'I attune to what each person is carrying', score: 'social_awareness' },
            { text: 'I have invested deeply in each team member relationally', score: 'relationship_mgmt' }
        ]}
    ];
}

function calculateLeadershipEi(questions) {
    const scores = { self_awareness: 0, self_management: 0, social_awareness: 0, relationship_mgmt: 0 };
    answers.forEach((a) => { if (a && a.score && scores[a.score] !== undefined) scores[a.score]++; });
    const primary = Object.keys(scores).reduce((a, b) => scores[a] >= scores[b] ? a : b);
    return { type: 'leadership_ei', scores, verdict: primary };
}

// ══ RELATIONAL DNA: 5 Love Languages ═════════════════════════════════════════
function getLoveLanguagesQuestions() {
    return [
        { q: 'You feel most loved when someone:', options: [
            { text: 'Tells you how much you mean to them', score: 'words' },
            { text: 'Does something practical to help you', score: 'acts' },
            { text: 'Gives you a thoughtful, meaningful gift', score: 'gifts' },
            { text: 'Gives you their full, undivided attention', score: 'time' },
            { text: 'Hugs you, holds your hand, or is physically present', score: 'touch' }
        ]},
        { q: 'When you are hurt in a relationship, what heals it fastest?', options: [
            { text: 'A sincere, heartfelt apology in words', score: 'words' },
            { text: 'Someone doing something kind and helpful for me', score: 'acts' },
            { text: 'A symbolic gesture or meaningful gift', score: 'gifts' },
            { text: 'Someone carving out time just to be with me', score: 'time' },
            { text: 'Physical comfort — a hug or reassuring touch', score: 'touch' }
        ]},
        { q: 'In a close relationship, what feels most meaningful to you?', options: [
            { text: 'Verbal affirmations and expressions of appreciation', score: 'words' },
            { text: 'When someone reliably shows up and helps', score: 'acts' },
            { text: 'Receiving surprise gifts that show they thought of me', score: 'gifts' },
            { text: 'Shared experiences and quality conversation', score: 'time' },
            { text: 'Physical closeness and presence', score: 'touch' }
        ]},
        { q: 'What makes you feel most appreciated?', options: [
            { text: 'Being praised or complimented sincerely', score: 'words' },
            { text: 'Having someone take something off my plate', score: 'acts' },
            { text: 'Someone who remembers dates and brings a thoughtful gift', score: 'gifts' },
            { text: 'Someone who makes time for me specifically', score: 'time' },
            { text: 'A pat on the back or warm physical acknowledgment', score: 'touch' }
        ]},
        { q: 'What would hurt you most in a relationship?', options: [
            { text: 'Harsh or critical words', score: 'words' },
            { text: 'Being left to handle everything alone', score: 'acts' },
            { text: 'Forgotten anniversaries or no thoughtful gestures', score: 'gifts' },
            { text: 'Never having quality, focused time together', score: 'time' },
            { text: 'Physical distance or lack of warmth', score: 'touch' }
        ]}
    ];
}

function calculateLoveLanguages(questions) {
    const scores = { words: 0, acts: 0, gifts: 0, time: 0, touch: 0 };
    answers.forEach((a) => { if (a && a.score && scores[a.score] !== undefined) scores[a.score]++; });
    const primary = Object.keys(scores).reduce((a, b) => scores[a] >= scores[b] ? a : b);
    return { type: 'love_languages', scores, verdict: primary };
}

// ── RELATIONAL: Languages of Appreciation at Work ────────────────────────────
function getAppreciationWorkQuestions() {
    return [
        { q: 'At work, you feel most valued when a supervisor:', options: [
            { text: 'Tells you specifically what you did well', score: 'words_work' },
            { text: 'Spends focused time checking in with you', score: 'time_work' },
            { text: 'Jumps in to help when you are overwhelmed', score: 'acts_work' },
            { text: 'Gives you a gift card or public recognition reward', score: 'gifts_work' }
        ]},
        { q: 'The workplace recognition that means most to you is:', options: [
            { text: 'Public praise or a personal thank-you note', score: 'words_work' },
            { text: 'One-on-one time with leadership to share ideas', score: 'time_work' },
            { text: 'A colleague helping you solve a hard problem', score: 'acts_work' },
            { text: 'A tangible bonus, gift, or prize for great work', score: 'gifts_work' }
        ]},
        { q: 'You leave a performance review feeling most motivated when:', options: [
            { text: 'Your leader told you specifically how valuable you are', score: 'words_work' },
            { text: 'You had a genuine, unhurried conversation', score: 'time_work' },
            { text: 'Your leader offered to remove obstacles for you', score: 'acts_work' },
            { text: 'A raise, reward, or perk was on the table', score: 'gifts_work' }
        ]},
        { q: 'In a team environment, what builds your trust in a leader?', options: [
            { text: 'They tell me I am doing well and acknowledge my contribution', score: 'words_work' },
            { text: 'They make time for me and do not just manage from a distance', score: 'time_work' },
            { text: 'They serve the team and roll up their sleeves too', score: 'acts_work' },
            { text: 'They back up their words with real rewards', score: 'gifts_work' }
        ]},
        { q: 'What would demotivate you fastest at work?', options: [
            { text: 'Never being acknowledged or praised', score: 'words_work' },
            { text: 'Being managed from a distance with no real connection', score: 'time_work' },
            { text: 'Leadership that never helps and just delegates', score: 'acts_work' },
            { text: 'No tangible recognition for extra effort or results', score: 'gifts_work' }
        ]}
    ];
}

function calculateAppreciationWork(questions) {
    const scores = { words_work: 0, time_work: 0, acts_work: 0, gifts_work: 0 };
    answers.forEach((a) => { if (a && a.score && scores[a.score] !== undefined) scores[a.score]++; });
    const primary = Object.keys(scores).reduce((a, b) => scores[a] >= scores[b] ? a : b);
    return { type: 'appreciation_work', scores, verdict: primary };
}

// ── RELATIONAL: Attachment Style ──────────────────────────────────────────────
function getAttachmentQuestions() {
    return [
        { q: 'In close relationships, you most often feel:', options: [
            { text: 'Comfortable with closeness and confident in the relationship', score: 'secure' },
            { text: 'Worried about whether they truly care about you', score: 'anxious' },
            { text: 'Needing space — closeness sometimes feels overwhelming', score: 'avoidant' },
            { text: 'Pulled between wanting closeness and fearing it', score: 'disorganized' }
        ]},
        { q: 'When someone withdraws or goes quiet, you tend to:', options: [
            { text: 'Give them space and trust it will resolve', score: 'secure' },
            { text: 'Feel anxious and seek reassurance', score: 'anxious' },
            { text: 'Feel relieved — some breathing room', score: 'avoidant' },
            { text: 'Swing between reaching out and pulling back', score: 'disorganized' }
        ]},
        { q: 'Your history with emotional vulnerability is:', options: [
            { text: 'Mostly safe — I can be open and it usually goes well', score: 'secure' },
            { text: 'Scary — I fear being too much and getting hurt', score: 'anxious' },
            { text: 'Avoided — I handle things myself', score: 'avoidant' },
            { text: 'Confusing — I want connection but I also push people away', score: 'disorganized' }
        ]},
        { q: 'When conflict arises in a close relationship, your instinct is:', options: [
            { text: 'Address it directly and trust we can work through it', score: 'secure' },
            { text: 'Worry it means the relationship is in danger', score: 'anxious' },
            { text: 'Withdraw and need time before discussing', score: 'avoidant' },
            { text: 'Feel overwhelmed and react in unpredictable ways', score: 'disorganized' }
        ]},
        { q: 'Your earliest experiences of love and care felt:', options: [
            { text: 'Consistent, warm, and reliable', score: 'secure' },
            { text: 'Inconsistent — sometimes there, sometimes not', score: 'anxious' },
            { text: 'Emotionally distant or expecting self-sufficiency', score: 'avoidant' },
            { text: 'Confusing — a source of both comfort and fear', score: 'disorganized' }
        ]}
    ];
}

function calculateAttachment(questions) {
    const scores = { secure: 0, anxious: 0, avoidant: 0, disorganized: 0 };
    answers.forEach((a) => { if (a && a.score && scores[a.score] !== undefined) scores[a.score]++; });
    const primary = Object.keys(scores).reduce((a, b) => scores[a] >= scores[b] ? a : b);
    return { type: 'attachment', scores, verdict: primary };
}

// ── RELATIONAL: Gottman Relationship Pattern ──────────────────────────────────
function getGottmanQuestions() {
    return [
        { q: 'In your closest relationships, you would say:', options: [
            { text: 'We have deep friendship and genuinely enjoy each other', score: 'friendship' },
            { text: 'We navigate conflict without it damaging the relationship', score: 'conflict' },
            { text: 'We recover quickly after a difficult argument', score: 'recovery' },
            { text: 'We are building something meaningful and shared together', score: 'growth' }
        ]},
        { q: 'The biggest relational strength you bring to relationships is:', options: [
            { text: 'Deep knowledge of the other person — their world, dreams, fears', score: 'friendship' },
            { text: 'Managing difficult conversations without contempt or criticism', score: 'conflict' },
            { text: 'Repairing quickly after things go wrong', score: 'recovery' },
            { text: 'Creating shared rituals, goals, and a sense of meaning', score: 'growth' }
        ]},
        { q: 'The area you most need to grow in relationally is:', options: [
            { text: 'Investing more in genuine friendship and curiosity about the other', score: 'friendship' },
            { text: 'Not flooding during conflict — staying regulated', score: 'conflict' },
            { text: 'Repairing faster and not letting things fester', score: 'recovery' },
            { text: 'Building shared vision and meaning with my partner', score: 'growth' }
        ]},
        { q: 'After a painful argument, you typically:', options: [
            { text: 'Return to friendship mode by remembering why you love them', score: 'friendship' },
            { text: 'Review what you did that escalated it and take responsibility', score: 'conflict' },
            { text: 'Initiate a genuine repair attempt quickly', score: 'recovery' },
            { text: 'Reconnect by focusing on what you are building together', score: 'growth' }
        ]},
        { q: 'What best describes your relational superpower?', options: [
            { text: 'I genuinely want to know the other person deeply', score: 'friendship' },
            { text: 'I can stay calm when conversations get hard', score: 'conflict' },
            { text: 'I can say sorry and mean it — repair comes naturally', score: 'recovery' },
            { text: 'I bring shared direction and create meaning', score: 'growth' }
        ]}
    ];
}

function calculateGottman(questions) {
    const scores = { friendship: 0, conflict: 0, recovery: 0, growth: 0 };
    answers.forEach((a) => { if (a && a.score && scores[a.score] !== undefined) scores[a.score]++; });
    const primary = Object.keys(scores).reduce((a, b) => scores[a] >= scores[b] ? a : b);
    return { type: 'gottman', scores, verdict: primary };
}

// ── RELATIONAL: Relational Needs Profile ──────────────────────────────────────
function getRelationalNeedsQuestions() {
    return [
        { q: 'What do you most need from the people closest to you?', options: [
            { text: 'To feel comforted when I am in pain', score: 'comfort' },
            { text: 'To feel truly seen and noticed', score: 'attention' },
            { text: 'To be treated with dignity and honour', score: 'respect' },
            { text: 'To be cheered on and believed in', score: 'encouragement' },
            { text: 'To feel safe — physically and emotionally', score: 'security' },
            { text: 'To feel like I genuinely belong and am wanted', score: 'belonging' }
        ]},
        { q: 'When a relationship feels unsatisfying, it is usually because:', options: [
            { text: 'No one shows up for me in pain or struggle', score: 'comfort' },
            { text: 'I feel overlooked or invisible', score: 'attention' },
            { text: 'I am not treated with the respect I deserve', score: 'respect' },
            { text: 'No one believes in what I am doing or becoming', score: 'encouragement' },
            { text: 'I do not feel emotionally or physically safe', score: 'security' },
            { text: 'I feel like an outsider even inside the relationship', score: 'belonging' }
        ]},
        { q: 'The deepest form of love, to you, looks like:', options: [
            { text: 'Showing up when I am breaking down', score: 'comfort' },
            { text: 'Paying close attention to what matters to me', score: 'attention' },
            { text: 'Treating me with consistent honour and consideration', score: 'respect' },
            { text: 'Believing in me especially when I doubt myself', score: 'encouragement' },
            { text: 'Creating a safe, stable environment I can rest in', score: 'security' },
            { text: 'Choosing me and making me feel I truly belong', score: 'belonging' }
        ]},
        { q: 'In community or at work, you thrive when people:', options: [
            { text: 'Acknowledge hardship and empathize without fixing', score: 'comfort' },
            { text: 'Notice what I contribute and say so', score: 'attention' },
            { text: 'Take my input seriously and honour my perspective', score: 'respect' },
            { text: 'Celebrate wins and champion my growth', score: 'encouragement' },
            { text: 'Are consistent, predictable, and trustworthy', score: 'security' },
            { text: 'Include me and make me feel an integral part of the group', score: 'belonging' }
        ]},
        { q: 'What childhood hunger, if honest, still drives you today?', options: [
            { text: 'Needing someone to sit with me in pain', score: 'comfort' },
            { text: 'Being truly seen for who I am', score: 'attention' },
            { text: 'Being treated with worth and dignity', score: 'respect' },
            { text: 'Someone believing I could do great things', score: 'encouragement' },
            { text: 'Knowing I was safe and protected', score: 'security' },
            { text: 'Knowing I was genuinely wanted and included', score: 'belonging' }
        ]}
    ];
}

function calculateRelationalNeeds(questions) {
    const scores = { comfort: 0, attention: 0, respect: 0, encouragement: 0, security: 0, belonging: 0 };
    answers.forEach((a) => { if (a && a.score && scores[a.score] !== undefined) scores[a.score]++; });
    const primary = Object.keys(scores).reduce((a, b) => scores[a] >= scores[b] ? a : b);
    return { type: 'relational_needs', scores, verdict: primary };
}

// ── RELATIONAL: Communication Style ───────────────────────────────────────────
function getCommunicationStyleQuestions() {
    return [
        { q: 'When you need something from someone, you typically:', options: [
            { text: 'Hint at it or hope they notice — I find direct asking hard', score: 'passive' },
            { text: 'State it clearly and directly', score: 'assertive' },
            { text: 'Demand it or express frustration when I do not get it', score: 'aggressive' },
            { text: 'Agree but then quietly find ways to get what I need anyway', score: 'passive_aggressive' }
        ]},
        { q: 'When someone does something that upsets you, you:', options: [
            { text: 'Say nothing and move on, hoping it will not happen again', score: 'passive' },
            { text: 'Address it calmly and directly at the right moment', score: 'assertive' },
            { text: 'Confront them immediately regardless of the setting', score: 'aggressive' },
            { text: 'Act fine but find subtle ways to express my displeasure', score: 'passive_aggressive' }
        ]},
        { q: 'In a group conversation or meeting, you tend to:', options: [
            { text: 'Hold back your opinion unless specifically asked', score: 'passive' },
            { text: 'Share your view clearly while listening to others', score: 'assertive' },
            { text: 'Dominate the conversation and advocate strongly for your view', score: 'aggressive' },
            { text: 'Agree publicly but undermine decisions you disagree with later', score: 'passive_aggressive' }
        ]},
        { q: 'When someone sets a boundary with you, you feel:', options: [
            { text: 'Relieved — I respect that and will comply quietly', score: 'passive' },
            { text: 'Respected — clear boundaries are healthy', score: 'assertive' },
            { text: 'Challenged — my instinct is to push back', score: 'aggressive' },
            { text: 'Fine on the surface but resentful underneath', score: 'passive_aggressive' }
        ]},
        { q: 'People who know you well would say your communication style is:', options: [
            { text: 'Reserved — I struggle to speak up for myself', score: 'passive' },
            { text: 'Clear and direct but always respectful', score: 'assertive' },
            { text: 'Sometimes too blunt or forceful', score: 'aggressive' },
            { text: 'Hard to read — I say one thing but do another', score: 'passive_aggressive' }
        ]}
    ];
}

function calculateCommunicationStyle(questions) {
    const scores = { passive: 0, assertive: 0, aggressive: 0, passive_aggressive: 0 };
    answers.forEach((a) => { if (a && a.score && scores[a.score] !== undefined) scores[a.score]++; });
    const primary = Object.keys(scores).reduce((a, b) => scores[a] >= scores[b] ? a : b);
    return { type: 'communication_style', scores, verdict: primary };
}

// ── Email Capture ────────────────────────────────────────────────
async function captureEmail() {
    const email = document.getElementById('leap-email').value.trim();
    if (!email || !email.includes('@')) return;

    // Get the current score from the results view
    const scoreEl = document.querySelector('.result-score');
    const verdictEl = document.querySelector('.result-verdict');
    const currentScore = scoreEl ? parseInt(scoreEl.textContent) : 0;
    const currentVerdict = verdictEl ? verdictEl.textContent : '';

    try {
        document.getElementById('email-capture').innerHTML = `
            <h3>Generating Report...</h3>
            <p style="color:var(--teal);">Please wait while we prepare your customized PDF.</p>
        `;

        // 0. Generate PDF
        const content = document.getElementById('results-container');
        // Hide interactive elements from PDF
        const elementsToHide = content.querySelectorAll('.email-capture, .share-row, .btn-secondary, .btn-small');
        elementsToHide.forEach(el => el.style.display = 'none');

        const canvas = await html2canvas(content, { backgroundColor: '#050a14', scale: 2, useCORS: true });
        elementsToHide.forEach(el => el.style.display = '');

        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgWidth = 210;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        pdf.addImage(canvas.toDataURL('image/jpeg', 0.95), 'JPEG', 0, 0, imgWidth, imgHeight);
        
        const pdfBlob = pdf.output('blob');
        const fileName = `leap-report-${Date.now()}.pdf`;

        // Upload to Supabase Storage
        const { data: uploadData, error: uploadErr } = await sb.storage
            .from('leap_reports')
            .upload(fileName, pdfBlob, {
                contentType: 'application/pdf',
                cacheControl: '3600',
                upsert: false
            });

        if (uploadErr) throw uploadErr;

        // Get public URL
        const { data: publicUrlData } = sb.storage.from('leap_reports').getPublicUrl(fileName);
        const pdfUrl = publicUrlData.publicUrl;

        // 1. Save to Supabase
        await sb.from('leap_leads').insert({
            email,
            decision_type: selectedDecision,
            framework: selectedFramework,
            assessment_id: assessmentId,
            source: 'direct'
        });

        // 2. Route to Relay Server → GHL + Telegram
        fetch(`${RELAY_URL}/api/webhooks/leap-lead`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email,
                assessment_id: assessmentId,
                type: selectedFramework,
                score: currentScore,
                verdict: currentVerdict,
                decision: selectedDecision,
                pdf_url: pdfUrl,
                timestamp: new Date().toISOString()
            })
        }).catch(err => console.warn('[Relay] GHL routing error:', err.message));

        document.getElementById('email-capture').innerHTML = `
            <h3>Report Sent!</h3>
            <p style="color:var(--teal);">Check your inbox for your personalized risk analysis report.</p>
            <div style="margin-top: 1rem;">
               <a href="${pdfUrl}" target="_blank" class="btn btn-small">Download Copy</a>
            </div>
        `;
    } catch (e) {
        console.error('Email capture error:', e);
        document.getElementById('email-capture').innerHTML = `
            <h3>Error</h3>
            <p style="color:var(--red);">There was an issue preparing your report. <a href="#" style="color:var(--teal);" onclick="captureEmail(); return false;">Try again</a>.</p>
        `;
    }
}

// ── Social Sharing ───────────────────────────────────────────────
function shareResult(platform) {
    // Track Analytics silently
    if (assessmentId) {
        sb.from('leap_assessments')
          .update({ social_shared: platform })
          .eq('id', assessmentId)
          .then(() => console.log('Share tracked.'));
    }

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
    selectedDomain = null;
    selectedFramework = null;
    selectedDecision = null;
    currentQuestion = 0;
    answers = [];
    assessmentId = null;
    victoryLapData = null;
    // Reset domain cards
    document.querySelectorAll('.decision-card').forEach(c => c.classList.remove('selected'));
    document.getElementById('btn-to-next-step').disabled = true;
    // Reset framework cards
    document.querySelectorAll('.framework-card').forEach(c => c.classList.remove('selected'));
    const qBtn = document.getElementById('btn-to-questions');
    if (qBtn) qBtn.disabled = true;
    switchView('step-domain');
}

async function downloadBragReceipt() {
    const el = document.getElementById('brag-receipt');
    if (!el || typeof html2canvas === 'undefined') return;
    
    // Briefly force element into view perfectly
    el.style.backgroundColor = document.documentElement.classList.contains('light-theme') ? '#ffffff' : '#050a14';
    
    try {
        const canvas = await html2canvas(el, { 
            scale: 2, 
            backgroundColor: null,
            useCORS: true
        });
        const link = document.createElement('a');
        link.download = 'leap-score-brag.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    } catch (e) {
        console.error('Canvas error:', e);
    }
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
