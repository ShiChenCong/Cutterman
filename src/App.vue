<template>
    <div id="app">
         <div class='header_top'>
             <ul class='icon_top'><li><i></i></li><li><i></i></li><li><i></i></li></ul>
             <div class='sign_up'><div><i></i>注册</div><div><i></i>登录</div></div>
         </div>
        <header :class="{top:top_dis}">
            <div class='icon'>
                <img src="http://cdn.cutterman.cn//cutterman/images/cutterman_logo.png">
            </div>
            <div class='list'>
                <ul>
                    <li @click='route_go("/")'>首页</li>
                    <li @mouseover="onhover" @mouseout='onmout'>
                        <a href="javascript:void(0)">产品大全</a>
                        <!-- <transition name='fade'>   -->
                         <div class='products' v-show="change_hide" :class="{tran:change_hide}">
                        <!--<div class='products' :class="{tran:change_hide}">-->
                            <div style='width:33.33%'  v-show='screenWidth_val'>
                                <h4>新品推荐!!!</h4>
                                <a href="http://www.psmirror.cn" target="_blank">设计稿实时预览神器 - PsMirror</a>
                                <div style='font-weight:normal;margin-bottom:17px'>它实时地在手机上同步PS中的设计稿, 支持Android/IOS, 支持wifi/usb连接, 响应速度快!
                                </div>
                                <a href="http://www.psmirror.cn">
                                    <img src="http://cdn.cutterman.cn//cutterman/images/new_product.png" alt="">
                                </a>
                            </div>
                            <div style='width:60%' class='second'>
                                <h4 style='width:100%'>产品列表</h4>
                                <div>
                                    <div class="detail">
                                        <h5>Photoshop工具</h5>
                                        <div class='divider'></div>
                                        <ul class='list_a'>
                                            <li>Cutteran [切图]</li>
                                            <li>Parker [标注]<span class='mark'>v3.0</span></li>
                                            <li>PsMirror [实时预览]</li>
                                            <li>Nicon [图标库]<span class="new">new</span></li>
                                            <li>Bigger [飞机稿]</li>
                                            <li>Avatar [随机头像]</li>
                                            <li>GoldenCurve [黄金取现]</li>
                                            <li>IconTemplate</li>
                                        </ul>
                                    </div>
                                    <div class="detail">
                                        <h5>Sketch工具</h5>
                                        <div class='divider'></div>
                                        <ul class='list_a'>
                                            <li>Cutteran [切图]</li>
                                            <li>Parker [标注]</li>
                                            <li>Nicon [图标库]<span class="new">new</span></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <!-- </transition> -->
                    </li>
                    <li @click='route_go("/install")'>安装指南</li>
                    <li @click='route_go("/buy")'>购买</li>
                    <li>常见问题</li>
                </ul>
            </div>
        </header>
        <keep-alive>
            <router-view @chufa='chufa' :scc='sccc'></router-view>
        </keep-alive>
    </div>
</template>

<script>

  export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        change_hide:false,
        top_dis:0,
        //同级别组件之间要传的值
        sccc:0,
        //根据屏幕宽度判断是否要显示产品大全里的全部数据
        screenWidth_val:true,
      }
    },
    mounted(){
        // $('.products div:eq(0)').html('use jquery successed');
        // console.log(this.top_dis);

         // document.body.scrollTop=500

         window.onresize=()=>{
            // console.log('start resize='+document.body.clientWidth)
            if(document.body.clientWidth<1300){
                this.screenWidth_val=false;
            }else{
                this.screenWidth_val=true;
            }
         }
    },
 
    methods:{
      route_go(add){
          this.$router.push(add);
      },
      onhover(){
          this.change_hide=true
      },
      onmout(){
          this.change_hide=false
      },
      chufa(text){
            this.top_dis=text;
            this.sccc=text;
      }
    }
  }

</script>

