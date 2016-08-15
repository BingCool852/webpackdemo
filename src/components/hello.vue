<script>
	export default {
		el: "#hello",
		data : function(){
			return {
				name: "这是嵌套路由组件"
			}
		}
	}
</script>

<template>
	<div id="hello">
		<router-view></router-view>
		<h1>姓名：{{ name }}</h1>
		<a v-link="{ name: 'index' }">回主页</a>
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