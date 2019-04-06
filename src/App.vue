<template>
  <a-layout class="layout-wrapper">
    <Sidebar />
    <a-layout style="padding: 0 24px 24px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>Category</a-breadcrumb-item>
        <a-breadcrumb-item>Entry</a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"> Content </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";

export default {
  name: "App",
  components: {
    Sidebar
  },
  methods: {
    teste () {

    }
  }
};
</script>

<style scoped>
.layout-wrapper {
  height: 100vh;
}
</style>
