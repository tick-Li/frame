import React from 'react';
import ReactDOM from 'react-dom';
import { Router,hashHistory, Route,IndexRoute,Redirect  } from 'react-router';
import { createStore} from 'redux';
import { Provider, connect } from 'react-redux';
import Navigation from 'containers/Navigation';
import NotFind from 'containers/NotFind/404';
import reducer from 'reduxs/reducers/reducer';
import {changeLanguage} from 'reduxs/actions/action';
import enUS from 'antd/lib/locale-provider/en_US';
import "./childrenIndex";

import './index.less';

if(vp.config.URL.console && !vp.config.URL.devflag){
	// 正式环境上禁掉控制台输出
	console.log=function(){}
	console.warn=function(){}
	console.info=function(){}
	console.dir=function(){}
	console.error=function(){}

	// 全局js异常捕获
	window.onerror = function (msg, url, l) {
		console.log(msg, url, l);
		// VpMsgError("该页面服务异常!", 3)
		return true
	}
}


//  window.app 路由 父项目
class Blank extends React.Component{
	render(){
		return <div></div>
	}
}
let app = window.vpapp || {};
let routesList = app.routes || [];
let route = routesList.length > 0 ? routesList.map(item => {
	if(item.path === '/'){
		return  <IndexRoute key={item.code} getComponent={item.component}/>
	}
	return  <Route key={item.code} path={item.path} getComponent={item.component}/>
}) : <IndexRoute component={Blank}/> 

const store = createStore(reducer);

const Login = (location, cb) => {
	require.ensure([], require => {
		cb(null, require('containers/Login/index').default)
	}, 'login')
}

function isLogin(nextState, replaceState) {
	const token = sessionStorage.getItem('token')
	if (!token) {
		replaceState('/login')
		// hashHistory.push('/login')
	}
}

class AllRoutes extends React.Component {
	componentWillMount(){
    	window.LOCALE = sessionStorage.getItem('LOCALE') || 'zh';
    }
	render() {
		return (
			<Router history={hashHistory}>
				<Route path="/" 
				component={Navigation} 
				// onEnter={isLogin}
				>
					{ route }
					<Route path="*" component={NotFind}/>
				</Route>
				{/* <Route path="/login" getComponent={Login}></Route> */}
			</Router>
		);
	}
}

const mapStateToProps = state => {
	return {
		LOCALE: state.language
	}
}
const mapDispatchToProps = dispatch => {
	return {
	  changeLanguage: lang => {
		dispatch(changeLanguage(lang))
	  }
	}
}
AllRoutes = connect(mapStateToProps,
	mapDispatchToProps)(AllRoutes)


const render = () => {
	ReactDOM.render(
		<Provider store={store}>
		    <AllRoutes />
	    </Provider>,
	  	document.getElementById('app')
	);
};

render();
