<template>
  <a-layout class="layout-wrapper">
    <Sidebar />
    <a-layout style="padding: 0 24px 24px">
      <Breadcrumb />
      <a-layout-content
        :style="{
          background: '#fff',
          padding: '24px',
          margin: 0,
          minHeight: '280px'
        }"
      >
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
import Breadcrumb from "./components/Breadcrumb.vue";

export default {
  name: "App",
  components: {
    Sidebar,
    Breadcrumb
  },
  methods: {
    teste() {}
  }
};
</script>

<style scoped>
.layout-wrapper {
  height: 100vh;
}
</style>
