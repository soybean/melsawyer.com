import React, { useState } from 'react';


export default function Dot(props) {

    const [isHovering, setIsHovering] = useState(false);

    const onMouseEnter = () => {
        setIsHovering(true);
    }
    const onMouseLeave = () => {
        setIsHovering(false);
    }
      let className = isHovering ? "dot hovered-dot " + props.color + " " + props.location : "dot " + props.color + " " + props.location;
      className = className + " " + props.size;
      if (props.active) {
          className = className + " active-nav";
      }
      return <span className={className} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}></span>
}