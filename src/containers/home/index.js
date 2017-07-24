import React, { Component } from 'react'
import { Spin, message, Form, Icon, Input, Button, Row, Col, Radio, Carousel  } from 'antd'
import './index.scss'
import Footer from '../footer/index';
import classnames from "classnames";
import language from "../../utils/param";
const FormItem = Form.Item
const RadioGroup = Radio.Group;
const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 14 },
};

class Home extends Component {
	constructor(props, context) {
    super(props)
    this.state = {
      loading: false,
      url: "",
      current: 'mail',
      hoverFlag: "",
    }
  }

  componentDidMount () {
  }

  handleSubmit(e) {
    let _this = this;
    const hide = message.loading('请耐心等待', 0);
    setTimeout(hide, 2000);
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let url = "/movie/cinema_detail?url=" + values.url + "&fileName=" + values.fileName + "&contentType=" + values.contentType + "&fileType=";
        location.href = url;
        // fetch("/movie/cinema_detail?url=" + values.url + "&fileName=" + values.fileName + "&contentType=" + values.contentType + "&fileType=")
        // .then(response => response.json())
        // .then(json => { 
        //   console.log(json)
        // })
      }
    })
  }


  mousehover (value) {
    let _this = this;
    $("#desc").css("z-index", 0)
    setTimeout(function () {
      _this.setState({
        hoverFlag: value
      })
    }, 500)
  }

  getContent (value) {
    let item = "";
    const mainContent = [{
      name: "q",
      value: <Col className="home-fuc-entry-content" span={20}>
        <Row>
          <Col span={6}>
            <div className="entry-content-title">i want quit</div>
          </Col>
          <Col span={14}>
            <Row>
              <Col span={6}>
                <div className="entry-content-title" onClick={this.linkClick.bind(this, "analysis")}>健康分析</div>
              </Col>
              <Col span={6}>
                <div className="entry-content-title" onClick={this.linkClick.bind(this, "myplan")}>戒烟计划</div>
              </Col>
              <Col span={6}>
                <div className="entry-content-title" onClick={this.linkClick.bind(this, "mark")}>戒烟打卡</div>
              </Col>
              <Col span={6}>
                <div className="entry-content-title" onClick={this.linkClick.bind(this, "diary")}>戒烟日记</div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    },{
      name: "u",
      value: <Col className="home-fuc-entry-content" span={20}>
        <Row>
          <Col span={6}>
            <div className="entry-content-title">Recently quit</div>
          </Col>
          <Col span={14}>
            <Row>
              <Col span={6}>
                <div className="entry-content-title" onClick={this.linkClick.bind(this, "selfcure")}>自助戒烟</div>
              </Col>
              <Col span={6}>
                <div className="entry-content-title" onClick={this.linkClick.bind(this, "msgcure")}>短信戒烟</div>
              </Col>
              <Col span={6}>
                <div className="entry-content-title" onClick={this.linkClick.bind(this, "mindcure")}>心理戒烟</div>
              </Col>
              <Col span={6}>
                <div className="entry-content-title" onClick={this.linkClick.bind(this, "medicinecure")}>药物戒烟</div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    },{
      name: "i",
      value: <Col className="home-fuc-entry-content" span={20}>
        <Row>
          <Col span={6}>
            <div className="entry-content-title">Stay quit</div>
          </Col>
          <Col span={14}>
            <Row>
              <Col span={6}>
                <div className="entry-content-title" onClick={this.linkClick.bind(this, "truth")}>戒烟游戏</div>
              </Col>
              <Col span={6}>
                <div className="entry-content-title" onClick={this.linkClick.bind(this, "compete")}>戒烟知识竞赛</div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    },{
      name: "t",
      value: <Col className="home-fuc-entry-content" span={20}>
        <Row>
          <Col span={6}>
            <div className="entry-content-title">Smoke-free World</div>
          </Col>
          <Col span={14}>
            <Row>
              <Col span={6}>
                <div className="entry-content-title" onClick={this.linkClick.bind(this, "disease")}>戒烟知识</div>
              </Col>
              <Col span={6}>
                <div className="entry-content-title" onClick={this.linkClick.bind(this, "commonweal")}>戒烟公益</div>
              </Col>
              <Col span={6}>
                <div className="entry-content-title" onClick={this.linkClick.bind(this, "coach")}>戒烟教练</div>
              </Col>
              <Col span={6}>
                <div className="entry-content-title" onClick={this.linkClick.bind(this, "child")}>孩子-无烟</div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    }]
    mainContent.forEach(el => {
      if(el.name === this.state.hoverFlag && el.name === value) {
        item = el.value;
      }
    })
    return item;
  }

  mouseLeave () {
    $("#desc").css("z-index", 1000)
    this.setState({
      hoverFlag: ""
    })
  }

  linkClick (value) {
    location.hash = "/" + value;
  }

  activityTipClick (value) {
    location.hash = "/" + value;
  }

  render() {
    const defaultZH_EN = window.ZH_EN[language.getLanguage()];
    return (
      <div className="home">
        <div className="activity-tip">
          <Carousel vertical autoplay dots={false}>
          <div className="activity-tip-item" onClick={this.activityTipClick.bind(this, "child")}>2017-08-08 将在上海举行家庭无烟活动，>>>请点击报名。</div>
          <div className="activity-tip-item" onClick={this.activityTipClick.bind(this, "coach")}>2017-09-01 将在上海征集戒烟教练，>>>请点击报名。</div>
        </Carousel>
        </div>
        <div id="desc" className="home-main-desc">
          <div className="home-main-detail">
            <div className="home-main-desc-content home-main-desc-title">{defaultZH_EN["home.index"].main.title}</div>
            <div className="home-main-desc-content home-main-desc-desc">{defaultZH_EN["home.index"].main.descript}</div>
            {defaultZH_EN["home.index"].main.feature.map(el => {
              return <div className="home-main-desc-content home-main-desc-feature">{el}</div>
            })}
            <div className="home-create-health">
              <span onClick={this.linkClick.bind(this, "analysis")}>{defaultZH_EN["home.index"].main.buttonContent}</span>
            </div>
          </div>
        </div>
        <div className="home-entry-list">
          <div className="home-fuc-entry" onMouseOver={this.mousehover.bind(this, "q")} onMouseLeave={this.mouseLeave.bind(this)}>
            <Row>
              <Col className="home-fuc-entry-flag" span={4}>Q</Col>
              {this.getContent("q")}
            </Row>
          </div>
          <div className="home-fuc-entry" onMouseOver={this.mousehover.bind(this, "u")} onMouseLeave={this.mouseLeave.bind(this)}>
            <Row>
              <Col className="home-fuc-entry-flag" span={4}>U</Col>
              {this.getContent("u")}
            </Row>
          </div>
          <div className="home-fuc-entry" onMouseOver={this.mousehover.bind(this, "i")} onMouseLeave={this.mouseLeave.bind(this)}>
            <Row>
              <Col className="home-fuc-entry-flag" span={4}>I</Col>
              {this.getContent("i")}
            </Row>
          </div>
          <div className="home-fuc-entry" onMouseOver={this.mousehover.bind(this, "t")} onMouseLeave={this.mouseLeave.bind(this)}>
            <Row>
              <Col className="home-fuc-entry-flag" span={4}>T</Col>
              {this.getContent("t")}
            </Row>
          </div>
        </div>
        <div className="home-main-area" style={{background: "url(./home.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "100% 100%"}}>
        </div>
        <div className="home-main-data" style={{background: "url(./home1.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "100% 100%"}}>
          <div className="home-main-data-desc">
            <div className="data-desc-content">纸烟包含多种化学物质，烟品燃烧后会产生超过7,000种化学物质，其中至少有250种已知有害物质以及超过70种已知可致癌物质。</div>
          </div>
          <div className="home-main-data-list">
            <Row>
              <Col span={6}>
                <div className="data-list-img">
                  <img src="./data1.png" />
                </div>
                <div className="data-list-img-desc">全球每年600万人死于烟害</div>
              </Col>
              <Col span={6}>
                <div className="data-list-img">
                  <img src="./data2.png" />
                </div>
                <div className="data-list-img-desc">中国1/3男性将死于烟草危害</div>
              </Col>
              <Col span={6}>
                <div className="data-list-img">
                  <img src="./data3.png" />
                </div>
                <div className="data-list-img-desc">中国超7亿人暴露在二手烟危害</div>
              </Col>
              <Col span={6}>
                <div className="data-list-img">
                  <img src="./data4.png" />
                </div>
                <div className="data-list-img-desc">吸菸導致長期的損害并罹癌</div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="footer"><Footer /></div>
      </div>
    );
  }
}

export default Home;

        // <div className="activity-rules">
        //   <img src="./contents.png" />
        // </div>



    //     <Row className="home-desc">
    //       <Col span={12} className="home-desc-item">
    //         <Carousel afterChange={this.onChange.bind(this)} autoplay={true}>
    //           <div><img src="./test01.png" /></div>
    //           <div><img src="./test02.png" /></div>
    //           <div><img src="./test03.png" /></div>
    //         </Carousel>
    //       </Col>
    //       <Col span={12} className="home-desc-item">
    //         <div className="activity-desc">
    //           <div className="activity-desc-name">GH戒烟-健康之路</div>
    //           <div className="activity-desc-content">
    //             <div><span>&nbsp;&nbsp;&nbsp;是面对所有吸烟或者可能受吸烟影响者的一整套戒烟解决方案。
    // 根据不同吸烟者的情况，’GH戒烟’能智能地给出个体化戒烟方案，帮助患者成功完成戒烟之旅。此方案建立于国际循证医学的基础上，所有使用或推荐的戒烟方法或技术，均已经大量严格科学研究检验。这些方法和技术已帮助全球，包括中国在内成千上万的吸烟者成功戒烟。</span></div>
    //           </div>
    //           <div className="home-start">
    //             <Button type="primary" ghost size="large" className="home-start-button" onClick={this.getStartClick.bind(this)}>开始健康之路>></Button>
    //           </div>
    //         </div>
    //       </Col>
    //     </Row>
    //     <Row className="home-row-fucs">
    //       <div className="home-fucs-area">
    //         <div className="home-fucs-block">
    //           <div className={classnames({
    //             "home-fucs-q": true,
    //             "home-block-mouseout": this.state.qLabel === "Q",
    //             "home-block-mouseover": this.state.qLabel !== "Q"
    //           })} onMouseOver={this.qBlockHover.bind(this)} onMouseOut={this.qBlockOut.bind(this)} onClick={this.qBlockClick.bind(this)}>{this.state.qLabel}</div>
    //         </div>
    //         <div className="home-fucs-block">
    //           <div className={classnames({
    //             "home-fucs-u": true,
    //             "home-block-mouseout": this.state.uLabel === "U",
    //             "home-block-mouseover": this.state.uLabel !== "U"
    //           })} onMouseOver={this.uBlockHover.bind(this)} onMouseOut={this.uBlockOut.bind(this)} onClick={this.uBlockClick.bind(this)}>{this.state.uLabel}</div>
    //         </div>
    //         <div className="home-fucs-block">
    //           <div className={classnames({
    //             "home-fucs-i": true,
    //             "home-block-mouseout": this.state.iLabel === "I",
    //             "home-block-mouseover": this.state.iLabel !== "I"
    //           })} onMouseOver={this.iBlockHover.bind(this)} onMouseOut={this.iBlockOut.bind(this)} onClick={this.iBlockClick.bind(this)}>{this.state.iLabel}</div>
    //         </div>
    //         <div className="home-fucs-block">
    //           <div className={classnames({
    //             "home-fucs-t": true,
    //             "home-block-mouseout": this.state.tLabel === "T",
    //             "home-block-mouseover": this.state.tLabel !== "T"
    //           })}onMouseOver={this.tBlockHover.bind(this)} onMouseOut={this.tBlockOut.bind(this)} onClick={this.tBlockClick.bind(this)}>{this.state.tLabel}</div>
    //         </div>
    //       </div>
    //     </Row>
    //     <div className="home-content"></div>
    //     <div className="footer"><Footer /></div>
