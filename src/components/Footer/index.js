import Link from 'components/Link'
import './index.css'

const Footer = () => (
    <footer className="footer">
        <span className="footer__date">
            {`© ${new Date().getFullYear()} Avishkar Mohite.`}
        </span>
        <Link secondary className="footer__link" href="/humans.txt" target="_blank">
            humans.txt
            
        </Link>
    </footer>
)

export default Footer
