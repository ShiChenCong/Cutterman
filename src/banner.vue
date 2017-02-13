<template>
    <main>
        <div class="banner">
            <img src="http://cdn.cutterman.cn//cutterman/images/index/slider-5-slide-1.jpg">
            <div class='shade'></div>
            <div class="content">
                <p>Cutterman致力于改善设计师工作效率,<br/> 为设计师提供优秀、高效、实用的技术解决方案, 解放双手。<br/>让创意不再有界限, 让设计更专注!</p>
            </div>
        </div>
        <section>
            <div class='test' v-if='distance>=0'>
                <div class='detail_one'>
                    <h1>所有图片</h1>
                    <div class="separator"></div>
                    <p>这些是Cut君独立设计开发的工具型产品, 能够大幅提升日常工作效率</p>
                    <ul class="nav nav-pills">
                        <li class="" @click='li_hover(1)' :class="{active:1 === selected}"><a  data-filter="*">所有</a></li>
                        <li class="" @click='li_hover(2)' :class="{active:2 === selected}"><a  data-filter=".photoshop">Photoshop</a></li>
                        <li class="" @click='li_hover(3)' :class="{active:3 === selected}"><a  data-filter=".sketch">Sketch</a></li>
                    </ul>
                    <div class='photo'>
                        <ul>
                            <li class='photoshop'>
                                <div class="overlay-container">
                                    <img src="http://cdn.cutterman.cn//cutterman/images/cutterman_1.jpg" alt="Cutterman">
                                    <a href="http://www.cutterman.cn/zh/cutterman" class="overlay small">
                                        <i class="fa fa-cny">0</i>
                                        <span>点击查看更多</span>
                                    </a>
                                </div>
                                <h3><a href="http://www.cutterman.cn/zh/cutterman">Cutterman</a></h3>
                                <p>一键输出支持ios/android的各种分辨率图片, 自动比例换算, 批量导出</p>
                            </li>
                           <li class='photoshop'>
                               <div class="overlay-container">
                                   <img src="http://cdn.cutterman.cn//cutterman/images/sketch_cutterman_banner.png" alt="Cutterman">
                                   <a href="http://www.cutterman.cn/zh/cutterman" class="overlay small">
                                       <i class="fa fa-cny">30</i>
                                       <span>点击查看更多</span>
                                   </a>
                               </div>
                               <h3><a href="http://www.cutterman.cn/zh/cutterman">Sketch.Cutterman</a></h3>
                               <p>Sketch上的可视化切图工具, 简单高效, 支持批量输出, 多分辨率支持。</p>
                           </li>
                           <li class='photoshop'>
                               <div class="overlay-container">
                                   <img src="http://cdn.cutterman.cn//cutterman/images/parker_2.jpg" alt="Cutterman">
                                   <a href="http://www.cutterman.cn/zh/cutterman" class="overlay small">
                                       <i class="fa fa-cny">60</i>
                                       <span>点击查看更多</span>
                                   </a>
                               </div>
                               <h3><a href="http://www.cutterman.cn/zh/cutterman">Parker</a></h3>
                               <p>自动计算元素尺寸、文字属性, 自动生成标注, 支持DP/PX/PT, 功能强大。</p>
                           </li>
                           <li class='photoshop'>
                               <div class="overlay-container">
                                   <img src="http://cdn.cutterman.cn//cutterman/images/psmirror_1.png" alt="Cutterman">
                                   <a href="http://www.cutterman.cn/zh/cutterman" class="overlay small">
                                       <i class="fa fa-cny">60</i>
                                       <span>点击查看更多</span>
                                   </a>
                               </div>
                               <h3><a href="http://www.cutterman.cn/zh/cutterman">Ps Mirror</a></h3>
                               <p>在手机上实时预览PS中的设计稿, 支持android/iphone, 链接稳定速度快。</p>
                           </li>
                           <li class='photoshop'>
                               <div class="overlay-container">
                                   <img src="http://cdn.cutterman.cn//cutterman/images/sketch_parker.png" alt="Cutterman">
                                   <a href="http://www.cutterman.cn/zh/cutterman" class="overlay small">
                                       <i class="fa fa-cny">30</i>
                                       <span>点击查看更多</span>
                                   </a>
                               </div>
                               <h3><a href="http://www.cutterman.cn/zh/cutterman">Sketch.Parker</a></h3>
                               <p>Sketch上的可视化标注工具, 简单的交互, 自动计算标注, 所见即所得。</p>
                           </li>
                           <li class='photoshop'>
                               <div class="overlay-container">
                                   <img src="http://cdn.cutterman.cn//cutterman/images/nicon_3.jpg" alt="Cutterman">
                                   <a href="http://www.cutterman.cn/zh/cutterman" class="overlay small">
                                       <i class="fa fa-cny">50</i>
                                       <span>点击查看更多</span>
                                   </a>
                               </div>
                               <h3><a href="http://www.cutterman.cn/zh/cutterman">Nicon</a></h3>
                               <p>PS中的矢量图标素材库, 7W+矢量图标, 随心搜索, 无缝下载。</p>
                           </li>
                           <li class='photoshop'>
                               <div class="overlay-container">
                                   <img src="http://cdn.cutterman.cn//cutterman/images/bigger_4.jpg" alt="Cutterman">
                                   <a href="http://www.cutterman.cn/zh/cutterman" class="overlay small">
                                       <i class="fa fa-cny">65</i>
                                       <span>点击查看更多</span>
                                   </a>
                               </div>
                               <h3><a href="http://www.cutterman.cn/zh/cutterman">Bigger</a></h3>
                               <p>一键让你的设计稿实现3D透视效果, 内置机型模板,快速适配。</p>
                           </li>
                           <li class='photoshop'>
                               <div class="overlay-container">
                                   <img src="http://cdn.cutterman.cn//cutterman/images/avatar_5.png" alt="Cutterman">
                                   <a href="http://www.cutterman.cn/zh/cutterman" class="overlay small">
                                       <i class="fa fa-cny">0</i>
                                       <span>点击查看更多</span>
                                   </a>
                               </div>
                               <h3><a href="http://www.cutterman.cn/zh/cutterman">Avatar</a></h3>
                               <p>内置上百张头像, 点击随机生成头像, 支持图层蒙版, UI贴图必备。</p>
                           </li>
                           <li class='photoshop'>
                               <div class="overlay-container">
                                   <img src="http://cdn.cutterman.cn//cutterman/images/icontemplate_6.jpg" alt="Cutterman">
                                   <a href="http://www.cutterman.cn/zh/cutterman" class="overlay small">
                                       <i class="fa fa-cny">0</i>
                                       <span>点击查看更多</span>
                                   </a>
                               </div>
                               <h3><a href="http://www.cutterman.cn/zh/cutterman">IconTemplate</a></h3>
                               <p>一键生成android/ios平台的各个尺寸的App Icon</p>
                           </li>
                           <li class='photoshop'>
                               <div class="overlay-container">
                                   <img src="http://cdn.cutterman.cn//cutterman/images/goldencurve.png" alt="Cutterman">
                                   <a href="http://www.cutterman.cn/zh/cutterman" class="overlay small">
                                       <i class="fa fa-cny">20</i>
                                       <span>点击查看更多</span>
                                   </a>
                               </div>
                               <h3><a href="http://www.cutterman.cn/zh/cutterman">GoldenCurve</a></h3>
                               <p>快速制作出黄金分割曲线, 为设计优美作品提供参考。</p>
                           </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class='test' v-if='distance>=1'>
                <div class='detail_two'>
                    <h1>如何购买</h1>
                    <div class="separator"></div>
                    <p>每个收费的产品需要单独购买, 一次购买终身使用, 同时提供团购和打包优惠政策, 授权与账号绑定, 不限制设备, 限本人使用</p>
                    <div class='four_pic'>
                        <img src="http://cdn.cutterman.cn//cutterman/images/how_to_buy.png" alt="">
                    </div>
                    <div class='four_word'>
                        <ul class="list-icons">
                            <li><i class="icon-check"></i> 一次购买, 终生使用</li>
                            <li><i class="icon-check"></i> 享受Cut君提供的技术支持</li>
                            <li><i class="icon-check"></i> 免费升级, 持续维护</li>
                            <li><i class="icon-check"></i> 可以傲娇向开发者提需求</li>
                        </ul>
                    </div>
                </div>
                <div class='sign_in'>
                    <h1 class="title">注册账号</h1>
                    <p>拥有Cutterman帐号，您将可以无缝使用、购买Cut君的所有产品</p>
                    <a href="http://www.cutterman.cn/zh/user/register" class="btn">注册</a>
                </div>
            </div>
            <div class='test' v-if='distance>=2'>
                <div class='detail_three'>
                    <h1>所有图片</h1>
                    <div class="separator"></div>
                    <p>这些是Cut君独立设计开发的工具型产品, 能够大幅提升日常工作效率</p>
                    <p >Cut君是一名有理想，爱睡觉，讲道理，会聊天的优秀程序员。<br>Cut君热爱开发工具，希望让那些大家不愿意做的事情，都不需要做，让工作更高效，让每个童鞋都能够有更多的时间陪男/女朋友</p>
                    <p>您还可以关注Cut君的公众账号，及时获取软件升级、新产品发布以及优惠活动等信息。</p>
                    <img style="display:block;margin:auto;" width="300" src="http://cdn.cutterman.cn//cutterman/images/weixin_public.jpg" alt="">
                </div>
            </div>
            <div class='test' v-if='distance>=3'>
              <div  class='detail_four'>
                    <div class='container'>
                      <!-- <div class='swiper' :style="styleObject"> -->
                          <div class='swiper' :style="{transform:'translate3d('+gundong+'%,0px,0px)'}">
                                <div @mouseover="hov" @mouseout='hov'>
                                    <h2 class="title">用户评价</h2>
                                    <div>
                                        <img width="120" src="http://cdn.cutterman.cn//cutterman/images/testimonial-1.jpg" alt="Jane Doe" title="Jane Doe" class="img-circle">
                                    </div>
                                    <div>
                                        <p>好用的PS切图工具，特别是要做手机移动端的切图很方便</p>
                                        <div>- 痞子牛</div>
                                        <div>设计师</div>
                                    </div>
                                </div>
                                <div @mouseover="hov" @mouseout='hov'>
                                    <h2 class="title">用户评价</h2>
                                    <div>
                                        <img width="120" src="http://cdn.cutterman.cn//cutterman/images/testimonial-1.jpg" alt="Jane Doe" title="Jane Doe" class="img-circle">
                                    </div>
                                    <div>
                                        <p>重新装了电脑，现在已经离不开这个切图神器了~再给我个邀请码吧</p>
                                        <div>- 王一飞不会飞</div>
                                        <div>设计师</div>
                                    </div>
                                </div>
                                <div @mouseover="hov" @mouseout='hov'>
                                    <h2 class="title">用户评价</h2>
                                    <div>
                                        <img width="120" src="http://cdn.cutterman.cn//cutterman/images/testimonial-1.jpg" alt="Jane Doe" title="Jane Doe" class="img-circle">
                                    </div>
                                    <div>
                                        <p>Cutterman - 最好用的切图工具 看同事用的，真的超好用.</p>
                                        <div>- Channing_Lin</div>
                                        <div>设计师</div>
                                    </div>
                                </div>
                                 <div @mouseover="hov" @mouseout='hov'>
                                    <h2 class="title">用户评价</h2>
                                    <div>
                                        <img width="120" src="http://cdn.cutterman.cn//cutterman/images/testimonial-1.jpg" alt="Jane Doe" title="Jane Doe" class="img-circle">
                                    </div>
                                    <div>
                                        <p> 神了 真的很好用，省了很多事，连字体字号颜色全都标出来啦，好好用！</p>
                                        <div>- 撑高兴尿急急</div>
                                        <div>设计师</div>
                                    </div>
                                </div>
                          </div>
                    </div>
                    <hr class="dark">
                    <div class='pre_next'>
                            <div class='pre' @click='pre' @mouseover="hov" @mouseout='hov'>Pre</div>
                            <div class='next' @click='next' @mouseover="hov" @mouseout='hov'>Nex</div>
                    </div>
                    <ul>
                            <li :class="{red:gundong==0}"   @click='jump_to(0)' @mouseover="hov" @mouseout='hov'></li>
                            <li :class="{red:gundong==-25}" @click='jump_to(-25)' @mouseover="hov" @mouseout='hov'></li>
                            <li :class="{red:gundong==-50}" @click='jump_to(-50)' @mouseover="hov" @mouseout='hov'></li>
                            <li :class="{red:gundong==-75}" @click='jump_to(-75)' @mouseover="hov" @mouseout='hov'></li>
                    </ul>
              </div>
            </div>
            <div class='test' v-if='distance >=4'>
              <div class='detail_five'>
                      <footer>
                            <div class='bot'>
                                <div class='logo'>
                                    <img width="300" id="logo-footer" src="http://cdn.cutterman.cn//cutterman/images/cutterman_logo_3.png" alt="">
                                    <p>Cutterman将持续致力于改善设计师的工作效率, 为广大设计师提供优秀、高效、实用的技术解决方案, 让设计能够更专注!</p>
                                    <div>
                                        <i class='wx'></i>
                                        <i class='xl'></i>
                                        <i class='qq'></i>
                                    </div>
                                </div>
                                <div class='link'><h2>友情链接</h2></div>
                        </footer>
                        <div class='copy'> © 2016 cutterman.cn. All Rights Reserved. 京ICP备14009087号-1</div>
                </div>
              </div>
            </div>
            <!-- <div style='width:100%;height:500px;background:#262626'></div> -->
        </section>
    </main>
