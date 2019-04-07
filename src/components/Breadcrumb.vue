<template>
  <a-breadcrumb style="margin: 16px 0">
    <a-breadcrumb-item>Home</a-breadcrumb-item>
    <a-breadcrumb-item>Category</a-breadcrumb-item>
    <a-breadcrumb-item>{{ activeItem }}</a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script>
export default {
  name: "Bradcrumb",
  computed: {
    activeItem: function() {
      return this.$store.getters.activeMenuItem;
    }
  }
};
</script>

<style></style>
