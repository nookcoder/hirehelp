<template>
  <div>
    
<p class="circle">
  <span class="ouro">
    <span class="left"><span class="anim"></span></span>
    <span class="right"><span class="anim"></span></span>
  </span>

  <span class="ouro ouro2">
    <span class="left"><span class="anim"></span></span>
    <span class="right"><span class="anim"></span></span>
  </span>

  <span class="ouro ouro3">
    <span class="left"><span class="anim"></span></span>
    <span class="right"><span class="anim"></span></span>
  </span>
</p>

<p class="round">
  <span class="ouro">
    <span class="left"><span class="anim"></span></span>
    <span class="right"><span class="anim"></span></span>
  </span>

  <span class="ouro ouro2">
    <span class="left"><span class="anim"></span></span>
    <span class="right"><span class="anim"></span></span>
  </span>

  <span class="ouro ouro3">
    <span class="left"><span class="anim"></span></span>
    <span class="right"><span class="anim"></span></span>
  </span>
</p>


<div class="backgrounds overlay">
			<div class="background" data-aos="fade-in" data-aos-duration="1500" data-aos-anchor=".section--hero"></div>
		</div>

		<header class="hero">
			<div class="hero-center">
				<h1 class="hero__logo" data-aos="zoom-in">채용 플랫폼</h1>
				<h2 class="hero__text" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400">언택트 채용을 <span> 면접까지 </span></h2>
			</div>
			<span class="hero__scroll" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="800">
				스크롤하기 <br>
				<i class="chevron bottom"></i>
			</span>
			<a href="http://github.com/michalsnik/aos" target="_blank" class="octocat" data-aos="zoom-out" data-aos-delay="1500">
				<img src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" alt="">
			</a>
		</header>

<div data-aos="fade-up"
     data-aos-offset="200"
     data-aos-delay="50"
     data-aos-duration="1000"
     data-aos-easing="ease-in-out"
     data-aos-mirror="true"
     data-aos-once="false"
     data-aos-anchor-placement="top-center">
     <v-img
      :aspect-ratio="16/9"
      :width="width"
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
    ></v-img>
</div>

<div aos="fade-up" data-aos-duration="1000">
    <v-img
      :aspect-ratio="16/9"
      :width="width"
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
    ></v-img>
            
        </div>

        <div class="container">
            <h2 class="section-title">Fade</h2>
            <div class="code code--small code--left aos-init" data-aos="fade-up">
                    <v-img
      :aspect-ratio="16/9"
      :width="width"
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
    ></v-img>            
        </div>
      </div>
<v-timeline
    align-top
  >
    <v-timeline-item
      v-for="(item, i) in items"
      :key="i"
      :color="item.color"
      :icon="item.icon"
      fill-dot
    >
      <v-card
        :color="item.color"
        dark
      >
        <v-card-title class="text-h6">
          Lorem Ipsum Dolor
        </v-card-title>
        <v-card-text class="white text--primary">
          <p>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</p>
          <v-btn
            :color="item.color"
            class="mx-0"
            outlined
          >
            Button
          </v-btn>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>

  <div
    class="navbar"
    :class="{ 'hidden-navbar': !showNavbar }"
  ></div>
  <transition name="fade">
    <div class="message" key="down" v-if="showNavbar">
      <div class="clients owl-carousel owl-theme" style="margin-top: 60px;"></div>
      <h1 style="font-size:48px; font-weight:900">우린,</h1>
      <div class="clients owl-carousel owl-theme" style="margin-top: 60px;"></div>
    </div>
    <div class="message" key="up" v-else>

      <div class="clients owl-carousel owl-theme" style="margin-top: 60px;"></div>
      <h1 style="font-size:48px; font-weight:900">당신의</h1>

        <div class="client-section no-color" style="margin-top: 60px;" id="partners">
    <div class="container text-center">
      <h1 style="font-size:48px; font-weight:900">고용 파트너 입니다.</h1>
      <div class="clients owl-carousel owl-theme" style="margin-top: 60px;"></div>
    </div>
    
    <v-img
      :aspect-ratio="16/9"
      :width="width"
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
    ></v-img>
  </div>
      
    </div>
  </transition>

  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
We are composed of 3 students from Sejong University, and we have launched our work in the "PaaS-Ta" based service development contest. We want to contribute to securing a good reference model and revitalizing the platform-based application service ecosystem through "PaaS-Ta" based application service development and idea contest. nice to see you. And I want to thank everyone who has worked hard to provide this platform.
+ PaaS-TA is an open cloud platform created through collaboration with various domestic companies with the support of the Korea Intelligent Information Society Agency (NIA) with the goal of strengthening domestic IT service competitiveness in the cloud platform market centered on overseas vendors. .
As an open source-based PaaS (Platform as a Service), "TA" in PaaS-TA is very witty as it means getting on PaaS or thank you. 
    </v-card-text>
      <v-divider></v-divider>
      <v-card-text class="white--text">
        2021 — <strong>na0</strong>
      </v-card-text>
    </v-card>
  </v-footer>
  </div>
</template>