</template>
<script>

export default {
    data(){
        return{
            //延迟显示
            distance:0,
            //判断标题头是否要fix了
            top_dis:0,
            //页面向下scroll的距离
            scroll_dis:0,
            selected:1,
            //评价点击滚动距离
            gundong:0,
            //是否开启轮播
            Carousel:true
        }
    },
    props: ['scc'],
    methods:{
       pre(){
           this.gundong==0?
                this.gundong=-75:this.gundong+=25
       },
       next(){
          this.gundong==-75?
                this.gundong=0:this.gundong-=25
       },
       jump_to(juli){
            this.gundong=juli;
       },
        //鼠标悬停时暂停和开启轮播
        hov(){
            this.Carousel=!this.Carousel;
        }

    },
    beforeRouteLeave(to,from,next){
        //离开之前记录滚动距离
        this.scroll_dis=document.body.scrollTop;
        next();
    },
   // beforeRouteEnter(to,from,next){
   //      var self=this;
   //      alert(self.scroll_dis);
   //      next();
   // },
   activated: function () {
      //设置滚动距离
      document.body.scrollTop=this.scroll_dis;
    },
    mounted(){

        var self=this;
        // console.log(self.scc);
        window.onscroll=function(){
            let container=document.getElementsByTagName('section')[0]
            if(container){
                let list=container.children,ht=0;
                ht= list[list.length-1].offsetTop+list[list.length-1].clientHeight;
         
                //页面显示的元素的高度是否已经和滚动的距离持平
                if(ht<=document.body.scrollTop + window.innerHeight){
                    // console.log('要显示了');
                    self.distance+=1;
                }

                if(document.body.scrollTop>'133'){
                      // console.log('触发')
                      self.top_dis=1;
                      self.$emit('chufa', self.top_dis);

                }else{
                      self.top_dis=0;
                      self.$emit('chufa', self.top_dis);
                }
            }
        }

        //轮播
        setInterval(function(){
            if(self.Carousel){
                    if(self.gundong<=-75){
                        self.gundong=0
                    }else{
                        self.gundong-=25
                    }
            }
        },2000)


    }
}

