import React, { Component } from 'react';
import { Row, Col } from 'antd';
import '../css/App.css'
class footer extends Component {
    render() {
        return (
            <div >
                <Row>
                    <Col span={6}> </Col>
                    <Col span={6}> Menu
                    <ul>
                            <li> Dashboard </li>
                        </ul>
                    </Col>
                    <Col span={6}> Contact Info </Col>
                    <Col span={6}> Other Info </Col>
                </Row>
            </div>
        )
    }
}


export default footer;