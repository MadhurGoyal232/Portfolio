import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Projects() {
    return (
        <div className="myProjects">
            <div style={{ marginTop: "80px" }} className="experience-container">
                <h3 className="sub-heading">Browse my Recent</h3>
                <h1 className="experience-heading">Projects</h1>
            </div>

            {/* <img src = "https://media0.giphy.com/media/T86i6yDyOYz7J6dPhf/giphy.gif" /> */}
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </Card.Text>
                    <Button  variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
}