</script>
<style lang="less">
    
    .top{
        position: fixed;
        z-index: 1006;
        -webkit-animation:header_scr 0.5s;
        top:0;
        padding: 5px 20px;
        border-bottom: 1px solid #eaeaea;
    }

    @keyframes header_scr{
        0%{
            opacity: 0;
            top:-97px;
        }
        100%{
            opacity: 1;
            top:0;
        }
    }

    section {
        >div {
            animation: slowshow 1.5s;
            -webkit-animation: slowshow 1.5s ;
        }
    }
    @keyframes slowshow {
        0% {
            opacity: 0;
            -webkit-transform: translate3d(0, 30px, 0);
            -ms-transform: translate3d(0, 30px, 0);
            transform: translate3d(0, 30px, 0);
        }

        100% {
            opacity: 1;
            -webkit-transform: translate3d(0, 0, 0);
            -ms-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
    }

    .banner {
        position: relative;
        img{
          width:100%;
          height:520px;
        }
        .content {
            width: 100%;
            height: 520px;
            position: absolute;
            top: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            text-align: center;
        }
    }

    .shade {
        position: absolute;
        top: 0;
        height: 520px;
        background-color: rgba(0, 0, 0, 0.5);
        width: 100%;
    }

    .test{
        width: 100%;
        &:nth-child(1) {
            background: #F1F1F1;
            padding: 40px 0;
        }
        &:nth-child(2) {
            background: #FFFFFF;
        }
        &:nth-child(3) {
            background: #fff;
        }
        &:nth-child(4) {
            background: #F1F1F1;
        }
        &:nth-child(5) {
            background:#262626;
        }
    }

    .test>div{
         >h1{
            font-size: 38px;
            font-weight: 700;
            text-align: center;
         }
         >p{
            text-align: center;
            margin-bottom: 20px;
            font-size:21px;
            font-weight: 200;
            line-height: 1.4;
         }
    }

    .separator{
        display: block;
        width: 60px;
        height: 5px;
        margin: 15px auto 15px;
        background-color: #cccccc;
        position: relative;
        border: 1px solid #cccccc;
            &:after{
                width: 30px;
                height: 7px;
                background: #333333;
                position: absolute;
                top: -1px;
                left: -1px;
                content: "";
            }
    }

    .nav{
        padding: 0 35%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        li{
            margin-right: 2px;
            margin-left: 2px;
            margin-bottom: 2px;
            display: inline-block;
            float: none;
               a{
                    text-decoration: none;
                    border: 1px solid transparent;
                    border-radius: 0;
                    padding: 10px 15px;
                    border: 1px solid transparent;
                    color: #666666;
                    font-size: 13px;
                    text-transform: uppercase;
                    font-weight: 700;
                    &:hover{
                        border: 1px solid #f3f3f3;
                        color: #e84c3d;
                        background-color: #fafafa;
                    }
               }
        }
    }

    .active a{
        border: 1px solid #f3f3f3 !important;
        color: #e84c3d !important;
        background-color: #fafafa !important;
    }
    
   

    .photo{
        margin:25px 36px;
        padding:0 18%;
        h3,p{
            text-align: center;
        }
        h3{
            font-size: 22px;
            margin-top: 20px;
            margin-bottom: 10px;
            a{
                color: #343434;
                font-family: inherit;
            }
        }
        p{
            font-size: 13px;
            padding: 0 12px;
            margin-bottom: 15px;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
        }
        ul{
            position: relative;
            li{
                width:23%;
                margin:0 2px;
                margin-bottom:15px;
                background-color: #fff;
                display: inline-block;
                img{
                    display: block;
                    max-width: 100%;
                    height: auto;
                    width: 100%;
                }
            }
        }
    }

    .overlay-container{
        position: relative;
        &:hover .overlay{
            background: #fff;
            opacity: 0.8;
            transform: scale(1);
        }
        .overlay{
            position: absolute;
            top: 0;
            bottom: -1px;
            left: 0;
            right: -1px;
            overflow: hidden;
            opacity: 0;
            transform: scale(0.8);
            transition: all linear 0.2s;
            >span{
                position: absolute;
                display: block;
                bottom: 10px;
                text-align: center;
                width: 100%;
                color: #000000;
                font-style: italic;
            }
        }
    }
    
    .fa-cny{
            position: absolute;
            left: 50%;
            top: 50%;
            font-size: 18px;
            line-height: 1;
            margin-top: -8px;
            margin-left: -8px;
            text-align: center;
            color: #e84c3d;
            &:before{
                    content: "¥";
            }
    }

     @media screen and (max-width:1530px){
        .photo ul li{
            width:100%;
        }
        .nav{
            padding:0;
        }
        .icon{
            // width:100%;
        }
        header{
            display: inherit;
        }
        .icon,.list {
            width:100%;
        }
        .photo{
            padding: 0 8%;
        }
    }

    .detail_two,.detail_three{
        padding: 50px 18%;
    }


    .detail_four{
        padding: 50px 22%;
    }
    .four_pic{
        width:49%;
        display: inline-block;
        vertical-align: middle;
        img{
            display: block;
            max-width: 100%;
            height: auto;
        }
    }
    .four_word{
        width:39%;
        display: inline-block;
        text-align: center;
        vertical-align: middle;
        ul {
            li{
                padding: 5px 0;
                white-space: nowrap;
            }
        }
    }
    .icon-check:before {
        content: '-';
        width:15px;
        height:15px;
        font-weight: 700;
    }

    .icon-check{
        display: inline-block;
        height:15px;
        width: 25px;
        text-align: left;
    }

    .list-icons li{
        text-align: left;
    }

    .sign_in{
        width:100%;
        background-color: #f1f1f1;
        box-shadow: 0 0 3px gray !important;
        position: relative;
    }

    .btn{
        display: block;
        width:210px;
        height:61px;
        line-height: 61px;
        text-align: center;
        border:1px solid #e84c3d;
        margin:auto;
        color:#e84c3d;
    }

    .sign_in{
        padding:40px 0;
        a:hover{
            background: #CD3C2E; 
            color:#fff;
        }
    }

    .test>.detail_three>p{
        font-size: 15px;
    }

    .detail_four{
      overflow: hidden;
        ul{
            display: inline-block;
            li{
                width: 10px;
                height:10px;
                background: gray;
                display: inline-block;
                cursor: pointer;
                margin:3px 2px;
            }
        }
    }

    .container{
        overflow: hidden;
        width:100%;
    }
    .swiper{
      width: 400%; 
      left: 0px; 
      transition: all 500ms ease;
      height:200px;
      // overflow: hidden;
      

        >div{
          text-align: center;
          width:25%;
          float: left;
          >div{
            display: inline-block;
            vertical-align: middle;
            text-align: left;
            p,div{
                margin:3px;
            }
            div:last-child{
                font-size: 13px;
                color: #000;
                font-weight: 700;
            }
            img{
                border-radius: 50%;
                margin-right:20px;
            }
          }
        }
    }

    .pre_next{
        width: 50%;
        display: inline-block;
        color:#e1e1e1;
    }
    .pre_next div{
        width:35px;
        height:35px;
        line-height: 35px;
        background: #fff;
        display: inline-block;
        color:gray;
        cursor: pointer;
        text-align: center;
        border-radius: 5px;
        &:hover{
            background: #e84c3d;
            color:#fff;
        }
    }
    
    .red{
        background: #e84c3d !important;
    }

    .dark{
        margin-top: 20px;
        margin-bottom: 20px;
        border: 0;
        border-top: 1px solid #eee;
        border-color: #333333;
    }

    .title{
        font-size: 28px;
        color: #343434;
        line-height: 1.2;
        margin: 18px;
        margin-left: 0;
    }

    .wx,.qq,.xl{
        display: inline-block;
        width:40px;
        height: 40px;
        border-radius: 50%;
        border:1px solid #666;
        cursor: pointer;
            &:hover{
                background-color: rgba(666,666,666,0.6);
            }
    }

    .wx{
        background: url('./assets/wx.png') 4px 4px no-repeat;
    }

    .qq{
        background: url('./assets/qq.png') 4px 4px no-repeat;
    }

     .xl{
        background: url('./assets/xl.png') 4px 4px no-repeat;
    }



    .logo,.link{
        display: inline-block;
        width: 45%;
        overflow: hidden;
        vertical-align: middle;
    }


    .logo{
        margin:3%;
        img,p,div{
            margin-bottom: 20px;
        }
    }
    @media screen and(max-width:830px){
        .logo,.link{
            width:100%;
        }
    }
    .link{
        font-size: 24px;
        margin-bottom: 30px;
        color: rgb(153, 153, 153);
        padding-left: 3%;
            h2{
                cursor: pointer;
            }
    }

    .bot,.copy{
        width:60%;
        margin:auto;
    }

    footer{ 
        border-bottom: 1px solid rgb(51, 51, 51);
    }

    .copy{
        margin-top:20px;
        padding-bottom: 20px;
    }
</style>
