import "./About.css"

import { motion } from "framer-motion"

export default function About () {
    return (
        <motion.div 
        initial={{opacity: 0, y: 50}}
        whileInView={{opacity: 1, y: 0, transition: {delay: 0.25, duration: 0.5}}}
        viewport={{once: false, amount: .1}}
        
        >
        <div className="About">
            <h2 className="aboutHeader">About</h2>
            <h2>Education</h2>
            <ul>
                <li> Bachelors of Science, University of Toronto</li>
                <li>Double Major in Computer Science and Mathematics</li>
                <li>current cGPA: 3.78</li>
                <li>Expected Graduation: May 2028</li>
            </ul>
        </div>
         <form>
            <input type="submit" value="Download my CV" className="cvButton"></input>
        </form>
        </ motion.div>
    )
}