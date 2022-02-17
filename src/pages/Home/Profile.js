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


            <DecoderText text="Hi there" start={status !== 'exited'} delay={500} />
        </Heading>
        <Text
            className={classNames(
                'profile__description',
                `profile__description--${status}`
            )}
            size="l"
        >
           I am The Software Engineer in Penultimate Year of Computer Engineering 
           at @ Veermata Jijabai Technological Institute (VJTI),Mumbai .
           I am highly interested in full stack web development and application development. I also have mastered Strong Competitive Programming skills 
            with 5 Star Ratings on CodeChef .

        </Text>
        <Text
            className={classNames(
                'profile__description',
                `profile__description--${status}`
            )}
            size="l"
        >
            In my spare time I like to watch  movies or learning about finance and equity markets.I'm always ready for new projects so dont hesitate to drop me a message.
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
