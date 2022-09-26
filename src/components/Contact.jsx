import NavBar from "./Subcomponents/NavBar";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import {
  faCoffee,
  faCog,
  faSpinner,
  faQuoteLeft,
  faSquare,
  faCheckSquare
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export default function Contact() {

    return <div className="center">
        <NavBar />
        <div className="page-title">contact</div>

        <div className="mt-3 mb-5"><a href="mailto:melaniensawyer@gmail.com" target="_blank" className="unlink highlight-d-prp">send me an email</a> if you’d like to chat about cs@cu, origami, gradient-oriented command line tools, or anything else! </div>
        <div className="tiny-text">you can also find me on:</div>
        <div className="inline-block">
            <a href="" className="unlink highlight-tq ml-1 mr-1">github</a>
            <a href="" className="unlink highlight-db ml-1 mr-1">linkedin</a>
            <a href="" className="unlink highlight-prp ml-1 mr-1">twitter</a>

        {/* <div className="contact-method tq"><FontAwesomeIcon icon={faGithub} size="2x"/></div>
        <div className="contact-method db"><FontAwesomeIcon icon={faLinkedin} size="2x"/></div>
        <div className="contact-method prp"><FontAwesomeIcon icon={faTwitter} size="2x"/></div> */}
        </div>
        </div>
}