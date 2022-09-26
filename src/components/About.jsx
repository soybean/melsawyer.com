import NavBar from "./Subcomponents/NavBar";
import TeachingItem from "./Subcomponents/TeachingItem";
export default function About() {

    return <div> 
        <NavBar />
        <div className="restrict-left mb3">
        <div className="left-title">about</div>
                I'm currently a software engineer at <a className="unlink highlight-lg" href="https://www.etsy.com" target="_blank">Etsy</a> working on the Payments team. I work primarily in React/Redux, Typescript, and PHP. I'm also on the board of directors for <a href="https://www.origamiusa.org" className="unlink highlight-g" target="_blank">OrigamiUSA</a> for the 2022-2024 term. I studied computer science and applied math in the engineering school at <a className="unlink highlight-tq" href="https://www.engineering.columbia.edu/" target="_blank">Columbia</a>, and graduated in May 2022. While at Columbia, I served as a teaching assistant for the following courses:
                <TeachingItem name="COMS 1007: Honors Intro to Computer Science" color="light-g" />
                <TeachingItem name="COMS 1006: Intro to Programming for Engineers" color="g" />
                <TeachingItem name="COMS 3261: Computer Science Theory" color="tq" />
                <TeachingItem name="COMS 4170: User Interface Design" color="db" />
                <TeachingItem name="HSAM 2901: Data: Past, Present, and Future" color="prp" />
                <div className="mt-4 mb-3">I've also worked at <a className="unlink highlight-db" target="_blank" href="https://www.skillshare.com">Skillshare</a>, <a href="https://www.nist.gov/" className="unlink highlight-prp" target="_blank">NIST</a>, and was a <a href="https://www.hackny.org" className="unlink highlight-d-prp" target="_blank">hackNY fellow</a> in the class of 2017.</div>
                </div>
    </div>
}