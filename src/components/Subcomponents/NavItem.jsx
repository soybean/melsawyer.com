import React from 'react';
import { Link } from 'react-router-dom';
import Dot from './Dot';
import Resume from '../../resume.pdf';
import { useLocation } from 'react-router-dom';

export default function NavItem(props) {
   const location = useLocation();

   const isActive = () => {
      if (props.title === "home" && location.pathname === "/"){
         return true;
      }
      return location.pathname === "/" + props.title;
   }

   return (
      <Link className={"nav-item"} reloadDocument={props.title==="resume"} to={props.title==="resume" ? Resume : "/" + (props.title === "home" ? "" : props.title)}><div className="inline-block">
      <Dot color={props.color} size="xs" active={isActive()}/>
      <div className="nav-item-text">{props.title}</div>
  </div></Link>
   )
}