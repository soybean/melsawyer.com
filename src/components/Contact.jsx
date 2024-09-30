import NavBar from "./Subcomponents/NavBar";

export default function Contact() {

    return <div className="center">
        <NavBar />
        <div className="page-title">contact</div>

        <div className="mt-3 mb-5"><a href="mailto:melaniensawyer@gmail.com" rel="noreferrer" target="_blank" className="unlink highlight-d-prp">send me an email</a> if you’d like to chat about cs@cu, origami, gradient-oriented command line tools, or anything else! </div>

        <div className="tiny-text">you can also find me on:</div>
        <div className="inline-block">
        <a href="https://github.com/soybean" target="_blank" rel="noreferrer" className="unlink highlight-tq ml-1 mr-1">github</a>
        <a href="https://www.linkedin.com/in/melanie-sawyer/" target="_blank" rel="noreferrer" className="unlink highlight-db ml-1 mr-1">linkedin</a>
        <a href="https://x.com/melasoybean" target="_blank" rel="noreferrer" className="unlink highlight-prp ml-1 mr-1">twitter</a>

        </div>
        </div>
}