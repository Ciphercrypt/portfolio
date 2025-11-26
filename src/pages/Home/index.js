import { useState, useEffect, useRef } from 'react'
import Intro from 'pages/Home/Intro'
import Profile from 'pages/Home/Profile'
import ProjectSummary from 'pages/Home/ProjectSummary'
import { Helmet } from 'react-helmet'
import Footer from 'components/Footer'
import { usePrefersReducedMotion, useRouteTransition } from 'hooks'
import { useLocation } from 'react-router-dom'
import iphone11 from 'assets/iphone-11.glb'
import macbookPro from 'assets/macbook-pro.glb'


import bill_1 from 'assets/bill_1.png'
import bill_1_placeholder from 'assets/bill_1_blur.jpg'
import ganges1 from 'assets/ganges.jpeg'
import ganges1_placeholder from 'assets/ganges_blurred.jpg'
import ganges2 from 'assets/ganges_2.png'
import ganges2_placeholder from 'assets/ganges_2_blur.png'

import tm_1 from 'assets/tm1.jpg'
import tm_1_ph from 'assets/tm1_blurr.png'

import tm_2 from 'assets/tm2.png'
import tm_2_ph from 'assets/tm2_blurr.png'

import supreme_1 from 'assets/supreme_1_blur.jpeg'
import supreme_1_ph from 'assets/supreme_1.jpg'

import Uses from 'pages/Uses/index'


import './index.css'

const disciplines = ['', '']
const br1=<br />

