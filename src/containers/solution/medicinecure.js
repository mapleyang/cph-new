import React, { Component } from 'react'
import { Tabs, Spin, message, Form, Icon, Input, Button, Row, Col, Radio, Carousel, Slider, Select  } from 'antd'
import './index.scss'
import Footer from '../footer/index';
import classname from "classnames";
import language from "../../utils/param";
const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const TabPane = Tabs.TabPane;
const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 14 },
};


class MedicineCure extends Component {
	constructor(props, context) {
    super(props)
    this.state = {
      scenes: [],
      sceneVisible: false,
      chooseSlections: [],
      imgSelected: "",
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
    const defaultZH_EN = window.ZH_EN[language.getLanguage()];
    let item;
    let array = defaultZH_EN["plan.medicine"].medicines;
    item = array.map(el => {
      return <span className={classname({
        "cure-item-selected": this.getSelectFlag(el.value)
      })} onClick={this.chooseSlections.bind(this, el)}>{el.name}</span>
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
    chooseSlections.push(value)
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
        <span className="cure-main-price-value">100 ~ 1000</span>
      </div>
    }
    return item;
  }

  startClick () {
    location.hash = "/flow";
  }

  getDescript () {
    let item;
    if(this.state.chooseSlections.length !== 0) {
      item = this.state.chooseSlections.map(el => {
        return <div className="cure-selected-descript">
          <div>{el.descript[0].name}</div>
          <div>{el.descript[0].options.map(ssel => {
            return <div className="cure-selected-descript-detail">{ssel}</div>
          })}</div>
        </div>
      })
    }
    else {
      item = <div className="cure-selected-descript">选择以下的药物方式，更加顺利戒烟</div>
    }
    return item;
  }

  imgSelected (value) {
    this.setState({
      imgSelected: value
    })
  }

  getImage () {
    let item;
    const defaultZH_EN = window.ZH_EN[language.getLanguage()];
    let medicine = defaultZH_EN["plan.medicine"];
    if(this.state.chooseSlections.length !== 0) {
      item = this.state.chooseSlections.map(el => {
        let images = this.state.imgSelected === "" ? el.images[0] : this.state.imgSelected;
        return <div>
          <img src={images} />
          <Row className="cure-image-list">
            {el.images.map(sel => {
              return <Col span={4} className="cure-image-list-item" onClick={this.imgSelected.bind(this, sel)}>
                <img src={sel} />
              </Col>
            })}
          </Row>
        </div>
      })
    }
    else {
      item = <div>
        <img src={medicine.defaultImage} />
        <Row className="cure-image-list">
          {medicine.defaultImages.map(sel => {
            return <Col span={4} className="cure-image-list-item" onClick={this.imgSelected.bind(this, sel)}>
              <img src={sel} />
            </Col>
          })}
        </Row>
      </div>
    }
    return item;
  }



  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="solution selfcure medicine">
         <div className="solution-content">
            <Row className="cure-main">
              <Col span={14} className="cure-image">
                {this.getImage()}
              </Col>
              <Col span={10}>
                <div className="cure-main-desc">
                  <div className="cure-main-name">药物戒烟</div>
                  <div className="cure-main-content medicine-main-content">通过药物的方式帮您戒掉多年的习惯。</div>
                  {this.getDescript()}
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

export default MedicineCure = Form.create({
})(MedicineCure);