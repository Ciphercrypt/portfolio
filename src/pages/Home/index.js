import { useState, useEffect } from 'react'
import ProfileImg from 'assets/AI_M.jpeg'
import './index.css'

// ── Typewriter ──────────────────────────────────────────────────────────────
const TYPEWRITER_TEXTS = [
    'low-latency systems',
    'event-driven architectures',
    'AI platform infra',
    'systems that run at 2am',
    'distributed systems',
]

function useTypewriter(texts, speed = 90) {
    const [display, setDisplay] = useState('')
    const [idx, setIdx] = useState(0)
    const [charIdx, setCharIdx] = useState(0)
    const [deleting, setDeleting] = useState(false)

    useEffect(() => {
        const current = texts[idx]
        if (!deleting && charIdx === current.length) {
            const t = setTimeout(() => setDeleting(true), 2000)
            return () => clearTimeout(t)
        }
        if (deleting && charIdx === 0) {
            setDeleting(false)
            setIdx(i => (i + 1) % texts.length)
            return
        }
        const t = setTimeout(() => {
            setDisplay(current.slice(0, charIdx + (deleting ? -1 : 1)))
            setCharIdx(c => c + (deleting ? -1 : 1))
        }, deleting ? speed / 2 : speed)
        return () => clearTimeout(t)
    }, [charIdx, deleting, idx, texts, speed])

    return display
}

// ── EXPERIENCE DATA ─────────────────────────────────────────────────────────
const EXPERIENCE = [
    {
        company: 'ServiceNow',
        url: 'https://www.servicenow.com',
        role: 'Software Engineer II — AI Platform',
        period: 'Feb 2026 – Present',
        location: 'Hyderabad, India',
        bullets: [
            `Building backend services for AI Control Tower — the thing that watches all the AI agents running across the enterprise and makes sure they're behaving.`,
            'Designed APIs to map AI assets to business services and infra dependencies in a multi-tenant SaaS environment. More interesting than it sounds.',
            `Took the telemetry ingestion pipeline from 'occasionally catching fire' to 'stable at 1M+ events/day' by adding batching, async consumers, and backpressure handling.`,
            'Found and fixed latency bottlenecks in 30+ enterprise AI workflows. Roughly 35% improvement in end-to-end response times.',
        ],
        tags: ['Java', 'Spring Boot', 'Kafka', 'SQL', 'Multi-Tenant SaaS', 'AI Governance'],
    },
    {
        company: 'Bank of New York (BNY)',
        url: 'https://www.bny.com',
        role: 'Full-Stack Software Developer — II',
        period: 'Jul 2023 – Jan 2026',
        location: 'Pune, India',
        bullets: [
            'Led a 9-person team building the post-trade monitoring system. The one that alerts you when a large bank is about to overdraft — so it really has to work.',
            'Built a cash projection system that processes 2M+ trades every 15 minutes. Used to be a batch job. Turned it into a near-real-time pipeline.',
            'Optimised wire and SWIFT transaction ingestion (~10M transactions/day). Fixed a batch that was consistently slow and failing; cut processing time by 10s and failures by 30%.',
            'Set up CI/CD for 8+ repos with GitLab, Docker, and Kubernetes. Cut the release cycle from quarterly to bi-weekly.',
            'Built Angular micro-frontends for settlement and fund allocation across 1000+ international accounts.',
        ],
        tags: ['Java 17', 'Spring Boot', 'Kafka', 'Angular', 'Kubernetes', 'Reactive Programming', 'GC Tuning'],
    },
]

