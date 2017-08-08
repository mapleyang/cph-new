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

class Hot extends Component {
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
                <span>戒烟热门活动</span>
              </div>
            </Col>
            <Col span={12} className="world-commom-button">
            </Col>
          </Row>
        </div> 
        <div className="picture-list">
          <Row>
            <Col span={6}>
              <Card title="论二手烟的危害性" extra={<span className="card-zan" onClick={this.zanClick.bind(this)}><Icon type="like-o" />{this.state.num}人赞</span>} style={{ width: 300 }}>
                <img src="./child.jpg" />
              </Card>
            </Col>
            <Col span={6}></Col>
            <Col span={6}></Col>
            <Col span={6}></Col>
          </Row>
        </div> 
        <Modal
          title="上传文章"
          visible={this.state.upVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
        <Form onSubmit={this.handleSubmit}>
           <FormItem {...formItemLayout} label="作者名字">
            {getFieldDecorator('childName', {
                rules: [{
                  required: true,
                  message: '请输入作者名字',
                }],
              })(
                <Input placeholder="请输入作者名字" />
              )}
            </FormItem>
             <FormItem {...formItemLayout} label="文章名称">
            {getFieldDecorator('school', {
                rules: [{
                  required: true,
                  message: '请输入文章名称',
                }],
              })(
                <Input placeholder="请输入文章名称" />
              )}
            </FormItem>
          <FormItem {...formItemLayout} label="文章描述">
            {getFieldDecorator('name', {
                rules: [{
                  required: true,
                  message: '请输入文章描述',
                }],
              })(
                <Input placeholder="请输入文章描述" />
              )}
            </FormItem>
          <FormItem
            {...formItemLayout}
            label="文章上传"
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

          </Form>
        </Modal>
      </div>
    );
  }
}



export default Hot = Form.create({
})(Hot);