<template>
  <div class="tab-contral">
    <div
      v-for="(item, index) in titles"
      class="tab-contral-item"
      :class="{ active: index === currentIndex }"
      @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabContral",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index);
    },
  },
};
</script>

<style scoped>
.tab-contral {
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 40xp;
  line-height: 40px;
  background-color: #fff;
}
.tab-contral-item {
  flex: 1;
}
.tab-contral-item span {
  padding: 2px;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 3px solid var(--color-high-text);
}
</style>
