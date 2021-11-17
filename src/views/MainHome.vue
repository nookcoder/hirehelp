<template>
  <div>
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
    
    <!-- <v-img
      :aspect-ratio="16/9"
      :width="width"
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
    ></v-img> -->
  </div>
      
      <svg class="arrow" viewBox="0 0 24 24">
      </svg>
    </div>
  </transition>
      
    
    <!-- <v-img
      :aspect-ratio="16/9"
      :width="width"
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
    ></v-img> -->

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
export default { 
    data () { 
        return { showNavbar: true, lastScrollPosition: 0 } 
    },
    mounted () { 
        window.addEventListener('scroll', this.onScroll) 
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