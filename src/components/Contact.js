import "./Contact.css"
import { motion } from "framer-motion"

export default function Contact() {
    return (
        <form>
        <motion.div className="contactContainer"
        
        initial={{opacity: 0, y: 50}}
        whileInView={{opacity: 1, y: 0, transition: {delay: 0.25, duration: 0.5}}}
        viewport={{once: false, amount: .1}}
        
        >
            <h2 className="contactHeader"> Contact </h2>

            <label htmlFor="name" className="formLabel" >Name:</label><br/>
            <input type="text" id="name" className="contactInput" placeholder="Name"></input><br/>
            <label htmlFor="email" className="formLabel" >Email:</label><br/>
            <input type="email" id="email" className="contactInput" placeholder="email@domain.com"></input><br/>
            <label htmlFor="message" className="formLabel">Message:</label><br/>
            <textarea id="message" rows="7" className="contactInput" placeholder="Type your message here."></textarea><br/>

            <input type="submit" value="Submit" className="submitButton"></input>


        </motion.div>
        </form>
    )
}