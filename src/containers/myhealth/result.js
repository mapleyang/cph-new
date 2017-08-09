import React, { Component } from 'react'
import { Row, Col, Calendar , Timeline, Modal } from 'antd'
import './index.scss'
import Footer from '../footer/index';

class Result extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
      loading: false,
      url: "",
      current: 'mail',
    }
  }

  render() {
    return (
      <div className="result myhealth">
        <Row>
          <Col span={18} className="result-content">
            <div>连续1天戒烟成功，请继续坚持。</div>
          </Col>
          <Col span={6}>
            <div className="result-list">
              <div className="result-list-name">戒烟成果列表</div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Result;
