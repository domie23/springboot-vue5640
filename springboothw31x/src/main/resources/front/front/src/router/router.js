import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import jingdianfenleiList from '../pages/jingdianfenlei/list'
import jingdianfenleiDetail from '../pages/jingdianfenlei/detail'
import jingdianfenleiAdd from '../pages/jingdianfenlei/add'
import lvyoujingdianList from '../pages/lvyoujingdian/list'
import lvyoujingdianDetail from '../pages/lvyoujingdian/detail'
import lvyoujingdianAdd from '../pages/lvyoujingdian/add'
import jiudianxinxiList from '../pages/jiudianxinxi/list'
import jiudianxinxiDetail from '../pages/jiudianxinxi/detail'
import jiudianxinxiAdd from '../pages/jiudianxinxi/add'
import tesemeishiList from '../pages/tesemeishi/list'
import tesemeishiDetail from '../pages/tesemeishi/detail'
import tesemeishiAdd from '../pages/tesemeishi/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'jingdianfenlei',
					component: jingdianfenleiList
				},
				{
					path: 'jingdianfenleiDetail',
					component: jingdianfenleiDetail
				},
				{
					path: 'jingdianfenleiAdd',
					component: jingdianfenleiAdd
				},
				{
					path: 'lvyoujingdian',
					component: lvyoujingdianList
				},
				{
					path: 'lvyoujingdianDetail',
					component: lvyoujingdianDetail
				},
				{
					path: 'lvyoujingdianAdd',
					component: lvyoujingdianAdd
				},
				{
					path: 'jiudianxinxi',
					component: jiudianxinxiList
				},
				{
					path: 'jiudianxinxiDetail',
					component: jiudianxinxiDetail
				},
				{
					path: 'jiudianxinxiAdd',
					component: jiudianxinxiAdd
				},
				{
					path: 'tesemeishi',
					component: tesemeishiList
				},
				{
					path: 'tesemeishiDetail',
					component: tesemeishiDetail
				},
				{
					path: 'tesemeishiAdd',
					component: tesemeishiAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
