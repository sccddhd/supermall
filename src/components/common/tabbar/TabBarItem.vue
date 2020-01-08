<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red"
    }
  },
  data() {
    return {
      //isActive: true
    };
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    }
  },
  methods: {
    itemClick() {
      if (this.path != this.$route.path) {
        this.$router.push(this.path);
      }
    }
  }
};
</script>

<style>
.tab-bar-item {
  /* 将flex均分 */
  flex: 1;
  text-align: center;
  /* 一般tab-bar高度都是49px */
  height: 49px;
  font-size: 14px;
}

/* .active {
  color: red;
} */

/* 设置图片大小 */
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  /* 去掉图片多余的3px */
  vertical-align: middle;
}
</style>