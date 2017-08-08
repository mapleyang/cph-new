import React, { Component } from 'react'
import { Form, Icon, Input, Button, Row, Col, Radio, Steps, DatePicker, Checkbox, TimePicker,Collapse ,Table} from 'antd'
import Highcharts from 'highcharts'
import moment from 'moment';
const format = 'HH:mm';
import './index.scss'
import Footer from '../footer/index';
import language from "../../utils/param";
const FormItem = Form.Item;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;
const Step = Steps.Step;
const Panel = Collapse.Panel;
const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 14 },
};

const quitOptions = [
  { label: '健康', value: '健康' },
  { label: '省钱', value: '省钱' },
  { label: '家庭', value: '家庭' },
  { label: '爱人', value: '爱人' },
];

const stylesOptions = [
  { label: '自助戒烟', value: '自助戒烟' },
  { label: '短信戒烟', value: '短信戒烟' },
  { label: '行为干预', value: '行为干预' },
  { label: '药物戒烟', value: '药物戒烟' },
  { label: '诊所戒烟', value: '诊所戒烟' },
]

class Plan extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
      quitValue: [],
      quitContact: [0],
      dailyTask: [0],
      ridWay: [{
        value: "1",
        flag: false,
        content: "扔掉所有香烟"
      },{
        value: "2",
        flag: false,
        content: "扔掉所有打火机,火柴，烟灰缸"
      },{
        value: "4",
        flag: false,
        content: "打扫和通风"
      },{
        value: "5",
        flag: false,
        content: "贴戒烟标语"
      },{
        value: "6",
        flag: false,
        content: "放置戒烟物品"
      },{
        value: "7",
        flag: false,
        content: "对抗烟瘾要做的事情"
      }],
      wards: [{
        num: "1",
        content: "1周",
        value: ""
      },{
        num: "2",
        content: "2周",
        value: ""
      },{
        num: "3",
        content: "1月",
        value: ""
      },{
        num: "4",
        content: "1月",
        value: ""
      },{
        num: "5",
        content: "3月",
        value: ""
      },{
        num: "6",
        content: "6月",
        value: ""
      }],
      tellContact: {
        label: "你在戒烟期间所要告诉的人",
        value: [{
          num: "1",
          text: "配偶", 
          flag: false
        },{
          num: "2",
          text: "孩子",
          flag: false
        },{
          num: "3",
          text: "其他家人",
          flag: false
        },{
          num: "4",
          text: "朋友",
          flag: false
        },{
          num: "5",
          text: "其他",
          flag: false
        }]
      },
      inviteContact: {
        label: "你想邀请一起戒烟的人",
        value: [{
          num: "1",
          text: "配偶", 
          flag: false
        },{
          num: "2",
          text: "孩子",
          flag: false
        },{
          num: "3",
          text: "其他家人",
          flag: false
        },{
          num: "4",
          text: "朋友",
          flag: false
        },{
          num: "5",
          text: "其他",
          flag: false
        }],
      },
      quitWay: [{
        num: "1",
        flag: false,
        title: "Do you need to keep your hands and mouth busy?  ",
        content: "Hold a straw in your hand and breathe through it Play with a coin or paperclip to keep your hands busy.",
      },{
        num: "2",
        flag: false,
        title: "Do you smoke to relieve stress or improve your mood?",
        content: "Practice deep breathing to calm down or do some pushups to blow off steam Turn to friends, family, and counselors when you need someone to talk to."
      },{
        num: "3",
        flag: false,
        title: "Do you have trouble keeping busy and your mind occupied?",
        content: "Make a list of tasks that you can accomplish when a craving hits. This list can include chores, replying to emails, running errands, or planning your schedule for the next day."
      },{
        num: "4",
        flag: false,
        title: "Do you smoke because its pleasurable and relaxing?",
        content: "Treat yourself to a different pleasure. Listen to your favorite songs, plan a movie night with friends, or save up your cigarette money for a special treat when you reach a smokefree milestone."
      },{
        num: "5",
        flag: false,
        title: "Do you get irritable and anxious without cigarettes?",
        content: "Nicotine replacement therapy (NRT), such as patches, gum, or lozenges, can help relieve your withdrawal symptoms. Talk to your doctor to see which type of NRT is right for you.",
      },{
        num: "6",
        flag: false,
        title: "Do you smoke for an energy boost?",
        content: "To keep your energy level stable, get regular exercise and have healthy snacks throughout the day. Make sure you’re getting plenty of sleep at night to help you from feeling slow during the day."
      }]
    }
  }

  componentDidMount () {
  }

  onChange (value) {
    let array = [];
    if(value.length !== 0) {
      value.map(el => {
        quitOptions.forEach(sel => {
          if(el === sel.value) {
            array.push(sel.label)
          }
        })
      })
    }
    this.setState({
      quitValue: array
    })
  }

  onEmotionalChange = (e) => {
    console.log(e.target)
  }

  getPlanSteps () {
    let item;
    item = this.getFormItems().map(el => {
      return el.element
    })
    return item;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let plan = {userName: "test"};
        for(let el in values) {
          if(values[el]) {
            plan[el] = values[el];
          }
        }
        plan.ridWay = this.state.ridWay;
        plan.quitWay = this.state.quitWay;
        plan.tellContact = this.state.tellContact;
        plan.inviteContact = this.state.inviteContact;
        plan.wards = this.state.wards;
        console.log(plan)
        sessionStorage.removeItem("plan")
        sessionStorage.setItem("plan", JSON.stringify(plan));
        location.hash = "/myplan";
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    let hrClassName = "";
    if(this.state.quitValue.length === 0) {
      hrClassName = "hr-none";
    }
    else {
      hrClassName = "hr-block";
    }
    return (
      <div className="plan">
        <div className="plan-title">
          <div className="plan-title-name">开始我的戒烟计划</div>
          <div className="plan-title-desc">boosts your chances of success. Build a quit plan to get ready and find out what to expect along the way. Complete 7 easy steps to get your personalized quit plan.</div>
        </div>
        <Row className="plan-steps">
          <Col span={20}>
            <div className="plan-steps-content">
              <Form onSubmit={this.handleSubmit}>
                {this.getPlanSteps()}
              </Form>
            </div>
          </Col>
          <Col span={4}>
          </Col>
        </Row>
      </div>
    );
  }

  getFormItems = () => {
    const { getFieldDecorator } = this.props.form;
    const defaultZH_EN = window.ZH_EN[language.getLanguage()];
    let hrClassName = "";
    if(this.state.quitValue.length === 0) {
      hrClassName = "hr-none";
    }
    else {
      hrClassName = "hr-block";
    }
    let items = [{
      name: "startTime",
      element: <FormItem>
        <div className="plan-steps-item plan-step-1">
          <Row>
            <Col span={8}>
              <img src="./beginning.jpg" />
            </Col>
            <Col span={16}>
              <div className="plan-step-1-content">
                <span>我准备好将在</span> 
                {getFieldDecorator('startTime')(
                  <DatePicker placeholder="" />
                )}
                <span>开启我的戒烟之路</span>
              </div>
            </Col>
          </Row>
        </div>
      </FormItem>
    },{
      name: "",
      element: <FormItem>
          <div className="plan-steps-item plan-step-2">
            <div className="plan-step-2-content">
              <span>我为</span>
              <span className="plan-steps-item-input">
                {this.state.quitValue.toString()}
                <hr className={hrClassName}/>
              </span>
              <span>戒烟。</span>
            </div>
            {getFieldDecorator('quitReason')(
              <CheckboxGroup options={quitOptions} onChange={this.onChange.bind(this)} />
            )}
          </div>
      </FormItem>
    },{
      name: "smokingSence",
      element: <FormItem>
        <div className="plan-steps-item plan-step-styles">
          <div className="plan-step-styles-content">你可以选择下列多种戒烟方式:</div>
          <div className="plan-step-styles-operate">
            {getFieldDecorator('styles')(
              <CheckboxGroup options={stylesOptions} onChange={this.stylesChange.bind(this)} />
            )}
          </div>
        </div>
      </FormItem>
    },{
      name: "smokingSence",
      element: <FormItem>
        <div className="plan-steps-item plan-step-3">
          <div className="plan-step-3-content">{defaultZH_EN["plan.createPlan"].smokingSence.title}</div>
          <div className="plan-step-trigger">
            <Row className="plan-step-trigger-item">
              <Col span={8}>
                <div className="trigger-item-name">{defaultZH_EN["plan.createPlan"].smokingSence.emotional.title}</div>
                {getFieldDecorator('smokingEmotion')(
                  <CheckboxGroup options={defaultZH_EN["plan.createPlan"].smokingSence.emotional.options} />
                )}
              </Col>                  
              <Col span={8}>
                <div className="trigger-item-name">{defaultZH_EN["plan.createPlan"].smokingSence.habitual.title}</div>
                {getFieldDecorator('smokingHabit')(
                  <CheckboxGroup options={defaultZH_EN["plan.createPlan"].smokingSence.habitual.options} />
                )}
              </Col>                  
              <Col span={8}>
                <div className="trigger-item-name">{defaultZH_EN["plan.createPlan"].smokingSence.social.title}</div>
                {getFieldDecorator('smokingGam')(
                  <CheckboxGroup options={defaultZH_EN["plan.createPlan"].smokingSence.social.options} />
                )}
              </Col>                  
            </Row>
          </div>
        </div>
      </FormItem>
    },{
      name: "quitWay",
      element: <FormItem>
        <div className="plan-steps-item plan-step-7">
          <div className="plan-step-7-name">克服烟瘾方法</div>
          <div className="plan-step-7-desc">Cravings only last a few minutes--but those minutes can be hard. Select the types of cravings you usually have. The tips for beating these cravings will be added to your quit plan.</div>
          <div className="plan-step-7-operate">{this.getQuitWay()}</div>
        </div>
      </FormItem>
    },{
      name: "ridSmoking",
      element: <FormItem>
        <div className="plan-steps-item plan-step-9">
          <div className="plan-step-9-name">清除吸烟相关物</div>
          <div className="plan-step-9-desc">Seeing reminders of smoking makes it harder to stay smokefree. Get rid of any reminders in your home, car, and workplace before your quit day. Below is a list of common smoking reminders and how to deal with them. This list will be added to your quit plan.</div>
          <div className="plan-step-9-operate">{this.ridSmoking()}</div>
        </div>
      </FormItem>
    },{
      name: "quitContact",
      element: <FormItem>
        <div className="plan-steps-item plan-step-10">
          <div className="plan-step-10-name">建立你的支持</div>
          <div className="plan-step-10-desc">获得周围人的支持能够帮助你更好地戒烟。</div>
          <div className="plan-step-10-operate">
            <div>
              <div className="quitContact-title">请选择你在戒烟期间所要告诉的人</div>
              <div className="quitContact-content">
                {this.getContact("tell")}
              </div>
            </div>
            <div>
              <div className="quitContact-title">请选择你想邀请一起戒烟的人</div>
              <div className="quitContact-content">
                {this.getContact("invite")}
              </div>
            </div>
          </div>
        </div>
      </FormItem>
    },{
      name: "dailyTask",
      element: <FormItem>
        <div className="plan-steps-item plan-step-daily">
          <div className="plan-step-daily-name">你的奖励计划</div>
          <div className="plan-step-daily-operate">
            {this.getTaskTable()}
          </div>
        </div>
      </FormItem>
    },{
      name: "planCreate",
      element: <FormItem>
        <div className="plan-steps-item plan-step-8">
          <Button ghost size="large" htmlType="submit">完成我的计划>></Button>
        </div>
      </FormItem>
    }]
    return items;
  }

  getQuitWay () {
    let item = "";
    let ele = [];
    let array = [{
      num: "1",
      title: "Do you need to keep your hands and mouth busy?  ",
      content: "Hold a straw in your hand and breathe through it Play with a coin or paperclip to keep your hands busy.",
    },{
      num: "2",
      title: "Do you smoke to relieve stress or improve your mood?",
      content: "Practice deep breathing to calm down or do some pushups to blow off steam Turn to friends, family, and counselors when you need someone to talk to."
    },{
      num: "3",
      title: "Do you have trouble keeping busy and your mind occupied?",
      content: "Make a list of tasks that you can accomplish when a craving hits. This list can include chores, replying to emails, running errands, or planning your schedule for the next day."
    },{
      num: "4",
      title: "Do you smoke because its pleasurable and relaxing?",
      content: "Treat yourself to a different pleasure. Listen to your favorite songs, plan a movie night with friends, or save up your cigarette money for a special treat when you reach a smokefree milestone."
    },{
      num: "5",
      title: "Do you get irritable and anxious without cigarettes?",
      content: "Nicotine replacement therapy (NRT), such as patches, gum, or lozenges, can help relieve your withdrawal symptoms. Talk to your doctor to see which type of NRT is right for you.",
    },{
      num: "6",
      title: "Do you smoke for an energy boost?",
      content: "To keep your energy level stable, get regular exercise and have healthy snacks throughout the day. Make sure you’re getting plenty of sleep at night to help you from feeling slow during the day."
    }]
    ele = array.map((el,index) => {
      let header = <Checkbox onChange={this.quitWayClick.bind(this, el)}>{el.title}</Checkbox>
      return <Panel header={header} key={index}>
        <p>{el.content}</p>
      </Panel>
    })
    item = <Collapse accordion>
      {ele}
    </Collapse>
    return item;
  }

  quitWayClick (el, e) {
    let quitWay = [];
    quitWay = this.state.quitWay.map(item => {
      if(el.num === item.num) {
        item.flag = e.target.checked;
      }
      return item
    })
    this.setState({
      quitWay: quitWay
    })
  }

  ridSmoking () {
    let item = "";
    let array = [{
      value: "1",
      content: "扔掉所有香烟"
    },{
      value: "2",
      content: "扔掉所有打火机,火柴，烟灰缸"
    },{
      value: "4",
      content: "打扫和通风"
    },{
      value: "5",
      content: "贴戒烟标语"
    },{
      value: "6",
      content: "放置戒烟物品"
    },{
      value: "7",
      content: "对抗烟瘾要做的事情"
    }]
    let checkboxItem = array.map((el, index) => {
      return <div><Checkbox onChange={this.ridWaysClick.bind(this, el)}><span className="rid-checkbox">{el.content}</span></Checkbox></div>
    })
    item = <div className="rid-smoking-content">
      <Row>
        <Col span="4" className="rid-area">家</Col>
        <Col span="4" className="rid-area">办公室</Col>
        <Col span="4" className="rid-area">车</Col>
        <Col span="4" className="rid-area">衣服、包</Col>
        <Col span="4" className="rid-area">其他</Col>
      </Row>
      <div>
        {checkboxItem}
      </div>
    </div>
    return item;
  }

  ridWaysClick (value, e) {
    let ridWay = this.state.ridWay;
    let temp = [];
    if(e.target.checked) {
      temp = ridWay.map(el => {
        if(el.value === el.value) {
          el.flag = true;
        }
        return el
      })
    }
    else {
      temp = ridWay.map(el => {
        if(el.value === el.value) {
          el.flag = false;
        }
        return el
      })
    }
    this.setState({
      ridWay: temp
    })
  }

  getContact (value) {
    let item = "";
    let array = [{
      num: "1",
      text: "配偶", 
      flag: false
    },{
      num: "2",
      text: "孩子",
      flag: false
    },{
      num: "3",
      text: "其他家人",
      flag: false
    },{
      num: "4",
      text: "朋友",
      flag: false
    },{
      num: "5",
      text: "其他",
      flag: false
    }];
    item = array.map(el => {
      return <Checkbox onChange={this.contactChange.bind(this, el, value)}><span className="contact-checkbox">{el.text}</span></Checkbox>
    })
    return item;
  }

  contactChange (el, value, e) {
    if(value === "tell") {
      let tellContact = this.state.tellContact;
      let temp = [];
      temp = this.state.tellContact.value.map(item => {
        if(el.num === item.num) {
          item.flag = e.target.checked;
        }
        return item
      })
      tellContact.value = temp;
      this.setState({
        tellContact: tellContact
      })
    }
    else {
      let inviteContact = this.state.inviteContact;
      let temp = [];
      temp = this.state.inviteContact.value.map(item => {
        if(el.num === item.num) {
          item.flag = e.target.checked;
        }
        return item
      })
      inviteContact.value = temp;
      this.setState({
        inviteContact: inviteContact
      })
    }
  }

  getTaskTable () {
    let item = "";
    let array = [{
      num: "1",
      content: "1周"
    },{
      num: "2",
      content: "2周"
    },{
      num: "3",
      content: "1月"
    },{
      num: "4",
      content: "1月"
    },{
      num: "5",
      content: "3月"
    },{
      num: "6",
      content: "6月  "
    }]
    let columns = [{
      title: '序号',
      dataIndex: 'num',
      key: 'num',
    },{
      title: "戒烟里程碑",
      dataIndex: "content",
      key: "content"
    },{
      title: "奖励",
      dataIndex: "incentive",
      key: "incentive",
      render: (text, record) => (
        <span>
          <Input placeholder="请输入您的奖励" onChange={this.wardChange.bind(this, record)}/>
        </span>
      ),
    }]
    item = <Table className="plan-table" columns={columns} dataSource={array} pagination={false}/>
    return item;
  }

  wardChange (record, e) {
    let wards = [];
    wards = this.state.wards.map(el => {
      if(el.num === record.num) {
        el.value = e.target.value
      }
      return el
    })
    this.setState({
      wards: wards
    })
  }

  stylesChange () {
    
  }

  addPhoneClick () {
    let quitContact = this.state.quitContact;
    quitContact.push(this.state.quitContact.length)
    this.setState({
      quitContact: quitContact
    })
  }

  getQuitContact () {
    const { getFieldDecorator } = this.props.form;
    let item;
    item = this.state.quitContact.map(el => {
      return <div className="plan-step-share">
      {getFieldDecorator('quitContact' + el)(
        <Input
          placeholder="Enter your firend cellphone"
          prefix={<Icon type="mobile" />}/>   
      )}
    </div>
    })
    return item;
  }

  addTask () {
    let dailyTask = this.state.dailyTask;
    dailyTask.push(this.state.dailyTask.length);
    this.setState({
      dailyTask: dailyTask
    })
  }

  getDailyTask () {
    const { getFieldDecorator } = this.props.form;
    let item;
    item = this.state.dailyTask.map(el => {
      return <div className="plan-step-daily-operate">
        <Row className="plan-step-daily-content">
          <Col span={10} style={{textAlign: "right"}}>
            {getFieldDecorator('dailyTaskTime' + el)(
              <TimePicker format={format} />
            )}
          </Col>
          <Col span={14}>
            {getFieldDecorator('dailyTaskContent' + el)(
              <Input
                placeholder="Enter your task description"
                prefix={<Icon type="schedule" />}/>   
            )}
          </Col>
        </Row>
      </div>
    })
    return item;
  }
}


export default Plan = Form.create({
})(Plan);