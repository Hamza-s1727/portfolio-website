import ScheduleImg from "../images/queue.jpg"
import WebsiteImg from "../images/website.png"
import DrMarioImg from "../images/drmario.png"
import PainterImg from "../images/painter.png"
import RecallImg from "../images/recaller.png"


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

            <div className="Projects">
            <Project 
            img={WebsiteImg}
            name="Personal Website"
            description="The current website you are on was created with React using CRA. Animations done with the framer motion
            library.
            "
            hasGithub={"https://github.com/Hamza-s1727/portfolio-website"}
            />

            <Project
            img={PainterImg}
            name="PaintByClaude"
            description="A paint save file program made in JavaFX refactored to have the claude API generate custom paint files
            Private repo avaliable upon business request.
            "
            hasDemo={"https://paint.hsheikh.com"}
            />

            <Project
            img={DrMarioImg}
            name="Dr Mario in Assembly"
            description="A recreation of Dr. Mario done in MIPS assembly, including special features like animations, ability to 
            view the next piece and auto dropping. Private repo avaliable on request.
            "
            hasDemo={"/drmario"}
            />

            <Project
            img={ScheduleImg}
            name="Memory Management System"
            description="A recreation of a multi level memory manager, including virtual-to-physical address translation, 
            and recreation of 4 page replacement algorithms (FIFO, LRU, ClOCK and ARC). Private repo
            avaliable on request."
            />

            <Project
            img={RecallImg}
            name="Spaced Repetition Review System"
            description="Implement spaced repetition easily with a simple review system. This program automates the process by
            connecting your concepts to a postgreSQL server, and automatically displays them with increasing intervals"
            hasGithub={"https://github.com/Hamza-s1727/spaced-recall"}
            />
            </div>

        </ motion.div>
    )

}