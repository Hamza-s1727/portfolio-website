import Skill from "./Skill"
import "./Skills.css"

import pythonWhite from "../images/python-black.png"
import python from "../images/python.png"

import reactWhite from "../images/react-white.png"
import react from "../images/react.png"

import javaWhite from "../images/java-white.png"
import java from "../images/java.png"


export default function Skills() {
    return(
        <div className="SkillsBox">
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


      </div>
    </div>
    )

}