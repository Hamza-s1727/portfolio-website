import BlackjackImg from "../images/blackjack.png"
import Project from "./Project"


export default function Projects () {
    return (
        <div className="ProjectsContainer">
            <Project 
            img={BlackjackImg}
            name="Blackjack"
            description="Blackjack made using HTML, CSS with JS backend. This is a test to check wrapping"
            />
        </div>
    )

}