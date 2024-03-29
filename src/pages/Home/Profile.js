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
           I am Software Developer  in Penultimate Year of Computer Engineering 
           at @ 
           <Link  href="https://vjti.ac.in/" target="_blank">
           Veermata Jijabai Technological Institute (VJTI),Mumbai . 
            
        </Link>
        {' '}I live most of my life on{' '}  
        <Link  href="https://auth.geeksforgeeks.org/user/aviciphercrypt/practice/" target="_blank">
        GeeksForGeeks
            
        </Link> ,
        <Link  href="https://leetcode.com/ciphercrypt/" target="_blank">
        LeetCode
            
        </Link> and {' '}
        <Link  href="https://github.com/Ciphercrypt/" target="_blank">
         Github
            
        </Link>. I also work in full stack web application development with recent focus on flutter development.  

        </Text>
        <Text
            className={classNames(
                'profile__description',
                `profile__description--${status}`
            )}
            size="l"
        >
            In my spare time I watch movies or surf on Reddit .I'm more nerdier than you , so don't hesitate a bit to message me for new projects or for random discussion on anything in the world.
        </Text>
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
                                Send me a message
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
                                    alt="profile image"
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
