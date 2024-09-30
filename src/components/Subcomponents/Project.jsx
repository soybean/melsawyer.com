import Dot from "./Dot";
export default function Project(props) {

    return (
        <div className="mt-1">
            <Dot color={props.color} size={"small"}/>
            <div className="project-title">{props.name}</div>
            <div className="project-built grey">{props.builtWith}</div>
            <a href={props.link} className="unlink project-link grey" target="_blank" rel="noreferrer">{props.linkText}</a>
        </div>

    )

    
}