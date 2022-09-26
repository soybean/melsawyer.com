
export default function TeachingItem(props) {

    return (
        <div className="ml-3">
            <span className={"small-circ " + props.color}/>
            <div className="teaching-item-name mt-1">{props.name}</div>
        </div>

    )

    
}