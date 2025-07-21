import "./Project.css"

export default function Project (props) {
    return (
        <div className="ProjectContainer">
            <div className="ProjectBox">
                <div className="ProjectImageContainer">
                    <img className="ProjectImage" src={props.img}></img>
                </div>
                <h3 className="ProjectName">{props.name}</h3>
                <p className="ProjectDescription">{props.description}</p>
                <button className="Github"></button>
            </div>
        </div>
    )
}