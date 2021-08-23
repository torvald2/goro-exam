<template>
  <div class="relative min-h-screen flex" id="app">
    <!-- <mobile-sidebar /> -->
    <side-bar class="h-screen sticky top-0" />
    <test-content class="" />
  </div>
</template>

<script>
// import MobileSidebar from "./components/MobileSidebar.vue";
import SideBar from "./components/SideBar.vue";
import TestContent from "./components/TestContent.vue";
// import { mapGetters } from "vuex";

export default {
  // computed: mapGetters(['checkLogin']),
  name: "App",
  components: {
    SideBar,
    TestContent,
    // MobileSidebar
  },
  mounted() {
    // alert(this.checkLogin);
  },
};
</script>