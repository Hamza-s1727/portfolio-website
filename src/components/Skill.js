import "./Skill.css"
import React from "react"
import { motion } from 'framer-motion';

export default function Skill(props) {
    const [isHover, setIsHover] = React.useState(false)

    return (
        <a href={props.link} className="skillLink">
        <div className="SkillBox"  onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}

            
            
            
            >
            <img className="Logo" src={isHover ? props.hoverImg: props.normalImg}></img>
            <p>{props.skillName}</p>
        </div>
        </a>
    )
}