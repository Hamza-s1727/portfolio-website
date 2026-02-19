import { useState, useEffect, useCallback} from "react";
import "./Welcome.css";


export default function Welcome() { 
    const sentences = ["Third Year CS & Math Student.", "Building Interactive Web Experiences in React.", "Passionate about Analysis, Algorithms and Systems Programming."]
    const [index, setIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);
    const [textIndex, setTextIndex] = useState(0);
    const text = sentences[textIndex];


    const modifyText = useCallback(() => {
        if (!deleting && index < text.length) {
        setIndex(index + 1);
        } else if (deleting && index > 0) {
        setIndex(index - 1);
        } else if (!deleting && index === text.length) {
        setTimeout(() => setDeleting(true), 1000);
        } else if (deleting && index === 0) {
        setDeleting(false);
        setTextIndex((textIndex + 1) % sentences.length);
        }
    }, [deleting, index, textIndex, text, sentences.length])

    useEffect(() => {
    const speed = 35;
    const id = setTimeout(modifyText, speed);

    return () => clearTimeout(id);
    }, [modifyText]);

    return (
    <div id="WelcomeBox">
        <div className="WelcomeMessage">
        <p className="WelcomeSentence">Hi, I'm Hamza</p>

        <div className="TypedTextBox">
            <p className="TypedText">
            {text.slice(0, index)}
            <span className="TextCursor"></span>
            </p>
        </div>
        </div>
    </div>
    );
}
