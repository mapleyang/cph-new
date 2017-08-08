import React, { Component } from 'react'
import { Table, Popover, Upload, Spin, message, Form, Icon, Input, Button, Row, Col, Radio, Carousel, Slider, Select ,Card ,Tabs, Modal  } from 'antd'
import './index.scss'
import Footer from '../footer/index';
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


const columns = [{
  title: '时间',
  dataIndex: 'Time',
  key: 'Time',
}, {
  title: '日记名称',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '心情',
  dataIndex: 'Feeling',
  key: 'Feeling',
}, {
  title: '事件',
  dataIndex: 'event',
  key: 'level',
},{
  title: '操作',
  dataIndex: 'operrate',
  key: 'operrate',
  render: (text, record) => (
    <div>
      <span style={{paddingRight: 10}}><a>编辑</a></span>
      <span style={{paddingRight: 10}}><a>查看</a></span>
      <span style={{paddingRight: 10}}><a>删除</a></span>
    </div>
  ),
}];

const data = [{
  key: '1',
  Time: '2017-08-04',
  name: "戒烟第一天",
  Feeling: "兴奋",
  event: "开启戒烟旅程",
}, {
  key: '2',
  Time: '2017-08-05',
  name: "戒烟第二天",
  Feeling: "煎熬",
  event: "开始计划中的戒烟方法",
}]; 

class Diary extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
      upVisible: false,
      currentDiary: "2017-08-04",
      diaryList: [{
        label: "2017-08-04",
        value: "2017-08-04",
      },{
        label: "2017-08-05",
        value: "2017-08-05",
      }]
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

  diaryItemClick (value) {
    this.setState({
      currentDiary: value.value
    })
  }

  getListItem () {
    let item;
    item = this.state.diaryList.map(el => {
      return <div className="record-list-item" onClick={this.diaryItemClick.bind(this, el)}>{el.label}</div>
    })
    return item;
  }

  render() {
    const defaultZH_EN = window.ZH_EN[language.getLanguage()];
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="record">
        <div className="record-area">
          <Row>
            <Col span={6}>
              <div className="record-list">
                <div className="record-list-current">
                  <Icon type="schedule" /><span>{this.state.currentDiary}</span>
                </div>
                <div className="record-list-items">
                  {this.getListItem()}
                </div>
              </div>
            </Col>
            <Col span={18}>
              <div className="record-table">
                <Table columns={columns} dataSource={data} pagination={false} />
                <Button className="record-secen-add" onClick={this.uploadClick.bind(this)}>新增</Button>
              </div>
            </Col>
          </Row>
        </div>
        <Modal
          title="上传作品"
          visible={this.state.upVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
        <Form onSubmit={this.handleSubmit}>
           <FormItem {...formItemLayout} label="日记名称">
            {getFieldDecorator('childName', {
                rules: [{
                  required: true,
                  message: '请输入日记名称',
                }],
              })(
                <Input placeholder="请输入日记名称" />
              )}
            </FormItem>
             <FormItem {...formItemLayout} label="心情">
            {getFieldDecorator('school', {
                rules: [{
                  required: true,
                  message: '请描述您的心情',
                }],
              })(
                <Input placeholder="请描述您的心情" />
              )}
            </FormItem>
          <FormItem {...formItemLayout} label="戒烟事件">
            {getFieldDecorator('name', {
                rules: [{
                  required: true,
                  message: '请描述发生的事件',
                }],
              })(
                <Input placeholder="请描述发生的事件" />
              )}
            </FormItem>
          <FormItem
            {...formItemLayout}
            label="日记上传"
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

export default Diary = Form.create({
})(Diary);