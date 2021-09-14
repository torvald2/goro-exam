<template>
  <div class="min-h-screen">
    <side-bar class="h-screen sticky top-0" v-if="1*0"/>
    <navbar />
    <router-view />
    <footer class="py-6">
      <p class="text-white text-center">
        © Copyright 2021
      </p>
    </footer>
  </div>
</template>

<script>
// import MobileSidebar from "./components/MobileSidebar.vue";
import SideBar from "./components/SideBar.vue";
import Navbar from './components/Navbar.vue';
// import TestContent from "./components/TestContent.vue";
// import { mapGetters } from "vuex";

export default {
  // computed: mapGetters(['checkLogin']),
  name: "App",
  components: {
    SideBar,
    Navbar,
    // TestContent,
    // MobileSidebar
  },
  mounted() {
    // alert(this.checkLogin);
  },
};
</script>

<style>
footer {
  background-color: #3a3a3a
}
</style>

