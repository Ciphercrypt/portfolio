import { useState, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet'
import Intro from 'pages/Home/Intro'
import Profile from 'pages/Home/Profile'
import ProjectSummary from 'pages/Home/ProjectSummary'
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

import supreme_1 from 'assets/supreme_1.jpeg'
import supreme_1_ph from 'assets/supreme_1_blur.png'

import Uses from 'pages/Uses/index'


import './index.css'

const disciplines = ['', '']

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
    const projectFive = useRef()
    const details = useRef()
    const prefersReducedMotion = usePrefersReducedMotion()

    useEffect(() => {
        const revealSections = [
            intro,
            projectOne,
            projectTwo,
            projectThree,
            projectFour,
            projectFive,
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
                <title>AVISHKAR MOHITE | Developer  </title>
                <meta
                    name="description"
                    content="Meet Avishkar Mohite ,Programmer who design the dreams.."
                />
                <meta
                    name="keywords"
                    content="avishkar mohite,Aviskar mohite,web development,web developer,fancy resume,best website, best software, software engineer, india,resume online,cv online,android developer,chakan,khed,programmer,programer,mohite,moite,website,avishkar mohite resume, avishkar mohite cv,shelpimpalgaon,pune,developer,devloper,devs.org, avishkar,"
                />

<meta name="robots" content="index, follow" />
    <meta name="author" content="Avishkar mohite" />
    <meta name="revisit-after" content="1 days"/>
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
                title="Billiard Playing AI Agent"
                description="An AI agent which uses genetic algorithm to play complex classic 8-ball pool game!"
                buttonText="View Project on GitHub"
                buttonLink="https://github.com/Ciphercrypt/Billiards-playing-AI-agent"
                model={{
                    type: 'laptop',
                    alt: 'Billiard Playing AI Agent',
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
                title="OGram"
                description="The Telegram Clone made using flutter and dart having a feature like end to end conversation !"
                buttonText="View Project on GitHub"
                buttonLink="#"
                model={{
                    type: 'phone',
                    alt: 'GarrioGram',
                    textures: [
                        {
                            src: tm_1,
                            srcSet: `${tm_1} 254w, ${tm_1} 508w`,
                            placeholder: tm_1_ph,
                        },
                        {
                            src: tm_2,
                            srcSet: `${tm_2} 254w, ${tm_2} 508w`,
                            placeholder: tm_2_ph,
                        },
                    ],
                }}
            />
            <ProjectSummary
                id="project-3"
                sectionRef={projectThree}
                visible={visibleSections.includes(projectThree.current)}
                index={3}
                title="DUDHAI"
                description="The Complete E-commerce site specifically designed for rural milk vendors to directly trade with customers!"
                buttonText="View Project on GitHub"
                buttonLink="https://github.com/alensaito1/fubuki"
                model={{
                    type: 'laptop',
                    alt: 'Fubuki',
                    textures: [
                        {
                            src: supreme_1,
                            srcSet: `${supreme_1} 800w, ${supreme_1} 1440w`,
                            placeholder: supreme_1_ph,
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
            />
            <Uses/>
           
            <Footer />
        </div>
    )
}

export default Home
