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

class Picture extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
      upVisible: false,
      num: 5,
      num2: 10
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
    let num = this.state.num + 1;
    this.setState({
      num: num
    })
  }

  zan2Click () {
    let num2 = this.state.num2 + 1;
    this.setState({
      num2: num2
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
                <span><Icon type="picture" />涂鸦比赛活动</span>
              </div>
            </Col>
            <Col span={12} className="world-commom-button">
              <Button type="primary" onClick={this.uploadClick.bind(this)}>上传戒烟作品</Button>
            </Col>
          </Row>
        </div> 
        <div className="picture-list">
          <Row>
            <Col span={6} className="card-area">
              <Card title="与公益同行" extra={<span className="card-zan" onClick={this.zanClick.bind(this)}><Icon type="like-o" />{this.state.num}人赞</span>} style={{ width: 300 }}>
                <img src="./child.jpg" />
              </Card>
            </Col>
            <Col span={6} className="card-area">
              <Card title="画画作品" extra={<span className="card-zan" onClick={this.zan2Click.bind(this)}><Icon type="like-o" />{this.state.num2}人赞</span>} style={{ width: 300 }}>
                <img src="./pc2.jpg" />
              </Card>
            </Col>
            <Col span={6} className="card-area"></Col>
            <Col span={6} className="card-area"></Col>
          </Row>
        </div> 
        <Modal
          title="上传作品"
          visible={this.state.upVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
        <Form onSubmit={this.handleSubmit}>
           <FormItem {...formItemLayout} label="孩子姓名">
            {getFieldDecorator('childName', {
                rules: [{
                  required: true,
                  message: '请输入孩子姓名',
                }],
              })(
                <Input placeholder="请输入孩子姓名" />
              )}
            </FormItem>
             <FormItem {...formItemLayout} label="学校名称">
            {getFieldDecorator('school', {
                rules: [{
                  required: true,
                  message: '请输入学校名称',
                }],
              })(
                <Input placeholder="请输入学校名称" />
              )}
            </FormItem>
          <FormItem {...formItemLayout} label="作品名称">
            {getFieldDecorator('name', {
                rules: [{
                  required: true,
                  message: '请输入作品名称',
                }],
              })(
                <Input placeholder="请输入作品名称" />
              )}
            </FormItem>
          <FormItem
            {...formItemLayout}
            label="文件上传"
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



export default Picture = Form.create({
})(Picture);