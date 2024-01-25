import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faUsers } from "@fortawesome/free-brands-svg-icons";

export default function About() {
    return (
        <div>
            <div className="about-container">
                <h3 id="about-heading" className="About-heading">
                    Get To Know More
                </h3>
                <h1 className="Main-heading">About Me</h1>
            </div>

            <div className="main-section">
                <div className="aboutImage--container">
                    <img src="Images\phutu2.jpg" preload />
                </div>
                <div className="compile">
                    <div className="forexperience--container">
                        <div className="icon3">
                            <i class="bi bi-award-fill"></i>
                        </div>

                        <div className="experience--height">
                            <h3>Experience</h3>
                            <h4 style={{ fontSize: "1.1rem", color: "grey" }}>
                                2+ years Frontend Development
                            </h4>
                        </div>
                    </div>

                    <div className="foreducation--container">
                        <div className="icon4">
                            <i class="bi bi-people-fill"></i>
                        </div>

                        <div className="education--height">
                            <h3>Education</h3>
                            <h4 style={{ fontSize: "1.1rem", color: "grey" }}>
                                Diploma in Computer Programming{" "}
                            </h4>
                        </div>
                    </div>
                    <div className="introduction">
                        <p>
                            Madhur is a Passionate Web Developer. My journey
                            about Development started when I was pursuing
                            Computer Progarmming Diploma from Seneca College. I
                            gained my interest in Frontend Development and
                            started creating user friendly and visually
                            appealing web applications. It's been more than 2
                            years and I've been always seeking new knowledge and
                            ways to innovate in the ever changing tech industry.
                            My creativity is stimulated by challenges, and I
                            passionately support teamwork in the engineering of
                            solutions that genuinely improve the world.
                        </p>
                        <br />
                        <h4 className="bold">
                            Let's connect and build something amazing together!
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
}
