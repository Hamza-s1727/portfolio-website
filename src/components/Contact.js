import "./Contact.css"
import { motion } from "framer-motion"
import { useState } from "react"
import HCaptcha from "@hcaptcha/react-hcaptcha"

export default function Contact() {
    const [captchaToken, setCaptchaToken] = useState(null);

    function handleCaptchaSubmit(token) {
        setCaptchaToken(token);
    }

    // Web3Forms free hCaptcha key
    const HCAPTCHA_SITE_KEY = "50b2fe65-b00b-4b9e-ad62-3ba471098be2";

    return (
        <>
        <h2 className="contactHeader"> Contact </h2>
        <form action="https://api.web3forms.com/submit" method="POST"
        onSubmit={(event) => {
            if (!captchaToken) {
                event.preventDefault();
                alert("Please complete the captcha.")
            }
        }}>
        <motion.div className="contactContainer"
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0, transition: {delay: 0.25, duration: 0.5}}}
            viewport={{once: false, amount: .1}}
        >
            <input type="hidden" name="access_key" value="4f4dc5c1-98e4-4d23-9990-ca79ed83f788" />

            <label htmlFor="name" className="formLabel">Name:</label><br/>
            <input type="text" id="name" className="contactInput" placeholder="Anonymous" name="name" /><br/>

            <label htmlFor="email" className="formLabel">Email:</label><br/>
            <input type="email" id="email" className="contactInput" placeholder="email@domain.com" name="email" required /><br/>

            <label htmlFor="message" className="formLabel">Message:</label><br/>
            <textarea id="message" rows="7" className="contactInput" placeholder="Type your message here." name="message" required></textarea><br/>

            <input type="checkbox" name="botcheck" className="hidden" style={{display: "none"}} />

            <div className="captchaWrapper">
                <HCaptcha
                    sitekey={HCAPTCHA_SITE_KEY}
                    onVerify={handleCaptchaSubmit}
                    onExpire={() => setCaptchaToken(null)}
                    reCaptchaCompat={false}
                />
            </div>

            <input type="submit" value="Submit" className="submitButton" disabled={!captchaToken} />
        </motion.div>
        </form>
        </>
    )
}
