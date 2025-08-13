import BlackjackImg from "../images/blackjack.png"
import Project from "./Project"
import "./Projects.css"
import { motion } from "framer-motion"


export default function Projects () {
    return (
        <motion.div className="ProjectsContainer"
        initial={{opacity: 0, y: 50}}
        whileInView={{opacity: 1, y: 0, transition: {delay: 0.25, duration: 0.5}}}
        viewport={{once: false, amount: .1}}
        
        
        >
            <h2 className="ProjectsHeader"> Projects </h2>
            <Project 
            img={BlackjackImg}
            name="Blackjack"
            description="Blackjack made using HTML, CSS with JS backend. This is a test to check wrapping"
            />
        </ motion.div>
    )

}