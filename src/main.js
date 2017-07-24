import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import $ from "jquery"

import { addLocaleData, IntlProvider, FormattedMessage } from 'react-intl';
import scriptjs from 'scriptjs';
import antdEn from 'antd/lib/locale-provider/en_US';
import appLocaleDataEn from 'react-intl/locale-data/en';
// import enMessages from './locales/en.json';
import appLocaleDataZh from 'react-intl/locale-data/zh';
// import zhMessages from './locales/zh.json';
import { LocaleProvider } from 'antd';
import ZH_EN from './zh-en';

import { hashHistory, browserHistory, Router, Route, IndexRoute, IndexRedirect  } from 'react-router'
import 'antd/dist/antd.less'
import App from "./containers/app"
import Home from "./containers/home/index"
import Login from "./containers/login/index"
import User from "./containers/login/user"
import Register from "./containers/login/register"
import Analysis from "./containers/activities/analysis"
import Coach from "./containers/activities/coach"
import Share from "./containers/activities/share"
import Plan from "./containers/activities/plan"
import Child from "./containers/activities/child"
import Calendar from "./containers/myhealth/calendar"
import Diary from "./containers/myhealth/diary"
import Result from "./containers/myhealth/result"
import Health from "./containers/myhealth/health"
import MyPlan from "./containers/myhealth/myplan"
import Mark from "./containers/mark/index"
import SelfCure from "./containers/solution/selfcure"
import MsgCure from "./containers/solution/msgcure"
import Mindcure from "./containers/solution/mindcure"
import MedicineCure from "./containers/solution/medicinecure"
import Flow from "./containers/solution/flow"
import Truth from "./containers/knowledge/truth"
import Compete from "./containers/knowledge/compete"
import Disease from "./containers/knowledge/disease"
import Harm from "./containers/more/harm"
import TwiceHarm from "./containers/more/twiceharm"
//mobile
// import MHome from "./containers/MHome/index"  
// import MTab from "./containers/MHome/tab" 

window.$ = $;


const param = location.hash.slice(2, 4) === "en" ? "en" : undefined;


const locale = param || 'zh';

const scripts = [];

if (!window.Intl) {
  scripts.push(`https://as.alipayobjects.com/g/component/intl/1.0.1/locale-data/jsonp/${locale}.js`);
  scripts.push(`https://as.alipayobjects.com/g/component/intl/1.0.1/Intl.js`);
  if (locale !== 'zh') {
    scripts.push(`https://as.alipayobjects.com/g/component/intl/1.0.1/locale-data/jsonp/en-US.js`);
  }
}
scripts.push(`https://as.alipayobjects.com/g/component/react-intl/2.0.0/locale-data/${locale}.js`);
if (locale !== 'zh') {
  scripts.push(`https://as.alipayobjects.com/g/component/react-intl/2.0.0/locale-data/en.js`);
}

const ready = () => {

  addLocaleData(window.ReactIntlLocaleData[locale]);

  window.ZH_EN = ZH_EN;

  const defaultZH_EN = ZH_EN['zh'];

  ReactDOM.render(
    <LocaleProvider locale={locale === "en" ? antdEn : null}>
      <IntlProvider
        locale={locale}
        messages={ZH_EN[locale] || defaultZH_EN}>
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <IndexRedirect to="/home" />
            <Route path="/home" component={Home}></Route>
            <Route path="/en/home" component={Home}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/en/login" component={Login}></Route>
            <Route path="/user" component={User}></Route>
            <Route path="/en/user" component={User}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/en/register" component={Register}></Route>
            <Route path="/calendar" component={Calendar}></Route>
            <Route path="/en/calendar" component={Calendar}></Route>
            <Route path="/diary" component={Diary}></Route>
            <Route path="/en/diary" component={Diary}></Route>
            <Route path="/myplan" component={MyPlan}></Route>
            <Route path="/en/myplan" component={MyPlan}></Route>
            <Route path="/result" component={Result}></Route>
            <Route path="/en/result" component={Result}></Route>
            <Route path="/health" component={Health}></Route>
            <Route path="/en/health" component={Health}></Route>
            <Route path="/analysis" component={Analysis}></Route>
            <Route path="/en/analysis" component={Analysis}></Route>
            <Route path="/coach" component={Coach}></Route>
            <Route path="/en/coach" component={Coach}></Route>
            <Route path="/share" component={Share}></Route>
            <Route path="/en/share" component={Share}></Route>
            <Route path="/plan" component={Plan}></Route>
            <Route path="/en/plan" component={Plan}></Route>
            <Route path="/child" component={Child}></Route>
            <Route path="/en/child" component={Child}></Route>
            <Route path="/mark" component={Mark}></Route>
            <Route path="/en/mark" component={Mark}></Route>
            <Route path="/selfcure" component={SelfCure}></Route>
            <Route path="/en/selfcure" component={SelfCure}></Route>
            <Route path="/msgcure" component={MsgCure}></Route>
            <Route path="/en/msgcure" component={MsgCure}></Route>
            <Route path="/mindcure" component={Mindcure}></Route>
            <Route path="/en/mindcure" component={Mindcure}></Route>
            <Route path="/medicinecure" component={MedicineCure}></Route>
            <Route path="/en/medicinecure" component={MedicineCure}></Route>
            <Route path="/flow" component={Flow}></Route>
            <Route path="/en/flow" component={Flow}></Route>
            <Route path="/truth" component={Truth}></Route>
            <Route path="/en/truth" component={Truth}></Route>
            <Route path="/compete" component={Compete}></Route>
            <Route path="/en/compete" component={Compete}></Route>
            <Route path="/disease" component={Disease}></Route>
            <Route path="/en/disease" component={Disease}></Route>
            <Route path="/harm" component={Harm}></Route>
            <Route path="/en/harm" component={Harm}></Route>
            <Route path="/twiceharm" component={TwiceHarm}></Route>
            <Route path="/en/twiceharm" component={TwiceHarm}></Route>
          </Route>
        </Router>
      </IntlProvider>
    </LocaleProvider>,
    document.getElementById('root')
  )
};

if (scripts.length) {
  scriptjs(scripts, ready);
} else {
  ready();
}
            // <Route path="/mobilehome" component={MHome}></Route>
            // <Route path="/en/mobilehome" component={MHome}></Route>
            // <Route path="/mobiletab" component={MTab}></Route>
            // <Route path="/en/mobiletab" component={MTab}></Route>