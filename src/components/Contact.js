import "./Contact.css"
import { motion } from "framer-motion"

export default function Contact() {
    return (
        <>
        <h2 className="contactHeader"> Contact </h2>
        <form action="https://api.web3forms.com/submit" method="POST">
        <motion.div className="contactContainer"
        
        initial={{opacity: 0, y: 50}}
        whileInView={{opacity: 1, y: 0, transition: {delay: 0.25, duration: 0.5}}}
        viewport={{once: false, amount: .1}}
        
        >
            <input type="hidden" name="access_key" value="357a0b9e-4b96-46f5-8083-22be0fca07a9"></input>

            <label htmlFor="name" className="formLabel" >Name:</label><br/>
            <input type="text" id="name" className="contactInput" placeholder="Anonymous" name="name"></input><br/>
            <label htmlFor="email" className="formLabel" >Email:</label><br/>
            <input type="email" id="email" className="contactInput" placeholder="email@domain.com" name="email" required></input><br/>
            <label htmlFor="message" className="formLabel">Message:</label><br/>
            <textarea id="message" rows="7" className="contactInput" placeholder="Type your message here." name="message" required></textarea><br/>

            <input type="checkbox" name="botcheck" class="hidden" style={{display: "none"}}></input>

            <input type="submit" value="Submit" className="submitButton"></input>


        </motion.div>
        </form>
        </>
    )
}