// ── PROJECTS DATA ────────────────────────────────────────────────────────────
const PROJECTS = [
    {
        name: 'LettuceCache',
        desc: `A semantic caching layer that sits between your app and whatever LLM you're using. The idea is simple — why pay for the same API call twice? Redis handles exact matches in <30ms; FAISS handles 'close enough' via vector similarity. The tricky part was preventing a similar question in a different conversation context from returning a wrong cached answer. Solved that with a context signature.`,
        tags: ['C++17', 'Redis', 'FAISS', 'FastAPI', 'Docker', 'Kubernetes'],
        github: 'https://github.com/Ciphercrypt/LettuceCache',
        featured: true,
    },
    {
        name: 'Cicada',
        desc: `End-to-end encrypted messaging where the public key is embedded inside an image using DCT encoding. So even if someone intercepts the key exchange, they just see a photo. Spring Boot on the backend, React on the front. ~98% secure transmission rate in testing, ~70% reduction in interception risk compared to standard key exchange.`,
        tags: ['Java', 'Spring Boot', 'React', 'Cryptography', 'DCT', 'REST'],
        github: 'https://github.com/Ciphercrypt/cicada',
        featured: true,
    },
    {
        name: 'Quasar — Traffic Management',
        desc: `Hackathon project that won. Built a smart city traffic surveillance system with a YOLOv5 pipeline for real-time vehicle detection connected to a MERN dashboard. 90% accuracy on vehicle tracking. We presented it having slept maybe 4 hours total across the weekend.`,
        tags: ['Python', 'YOLOv5', 'React', 'Node.js', 'MongoDB', 'OpenCV'],
        github: 'https://github.com/Ciphercrypt/quassar',
        featured: true,
    },
    {
        name: 'Stree — AI Chatbot',
        desc: `Morgan Stanley Code-to-Give finalist. Multi-channel conversational AI for rural women entrepreneurs in India — web bot, voice telephony for feature phones, 3D avatar interface, and social media bot. The telephony piece was the most interesting challenge; most users didn't have smartphones.`,
        tags: ['Dialogflow', 'Flask', 'React', 'Twilio', 'NLP'],
        github: 'https://github.com/Ciphercrypt/MS-code-to-give',
        featured: false,
    },
    {
        name: 'Reddit Sarcasm Detection',
        desc: `Deep learning model that detects sarcasm in Reddit comments. Compared logistic regression, LSTM, and CNN approaches. LSTM won. The dataset had some genuinely confusing examples that tripped up all three models equally.`,
        tags: ['Python', 'TensorFlow', 'LSTM', 'NLP', 'Jupyter'],
        github: 'https://github.com/Ciphercrypt/Reddit-comments-sarcasm-detection-using-deep-learning',
        featured: false,
    },
    {
        name: 'Chat App Frontend',
        desc: `WhatsApp-style web chat UI built with Next.js and TypeScript. Clean component architecture, TailwindCSS for styling. An exercise in building something I'd actually want to use.`,
        tags: ['Next.js', 'TypeScript', 'TailwindCSS'],
        github: 'https://github.com/Ciphercrypt/chat-application-frontend',
        featured: false,
    },
]

// ── SKILLS DATA ──────────────────────────────────────────────────────────────
const SKILLS = [
    {
        category: 'Languages',
        items: ['Java 17+', 'Python', 'TypeScript', 'JavaScript', 'SQL', 'C++'],
    },
    {
        category: 'Backend',
        items: ['Spring Boot', 'Spring WebFlux', 'Kafka', 'Redis', 'RabbitMQ', 'Hazelcast', 'Hibernate / JPA', 'Spring Security', 'REST APIs'],
    },
    {
        category: 'Frontend',
        items: ['Angular', 'React', 'Next.js', 'HTML / CSS', 'Bootstrap'],
    },
    {
        category: 'Infrastructure',
        items: ['Docker', 'Kubernetes', 'AWS', 'S3', 'GitLab CI/CD', 'SonarQube', 'Splunk'],
    },
    {
        category: 'Databases',
        items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'],
    },
    {
        category: 'Performance & JVM',
        items: ['GC Tuning', 'JVM Internals', 'Multithreading', 'Non-Blocking I/O', 'Reactive Programming', 'Latency Profiling', 'Lock-Free Structures'],
    },
]

