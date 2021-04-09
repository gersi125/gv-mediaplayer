<template>
  <div class="flex flex-col h-screen text-sm text-gray-400 transition duration-500 ease-in-out">
    <div class="flex-1 flex overflow-y-hidden">
      <side-bar></side-bar>
      <router-view></router-view>
    </div>
    <player-bar></player-bar>
  </div>
</template>

<script>

import PlayerBar from './components/layouts/PlayerBar'
import SideBar from './components/layouts/SideBar'

export default {
  name: 'App',
  components: {
    PlayerBar,
    SideBar
  }
}
</script>

<style src="./assets/style/style.css"/>


