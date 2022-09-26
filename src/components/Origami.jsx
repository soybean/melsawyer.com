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
import thirteenth from '../img/13.png';
import fourteenth from '../img/14.png';
import fifteenth from '../img/15.png';
import sixteenth from '../img/16.png';
import seventeenth from '../img/17.png';
import eighteenth from '../img/18.png';
import nineteenth from '../img/19.png';
import twenty from '../img/20.png';
import twentyOne from '../img/21.png';
import twentyTwo from '../img/22.png';
import twentyThree from '../img/23.png';
import twentyFour from '../img/24.png';

export default function Origami() {

    return <div> 
        <NavBar />
        <div className="page-title">modular origami</div>
        <div className="centered mt-1 mb-3">Here's a collection of models I've made over the years. Click on each image for information and the geometry of each model. For more, <a href="https://www.instagram.com/msorigami" className="unlink highlight-d-prp" target="_blank">check out my Instagram!</a></div>
        <Container>
        <Row>
            <OrigamiImage src={first} id={1}/>
            <OrigamiImage src={second} id={2}/>
            <OrigamiImage src={third} id={3}/>
        </Row>
        <Row>
            <OrigamiImage src={fourth} id={4} />
            <OrigamiImage src={fifth} id={5}/>
            <OrigamiImage src={sixth} id={6}/>
        </Row>
        <Row>
            <OrigamiImage src={seventh} id={7}/>
            <OrigamiImage src={eighth} id={8}/>
            <OrigamiImage src={ninth} id={9}/>
        </Row>
        <Row>
            <OrigamiImage src={tenth} id={10}/>
            <OrigamiImage src={eleventh} id={11}/>
            <OrigamiImage src={twelfth} id={12}/>
        </Row>
        <Row>
            <OrigamiImage src={thirteenth} id={13}/>
            <OrigamiImage src={fourteenth} id={14}/>
            <OrigamiImage src={fifteenth} id={15}/>
        </Row>
        <Row>
            <OrigamiImage src={sixteenth} id={16}/>
            <OrigamiImage src={seventeenth} id={17}/>
            <OrigamiImage src={eighteenth} id={18}/>
        </Row>
        <Row>
            <OrigamiImage src={nineteenth} id={19}/>
            <OrigamiImage src={twenty} id={20}/>
            <OrigamiImage src={twentyOne} id={21}/>
        </Row>
        <Row>
            <OrigamiImage src={twentyTwo} id={22}/>
            <OrigamiImage src={twentyThree} id={23}/>
            <OrigamiImage src={twentyFour} id={24}/>
        </Row>

    </Container>

    </div>
}