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
          <div className="module-sub-label">学习戒烟知识／Understanding smoking</div>
          <div><a onClick={this.linkClick.bind(this, "disease")}><span>●</span><span>烟草和健康/Tobacco and health</span></a></div>
          <div><a onClick={this.linkClick.bind(this, "truth")}><span>●</span><span>戒烟问题游戏／Quitting quiz game</span></a></div>
          <div className="module-sub-label">戒烟画图活动/Drawing a picture</div>
          <div><a onClick={this.linkClick.bind(this, "picture")}><span>●</span><span>参加戒烟涂鸦活动</span></a></div>
          <div className="module-sub-label">写戒烟文章/Writing an article</div>
          <div><a><span>●</span><span>与孩子一起写戒烟文章</span></a></div>
          <div className="module-sub-label">参与戒烟公益活动/Volunteer activity</div>
          <div><a><span>●</span><span>志愿者招募/Recruiting Volunteers</span></a></div>
          <div><a><span>●</span><span>新活动项目／New activities</span></a></div>
          <div><a><span>●</span><span>热门活动/Activities on spotlight</span></a></div>
          <div><a><span>●</span><span>我要发起活动/Create a new activity</span></a></div>
          <div><a><span>●</span><span>活动点子/ Volunteer activity ideas</span></a></div>
        </div>
        break;
      case "help":
        item = <div className="module-label">
          <div>帮助他人戒烟/Helping others quit</div>
          <div><a><span>●</span><span>分享经验和故事/Sharing tips/stories</span></a></div>
          <div><a><span>●</span><span>解答戒烟问题/Answering quit smoking questions</span></a></div>
          <div><a><span>●</span><span>成为戒烟辅导员/Quit smoking counselor</span></a></div>
          <div><a><span>●</span><span>成为戒烟教练(专业人员)/Quit smoking coach</span></a></div>
        </div>
        break;
      case "commware":
        item = <div className="module-label">
          <div className="module-sub-label">参与戒烟公益活动/Volunteer activity</div>
          <div><a><span>●</span><span>志愿者招募/Recruiting Volunteers</span></a></div>
          <div><a><span>●</span><span>新活动项目／New activities</span></a></div>
          <div><a><span>●</span><span>热门活动/Activities on spotlight</span></a></div>
          <div><a><span>●</span><span>我要发起活动/Create a new activity</span></a></div>
          <div><a><span>●</span><span>活动点子/ Volunteer activity ideas</span></a></div>
        </div>
        break;
      case "company":
        item = <div className="module-label">
          <div className="module-sub-label">公司戒烟策划/Contributing to your company smoking cessation program</div>
          <div><a><span>●</span><span>报名和公司一起策划戒烟活动</span></a></div>
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