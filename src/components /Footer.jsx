import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>Copyright © All rights are reserved</p>
                <div className="footer-icons">
                    <a href="https://www.linkedin.com/in/omar-gaal-249664257/" target="_blank">
                    <FaLinkedin />
                    </a>
                    <a href="https://github.com/omar-eaa" target="_blank">
                    <FaGithub />
                    </a>
                </div>
            </div>
        </footer>
    );
}
