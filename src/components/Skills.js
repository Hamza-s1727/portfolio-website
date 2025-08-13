import Skill from "./Skill"
import "./Skills.css"

import { motion } from "framer-motion"

import pythonWhite from "../images/python-black.png"
import python from "../images/python.png"

import reactWhite from "../images/react-white.png"
import react from "../images/react.png"

import javaWhite from "../images/java-white.png"
import java from "../images/java.png"

import c from "../images/C.png"
import cWhite from "../images/c-white.png"

import html from "../images/html.png"
import htmlWhite from "../images/html-white.png"

import css from "../images/css.png"
import cssWhite from "../images/css-white.png"


export default function Skills() {
    return(
        <motion.div className="SkillsBox"
        
        initial={{opacity: 0, y: 50}}
        whileInView={{opacity: 1, y: 0, transition: {delay: 0.25, duration: 0.5}}}
        viewport={{once: false, amount: .1}}
        
        >
        <h2 className="SkillsHeader">Skills</h2>
        <div className="Skills">
        <Skill 
        link="https://python.org"
        hoverImg={python}
        normalImg={pythonWhite}
        skillName="python"/>

        <Skill 
        link="https://react.dev/"
        hoverImg={react}
        normalImg={reactWhite}
        skillName="React.js"/>

        <Skill 
        link="https://www.java.com/"
        hoverImg={java}
        normalImg={javaWhite}
        skillName="Java"/>

        <Skill 
        link="https://en.cppreference.com/w/c/language.html"
        hoverImg={c}
        normalImg={cWhite}
        skillName="C"/>

        <Skill 
        link="https://developer.mozilla.org/en-US/docs/Web/HTML"
        hoverImg={html}
        normalImg={htmlWhite}
        skillName="HTML"/>

        <Skill 
        link="https://developer.mozilla.org/en-US/docs/Web/HTML"
        hoverImg={css}
        normalImg={cssWhite}
        skillName="CSS"/>


      </div>
    </motion.div>
    )

}