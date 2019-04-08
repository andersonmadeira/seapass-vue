<template>
  <p>Entry {{ itemLabel }}</p>
</template>

<script>
export default {
  created() {
    // first route, itemId not defined
    if (this.activeItemId === 0) {
      this.$store.commit("setActiveItemId", this.$route.params.entryId);
    }
  },
  computed: {
    entryName: () => {
      return "";
    },
    activeItemId() {
      return this.$store.getters.activeItemId;
    },
    itemLabel: function() {
      const item = this.$store.getters.activeItem;
      return item !== undefined ? item.name : "";
    }
  }
};
</script>

<style scoped></style>
