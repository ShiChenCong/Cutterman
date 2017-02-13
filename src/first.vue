<template>
	<div style="margin-top:100px;text-align:center">常见问题</div>
</template>
<script>
	export default{
		data(){
			return{
				scroll_dis:0
			}
		},

		beforeRouteLeave(to, from, next){
			this.scroll_dis=document.body.scrollTop;
		    // alert('购买滚动距离:'+window.scrollY);
		    next();
		},
		mounted(){
			document.body.scrollTop=this.scroll_dis;
		}
		// beforeRouteEnter(to,from,next){
		// 	alert(this.scroll_dis);
		// 	next();
		// }
	}
</script>