<template>
  <a-layout-sider class="sider" width="250" style="background: #fff">
    <div class="add-container">
      <a-button type="dashed" size="small" block>
        <a-icon type="plus"/>Add new
      </a-button>
    </div>
    <a-menu mode="inline" :style="{ borderRight: 0}" :defaultSelectedKeys="['1']" :defaultOpenKeys="['sub1']">
      <a-sub-menu key="sub1">
        <span slot="title">
          <a-icon type="folder" as="" asdf="" />Category 1
        </span>
        <a-menu-item key="1">
          <a-icon type="file-text"/>Entry1
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="file-text"/>Entry2
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="file-text"/>Entry3
        </a-menu-item>
        <a-menu-item key="4">
          <a-icon type="file-text"/>Entry4
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <span slot="title">
          <a-icon type="folder"/>Category 2
        </span>
        <a-menu-item key="5">
          <a-icon type="file-text"/>Entry5
        </a-menu-item>
        <a-menu-item key="6">
          <a-icon type="file-text"/>Entry6
        </a-menu-item>
        <a-menu-item key="7">
          <a-icon type="file-text"/>Entry7
        </a-menu-item>
        <a-menu-item key="8">
          <a-icon type="file-text"/>Entry8
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub3">
        <span slot="title">
          <a-icon type="folder"/>Category 3
        </span>
        <a-menu-item key="9">
          <a-icon type="file-text"/>Entry9
        </a-menu-item>
        <a-menu-item key="10">
          <a-icon type="file-text"/>Entry10
        </a-menu-item>
        <a-menu-item key="11">
          <a-icon type="file-text"/>Entry11
        </a-menu-item>
        <a-menu-item key="12">
          <a-icon type="file-text"/>Entry12
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>

<script>
export default {
  name: "Sidebar",
  methods: {
    teste() {
      
    }
  }
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

