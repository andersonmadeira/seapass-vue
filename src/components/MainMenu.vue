<template>
  <a-menu
    mode="inline"
    :style="{ borderRight: 0 }"
    :defaultSelectedKeys="['5']"
    :defaultOpenKeys="['sub2']"
    v-on:select="onItemSelected"
  >
    <a-sub-menu v-for="cat in menuItems" v-bind:key="cat.id">
      <span slot="title"> <a-icon type="folder" />{{ cat.name }} </span>
      <a-menu-item v-for="entry in cat.entries" v-bind:key="entry.id">
        <a-icon type="file-text" /> {{ entry.name }}
      </a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>

<script>
export default {
  name: "MainMenu",
  methods: {
    onItemSelected({ key }) {
      this.$store.commit("setActiveItemId", key);
    }
  },
  computed: {
    activeItem() {
      return this.$store.getters.activeItemId;
    },
    menuItems() {
      return this.$store.getters.menuItems;
    }
  }
};
</script>

<style></style>