<style lang="less">
    @import "./css/public.css";

    .divider {
        border-bottom: 1px solid #e5e5e5;
    }

    header{
        width:100%;
        background: #fff;
    }
    .header_top{
        width:100%;
        height: 45px;
        display: block;
        background-color: #f1f1f1;
        border-bottom: 1px solid #dadada;
    }
    .mark,.new{
        border: 1px solid #666666;
        border-radius: 3px;
        float: right;
        margin-right:44px;
    }

    .new{
         border: 1px solid #e84c3d;
         color:#e84c3d;
    }

    .detail{
        width:49%;
        display: inline-block;
        vertical-align: top;
    }

    .list_a li {
        display: block !important;
        text-align: left !important;
        border-bottom: 1px solid #f1f1f1;
        padding: 7px 0;
        transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease;
        cursor: pointer;
        color: #666666;
        font-size: 15px;
        font-weight: normal;
        &:last-child {
            border-bottom: none;
        }
        &:hover {
            padding-left: 7px;
            background: #fff;
            color: #e84c3d;
            .mark{
                border:1px solid #e84c3d;
            }
        }
    }

    header {
        padding: 16px 0;
        display: flex;
        align-items: center;
    }

    .icon {
        width: 30%;
        img {
            width: 200px;
        }
    }

    .banner {
        width: 100%;
        height: 520px;
    }

    .list {
        width: 70%;
        > ul {
            display: flex;
            justify-content: flex-end;
            position: relative;
            margin-right: 100px;
            > li {
                display: inline-block;
                width: 15%;
                text-align: center;
                font-weight: 700;
                color: #666666;
                font-size: 14px;
                height: 40px;
                line-height: 40px;
                .products {
                    text-align: left;
                    left:-293px;
                    padding: 20px 30px;
                    line-height: normal;
                    width: 1140px;
                    > div {
                        display: inline-block;
                        vertical-align: top;
                        margin-bottom: 17px;
                        &:nth-child(2) {
                            padding-left: 23px;
                        }
                    }
                    div:nth-child(2) ul li:before {
                        content: '> ';
                        margin-right: 5px;
                    }
                    div:nth-child(2) h5 {
                        font-size: 16px;
                        text-transform: uppercase;
                        font-weight: 700;
                        padding: 7px 0;

                    }
                    div:nth-child(2) h4 {
                        font-size: 18px;
                        font-weight: 700;
                        margin: 10px 0;
                    }
                }
                .products div:first-child {
                    h4 {
                        color: #e84c3d;
                        font-size: 18px;
                        font-weight: 700;
                        margin: 10px 0;
                    }
                    a {
                        color: #e84c3d;
                        margin-bottom: 17px;
                        text-decoration: none;
                        display: inline-block;
                    }
                    a img {
                        width: 100%;
                    }
                }

            }
            li:nth-child(2) {

                > a {
                    position: relative;
                    // height:40px;
                    // line-height: 40px;
                    width: 100%;
                    display: inline-block;
                    color: #666666;
                    border: 1px solid transparent;
                    text-decoration: none;
                }
                &:hover > a {
                    background: #fafafa;
                    border: 1px solid #f1f1f1;
                    border-bottom: 1px solid transparent;
                    z-index: 101;
                }
            }
        }

    }

    .icon, .list {
        display: inline-block;
        text-align: center;
    }

    //hover出现的框的样式
    .products {
        width: 300px;
        /*height: 300px;*/
        background: #fafafa;
        position: absolute;
        border: 1px solid #f1f1f1;
        border-top: 1px solid #f1f1f1;
        left: 30%;
        top: 96%;
        z-index: 100;

    }

    .fade-enter-active, .fade-leave-active {
        // transition: all .5s
    }

    .fade-enter, .fade-leave-active {
        // opacity: 0;
        // animation-name:fadeInDownSmall;
    }

    .tran {
        animatioon: fadeInDownSmall 0.2s;
        -webkit-animation: fadeInDownSmall 0.2s;
    }

    @keyframes fadeInDownSmall {
        0% {
            opacity: 0;
            -webkit-transform: translate3d(0, -20px, 0);
            -ms-transform: translate3d(0, -20px, 0);
            transform: translate3d(0, -20px, 0);
        }

        100% {
            opacity: 1;
            -webkit-transform: translate3d(0, 0, 0);
            -ms-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
    }

   @media screen and (max-width:1300px){
        .list > ul > li .products {
                width: 100%;
                left: 3%;
        }
        .second{
            width:76%
        }
    }

    .icon_top li{
        display: inline-block;
        // transform: scale(0.8);
            &:nth-child(2){
                border-left: 1px solid #E3E3E3;
                border-right: 1px solid #E3E3E3;
            }
            &:hover{
                background: #fff;
            }
            >i{
                display: inline-block;
                width:40px;
                height: 40px;
                cursor: pointer;
                padding-bottom: 1px;
             }
        }

    .icon_top li{
        &:nth-child(1) i{
            background: url('./assets/wx_top.png') 4px 12px no-repeat;
        }
        &:nth-child(2) i{
            background: url('./assets/xl_top.png') 4px 12px no-repeat;
        }
        &:nth-child(3) i{
            background: url('./assets/qq_top.png') 4px 12px no-repeat;
        }
    }

    .sign_up div:first-child i {
            background: url('./assets/sign_up.png')   no-repeat;
            background-position: 4px 9px;
        }
   .sign_up div:last-child i{
            background: url('./assets/sign_in.png')   no-repeat;
            background-position: 4px 9px;
        }
    .sign_up{
        float: right;
        >div:first-child{
            margin-right: 7px;
            padding-right: 7px;
            border-right: 2px solid #E3E3E3;
        }
        >div{
            display: inline-block;
            height:45px;
            line-height: 45px;
            cursor: pointer;
            font-size: 12px;
            >i{
                display:inline-block;
                vertical-align: middle;
                width:30px;
                height: 40px;
                padding-bottom: 1px;
            }

        }
        display: inline-block;
        width: 30%;
    }

    .icon_top{
        display: inline-block;
        width:51%;
        vertical-align: middle;
        padding-left: 18%;
    }

</style>
