import { useState, useEffect } from 'react'
import './index.css'

const NAV_LINKS = [
    { label: 'about',      href: '#about'      },
    { label: 'experience', href: '#experience' },
    { label: 'projects',   href: '#projects'   },
    { label: 'skills',     href: '#skills'     },
    { label: 'contact',    href: '#contact'    },
]

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false)
    const [active, setActive] = useState('about')

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        const sections = NAV_LINKS.map(l => document.querySelector(l.href))
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) setActive(entry.target.id)
                })
            },
            { rootMargin: '-40% 0px -55% 0px' }
        )
        sections.forEach(s => s && observer.observe(s))
        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [open])

    return (
        <>
            <nav className={'nav' + (scrolled ? ' nav--scrolled' : '')}>
                <div className="nav__inner container">
                    <a href="#hero" className="nav__logo" aria-label="home">
                        <span>AM</span>
                    </a>

                    <ul className="nav__links">
                        {NAV_LINKS.map(({ label, href }) => (
                            <li key={href}>
                                <a
                                    href={href}
                                    className={'nav__link' + (active === href.slice(1) ? ' nav__link--active' : '')}
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="nav__social">
                        <a href="https://github.com/Ciphercrypt" target="_blank" rel="noreferrer" aria-label="GitHub">
                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                        </a>
                        <a href="https://linkedin.com/in/avishkar-mohite" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                        </a>
                        <a href="mailto:avishkar.mohite.eng@gmail.com" aria-label="Email">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                        </a>
                    </div>

                    <button
                        className={'nav__hamburger' + (open ? ' nav__hamburger--open' : '')}
                        onClick={() => setOpen(!open)}
                        aria-label={open ? 'close menu' : 'open menu'}
                        aria-expanded={open}
                    >
                        <span /><span /><span />
                    </button>
                </div>
            </nav>

            <div className={'nav__drawer' + (open ? ' nav__drawer--open' : '')} aria-hidden={!open}>
                <ul>
                    {NAV_LINKS.map(({ label, href }, i) => (
                        <li key={href} style={{ transitionDelay: open ? `${i * 60}ms` : '0ms' }}>
                            <a href={href} onClick={() => setOpen(false)}>
                                <span className="nav__drawer-num">0{i + 1}.</span>
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="nav__drawer-social">
                    <a href="https://github.com/Ciphercrypt" target="_blank" rel="noreferrer">GitHub</a>
                    <a href="https://linkedin.com/in/avishkar-mohite" target="_blank" rel="noreferrer">LinkedIn</a>
                    <a href="mailto:avishkar.mohite.eng@gmail.com">Email</a>
                </div>
            </div>
            {open && <div className="nav__overlay" onClick={() => setOpen(false)} />}
        </>
    )
}

export default Navbar
