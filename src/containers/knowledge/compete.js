import React, { Component } from 'react'
import { Progress, Form, Icon, Input, Button, Row, Col, Radio, Steps, DatePicker, Checkbox, Table, Modal} from 'antd'
import './index.scss'
import classnames from "classnames"
// import language from "../../utils/param";
import Questions from "./questions"
const { TextArea } = Input;
const FormItem = Form.Item;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;
const Step = Steps.Step;
const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 14 },
};


class Complete extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
      qIndex: 0,
      percent: 2.7,
      maxIndex: 0
    }
  }

  getQuestions () {
    let item;
    if(Questions[this.state.qIndex].type === "0")  {
      item = <div className="compete-questions">
        <div style={{marginBottom: "10px"}}>{Questions[this.state.qIndex].label}</div>
        <RadioGroup>
          {Questions[this.state.qIndex].selections.map(el => {
            return <Radio value={el.value}>{el.label}</Radio>
          })}
        </RadioGroup>
      </div>
    }
    else if(Questions[this.state.qIndex].type === "1") {
      item = <div className="compete-questions">
        <div style={{marginBottom: "10px"}}>{Questions[this.state.qIndex].label}</div>
        {Questions[this.state.qIndex].selections.map(el => {
          return <div style={{marginTop: "20px"}}>
            {el.label ? <span style={{width: "80px", display: "inline-block"}}>{el.label}</span> : ""}
            <Input style={{width: "30%"}}/>
          </div>
        })}
      </div>
    }
    else if(Questions[this.state.qIndex].type === "3") {
      item = <div className="compete-questions">
        <div style={{marginBottom: "10px"}}>{Questions[this.state.qIndex].label}</div>
        <TextArea rows={4} />
      </div>
    }
    else {
      item = <div className="compete-questions">
        <div style={{marginBottom: "10px"}}>{Questions[this.state.qIndex].label}</div>
        <Row style={{marginBottom: "10px"}}>
          <Col span={6}></Col>
          {Questions[this.state.qIndex].selections.choosees.map(el => {
            return <Col span={Math.floor(16/Questions[this.state.qIndex].selections.choosees.length)}>{el.label}</Col>
          })}
        </Row>
        {Questions[this.state.qIndex].selections.contents.map(el => {
          return <RadioGroup style={{width: "100%"}}>
            <Row style={{marginBottom: "10px"}}>
              <Col span={6} style={{paddingRight: "10px"}}>{el.label}</Col>
              {Questions[this.state.qIndex].selections.choosees.map(sel => {
                return <Col span={Math.floor(16/Questions[this.state.qIndex].selections.choosees.length)}><Radio value={sel.value}></Radio></Col>
              })}
            </Row>
          </RadioGroup>
        })}
      </div>
    }
    return item;
  }

  getButtons () {
    let item;
    if(this.state.qIndex === 0) {
      item = <Button className="cph-button" type="primary" onClick={this.forwardClick.bind(this)}>Forward<Icon type="right" /></Button>
    }
    else if(this.state.qIndex === 36) {
      item = <Button.Group>
        <Button className="cph-button" type="primary" onClick={this.backwardClick.bind(this)}>
          <Icon type="left" />Backward
        </Button>
        <Button className="cph-button" type="primary" onClick={this.submitClick.bind(this)}>
          Submit<Icon type="right" />
        </Button>
      </Button.Group>
    }
    else {
      item = <Button.Group>
        <Button className="cph-button" type="primary" onClick={this.backwardClick.bind(this)}>
          <Icon type="left" />Backward
        </Button>
        <Button className="cph-button" type="primary" onClick={this.forwardClick.bind(this)}>
          Forward<Icon type="right" />
        </Button>
      </Button.Group>
    }
    return item;
  }

  submitClick () {
    location.hash = "/result"
  }

  forwardClick () {
    window.scrollTo(0, 0);
    if(this.state.qIndex < 36) {
      this.setState({
        qIndex: this.state.qIndex + 1,
        maxIndex: this.state.qIndex >= this.state.maxIndex ? this.state.qIndex + 1 : this.state.maxIndex,
        percent: this.state.qIndex >= this.state.maxIndex ? this.state.percent + 2.7 : this.state.percent
      })
    }
  }

  backwardClick () {
    this.setState({
      qIndex: this.state.qIndex - 1
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="compete">
        <div className="compete-area">
          <div className="compete-progress">
            <Progress percent={this.state.percent} status="active" showInfo={false} />
          </div>
          {this.getQuestions()}
          <div className="compete-button-area">{this.getButtons()}</div>
        </div>
      </div>
    );
  }
}

export default Complete = Form.create({
})(Complete);