import React from 'react';
import NavItem from './NavItem';

export default function NavBar() {
    return <div className="mt-1 center">
        <NavItem title="home" color="light-g"/>
        <NavItem title="about" color="g"/>
        <NavItem title="projects" color="tq"/>
        <NavItem title="resume" color="db"/>
        <NavItem title="origami" color="prp"/>
        <NavItem title="contact" color="d-prp"/>
    </div>
}