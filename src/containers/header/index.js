import React, { Component } from 'react'
import { Row, Col, Menu, Icon  } from 'antd'
import { addLocaleData, IntlProvider, FormattedMessage } from 'react-intl';
import './index.scss'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const languageValue = location.hash.slice(2, 4) === "en" ? "中文" : "EN";

class Header extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
      current: 'mail',
      language: languageValue,
      param: "",
    }
  }

  componentDidMount () {
    this.setState({
      param: location.hash.slice(2, 4) !== "en" ? "zh" : "en",
      // param: location.hash.slice(2, 4)
    })
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
    location.hash = "/" + e.key;
  }

  loginClick () {
    location.hash = "/login";
  }

  languageCovert (value) {
    let language;
    let route;
    if(location.hash.slice(2,4) === "en") {
      route = location.hash.slice(4, location.hash.indexOf("?"));
    }
    else {
      route = location.hash.slice(1, location.hash.indexOf("?"))
    }
    console.log(route)
    if(value === "EN") {
      language = "中文";
      location.hash = "/en" + route;
    }
    if(value === "中文") {
      language = "EN";
      location.hash = route;
    }
    this.setState({
      language: language
    })
  }

  render() {
    const defaultZH_EN = window.ZH_EN['zh'];
    let param = location.hash.slice(2, 4) === "en" ? "en" : "zh";
    if(this.state.param !== "" && this.state.param !== param ) {
      location.reload();
    }
    return (
      <div className="header-area">
        <Row className="header-row-menu">
          <Col span={20} className="header-logo">
            <img src="./viewfile.png" />
            <div className="header-name"><span>GH-CPH-NEW</span></div>
          </Col>
          <Col span={4} style={{textAlign: "center", lineHeight: "50px"}}>
            <span className="language-setting" onClick={this.languageCovert.bind(this, this.state.language)}>{this.state.language}</span>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;
