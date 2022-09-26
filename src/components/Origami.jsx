import NavBar from "./Subcomponents/NavBar";
import OrigamiImage from "./Subcomponents/OrigamiImage";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import first from '../img/1.png';
import second from '../img/2.png';
import third from '../img/3.png';
import fourth from '../img/4.png';
import fifth from '../img/5.png';
import sixth from '../img/6.png';
import seventh from '../img/7.png';
import eighth from '../img/8.png';
import ninth from '../img/9.png';
import tenth from '../img/10.png';
import eleventh from '../img/11.png';
import twelfth from '../img/12.png';
export default function Origami() {

    return <div> 
        <NavBar />
        <div className="page-title">modular origami</div>
        <div className="centered mt-1 mb-3">Here's a collection of models I've made over the years. Click on each image for information and the geometry of each model. For more, <a href="https://www.instagram.com/msorigami" className="unlink highlight-d-prp" target="_blank">check out my Instagram!</a></div>
        <Container>
        <Row>
            <OrigamiImage src={first} title="Bascetta Star #1" id={1}/>
            <OrigamiImage src={second} title="Bascetta Star #1" id={2}/>
            <OrigamiImage src={third} title="Bascetta Star #1" id={3}/>
        </Row>
        <Row>
            <OrigamiImage src={fourth} title="Bascetta Star #1" id={4} />
            <OrigamiImage src={fifth} title="Bascetta Star #1" id={5}/>
            <OrigamiImage src={sixth} title="Bascetta Star #1" id={6}/>
        </Row>
        <Row>
            <OrigamiImage src={seventh} title="Bascetta Star #1" id={7}/>
            <OrigamiImage src={eighth} title="Bascetta Star #1" id={8}/>
            <OrigamiImage src={ninth} title="Bascetta Star #1" id={9}/>
        </Row>
        <Row>
            <OrigamiImage src={tenth} title="Bascetta Star #1" id={10}/>
            <OrigamiImage src={eleventh} title="Bascetta Star #1" id={11}/>
            <OrigamiImage src={twelfth} title="Bascetta Star #1" id={12}/>
        </Row>

    </Container>

    </div>
}