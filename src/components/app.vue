<script>
	
	import hello from "./hello.vue";
	export default {
		el: "#app",
		data : function(){
			return {
				name: "这是index路由组件"
			}
		},
		methods : {
			golist () { //定义路由跳转
				this.$route.router.go({ name: "list" });
			}
		},
		components: {
			hello
		}
	}
</script>

<template>
	<div>
		<h1>姓名：{{ name }}</h1>
		<button @click="golist">$route.router.go查看</button>
		<a v-link="{ name: 'list' }">v-link查看列表</a>
		<a v-link="{ name: 'hello'}">嵌套的路由</a>
		<a v-link="{ name: 'index' }">回主页</a>
	</div>
	<div>
		<router-view></router-view>
	</div>
</template>

<style lang="sass">
	body {
		background-color: #6ac862;
	}

	h1 {
		border: 1px solid blue;
	}
</style>