<template>
  <a-breadcrumb style="margin: 16px 0">
    <a-breadcrumb-item>Home</a-breadcrumb-item>
    <a-breadcrumb-item v-if="categoryLabel !== ''">
      {{ categoryLabel }}</a-breadcrumb-item
    >
    <a-breadcrumb-item v-if="itemLabel !== ''">{{
      itemLabel
    }}</a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script>
export default {
  name: "Bradcrumb",
  computed: {
    itemLabel: function() {
      const item = this.$store.getters.activeItem;
      return item !== undefined ? item.name : "";
    },
    categoryLabel: function() {
      const cat = this.$store.getters.activeCategory;
      return cat !== undefined ? cat.name : "";
    }
  }
};
</script>

<style></style>
