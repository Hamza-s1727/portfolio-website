import "./Welcome.css"
import halftone from "../images/halftone-dots.webp"
export default function Welcome() {
    return (
        <div id="WelcomeBox">
        <div className="WelcomeMessage">
            <p className="WelcomeSentence">Hi, I'm Hamza</p>
            <div className="TypedTextBox">
                <p className="TypedText">Third Year CS & Math Student At the University of Toronto.</p>
            </div>
        </div>
        </div>
    )
}