<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import Title from './components/title.vue'
</script>

<template>
  <Title />
</template>

<style>
#app {
  width:100vw;
  min-height:100vh;
  background-color: #E5E5E5;
  display:flex;
  justify-content: center;
  align-items: center;
}
::selection {
    background-color: #ffe150;
}
</style>
