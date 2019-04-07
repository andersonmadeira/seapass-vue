<template>
  <a-layout-sider class="sider" width="250" style="background: #fff">
    <div class="add-container">
      <a-button type="dashed" size="small" block>
        <a-icon type="plus" />Add new
      </a-button>
    </div>
    <MainMenu />
  </a-layout-sider>
</template>

<script>
import MainMenu from "./MainMenu";

export default {
  name: "Sidebar",
  components: {
    MainMenu
  },
  methods: {}
};
</script>

<style scope>
.add-container {
  padding: 5px;
  margin: 5px;
}
.sider {
  height: 100%;
  border-right: 0px;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
