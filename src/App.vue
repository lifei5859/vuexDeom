<template>
  <div id="app">
    <header-guide/>
    <tap/>
    <router-view/>
    <footer-guide/>
  </div>
</template>

<script>
import HeaderGuide from './components/HeaderGuide/HeaderGuide'
import FooterGuide from './components/FooterGuide/FooterGuide'
import Tap from './components/Tap/Tap'
// import {mapActions} from 'vuex'
export default {
  name: 'App',
  components: {
    FooterGuide,
    HeaderGuide,
    Tap
  },
  methods: {

  },
  created () {
    this.$store.dispatch('asyncData')
  }
}
</script>

<style>
  html,body,#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
  /*width:100%;*/
  height:100%;
  overflow: hidden;
}
</style>
