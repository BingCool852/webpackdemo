// import Vue from "../node_modules/vue/dist/vue.min.js"; //可简写，自动查找
//引入vue以及vue-router
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

//引入组件
import index from './components/app';
import list from './components/list';
import hello from './components/hello';

//开启debug模式
Vue.config.debug = true;

// new Vue(app); //新建一个vue实例，现在使用vue-router就不用了

//路由需要一个根组件
var App = Vue.extend({});

//创建一个路由实例
var router = new VueRouter();

router.map({ //定义路由映射
	'/index' : { //访问地址
		name: 'index', //定义路由名字
		component: index, //引用组件的名称
		subRoutes: {
			'/hello' : {
				name : 'hello',
				component : hello
			}
		}
	},
	'/list' : {
		name: 'list',
		component: list
	},
});

router.redirect({ //定义全局的重定向规则，全局的重定向会在匹配当前路径之前执行
	'*': "/index" //重定向任意未匹配的路径到'/index'
});

router.start(App, '#app');