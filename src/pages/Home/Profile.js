import { Fragment } from 'react'
import classNames from 'classnames'
import { Transition } from 'react-transition-group'
import { Button } from 'components/Button'
import DecoderText from 'components/DecoderText'
import Divider from 'components/Divider'
import Image from 'components/Image'
import Section from 'components/Section'
import ProfileImg from 'assets/AI_M.jpeg'
import ProfileImgPlaceholder from 'assets/profile-placeholder.jpg'
import { reflow } from 'utils/transition'
import { media } from 'utils/style'
import { ReactComponent as KatakanaProfile } from 'assets/my_img_clear.svg'
import Heading from 'components/Heading'
import Text from 'components/Text'
import Link from 'components/Link'
import './Profile.css'

const experiences = [
    {
        role: 'Software Engineer — AI Platform',
        company: 'ServiceNow',
        period: 'Feb 2026 – Present',
        highlights: [
            'Built telemetry & governance pipelines for AI Control Tower, processing 1M+ events/day',
            'Designed tenant-aware APIs for AI asset mapping across multi-tenant SaaS infrastructure',
            'Improved execution latency across 30+ enterprise AI workflows by 35%+',
        ],
    },
    {
        role: 'Full-Stack Software Developer — 2',
        company: 'Bank of New York (BNY)',
        period: 'Jul 2023 – Jan 2026',
        highlights: [
            'Led 9-member team building ultra-low-latency event-driven Java microservices (<300ms)',
            'Built high-throughput cash projection platform processing 2M+ trades every 15 minutes',
            'Optimised data ingestion for 10M+ daily wire/SWIFT transactions, reducing failures by 30%',
        ],
    },
]

const ProfileText = ({ status, titleId }) => (
    <Fragment>
        <Heading
            className={classNames('profile__title', `profile__title--${status}`)}
            level={3}
            id={titleId}
        >

<div className="profile__tag" aria-hidden>
                                <Divider
                                    notchWidth="64px"
                                    notchHeight="8px"
                                    collapsed={status !== 'entered'}
                                    collapseDelay={1000}
                                />
                                <div
                                    className={classNames(
                                        'profile__tag-text',
                                        `profile__tag-text--${status}`
                                    )}
                                >
                                   <h2>About Me</h2> 
                                </div>
                            </div>


            <DecoderText text="Hi there ," start={status !== 'exited'} delay={500} />
        </Heading>
        <Text
            className={classNames(
                'profile__description',
                `profile__description--${status}`
            )}
            size="l"
        >
            I'm a Software Engineer specialising in high-performance backend systems.
            Previously at{' '}
            <Link href="https://www.bny.com/" target="_blank">
                BNY
            </Link>
            {' '}where I led design of ultra-low-latency microservices for post-trade and
            liquidity processing systems, handling millions of financial transactions daily.

        </Text>
        <Text
            className={classNames(
                'profile__description',
                `profile__description--${status}`
            )}
            size="l"
        >
            B.Tech CSE graduate from{' '}
            <Link href="https://vjti.ac.in/" target="_blank">
                VJTI Mumbai
            </Link>
            {' '}(CGPA 9.4 final year), competitive programmer with 1200+ problems solved and
            a peak CodeChef rating of 2003.
        </Text>
        <div
            className={classNames(
                'profile__experience',
                `profile__experience--${status}`
            )}
        >
            <h3 className="profile__experience-heading">Experience</h3>
            {experiences.map((exp, i) => (
                <div key={i} className="profile__exp-item">
                    <div className="profile__exp-header">
                        <div className="profile__exp-dot" />
                        <div className="profile__exp-meta">
                            <span className="profile__exp-role">{exp.role}</span>
                            <span className="profile__exp-company-period">
                                <span className="profile__exp-company">{exp.company}</span>
                                <span className="profile__exp-period">{exp.period}</span>
                            </span>
                        </div>
                    </div>
                    <ul className="profile__exp-highlights">
                        {exp.highlights.map((h, j) => (
                            <li key={j}>{h}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </Fragment>
)

const Profile = ({ id, visible, sectionRef }) => {
    const titleId = `${id}-title`

    

    return (
        <Section
            className="profile"
            as="section"
            id={id}
            ref={sectionRef}
            aria-labelledby={titleId}
            tabIndex={-1}
        >
            <Transition in={visible} timeout={0} onEnter={reflow}>
                {status => (
                    <div className="profile__content">
                        <div className="profile__column">
                            <ProfileText status={status} titleId={titleId} />
                            <Button
                                secondary
                                className={classNames(
                                    'profile__button',
                                    `profile__button--${status}`
                                )}
                                href="/portfolio/contact"
                                icon="send"
                            >
                                Get in touch
                            </Button>
                        </div>
                        <div className="profile__column">
                            
                            <div className="profile__image-wrapper">
                                <Image
                                    reveal
                                    delay={100}
                                    placeholder={ProfileImgPlaceholder}
                                    srcSet={`${ProfileImg} 480w, ${ProfileImg} 960w`}
                                    sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                                    alt="Avishkar Mohite"
                                />
                                <KatakanaProfile
                                    className={classNames(
                                        'profile__svg',
                                        `profile__svg--${status}`
                                    )}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </Transition>
        </Section>
    )
}

export default Profile
