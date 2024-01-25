import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
    return (
        <div className="contact">
            <div style={{ marginTop: "80px" }} className="experience-container">
                <h3 id="Csub-heading" className="sub-heading">
                    Get in Touch
                </h3>
                <h1 className="experience-heading">Contact Me</h1>
            </div>

            <div className="contact-info">
                <div className="Email">
                    <div className="icon7">
                        <i class="bi bi-envelope-fill"></i>
                    </div>
                    <h4><a target="_blank" className = "link" href = "mailto:canadianmadhur@gmail.com"> canadianmadhur@gmail.com</a></h4>
                </div>
                    <a
                        target="_blank"
                        className="Linkedin"
                        href="https://www.linkedin.com/in/goyalmadhur123/"
                    >
                <div className="Linkedin-Profile">
                        <div className="icon6">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </div>
                        <h4>Linkedin</h4>
                </div>
                    </a>
            </div>
        </div>
    );
}
