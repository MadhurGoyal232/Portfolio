import React from "react";

export default function Experience() {
    const languages = ["HTML", "CSS", "JS", "MongoDB", "React", "Node"];
    const languages2 = ["Python",  "Linux", "SASS" , "JQERY" , "SQL" ,  ];

    const renderExperience = () => {
        return Array.from({ length: languages.length }, (_, index) => (
            <div className="exp">
                <div className="icon5">
                    <i class="bi bi-bookmark-check-fill"></i>
                </div>
                <h3>{languages[index]}</h3>
            </div>
        ));
    };
    const renderSkills = () => {
        return Array.from({ length: languages2.length }, (_, index) => (
            <div className="exp">
                <div className="icon5">
                    <i class="bi bi-bookmark-check-fill"></i>
                </div>
                <h3>{languages2[index]}</h3>
            </div>
        ));
    };
    return (
        <div>
            <div className="experience-container">
                <h3 id = 'Sub-heading' className="sub-heading">Explore my</h3>
                <h1 className="experience-heading">Experience</h1>
            </div>

            <div className="bothContainers">
                <div className="container1">
                    <h1 className="frontHeading">Frontend Development</h1>

                    <div className="experiences">
                    {renderExperience()}




                        {/* <div className="exp">
                            <div className="icon5">
                                <i class="bi bi-bookmark-check-fill"></i>
                            </div>
                            <h2>HTML</h2>
                        </div>
                        <div className="exp">
                            <div className="icon5">
                                <i class="bi bi-bookmark-check-fill"></i>
                            </div>
                            <h2>CSS</h2>
                        </div>
                        <div className="exp">
                            <div className="icon5">
                                <i class="bi bi-bookmark-check-fill"></i>
                            </div>
                            <h2>JS</h2>
                        </div>
                        <div className="exp">
                            <div className="icon5">
                                <i class="bi bi-bookmark-check-fill"></i>
                            </div>
                            <h2>React</h2>
                        </div>
                        <div className="exp">
                            <div className="icon5">
                                <i class="bi bi-bookmark-check-fill"></i>
                            </div>
                            <h2>Node JS</h2>
                        </div>
                        <div className="exp">
                            <div className="icon5">
                                <i class="bi bi-bookmark-check-fill"></i>
                            </div>
                            <h2>Mongo</h2>
                        </div> */}
                    </div>
                </div>
                <div className="container2">
                    <h1 className="frontHeading">Other Languages</h1>

                    <div className="skills">
                        {renderSkills()}
                    </div>
                </div>
            </div>
        </div>
    );
}
