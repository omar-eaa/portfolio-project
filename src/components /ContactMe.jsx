
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";



export default function ContactMe() {
    return (
        <div id="contactLink" className="contact-section">
            <h2>Contact</h2>
            <p>Feel free to contact me and learn more about me <span className="emoji">👇</span></p>
    
            <div className="contact-info">
                <div className="contact-item">
                <FaMapMarkedAlt />

                    <p><strong>Location</strong><br />Aarhus, Denmark📍</p>
                </div>
                
                <div className="contact-item">
                <FaMailBulk />
                    <p><strong>Mail</strong><br />omargaall123@gmail.com</p>
                </div>
                
                <div className="contact-item">
                    <a id="a-tag-cv" href="https://blue-zulema-55.tiiny.site/" >
                    <FaFileDownload />
                  
                    <p><strong>CV</strong><br />Learn more</p>
                    </a>
                </div>
            </div>
        </div>
    );
}
