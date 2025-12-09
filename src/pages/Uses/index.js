import { Fragment } from 'react'
import {
    ProjectContainer,
    ProjectSection,
    ProjectSectionContent,
} from 'components/ProjectLayout'
import prerender from 'utils/prerender'
import { useScrollRestore } from 'hooks'
import { Icon } from '@iconify/react'
import './index.css'

const skillCategories = [
    {
        label: 'Backend Engineering',
        icon: 'logos:java',
        skills: [
            { name: 'Java 17+', icon: 'logos:java' },
            { name: 'Spring Boot', icon: 'logos:spring-icon' },
            { name: 'Microservices', icon: 'carbon:microservices-1' },
            { name: 'Apache Kafka', icon: 'logos:kafka-icon' },
            { name: 'Redis', icon: 'logos:redis' },
            { name: 'RabbitMQ', icon: 'logos:rabbitmq-icon' },
            { name: 'Spring WebFlux', icon: 'logos:spring-icon' },
            { name: 'Python', icon: 'logos:python' },
            { name: 'REST APIs', icon: 'carbon:api' },
        ],
    },
    {
        label: 'Frontend',
        icon: 'logos:angular-icon',
        skills: [
            { name: 'Angular', icon: 'logos:angular-icon' },
            { name: 'React', icon: 'logos:react' },
            { name: 'TypeScript', icon: 'logos:typescript-icon' },
            { name: 'JavaScript', icon: 'logos:javascript' },
            { name: 'HTML5', icon: 'vscode-icons:file-type-html' },
            { name: 'CSS3', icon: 'logos:css-3' },
        ],
    },
    {
        label: 'DevOps & Cloud',
        icon: 'logos:docker-icon',
        skills: [
            { name: 'Docker', icon: 'logos:docker-icon' },
            { name: 'Kubernetes', icon: 'logos:kubernetes' },
            { name: 'AWS', icon: 'logos:aws' },
            { name: 'GitLab CI/CD', icon: 'logos:gitlab' },
            { name: 'Git', icon: 'logos:git-icon' },
            { name: 'SonarQube', icon: 'simple-icons:sonarqube' },
        ],
    },
    {
        label: 'Databases',
        icon: 'logos:postgresql',
        skills: [
            { name: 'PostgreSQL', icon: 'logos:postgresql' },
            { name: 'MySQL', icon: 'logos:mysql' },
            { name: 'MongoDB', icon: 'logos:mongodb-icon' },
            { name: 'SQL Tuning', icon: 'carbon:sql' },
        ],
    },
    {
        label: 'Low-Latency & JVM',
        icon: 'carbon:chip',
        skills: [
            { name: 'Multithreading', icon: 'carbon:chart-parallel' },
            { name: 'GC Tuning', icon: 'carbon:settings-adjust' },
            { name: 'Reactive Programming', icon: 'carbon:flow' },
            { name: 'Non-Blocking I/O', icon: 'carbon:network-4' },
            { name: 'Lock-Free Structures', icon: 'carbon:locked' },
            { name: 'Latency Profiling', icon: 'carbon:timer' },
        ],
    },
    {
        label: 'AI / ML',
        icon: 'eos-icons:ai',
        skills: [
            { name: 'LLM Systems', icon: 'eos-icons:ai' },
            { name: 'FAISS', icon: 'carbon:data-structured' },
            { name: 'YOLOv5', icon: 'carbon:machine-learning' },
            { name: 'TensorFlow', icon: 'logos:tensorflow' },
            { name: 'Dialogflow', icon: 'logos:google-cloud' },
            { name: 'C++', icon: 'vscode-icons:file-type-cpp2' },
        ],
    },
]

const Uses = () => {
    useScrollRestore()

    return (
        <Fragment>
            <ProjectContainer className="uses">
                <ProjectSection first className="uses__section">
                    <ProjectSectionContent>
                        <section className="skills">
                            <div className="skills__header">
                                <h2 className="skills__title">Technical Skills</h2>
                                <p className="skills__subtitle">
                                    Technologies and tools I work with daily
                                </p>
                            </div>

                            <div className="skills__categories">
                                {skillCategories.map((category, ci) => (
                                    <div key={ci} className="skills__category">
                                        <div className="skills__category-header">
                                            <Icon
                                                icon={category.icon}
                                                className="skills__category-icon"
                                            />
                                            <h3 className="skills__category-label">
                                                {category.label}
                                            </h3>
                                        </div>
                                        <div className="skills__grid">
                                            {category.skills.map((skill, si) => (
                                                <div key={si} className="skill-chip">
                                                    <Icon
                                                        icon={skill.icon}
                                                        className="skill-chip__icon"
                                                    />
                                                    <span className="skill-chip__name">
                                                        {skill.name}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="skills__achievements">
                                <h3 className="skills__achievements-title">Achievements</h3>
                                <div className="skills__achievements-grid">
                                    <div className="achievement-card">
                                        <span className="achievement-card__icon">🏆</span>
                                        <span className="achievement-card__text">
                                            Winner — Quasar Hackathon 2023
                                        </span>
                                    </div>
                                    <div className="achievement-card">
                                        <span className="achievement-card__icon">🥈</span>
                                        <span className="achievement-card__text">
                                            Finalist — Morgan Stanley Code-to-Give Hackathon
                                        </span>
                                    </div>
                                    <div className="achievement-card">
                                        <span className="achievement-card__icon">⭐</span>
                                        <span className="achievement-card__text">
                                            CodeChef Peak 2003 · Top 10% LeetCode globally · 1200+ problems
                                        </span>
                                    </div>
                                    <div className="achievement-card">
                                        <span className="achievement-card__icon">🎓</span>
                                        <span className="achievement-card__text">
                                            VJTI Final Year Topper — GPA 9.4 / 10
                                        </span>
                                    </div>
                                    <div className="achievement-card">
                                        <span className="achievement-card__icon">🚀</span>
                                        <span className="achievement-card__text">
                                            Top 5% Individual Contributor at BNY (code metrics)
                                        </span>
                                    </div>
                                    <div className="achievement-card">
                                        <span className="achievement-card__icon">👤</span>
                                        <span className="achievement-card__text">
                                            Youngest Development Lead at BNY
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </ProjectSectionContent>
                </ProjectSection>
            </ProjectContainer>
        </Fragment>
    )
}

export default Uses
