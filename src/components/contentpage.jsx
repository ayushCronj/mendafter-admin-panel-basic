import React, { Component } from 'react';
import { Row, Col } from 'antd';
import '../css/contentpage.css'
class contentpage extends Component {
    render() {
        return (
            <div >
                <h2><u>MendAfter Dasboard</u></h2>
                <br />
                <Row>
                    <Col span={12} className="contentpage_col" > Chart 1 </Col>
                    <Col span={12} className="contentpage_col"> Chart 2 </Col>
                    <Col span={12} className="contentpage_col"> Chart 3 </Col>
                    <Col span={12} className="contentpage_col"> Chart 4 </Col>
                </Row>
            </div>
        )
    }
}


export default contentpage;