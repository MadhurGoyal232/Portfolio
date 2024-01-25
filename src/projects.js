import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Projects() {
    return (
        <div className="myProjects">
            <div style={{ marginTop: "80px" }} className="experience-container">
                <h3 id = 'Psub-heading' className="sub-heading">Browse my Recent</h3>
                <h1 className="experience-heading">Projects</h1>
            </div>

            {/* <img src = "https://media0.giphy.com/media/T86i6yDyOYz7J6dPhf/giphy.gif" /> */}
            <div className="custom-card-group">
                <div className="custom-card">
                    <Card style={{ width: "18rem" }}>
                        <Card.Img
                            variant="top"
                            src="Images\to-do-list.jpg"
                            preload
                        />
                        <Card.Body>
                            <Card.Title>To Do List</Card.Title>
                            <Card.Text>
                            Organize your day effortlessly with our To-Do List app—your 
                            ultimate productivity companion. Streamline tasks, set priorities, 
                            and conquer your day with simplicity and efficiency at your fingertips.
                            </Card.Text>
                            <div className="buttons">

                                <Button className="btn1" variant="primary"><a className="Project1" href = 'https://github.com/MadhurGoyal232/To-Do-List'> Github</a></Button>
                                <Button className="btn2" variant="primary">Live Demo</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>

                {/* second project */}

                <div className="custom-card">
                    <Card style={{ width: "18rem" }}>
                        <Card.Img
                            variant="top"
                            src="Images\sequence memory game.png"
                            preload
                        />
                        <Card.Body>
                            <Card.Title>Sequence Memory Game</Card.Title>
                            <Card.Text>
                            Flex your memory muscles with our Memory Sequence Game—where 
                            patterns meet precision! Challenge yourself to unlock sequences 
                            and sharpen your mind in a thrilling memory adventure.
                            </Card.Text>
                            <div className="buttons">

                                <Button className="btn1" variant="primary"><a className="Project2" href = 'https://github.com/MadhurGoyal232/Sequence-Memory-Game'> Github </a></Button>
                                <Button className="btn2" variant="primary">Live Demo</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}
