import React, { Component } from 'react'
import { Tabs, Spin, message, Form, Icon, Input, Button, Row, Col, Radio, Carousel, Slider, Select  } from 'antd'
import './index.scss'
import Footer from '../footer/index';
import classname from "classnames";
const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const TabPane = Tabs.TabPane;
const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 14 },
};

const medicines = [{
  label: "行为治疗方案一",
  value: "1",
  price: "100"
},{
  label: "行为治疗方案二",
  value: "2",
  price: "200",
},{
  label: "行为治疗方案三",
  value: "3",
  price: "400"
},{
  label: "行为治疗方案四",
  value: "4",
  price: "400"
}]

class MindCure extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
      scenes: [],
      sceneVisible: false,
      medicines: medicines,
      chooseSlections: []
    }
  }

  componentDidMount () {
    const { getFieldDecorator } = this.props.form;
    let scenesInit = [];
    let scene = <div><FormItem>
        <span>抽烟的场景1</span>
      </FormItem>
      <FormItem>
        {getFieldDecorator('input1')(
          <Input />
        )}
      </FormItem>
    </div>
    scenesInit.push(scene);
    this.setState({
      scenes: scenesInit
    })
  }

  sliderChange (value) {
    if(value > 0) {
      this.setState({
        sceneVisible: true
      })
    }
    else {
      this.setState({
        sceneVisible: false
      })
    }
  }

  getScenes () {
    let scenes = [];
    if(this.state.sceneVisible) {
      scenes = this.state.scenes;
    }
    return scenes;
  }

  addScenes () {
    const { getFieldDecorator } = this.props.form;
    let scenes = this.state.scenes;
    if(this.state.scenes.length !== 0) {
      let index = this.state.scenes.length + 1;
      let scene = <div>
        <FormItem>
          <span>抽烟的场景{index}</span>
        </FormItem>
        <FormItem>
          {getFieldDecorator('input' + index)(
            <Input />
          )}
        </FormItem>
      </div>
      scenes.push(scene);
      this.setState({
        scenes: scenes
      })
    }
  }

  getAddScene () {
    let add = "";
    if(this.state.sceneVisible) {
      add = <FormItem>
        <a onClick={this.addScenes.bind(this)}>添加新场景</a>
      </FormItem>
    }
    return add;
  }

  getSelection () {
    let item;
    item = this.state.medicines.map(el => {
      return <span className={classname({
        "cure-item-selected": this.getSelectFlag(el.value)
      })} onClick={this.chooseSlections.bind(this, el)}>{el.label}</span>
    })
    return item;
  }

  getSelectFlag (value) {
    let flag = false;
    this.state.chooseSlections.forEach(el => {
      if(value === el.value) {
        flag = true;
      }
    })
    return flag;
  }

  chooseSlections (value) {
    let chooseSlections = [];
    let flag = true;
    if(this.state.chooseSlections.length !== 0) {
      this.state.chooseSlections.forEach(el => {
        if(value.value === el.value) {
          flag = false;
        }
        else {
          chooseSlections.push(el)
        }
      })
    }
    if(flag) {
      chooseSlections.push(value)
    }
    this.setState({
      chooseSlections: chooseSlections
    })
  }

  getPriceItem () {
    let item = "";
    let price = 0;
    if(this.state.chooseSlections.length !== 0) {
      this.state.chooseSlections.forEach(el => {
        price += parseInt(el.price);
      })
      item = <div className="cure-main-price">
        <span className="cure-main-price-title">价格合计：</span>
        <span className="cure-main-price-mark">¥</span>
        <span className="cure-main-price-value">{price}</span>
      </div>
    }
    else {
      item = <div className="cure-main-price">
        <span className="cure-main-price-title">价格：</span>
        <span className="cure-main-price-mark">¥</span>
        <span className="cure-main-price-value">1500  </span>
      </div>
    }
    return item;
  }

  startClick () {
    location.hash = "/flow";
  }



  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="solution selfcure medicine">
        <div className="solution-content">
          <Row className="cure-main">
            <Col span={14} className="cure-image">
              <img src="mind1.jpg"/>
            </Col>
            <Col span={10}>
              <div className="cure-main-desc">
                <div className="cure-main-name">行为治疗</div>
                <div className="cure-main-content medicine-main-content">专业的心理咨询团队，改变自己的习惯，达到戒烟的目的。</div>
                {this.getPriceItem()}
                <div className="cure-main-items">
                  <div className="cure-main-item">
                    {this.getSelection()}
                  </div>
                </div>
                <Button className="cure-join" type="primary" onClick={this.startClick.bind(this)}>加入到我的戒烟计划</Button>
              </div>
            </Col>
          </Row>
          <Row className="cure-detail">
            <div className="cure-detail-content">
              <Tabs defaultActiveKey="2">
                <TabPane tab={<span><Icon type="exception" />治疗说明</span>} key="1">
                </TabPane>
                <TabPane tab={<span><Icon type="solution" />套餐说明</span>} key="2">
                </TabPane>
                <TabPane tab={<span><Icon type="medicine-box" />服务说明</span>} key="3">
                </TabPane>
              </Tabs>
            </div>
          </Row>
        </div>
      </div>
    );
  }
}

export default MindCure = Form.create({
})(MindCure);