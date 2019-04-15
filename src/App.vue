<template>
  <v-app>
    <TopToolbar></TopToolbar>
    <router-view></router-view>
    <BottomNav></BottomNav>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import * as TopToolbar from "./components/TopToolbar.vue";
import * as BottomNav from "./components/BottomNav.vue";
@Component({
  components: {
    TopToolbar,
    BottomNav
  }
})
export default class extends Vue {}
</script>
<style scoped>
</style>