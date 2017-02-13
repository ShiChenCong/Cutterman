<template>
	<div style="margin-top:100px;">安装指南</div>
</template>
<script>
	export default{
		data(){
			return{
				scroll_dis:0
			}
		},
		props:['scc'],
		mounted(){
			console.log(this.scc)
		},
		beforeRouteLeave(to, from, next){
			this.scroll_dis=document.body.scrollTop;
		    // alert('要离开安装指南的时候查询滚动距离为:'+document.body.scrollTop);
		    next();
		},
		beforeRouteEnter(to,from,next){
			// alert(this.scroll_dis);
			// next();
			next(vm => {
			   // alert('进入安装指南之前查询安装指南的滚动距离为：'+vm.scroll_dis);
			})
		}
	}
</script>