// ── HOME ─────────────────────────────────────────────────────────────────────
const Home = () => {
    const typeText = useTypewriter(TYPEWRITER_TEXTS)
    const [activeJob, setActiveJob] = useState(0)

    return (
        <>
            {/* ── HERO ──────────────────────────────────────────────────────── */}
            <section className="hero" id="hero">
                <div className="container">
                    <div className="hero__content">
                        <p className="hero__greeting reveal">hi, my name is</p>
                        <h1 className="hero__name reveal reveal-delay-1">Avishkar Mohite.</h1>
                        <h2 className="hero__tagline reveal reveal-delay-2">
                            I build things that run fast.
                        </h2>
                        <p className="hero__desc reveal reveal-delay-3">
                            Software engineer at{'  '}
                            <a href="https://www.servicenow.com" target="_blank" rel="noreferrer" className="hero__company">
                                ServiceNow
                            </a>
                            {'  '}working on AI platform infrastructure.
                            Before that, I spent a couple of years at BNY making sure millions of
                            financial transactions settled correctly — every single day, without drama.
                        </p>
                        <div className="hero__cta reveal reveal-delay-3">
                            <a href="#projects" className="btn btn--primary">see my work</a>
                            <a href="#contact" className="btn btn--outline">get in touch</a>
                        </div>
                        <div className="hero__terminal reveal reveal-delay-3">
                            <span className="hero__terminal-prompt">~/avishkar $ </span>
                            <span className="hero__terminal-text">working on </span>
                            <span className="hero__terminal-typed">{typeText}</span>
                            <span className="hero__cursor">▋</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ABOUT ─────────────────────────────────────────────────────── */}
            <section className="section about" id="about">
                <div className="container">
                    <div className="section-heading reveal">
                        <p className="section-label">01. about</p>
                        <h2>about me</h2>
                        <div className="section-heading-line" />
                    </div>

                    <div className="about__grid">
                        <div className="about__text">
                            <p className="reveal">
                                I'm a software engineer based in India. I like making systems fast — really fast.
                                The kind of fast where a human can't tell anything is happening, but the numbers
                                look great.
                            </p>
                            <p className="reveal reveal-delay-1">
                                Over two years at BNY, I helped build the backend that keeps post-trade processing
                                running smoothly for one of the world's largest custodian banks. That meant deep
                                dives into JVM internals, Kafka partitioning strategies, and figuring out exactly
                                which SQL index would turn a 40-second query into a 40-millisecond one.
                            </p>
                            <p className="reveal reveal-delay-2">
                                These days I'm at ServiceNow, working on the infrastructure layer for their AI
                                platform. Different problem space, same obsession with performance. Outside of work
                                I do competitive programming — solved 1200+ problems across platforms, peaked at
                                CodeChef 2003. I like the clarity of having a problem with a correct answer.
                            </p>

                            <div className="about__currently reveal reveal-delay-2">
                                <p className="about__currently-label">some things I've been working with lately:</p>
                                <div className="about__chips">
                                    {['Java 17+', 'Spring Boot', 'Kafka', 'Redis', 'Kubernetes', 'TypeScript', 'Python', 'AWS'].map(t => (
                                        <span key={t} className="chip">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="about__image-wrapper reveal reveal-delay-1">
                            <div className="about__image-frame">
                                <img src={ProfileImg} alt="Avishkar Mohite" className="about__image" />
                            </div>
                            <div className="about__stats">
                                <div className="stat">
                                    <span className="stat__num">2.5+</span>
                                    <span className="stat__label">years experience</span>
                                </div>
                                <div className="stat">
                                    <span className="stat__num">1200+</span>
                                    <span className="stat__label">problems solved</span>
                                </div>
                                <div className="stat">
                                    <span className="stat__num">2003</span>
                                    <span className="stat__label">CodeChef peak</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── EXPERIENCE ────────────────────────────────────────────────── */}
            <section className="section experience" id="experience">
                <div className="container">
                    <div className="section-heading reveal">
                        <p className="section-label">02. experience</p>
                        <h2>where I've worked</h2>
                        <div className="section-heading-line" />
                    </div>

                    <div className="exp__layout reveal">
                        <div className="exp__tabs" role="tablist">
                            {EXPERIENCE.map((job, i) => (
                                <button
                                    key={job.company}
                                    className={'exp__tab' + (activeJob === i ? ' exp__tab--active' : '')}
                                    onClick={() => setActiveJob(i)}
                                    role="tab"
                                    aria-selected={activeJob === i}
                                >
                                    {job.company}
                                </button>
                            ))}
                        </div>

                        <div className="exp__panel" role="tabpanel">
                            <div className="exp__panel-header">
                                <h3 className="exp__role">{EXPERIENCE[activeJob].role}</h3>
                                <a
                                    href={EXPERIENCE[activeJob].url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="exp__company-link"
                                >
                                    @ {EXPERIENCE[activeJob].company}
                                </a>
                            </div>
                            <p className="exp__meta">
                                {EXPERIENCE[activeJob].period} · {EXPERIENCE[activeJob].location}
                            </p>
                            <ul className="exp__bullets">
                                {EXPERIENCE[activeJob].bullets.map((b, i) => (
                                    <li key={i}>{b}</li>
                                ))}
                            </ul>
                            <div className="exp__tags">
                                {EXPERIENCE[activeJob].tags.map(t => (
                                    <span key={t} className="chip chip--small">{t}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PROJECTS ──────────────────────────────────────────────────── */}
            <section className="section projects" id="projects">
                <div className="container">
                    <div className="section-heading reveal">
                        <p className="section-label">03. projects</p>
                        <h2>things I've built</h2>
                        <div className="section-heading-line" />
                    </div>

                    <div className="projects__featured">
                        {PROJECTS.filter(p => p.featured).map((proj, i) => (
                            <div
                                key={proj.name}
                                className={'project-card project-card--featured reveal' + (i % 2 === 1 ? ' project-card--alt' : '')}
                                style={{ transitionDelay: `${i * 0.1}s` }}
                            >
                                <div className="project-card__content">
                                    <p className="project-card__label">featured project</p>
                                    <h3 className="project-card__name">{proj.name}</h3>
                                    <div className="project-card__desc">
                                        <p>{proj.desc}</p>
                                    </div>
                                    <ul className="project-card__tags">
                                        {proj.tags.map(t => <li key={t}><span className="chip chip--mono">{t}</span></li>)}
                                    </ul>
                                    <div className="project-card__links">
                                        <a href={proj.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <h3 className="projects__other-heading reveal">other stuff</h3>
                    <div className="projects__grid">
                        {PROJECTS.filter(p => !p.featured).map((proj, i) => (
                            <a
                                key={proj.name}
                                href={proj.github}
                                target="_blank"
                                rel="noreferrer"
                                className="project-small reveal"
                                style={{ transitionDelay: `${i * 0.08}s` }}
                            >
                                <div className="project-small__top">
                                    <svg className="project-small__folder" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
                                    <svg className="project-small__github" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                                </div>
                                <h4 className="project-small__name">{proj.name}</h4>
                                <p className="project-small__desc">{proj.desc.split('.')[0]}.</p>
                                <ul className="project-small__tags">
                                    {proj.tags.slice(0,3).map(t => <li key={t}>{t}</li>)}
                                </ul>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SKILLS ────────────────────────────────────────────────────── */}
            <section className="section skills" id="skills">
                <div className="container">
                    <div className="section-heading reveal">
                        <p className="section-label">04. skills</p>
                        <h2>the toolbox</h2>
                        <div className="section-heading-line" />
                    </div>

                    <div className="skills__grid">
                        {SKILLS.map((group, i) => (
                            <div key={group.category} className="skill-group reveal" style={{ transitionDelay: `${i * 0.07}s` }}>
                                <h3 className="skill-group__title">{group.category}</h3>
                                <div className="skill-group__chips">
                                    {group.items.map(item => (
                                        <span key={item} className="chip">{item}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="achievements reveal">
                        <h3 className="achievements__heading">a few things I'm proud of</h3>
                        <div className="achievements__grid">
                            {[
                                { icon: '🏆', text: 'Winner — Quasar Hackathon 2023 (smart traffic management system)' },
                                { icon: '🥈', text: 'Finalist — Morgan Stanley Code-to-Give (AI chatbot for rural entrepreneurs)' },
                                { icon: '⭐', text: 'CodeChef 2003 peak · Top 10% LeetCode globally · 1200+ problems solved' },
                                { icon: '🎓', text: 'Final Year Topper at VJTI Mumbai — GPA 9.4 / 10' },
                                { icon: '📈', text: 'Top 5% individual contributor at BNY by code contribution metrics' },
                                { icon: '👨‍💼', text: 'Youngest development lead in my org at BNY' },
                            ].map(({ icon, text }) => (
                                <div key={text} className="achievement">
                                    <span className="achievement__icon">{icon}</span>
                                    <span className="achievement__text">{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CONTACT ───────────────────────────────────────────────────── */}
            <section className="section contact" id="contact">
                <div className="container">
                    <div className="contact__inner">
                        <p className="section-label reveal">05. contact</p>
                        <h2 className="contact__heading reveal">get in touch</h2>
                        <p className="contact__desc reveal">
                            I'm currently at ServiceNow so I'm not actively looking —
                            but if you have an interesting problem you want to talk through,
                            I'm always up for it. Also happy to connect if you're working on
                            something in the distributed systems / performance space.
                        </p>
                        <a
                            href="mailto:avishkar.mohite.eng@gmail.com"
                            className="btn btn--primary reveal"
                        >
                            say hello →
                        </a>
                        <div className="contact__social reveal">
                            <a href="https://github.com/Ciphercrypt" target="_blank" rel="noreferrer">GitHub</a>
                            <span>·</span>
                            <a href="https://linkedin.com/in/avishkar-mohite" target="_blank" rel="noreferrer">LinkedIn</a>
                            <span>·</span>
                            <a href="https://www.codechef.com/users/ciphercrypt" target="_blank" rel="noreferrer">CodeChef</a>
                            <span>·</span>
                            <a href="https://leetcode.com/ciphercrypt" target="_blank" rel="noreferrer">LeetCode</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
