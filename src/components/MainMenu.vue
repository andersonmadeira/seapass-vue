<template>
  <a-menu
    mode="inline"
    :style="{ borderRight: 0 }"
    :defaultSelectedKeys="['5']"
    :defaultOpenKeys="['sub2']"
    v-on:select="onItemSelected"
  >
    <a-sub-menu v-for="cat in menu.categories" v-bind:key="cat.id">
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
    onItemSelected({ item, key, selectedKeys }) {
      console.log("Item selected!", item, key, selectedKeys);
      this.$store.commit("setActiveMenuItem", key);
    }
  },
  computed: {
    activeItem() {
      return this.$store.getters.activeMenuItem;
    },
    menu() {
      return this.$store.getters.menu;
    }
  }
};
</script>

<style></style>
