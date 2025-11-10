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
            <h2>Work Experience</h2>
            <h3>Teaching Assistant, University of Toronto</h3>
            <h4>September 2025-Present</h4>
            <ul>
                <li>TA for the course MAT132H5: Differential Calculus for Life Sciences</li>
                <li>Duties include: Running tutorials, office hours, and Marking assignments and tests</li>
            </ul>
            <h2>Education</h2>
            <ul>
                <li> Bachelors of Science, University of Toronto</li>
                <li>Double Major in Computer Science and Mathematics</li>
                <li>current cGPA: 3.78</li>
                <li>Expected Graduation: May 2028</li>
            </ul>
        </div>
         <a href="https://cv.hsheikh.com/hs-cv.pdf" download className="cvButton">
         Download my CV
         </a>
        </ motion.div>
    )
}