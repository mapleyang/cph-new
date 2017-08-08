import React, { Component } from 'react'
import { Popover, Spin, message, Form, Icon, Input, Button, Row, Col, Radio, Carousel, Upload, Slider, Select ,Card ,Tabs, Modal  } from 'antd'
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
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 14,
      offset: 6,
    },
  },
};

class Volunteer extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
      upVisible: false,
      num: 5
    }
  }

  uploadClick () {
    this.setState({
      upVisible: true
    })
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      upVisible: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      upVisible: false,
    });
  }

  normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  }

  zanClick () {
    debugger
    let num = this.state.num + 1;
    this.setState({
      num: num
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="picture">
        <div className="self-area">
          <Row>
            <Col span={12}>
              <div className="world-commom-title">
                <span><Icon type="heart" />志愿者报名</span>
              </div>
            </Col>
            <Col span={12} className="world-commom-button">
            </Col>
          </Row>
        </div> 
        <div className="word-form">
          <Form onSubmit={this.handleSubmit}>
             <FormItem {...formItemLayout} label="姓名">
              {getFieldDecorator('childName', {
                  rules: [{
                    required: true,
                    message: '请输入您姓名',
                  }],
                })(
                  <Input placeholder="请输入您姓名" />
                )}
              </FormItem>
               <FormItem {...formItemLayout} label="住址">
              {getFieldDecorator('school', {
                  rules: [{
                    required: true,
                    message: '请输入您的住址',
                  }],
                })(
                  <Input placeholder="请输入您的住址" />
                )}
              </FormItem>
            <FormItem {...formItemLayout} label="手机号">
              {getFieldDecorator('name', {
                  rules: [{
                    required: true,
                    message: '请输入您的手机号',
                  }],
                })(
                  <Input placeholder="请输入您的手机号" />
                )}
              </FormItem>
            <FormItem
              {...formItemLayout}
              label="戒烟经历">
                <Input placeholder="请输入简短经历" />
            </FormItem>
            <FormItem {...tailFormItemLayout}>
              <Button className="world-form-buttom" type="primary" htmlType="submit">报名</Button>
            </FormItem>
          </Form>
        </div>
      </div>
    );
  }
}



export default Volunteer = Form.create({
})(Volunteer);