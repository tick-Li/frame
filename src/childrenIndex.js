import dynamicModule from './pages/dynamicIndex';
import { extend } from "utils/utils";

!function initRouter(params) {
	// 子项目路由
	let childApp = window.vpapp = window.vpapp || {}; 
	childApp.definde = extend({}, (childApp.definde || {}), dynamicModule)
	childApp.routes = (childApp.routes || []).concat([
		{
			code:'home', 
			path: '/',
			component: (location, cb) => {
				wrapper(require.ensure([], require => { 
					cb(null, require('pages/web/Home/index').default);
				}, 'home'))
			}
		},
		{
			code:'test', 
			path: '/test',
			component: (location, cb) => {
				wrapper(require.ensure([], require => { 
					cb(null, require('pages/web/Test/index').default);
				}, 'test'))
			}
		},
		{
			code:'login', 
			path: '/login',
			component: (location, cb) => {
				wrapper(require.ensure([], require => { 
					cb(null, require('containers/Login/index').default);
				}, 'login'))
			}
		}
	]);
 
	function wrapper(loadComponent) {
		let React = null;
		let Component = null;
		let Wrapped = props => (
			<div className="namespace">
				<Component {...props} />
			</div>
		);
		return async () => {
			React = require('react');
			Component = await loadComponent();
			return Wrapped;
		};
	}
}()



