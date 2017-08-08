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
const { TextArea } = Input; 
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

class Public extends Component {
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

  onSubmitClick () {
    location.hash = "/hot";
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="picture">
        <div className="self-area">
          <Row>
            <Col span={12}>
              <div className="world-commom-title">
                <span>戒烟活动发布</span>
              </div>
            </Col>
            <Col span={12} className="world-commom-button">
            </Col>
          </Row>
        </div> 
        <div className="word-form">
          <Form>
             <FormItem {...formItemLayout} label="活动名称">
              {getFieldDecorator('childName', {
                  rules: [{
                    required: true,
                    message: '请输入活动名称',
                  }],
                })(
                  <Input placeholder="请输入活动名称" />
                )}
              </FormItem>
               <FormItem {...formItemLayout} label="活动形式">
              {getFieldDecorator('school', {
                  rules: [{
                    required: true,
                    message: '请输入您的活动形式',
                  }],
                })(
                  <Input placeholder="请输入您的活动形式" />
                )}
              </FormItem>
            <FormItem {...formItemLayout} label="活动内容">
              {getFieldDecorator('name', {
                  rules: [{
                    required: true,
                    message: '请输入您的活动内容',
                  }],
                })(
                  <Input placeholder="请输入您的活动内容" />
                )}
              </FormItem>
            <FormItem
              {...formItemLayout}
              label="活动人数">
                <Input placeholder="请输入活动的参与人数" />
            </FormItem>
            <FormItem
            {...formItemLayout}
            label="活动海报"
          >
            <div className="dropbox">
              {getFieldDecorator('dragger', {
                valuePropName: 'fileList',
                getValueFromEvent: this.normFile,
              })(
                <Upload.Dragger name="files" action="/upload.do">
                  <p className="ant-upload-drag-icon">
                    <Icon type="inbox" />
                  </p>
                  <p className="ant-upload-text">点击或拖拽文件到这个区域进行上传</p>
                </Upload.Dragger>
              )}
            </div>
          </FormItem>
            <FormItem {...tailFormItemLayout}>
              <Button className="world-form-buttom" type="primary" onClick={this.onSubmitClick.bind(this)}>发布</Button>
            </FormItem>
          </Form>
        </div>
      </div>
    );
  }
}



export default Public = Form.create({
})(Public);