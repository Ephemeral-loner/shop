<template>
	<div>
		<div class="hwrap">
			<span><slot name="himg"></slot></span>
			<p>{{title}}</p>
		</div>
	</div>
</template>

<script>
	export default{
		name:"hitem",
		props:["title"]
	}
</script>

<style scoped="scoped">
	.hwrap{font-size: 0.5rem;}
	.hwrap p{margin-top: 5px;}
	.hwrap img{
		width: 40px;
		height: 40px;
	}
</style>