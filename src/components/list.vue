<script>
	export default {
		el: "#list",
		data : function(){
			return {
				name: "这是List路由组件"
			}
		}
	}
</script>

<template>
	<div id="list">
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