import React, { Component } from 'react'
import { Popover, Spin, message, Form, Icon, Input, Button, Row, Col, Radio, Carousel, Slider, Select ,Card ,Tabs, Modal  } from 'antd'
import './index.scss'
import Footer from '../footer/index';
import language from "../../utils/param";
import classnames from "classnames";
const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const TabPane = Tabs.TabPane;
const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 14 },
};

class World extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
       moduleFlag: "child"
    }
  }

  moduleClick (value) {
    this.setState({
      moduleFlag: value
    })
  }

  linkClick (value) {
    location.hash = "/" + value
  }

  getContent () {
    let item = "";
    switch(this.state.moduleFlag) {
      case "child":
        item = <div className="module-label">
          <div className="module-sub-label">学习戒烟知识</div>
          <Row className="world-item" onClick={this.linkClick.bind(this, "disease")}>
            <Col span={6} className="world-item-img">
              <img src="./family.jpg" /> 
            </Col>
            <Col span={18} className="world-item-content">
              <div className="world-item-content-title">烟草和健康</div>
              <div className="world-item-content-label"></div>
            </Col>
          </Row>
          <Row className="world-item" onClick={this.linkClick.bind(this, "truth")}>
            <Col span={6} className="world-item-img">
              <img src="./game.jpg" /> 
            </Col>
            <Col span={18} className="world-item-content">
              <div className="world-item-content-title">戒烟问题游戏</div>
              <div className="world-item-content-label"></div>
            </Col>
          </Row>
          <div className="module-sub-label">戒烟画图活动</div>
          <Row className="world-item" onClick={this.linkClick.bind(this, "picture")}>
            <Col span={6} className="world-item-img">
              <img src="./picture.jpg" /> 
            </Col>
            <Col span={18} className="world-item-content">
              <div className="world-item-content-title">参加戒烟涂鸦活动</div>
              <div className="world-item-content-label"></div>
            </Col>
          </Row>
          <div className="module-sub-label">写戒烟文章</div>
          <Row className="world-item" onClick={this.linkClick.bind(this, "artical")}>
            <Col span={6} className="world-item-img">
              <img src="./artical.jpg" /> 
            </Col>
            <Col span={18} className="world-item-content">
              <div className="world-item-content-title">与孩子一起写戒烟文章</div>
              <div className="world-item-content-label"></div>
            </Col>
          </Row>
          <div className="module-sub-label">参与戒烟公益活动</div>
          <Row className="world-item" onClick={this.linkClick.bind(this, "volunteer")}>
            <Col span={6} className="world-item-img">
              <img src="./volunteerm.jpg" /> 
            </Col>
            <Col span={18} className="world-item-content">
              <div className="world-item-content-title">志愿者招募</div>
              <div className="world-item-content-label"></div>
            </Col>
          </Row>
          <Row className="world-item" onClick={this.linkClick.bind(this, "hot")}>
            <Col span={6} className="world-item-img">
              <img src="./hot.jpg" /> 
            </Col>
            <Col span={18} className="world-item-content">
              <div className="world-item-content-title">热门戒烟活动</div>
              <div className="world-item-content-label"></div>
            </Col>
          </Row>
          <Row className="world-item" onClick={this.linkClick.bind(this, "public")}>
            <Col span={6} className="world-item-img">
              <img src="./public.jpg" /> 
            </Col>
            <Col span={18} className="world-item-content">
              <div className="world-item-content-title">我要发起活动</div>
              <div className="world-item-content-label"></div>
            </Col>
          </Row>
          <Row className="world-item" onClick={this.linkClick.bind(this, "idea")}>
            <Col span={6} className="world-item-img">
              <img src="./idea.jpg" /> 
            </Col>
            <Col span={18} className="world-item-content">
              <div className="world-item-content-title">活动点子</div>
              <div className="world-item-content-label"></div>
            </Col>
          </Row>
        </div>
        break;
      case "help":
        item = <div className="module-label">
          <div className="module-sub-label">帮助他人戒烟</div>
          <Row className="world-item" onClick={this.linkClick.bind(this, "share")}>
            <Col span={6} className="world-item-img">
              <img src="./share.jpg" /> 
            </Col>
            <Col span={18} className="world-item-content">
              <div className="world-item-content-title">分享经验和故事</div>
              <div className="world-item-content-label"></div>
            </Col>
          </Row>
          <Row className="world-item" onClick={this.linkClick.bind(this, "question")}>
            <Col span={6} className="world-item-img">
              <img src="./anwwer.jpg" /> 
            </Col>
            <Col span={18} className="world-item-content">
              <div className="world-item-content-title">解答戒烟问题</div>
              <div className="world-item-content-label"></div>
            </Col>
          </Row>
          <Row className="world-item" onClick={this.linkClick.bind(this, "coach")}>
            <Col span={6} className="world-item-img">
              <img src="./coach.jpg" /> 
            </Col>
            <Col span={18} className="world-item-content">
              <div className="world-item-content-title">成为戒烟教练(专业人员)</div>
              <div className="world-item-content-label"></div>
            </Col>
          </Row>
        </div>
        break;
      case "commware":
        item = <div className="module-label">
          <div className="module-sub-label">参与戒烟公益活动</div>
          <Row className="world-item" onClick={this.linkClick.bind(this, "volunteer")}>
            <Col span={6} className="world-item-img">
              <img src="./volunteerm.jpg" /> 
            </Col>
            <Col span={18} className="world-item-content">
              <div className="world-item-content-title">志愿者招募</div>
              <div className="world-item-content-label"></div>
            </Col>
          </Row>
          <Row className="world-item" onClick={this.linkClick.bind(this, "hot")}>
            <Col span={6} className="world-item-img">
              <img src="./hot.jpg" /> 
            </Col>
            <Col span={18} className="world-item-content">
              <div className="world-item-content-title">热门戒烟活动</div>
              <div className="world-item-content-label"></div>
            </Col>
          </Row>
          <Row className="world-item" onClick={this.linkClick.bind(this, "public")}>
            <Col span={6} className="world-item-img">
              <img src="./public.jpg" /> 
            </Col>
            <Col span={18} className="world-item-content">
              <div className="world-item-content-title">我要发起活动</div>
              <div className="world-item-content-label"></div>
            </Col>
          </Row>
          <Row className="world-item" onClick={this.linkClick.bind(this, "idea")}>
            <Col span={6} className="world-item-img">
              <img src="./idea.jpg" /> 
            </Col>
            <Col span={18} className="world-item-content">
              <div className="world-item-content-title">活动点子</div>
              <div className="world-item-content-label"></div>
            </Col>
          </Row>
        </div>
        break;
      case "company":
        item = <div className="module-label">
          <div className="module-sub-label">公司戒烟策划</div>
          <Row className="world-item" onClick={this.linkClick.bind(this, "company")}>
            <Col span={6} className="world-item-img">
              <img src="./signUp.jpg" /> 
            </Col>
            <Col span={18} className="world-item-content">
              <div className="world-item-content-title">报名和公司一起策划戒烟活动</div>
              <div className="world-item-content-label"></div>
            </Col>
          </Row>
        </div>
        break;
    }
    return item;
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="world">
        <div className="world-module">
          <Row>
            <Col span={6}>
              <div className={classnames({
                "world-module-item": true,
                "module-help": true,
                "module-selected": this.state.moduleFlag === "help"
              })} onClick={this.moduleClick.bind(this, "help")}>帮助他人戒烟</div>
            </Col>
            <Col span={6}>
              <div className={classnames({
                "world-module-item": true,
                "module-child": true,
                "module-selected": this.state.moduleFlag === "child"
              })} onClick={this.moduleClick.bind(this, "child")}>与孩子一起创建无烟世界</div>
            </Col>
            <Col span={6}>
              <div className={classnames({
                "world-module-item": true,
                "module-commware": true,
                "module-selected": this.state.moduleFlag === "commware"
              })} onClick={this.moduleClick.bind(this, "commware")}>参与戒烟公益活动</div>
            </Col>
            <Col span={6}>
              <div className={classnames({
                "world-module-item": true,
                "module-company": true,
                "module-selected": this.state.moduleFlag === "company"
              })} onClick={this.moduleClick.bind(this, "company")}>公司戒烟策划</div>
            </Col>
          </Row>
        </div>
        <div className="module-content">
          <div className="module-area">
              {this.getContent()}
          </div>
        </div>
      </div>
    );
  }
}

export default World = Form.create({
})(World);