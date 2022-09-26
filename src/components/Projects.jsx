import NavBar from "./Subcomponents/NavBar";
import Project from "./Subcomponents/Project";
export default function Projects() {
    return <div>
        <NavBar />
        <div className="left-title">projects</div>
            <div className="mt-3">
                <Project name="cascading rainbow powerline" builtWith={"built with a weird amount of bash (and also Python)"} linkText="github.com/soybean/cascading-rainbow-powerline" link="https://github.com/soybean/cascading-rainbow-powerline" color="light-g"/>
                <Project name="bawk, a versatile text-processing language" builtWith={"built with OCaml, C, & LLVM"} linkText="github.com/soybean/bawk" link="https://github.com/soybean/bawk" color="g"/>
                <Project name="50 states of birds: an interactive birdwatching tool" builtWith={"built with d3 & python"} linkText="github.com/soybean/50-states-of-birds" link="https://github.com/soybean/50-states" color="tq"/>
                <Project name="columbia outdoors club site" builtWith="built with html/css/js" linkText="https://cuoutdoors.github.io/" link="https://cuoutdoors.github.io/" color="db"/>
                <Project name="devfest 2019" builtWith="built with html/css/js" linkText="devfe.st" link="https://web.archive.org/web/20190128220626/https://devfe.st/" color="prp" />
            </div>
    </div>
}