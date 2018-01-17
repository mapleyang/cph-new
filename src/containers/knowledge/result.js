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


class Result extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
      qIndex: 0,
      percent: 2.7,
      maxIndex: 0
    }
  }

 

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="compete">
        <div className="compete-area" style={{textAlign: "center"}}>
          <img style={{marginTop: "60px"}} src="./result.png"/>
          <div className="rate">65分</div>
        </div>
      </div>
    );
  }
}

export default Result = Form.create({
})(Result);