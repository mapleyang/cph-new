import React, { Component } from 'react'
import { Popover, Spin, message, Form, Icon, Input, Button, Row, Col, Radio, Carousel, Slider, Select ,Card ,Tabs, Modal  } from 'antd'
import Highcharts from 'highcharts'
import './index.scss'
import Footer from '../footer/index';
import HighchartsMore from 'highcharts-more';
import Questions from "./questions";
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

class Analysis extends Component {
	constructor(props, context) {
    super(props)
    this.state = {
      planValue: '0',
      activeKey: "1",
      questions: [],
      analysis: [],
      questionsTemp: [],
      series: [{
        name: '良好',
        data: [0.2 , 1, 0, 2, 0, 0]
      }, {
          name: '轻度',
          data: [0, 0, 0, 0, 1.75, 0]
      }, {
          name: '重度',
          data: [0, 0, 0.75, 0, 0, 1.75]
      }],
      userValue: ""
    }
  }

  componentDidMount () {
    // this.drawChart();
  }

  drawChart () {
    let chart = new Highcharts.Chart('analysis', {// 图表初始化函数，其中 container 为图表的容器 div   
        chart: {
        type: 'bar'
    },
    title: {
        text: '问卷健康分析&方案'
    },
    xAxis: {
        categories: ['烟草使用', '家人吸烟', '2手烟暴露', '健康状况', '肺癌风险', '慢性疾病']
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        }
    },
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: this.state.series
    });
  }

  onChange = (e) => {
    this.setState({
      planValue: e.target.value,
    });
  }

  createPlanClick () {
    if(this.state.planValue === "0") {
      location.hash = "/plan";
    }
    else {
      location.hash = "/plan";
    }
  }

  radioChange = (index, e) => {
    const defaultZH_EN = window.ZH_EN[language.getLanguage()];
    let activeKey = parseInt(this.state.activeKey);
    let commons = defaultZH_EN["analysis.questions"].basic.concat(defaultZH_EN["analysis.questions"].smoking);
    let tempQuestions = [];
    let quitNum = 0;
    if((activeKey - 1) === quitNum) {
      switch(parseInt(e.target.value)) {
        case 1:
          defaultZH_EN["analysis.questions"].smokingTow.forEach(el => {
            commons.push(el)
          })
          break;
        case 2:
          defaultZH_EN["analysis.questions"].smokingThree.forEach(el => {
            commons.push(el)
          })
          break;
        case 3:
          defaultZH_EN["analysis.questions"].smokingFour.forEach(el => {
            commons.push(el)
          })
          break;
        case 0:
          defaultZH_EN["analysis.questions"].smokingOne.forEach(el => {
            commons.push(el)
          })
          break;
      }
      this.setState({
        questions: commons
      })
    }
    if((activeKey -1) > quitNum && this.state.questions.length !== 0) {
      defaultZH_EN["analysis.questions"].smokingFour.forEach(el => {
        commons.push(el)
      })
      if(this.state.questions[index].name === "quitNumber" && e.target.value !== "0") {
        defaultZH_EN["analysis.questions"].smokingFourChild.forEach(sel => {
          commons.push(sel)
        })
        this.setState({
          questions: commons
        })
      }
      if(this.state.questions[index].name === "quitChoose" && e.target.value === "1") {
        defaultZH_EN["analysis.questions"].smokingFourChild.forEach(sel => {
          commons.push(sel)
        })
        defaultZH_EN["analysis.questions"].wantQuit.forEach(sel => {
          commons.push(sel)
        })
        this.setState({
          questions: commons
        })
      }
      if(this.state.questions[index].name === "quitChoose" && e.target.value === "2") {
        defaultZH_EN["analysis.questions"].smokingFourChild.forEach(sel => {
          commons.push(sel)
        })
        defaultZH_EN["analysis.questions"].notQuit.forEach(sel => {
          commons.push(sel)
        })
        this.setState({
          questions: commons
        })
      }
    }
    let length = commons.length;
    if(this.state.questions.length !== 0) {
      length = this.state.questions.length;
    }
    if(activeKey >= 1 && activeKey < length + 1) {
      this.setState({
        activeKey: (activeKey + 1 ).toString()
      })
    }
    if((activeKey - 1) >= quitNum) {
      this.getAnalysisValue(activeKey, e.target.value, commons);
    }
  }

  getAnalysisValue (activeKey, value, commons) {
    let array = this.state.questions.length === 0 ? commons : this.state.questions;
    let ele = {
      name: array[activeKey - 1].name,
      value: value
    }
    let analysis = this.state.analysis;
    let userValue = this.state.userValue;
    if((activeKey - 1) === 6) {
      analysis = [];
      userValue = "";
    }
    analysis.push(ele);
    this.setState({
      analysis: analysis,
      userValue: userValue + value
    })
    this.getAnalysisResult(analysis)
  }


  getAnalysisResult (analysis) {
    let series = this.state.series;
    analysis.forEach(el => {
      switch(el.name) {
        case "smokingFlag":
          
          break;
        case "":
          var value = parseInt(el.value)
          if(value < 5) {
            series[0].data[0] = value;
            series[1].data[0] = 0;
          }
          else if(value >= 5 && value <= 10) {
            series[0].data[0] = 0;
            series[1].data[0] = value;
            series[2].data[0] = 0;
          }
          else {
            series[0].data[0] = 0;
            series[1].data[0] = 0;
            series[2].data[0] = value;
          }
          break;
        case "cigarette":
          var value = parseInt(el.value)
          if(value <= 10) {
            series[0].data[0] = value;
          }
          else if(value = 20) {
            series[1].data[0] = value;
          }
          else {
            series[2].data[0] = value;
          }
          break;
      }
    })
    this.setState({
      series: series
    })
    this.drawChart()
    console.log(series)
  }

  getQuestions (value) {
    let item = [];
    const { getFieldDecorator } = this.props.form;
    let array = this.state.questions;
    if(this.state.questions.length === 0) {
      array = value.basic.concat(value.smoking)
    }
    else {
    }
    item = array.map((el,index) => {
      let key = (index + 1).toString()
      return <TabPane tab="" key={key}>
        <Card title={el.question} style={{ width: 550 }}>
          <RadioGroup onChange={this.radioChange.bind(this, index)}>
            {el.options.map((sel, sindex) => {
              return <Radio value={sel.value}>{sel.label}</Radio>
            })}
          </RadioGroup>
        </Card>
      </TabPane>
    })
    if(item.length !== 0) {
      let finishCard = <TabPane tab="" key={item.length + 1}>
        <Card title="恭喜你完成了你的健康分析，请查看右边推荐方案" style={{ width: 550 }}>
        </Card>
      </TabPane>
      item.push(finishCard)
    }
    return item;
  }

                  // <Slider marks={{ 0: 'A', 20: 'B', 40: 'C', 60: 'D', 80: 'E', 100: 'F' }} />
              // {this.getQuestions(Questions)}

  leftClick () {
    let activeKey = parseInt(this.state.activeKey);
    if(activeKey > 1) {
      this.setState({
        activeKey: (activeKey -1 ).toString()
      })
    }
  }

  rightClick () {
    const defaultZH_EN = window.ZH_EN[language.getLanguage()];
    let activeKey = parseInt(this.state.activeKey);
    let length = this.state.questions.length;
    if(this.state.questions.length === 0) {
      let commons = defaultZH_EN["analysis.questions"].basic.concat(defaultZH_EN["analysis.questions"].smoking);
      length = commons.length;
    }
    if(activeKey >= 1 && activeKey < length + 1) {
      this.setState({
        activeKey: (activeKey + 1 ).toString()
      })
    }
  }

  showAnalysis () {
    console.log(this.state.userValue)
  }

  onPlanChange = (e) => {
    this.setState({
      planValue: e.target.value,
    });
  }

  getPlanItem () {
    const defaultZH_EN = window.ZH_EN[language.getLanguage()];
    let array = [];
    let radioValue = this.state.planValue;
    if(parseInt(this.state.activeKey) === this.state.questions.length + 1 && this.state.questions.length !== 0) {
      defaultZH_EN["analysis.plan"].forEach((el,index) => {
        if(el.flag === this.state.userValue) {
          array = this.getRadio(index)
        }
        if(this.state.userValue.slice(0,1) === "1" && el.flag.slice(0,1) === "1") {
          if(el.flag.slice(2,3) === "1") {
            array = this.getRadio(index)
          }
        }
        if(this.state.userValue.slice(0,1) === "2" && el.flag.slice(0,1) === "2") {
          if(el.flag.slice(1,3) === "11") {
            array = this.getRadio(index)
          }
        }
        if(this.state.userValue.slice(0,1) === "3" && el.flag.slice(0,1) === "3") {
          let userValue = this.state.userValue;
          if(el.flag.slice(el.flag.length - 2, el.flag.length - 1) === "1" && userValue.slice(userValue.length - 2, userValue.length - 1) === "1") {
            array = this.getRadio(index)
          }
          if(el.flag.slice(el.flag.length - 2, el.flag.length - 1) === "2" && userValue.slice(userValue.length - 2, userValue.length - 1) === "2") {
            array = this.getRadio(index)
          }
        }
      })
    }
    let radioItem = <div>
      <div className="analysis-plan-title">戒烟方案推荐</div>
      {array}
    </div>
    return radioItem;
  }

  getRadio (index) {
    const defaultZH_EN = window.ZH_EN[language.getLanguage()];
    let array = [];
    let content = <div>
      {defaultZH_EN["analysis.plan"][index].content.map(sel => {
        return <p>{sel}</p>
      })}
    </div>
    let ele = <div className="analysis-plan-content">{content}</div>
    array.push(ele);
    return array;
  }

  handleOk () {}

  render() {
    const defaultZH_EN = window.ZH_EN[language.getLanguage()];
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="analysis">
        <div className="analysis-form-name">戒烟问卷可以评估你的吸烟和相关健康状况，智能地给出定制化戒烟方案</div>
        <Row>
          <Col span={14}>
            <Form onSubmit={this.handleSubmit}>
              <Row>
                <Col span={4} className="analysis-left-arrow">
                  <div className="analysis-left-area" onClick={this.leftClick.bind(this)}>
                    <Icon type="left" />
                  </div>
                </Col>
                <Col span={16}>
                 <Tabs activeKey={this.state.activeKey} >
                  {this.getQuestions(defaultZH_EN["analysis.questions"])}
                </Tabs>
                </Col>
                <Col span={4} className="analysis-right-arrow">
                  <div className="analysis-right-area" onClick={this.rightClick.bind(this)}>
                    <Icon type="right" />
                  </div>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col span={10}>
            <div className="analysis-chartarea" id="analysis"></div>
            <div className="analysis-project">
              <div className="analysis-plan-title">制定个人戒烟计划</div>
              <div className="analysis-project-create">
                <Button type="primary" onClick={this.createPlanClick.bind(this)}>创建戒烟计划>></Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Analysis = Form.create({
})(Analysis);
            // <div className="analysis-chartarea" id="analysis"></div>

            //  <div className="analysis-name">
            //     {this.getPlanItem()}
            // </div>