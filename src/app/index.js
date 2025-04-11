import { useEffect } from 'react'
import './reset.css'
import './index.css'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import Home from 'pages/Home'

const App = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    }
                })
            },
            { threshold: 0.12 }
        )
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
        return () => observer.disconnect()
    }, [])

    return (
        <>
            <Navbar />
            <main>
                <Home />
            </main>
            <Footer />
        </>
    )
}

export default App
