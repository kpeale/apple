import {footerLinks} from "../constants/index.js";

const Footer = () => {
    return (
        <footer>
            <div className="info">
                <p>More ways to shop: Find a Store or other retailer near you. Or call 000800 040 1966.</p>
                <img src="/logo.svg" alt ="logo"/>
            </div>

            <hr />

            <div className="links">
                <p>© 2025 Kpeale | This is a UI clone for educational purposes only. Not affiliated with Apple Inc.</p>

                <ul>
                    {footerLinks.map(({label, link }) => (
                        <li key={label}>
                            <a href={link}>{label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}
export default Footer