const Home = () => {
    const { status } = useRouteTransition()
    const { hash, state } = useLocation()
    const initHash = useRef(true)
    const [visibleSections, setVisibleSections] = useState([])
    const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false)
    const intro = useRef()
    const projectOne = useRef()
    const projectTwo = useRef()
    const projectThree = useRef()
    const projectFour = useRef()
    const details = useRef()
    const prefersReducedMotion = usePrefersReducedMotion()

    useEffect(() => {
        const revealSections = [
            intro,
            projectOne,
            projectTwo,
            projectThree,
            projectFour,
            details,
        ]

        const sectionObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const section = entry.target
                        observer.unobserve(section)
                        if (visibleSections.includes(section)) return
                        setVisibleSections(prevSections => [...prevSections, section])
                    }
                })
            },
            { rootMargin: '0px 0px -10% 0px' }
        )

        const indicatorObserver = new IntersectionObserver(
            ([entry]) => {
                setScrollIndicatorHidden(!entry.isIntersecting)
            },
            { rootMargin: '-100% 0px 0px 0px' }
        )

        revealSections.forEach(section => {
            sectionObserver.observe(section.current)
        })

        indicatorObserver.observe(intro.current)

        return () => {
            sectionObserver.disconnect()
            indicatorObserver.disconnect()
        }
    }, [visibleSections])

    useEffect(() => {
        const hasEntered = status === 'entered'
        const supportsNativeSmoothScroll =
            'scrollBehavior' in document.documentElement.style
        let scrollObserver
        let scrollTimeout

        const handleHashchange = (hash, scroll) => {
            clearTimeout(scrollTimeout)
            const hashSections = [intro, projectOne, details]
            const hashString = hash.replace('#', '')
            const element = hashSections.filter(item => item.current.id === hashString)[0]
            if (!element) return
            const behavior = scroll && !prefersReducedMotion ? 'smooth' : 'instant'
            const top = element.current.offsetTop

            scrollObserver = new IntersectionObserver(
                (entries, observer) => {
                    const [entry] = entries
                    if (entry.isIntersecting) {
                        scrollTimeout = setTimeout(
                            () => {
                                element.current.focus()
                            },
                            prefersReducedMotion ? 0 : 400
                        )
                        observer.unobserve(entry.target)
                    }
                },
                { rootMargin: '-20% 0px -20% 0px' }
            )

            scrollObserver.observe(element.current)

            if (supportsNativeSmoothScroll) {
                window.scroll({
                    top,
                    left: 0,
                    behavior,
                })
            } else {
                window.scrollTo(0, top)
            }
        }

        if (hash && initHash.current && hasEntered) {
            handleHashchange(hash, false)
            initHash.current = false
        } else if (!hash && initHash.current && hasEntered) {
            window.scrollTo(0, 0)
            initHash.current = false
        } else if (hasEntered) {
            handleHashchange(hash, true)
        }

        return () => {
            clearTimeout(scrollTimeout)
            if (scrollObserver) {
                scrollObserver.disconnect()
            }
        }
    }, [hash, state, prefersReducedMotion, status])

    return (
        <div className="home">
            <Helmet>
                <title>Avishkar Mohite | Software Engineer</title>
                <meta
                    name="description"
                    content="Avishkar Mohite — Software Engineer specialising in low-latency backend systems, AI platform infrastructure, and distributed systems."
                />
                <meta
                    name="keywords"
                    content="avishkar mohite, software engineer, backend engineer, Java, Spring Boot, low-latency systems, microservices, Kafka, distributed systems, VJTI"
                />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Avishkar Mohite" />
                <link rel="prefetch" href={iphone11} as="fetch" crossorigin="" />
                <link rel="prefetch" href={macbookPro} as="fetch" crossorigin="" />
            </Helmet>
            <Intro
                id="intro"
                sectionRef={intro}
                disciplines={disciplines}
                scrollIndicatorHidden={scrollIndicatorHidden}
            />
             <Profile
                sectionRef={details}
                visible={visibleSections.includes(details.current)}
                id="about"
            />
           
            <ProjectSummary
                id="project-1"
                sectionRef={projectOne}
                visible={visibleSections.includes(projectOne.current)}
                index={1}
                title="LettuceCache — Semantic Cache for LLMs"
                description1="⦿ Context-aware semantic caching layer between client apps and LLMs — reduces API costs and latency with a two-tier Redis L1 + FAISS IVF+PQ L2 architecture."
                description2="⦿ Context signature using SHA-256(intent:domain:scope) prevents false cache hits across different conversations; cache hits served in <30ms vs 500–2000ms LLM fallback."
                description3="⦿ Admission control with scoring: 0.60×cosine_sim + 0.25×context_sig + 0.15×domain ≥ 0.85 threshold. Deployed on Kubernetes with Docker Compose."
                buttonText="View on GitHub"
                buttonLink="https://github.com/Ciphercrypt/LettuceCache"
                model={{
                    type: 'laptop',
                    alt: 'LettuceCache semantic caching layer',
                    textures: [
                        {
                            src: bill_1,
                            srcSet: `${bill_1} 980w, ${bill_1} 1376w`,
                            placeholder: bill_1_placeholder,
                        },
                    ],
                }}
            />
            <ProjectSummary
                id="project-2"
                alternate
                sectionRef={projectTwo}
                visible={visibleSections.includes(projectTwo.current)}
                index={2}
                title="Cicada — End-to-End Encrypted Messaging"
                description1="⦿ Secure messaging platform using image-based encryption for public key transmission — reduces interception attempts by 70%."
                description2="⦿ Asymmetric cryptographic protocols via Discrete Cosine Transform (DCT)-based image encoding achieving 98% secure transmission success rate."
                description3="⦿ Built with Java Spring Boot backend and React frontend; RESTful APIs for key generation, encryption/decryption pipelines and message persistence."
                buttonText="View on GitHub"
                buttonLink="https://github.com/Ciphercrypt/cicada"
                model={{
                    type: 'laptop1',
                    alt: 'Cicada encrypted messaging',
                    textures: [
                        {
                            src: supreme_1,
                            srcSet: `${supreme_1} 980w, ${supreme_1} 1376w`,
                            placeholder: supreme_1_ph,
                        },
                    ],
                }}
            />
            <ProjectSummary
                id="project-3"
                sectionRef={projectThree}
                visible={visibleSections.includes(projectThree.current)}
                index={3}
                title="Quasar — Smart City Traffic Management"
                description1="⦿ Full-stack smart city traffic surveillance system integrating a Python ML pipeline with a MERN stack for real-time congestion detection and analysis."
                description2="⦿ Engineered intelligent vehicle tracking using YOLOv5 achieving 90% accuracy in traffic flow optimisation and predictive congestion analysis."
                description3="⦿ Winner of Quasar Hackathon 2023. Deployed with React frontend, Node.js/Express backend, and MongoDB for event storage."
                buttonText="View on GitHub"
                buttonLink="https://github.com/Ciphercrypt/quassar"
                model={{
                    type: 'laptop',
                    alt: 'Quasar smart traffic management',
                    textures: [
                        {
                            src: tm_1,
                            srcSet: `${tm_1} 980w, ${tm_1} 1376w`,
                            placeholder: tm_1_ph,
                        },
                    ],
                }}
            />
            <ProjectSummary
                id="project-4"
                alternate
                sectionRef={projectFour}
                visible={visibleSections.includes(projectFour.current)}
                index={4}
                title="Stree — AI Chatbot for Rural Entrepreneurs"
                description1="⦿ Finalist at Morgan Stanley Code-to-Give Hackathon. Multi-channel conversational AI platform for women entrepreneurs in rural India."
                description2="⦿ Supports web bot, telephony bot for feature-phone users, 3D avatar interface, and social media bot — enabling access without smartphones."
                description3="⦿ Built with Dialogflow NLP, Flask backend, and React frontend; FAQ automation, humanoid avatar, and language localisation."
                buttonText="View on GitHub"
                buttonLink="https://github.com/Ciphercrypt/MS-code-to-give"
                model={{
                    type: 'laptop1',
                    alt: 'Stree AI chatbot platform',
                    textures: [
                        {
                            src: ganges2,
                            srcSet: `${ganges2} 980w, ${ganges2} 1376w`,
                            placeholder: ganges2_placeholder,
                        },
                    ],
                }}
            />
            {/* <ProjectSummary
                id="project-4"
                alternate
                sectionRef={projectFour}
                visible={visibleSections.includes(projectFour.current)}
                index={4}
                title="Ganges"
                description="The flutter app having functionalities of big E-commerce platform like AMAZON!"
                buttonText="View Project on GitHub"
                buttonLink="https://github.com/Ciphercrypt/"
                model={{
                    type: 'phone',
                    alt: 'Ganges',
                    textures: [
                        {
                            src: ganges1,
                            srcSet: `${ganges1} 254w, ${ganges1} 508w`,
                            placeholder: ganges1_placeholder,
                        },
                        {
                            src: ganges2,
                            srcSet: `${ganges2} 254w, ${ganges2} 508w`,
                            placeholder: ganges2_placeholder,
                        },
                    ],
                }}
            />
            <ProjectSummary
                id="project-5"
                sectionRef={projectFive}
                visible={visibleSections.includes(projectFive.current)}
                index={5}
                title="STOXSUPREME"
                description="The all in one Stock trading  guide and dummy Stock broker web application made using react and express js. "
                buttonText="View Project on GitHub"
                buttonLink="#"
                model={{
                    type: 'laptop',
                    alt: 'STOXSUPREME',
                    textures: [
                        {
                            src: supreme_1,
                            srcSet: `${supreme_1} 800w, ${supreme_1} 1440w`,
                            placeholder: supreme_1_ph,
                        },
                    ],
                }}
            /> */}
            <Uses/>
           
            <Footer />
        </div>
    )
}

export default Home
