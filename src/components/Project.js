import "./Project.css"

export default function Project ({img, name, description, hasGithub= false, hasDemo = false}) {
    return (
        <div className="ProjectContainer">
            <div className="ProjectBox">
                <div className="ProjectImageContainer">
                    <img className="ProjectImage" src={img} alt={name +  "_img"}></img>
                </div>
                <h3 className="ProjectName">{name}</h3>
                <p className="ProjectDescription">{description}</p>
                <div className="ProjectBottom">
                    {hasGithub && <a href={hasGithub} className="Github" aria-label={`Open ${name} on GitHub`} target="_blank" rel="noopener noreferrer"></a>}
                    {hasDemo && 
                    <a className="Demo" href={hasDemo}>View Demo</a> }
                </div>
            </div>
        </div>
    )
}