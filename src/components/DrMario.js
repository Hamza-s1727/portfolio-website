import "./DrMario.css"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function DrMario() {
    return (
        <>
        <motion.div
        initial={{opacity: 0, y: 50}}
        whileInView={{opacity: 1, y: 0, transition: {delay: 0.25, duration: 0.5}}}
        viewport={{once: false, amount: .1}}
        />

         <Link className="Link" to="/">
         <header className="DrMarioHome">
            <h2>Back to Homepage</h2>
        </header>
         </Link>
        <div className="DrMarioContainer">
            <div className="DrMarioIntro">
                <h1 className="DrMarioHeader">Dr Mario in MIPS Assembly</h1>
                <video src="drmario.mp4" autoPlay loop muted></video>
            </div>
            <p>A fully playable version of Dr Mario. Entirely in MIPS assembly. Due to a 
                (very small) amount of copyrighted code the file is left in a private repo and
                is avaliable on request for business purposes. The rest of this page is a guide
                to run the program on a local computer.
            </p>
            <h2 className="DrMarioHeader">Required Files</h2>
            <p> You will need a MIPS simulator with a bitmap display feature. MARS is the most popular program and
                usable, However I highly reccomend using Saturn as the program was designed with this IDE in mind and
                has the least likelihood of running into errors. Specifically, I reccomend&nbsp;
                <a href="https://github.com/1whatleytay/saturn/releases/tag/app-v0.1.10">Saturn V0.1.10</a>.
            </p>
            <h2 className="DrMarioHeader">Using the Program in Saturn</h2>
            <p>Once you have access to the .asm file and have it opened in Saturn, run the program, then head to the "bitmap" display, and ensure that
                the display width and height are both set to 64, and units are set to 2. Finally, make sure that the global pointer
                ($gp) is set to 0x10008000.
            </p>
            <h2 className="DrMarioHeader">Controls and Info </h2>
            <p >A and D move the capsules left and right. S will auto drop the capsule into the given position. W will change the
                orientation of the capsule. Viruses are off colored versions of the 3 main colors. The program ends
                Once all viruses have been cleared. The scoring system is as follows:
            </p>
            <ul>
                <li> A standard four in a row is worth 10 points</li>
                <li>An additional 10 points is given for each extra in a row. For example a 5 in a row is worth 20 points</li>
                <li>An additional 5 points is given for each virus killed in the row</li>
                <li>As your score increases, the speed at which the capsule falls increases</li>
            </ul>
        </div>
        </>
    )
}