<script>
import AOS from 'aos';
export default {
    created(){
        AOS.init();
    },
    head:{
        script:[
            {href:"https://unpkg.com/aos@2.3.1/dist/aos.css", rel:"stylesheet"},
            {src:'https://unpkg.com/aos@2.3.1/dist/aos.js',async:true},
        ]
    },
    data () {
        return {
        items: [
        {
          color: 'red lighten-2',
          icon: 'mdi-star',
        },
        {
          color: 'purple darken-1',
          icon: 'mdi-book-variant',
        },
        {
          color: 'green lighten-1',
          icon: 'mdi-airballoon',
        },
        {
          color: 'indigo',
          icon: 'mdi-buffer',
        }],
            showNavbar: true, 
            lastScrollPosition: 0
        }
    },
    mounted () { 
        window.addEventListener('scroll', this.onScroll) 
        setTimeout(this.fadeNext, 1000)
    }, 
    beforeDestroy () { 
        window.removeEventListener('scroll', this.onScroll) 
    },
    methods: {
        onScroll () { 
        const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
          if (currentScrollPosition < 0) 
          { 
              return 
          }
          if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {return}
          this.showNavbar = currentScrollPosition < this.lastScrollPosition 
          this.lastScrollPosition = currentScrollPosition 
          } 
    }
}

</script>


<style>

.ouro {
    position: relative;
    display:inline-block;
    height: 46px;
    width: 46px;
    margin: 1em;
    border-radius: 50%;  
    background: none repeat scroll 0 0 #DDDDDD;
    overflow:hidden;
    box-shadow: 0 0 10px rgba(0,0,0,.1) inset, 0 0 25px rgba(0,0,255,0.075);
}

.ouro:after {
    content: "";
    position: absolute;
    top: 9px; left: 9px;
    display: block;
    height: 28px; width: 28px;
    background: none repeat scroll 0 0 #F2F2F2;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0,0,0,.1);
}
.ouro > span {
    position: absolute;
    height: 100%; width: 50%;
    overflow: hidden;
}
.left  { left:0   }
.right { left:50% }

.anim {
    position: absolute;
    left: 100%; top: 0;
    height: 100%; width: 100%;
    border-radius: 999px;
    background: none repeat scroll 0 0 #89b1d3;
    opacity: 0.8;
    -webkit-animation: ui-spinner-rotate-left 3s infinite;
    animation: ui-spinner-rotate-left 3s infinite;
    -webkit-transform-origin: 0 50% 0;
    transform-origin: 0 50% 0;
}
.left .anim {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
}
.right .anim {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    left: -100%;
    -webkit-transform-origin: 100% 50% 0;
    transform-origin: 100% 50% 0;
}

/* v2 */
.ouro2 .anim {
   -webkit-animation-delay:0;
   animation-delay:0;
}
.ouro2 .right .anim{
   -webkit-animation-delay: 1.5s;
   animation-delay: 1.5s;
}

/* v3 */
.ouro3 .anim {
   -webkit-animation-delay: 0s;
   -webkit-animation-duration:3s;
   -webkit-animation-timing-function: linear;
   animation-delay: 0s;
   animation-duration:3s;
   animation-timing-function: linear;
}
.ouro3 .right .anim{
   -webkit-animation-name: ui-spinner-rotate-right;
   -webkit-animation-delay:0;
   -webkit-animation-delay: 1.5s;
   animation-name: ui-spinner-rotate-right;
   animation-delay:0;
   animation-delay: 1.5s;
}

/* round variation */
.round .ouro:after {display:none }


@keyframes ui-spinner-rotate-right{
  0%{transform:rotate(0deg)}
  25%{transform:rotate(180deg)}
  50%{transform:rotate(180deg)}
  75%{transform:rotate(360deg)}
  100%{transform:rotate(360deg)}
}
@keyframes ui-spinner-rotate-left{
  0%{transform:rotate(0deg)}
  25%{transform:rotate(0deg)}
  50%{transform:rotate(180deg)}
  75%{transform:rotate(180deg)}
  100%{transform:rotate(360deg)}
}

@-webkit-keyframes ui-spinner-rotate-right{
  0%{-webkit-transform:rotate(0deg)}
  25%{-webkit-transform:rotate(180deg)}
  50%{-webkit-transform:rotate(180deg)}
  75%{-webkit-transform:rotate(360deg)}
  100%{-webkit-transform:rotate(360deg)}
}
@-webkit-keyframes ui-spinner-rotate-left{
  0%{-webkit-transform:rotate(0deg)}
  25%{-webkit-transform:rotate(0deg)}
  50%{-webkit-transform:rotate(180deg)}
  75%{-webkit-transform:rotate(180deg)}
  100%{-webkit-transform:rotate(360deg)}
}

html {height: 100%}
body { text-align:center; background: radial-gradient(circle, #fff 0%, #bbb 85%) no-repeat; background: -webkit-radial-gradient(circle, #fff 0%, #bbb 85%) no-repeat; height: 100%; display:table; width:100%}
.block {display: table-cell; vertical-align:middle}
h1, a { margin-top: 1em; font-family: "Open Sans Light", "Open Sans", "Segoe UI", Helvetica, Arial; color: #888; font-weight: lighter;}
.info {margin-top: 25px}
.info a {font-size: 12px; color: #999}
.info br + a {text-decoration:none}

</style>