import BlackjackImg from "../images/blackjack.png"
import Project from "./Project"
import "./Projects.css"


export default function Projects () {
    return (
        <div className="ProjectsContainer">
            <h2 className="ProjectsHeader"> Projects </h2>
            <Project 
            img={BlackjackImg}
            name="Blackjack"
            description="Blackjack made using HTML, CSS with JS backend. This is a test to check wrapping"
            />
        </div>
    )

}