
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router-dom';
import OrigamiImages from './OrigamiImages';

import React from 'react';
import { Link } from 'react-router-dom';
import origamiData from '../../origami_data.json';


export default function OrigamiItem(props) {
    const {id} = useParams();
    const modelData = origamiData[id-1];
    const imgCreator = new OrigamiImages();
    const img = imgCreator[id];

    return <Container>
        <Link to="/origami" className="unlink"><div className="mt-3 nunito"><b>&#8592; Back to all models</b></div></Link>
        
        <div className="smaller-title">{modelData?.title ?? ""}</div>
        <Row>
            <Col xs={8}><img src={img} alt="origami image" className="img img-fluid origami-img"/></Col>
            <Col xs={4}>
                <div className="origami-info">
                <b>Name: </b>{modelData.name} <br/>
                <b>Designer: </b>{modelData.designer} <br />
                <b>Number of units: </b>{modelData.units} <br />
                <b>Geometry: </b>{modelData.geometry}
                </div>

            </Col>
        

        </Row>
        
        </Container>



}