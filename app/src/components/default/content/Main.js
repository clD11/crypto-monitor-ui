import React, { Component } from "react";
import {Container, Co, Row, Col} from "react-bootstrap";
import LineGraph from "../charts/LineGraph";
import "./Main.css"
import ResizableBox from "./ResizableBox";

class Main extends Component {
    render() {
        return (
            <Container fluid className="content-main">
                <Row className="">
                    <Col sm={12}>
                        <h1>BTC/USD</h1>>
                    </Col>
                </Row>
                <Row className="">
                    <Col sm={12}>
                        <ResizableBox>
                            <LineGraph />
                        </ResizableBox>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Main;