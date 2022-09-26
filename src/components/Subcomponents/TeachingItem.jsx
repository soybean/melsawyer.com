
export default function TeachingItem(props) {

    return (
        <div className="ml-3 mt-3">
            <span className={"small-circ " + props.color}/>
            <div className="teaching-item-name">{props.name}</div>
        </div>

    )

    
}