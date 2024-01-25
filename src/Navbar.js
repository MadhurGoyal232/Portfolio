import React from "react";

export default function Navbar() {
    return (
        <div className="my--nav">
            <div className="name">
                <h1>Madhur Goyal</h1>
            </div>

            <div className="Attributes">
                <div className="abc">
                    <h4 className="About">
                        <a className="colored-links" href="#about-heading">About</a>
                    </h4>
                </div>
                <div className="abc">
                    <h4 className="Experience">
                        <a className="colored-links" href="#Sub-heading">Experience</a>
                    </h4>
                </div>
                <div className="abc">
                    <h4 className="Projects">
                        <a className="colored-links" href="#Psub-heading"> Projects </a>
                    </h4>
                </div>
                <div className="abc">
                    <h4 className="Contact">
                        <a className="colored-links" href="#Csub-heading"> Contact</a>
                    </h4>
                </div>
            </div>
        </div>
    );
}
