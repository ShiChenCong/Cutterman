<template>
	<div style="margin-top:100px;">安装指南</div>
</template>
<script>
	export default{
		beforeRouteLeave(to, from, next){
		    alert('安装指南滚动距离:'+window.scrollY);
		    next();
		},
	}
</script>