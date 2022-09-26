import React from 'react';
import Dot from "./Dot";

export default function SplashyName() {
    return <div><div className="title-text">Mel Sawyer</div>
        <div className="title-circles">
            <Dot color="light-g" location="first"/>
            <Dot color="g" location="second"/>
            <Dot color="tq" location="third"/>
            <Dot color="db" location="fourth"/>
        </div>
    </div>
}