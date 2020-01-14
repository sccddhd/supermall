<template>
  <!-- <swiper>
    <swiper-item v-for="item in banners" :key="item.link">
      <a :href="item.link">
        <img :src="item.image" alt />
      </a>
    </swiper-item>
  </swiper>-->

  <el-carousel height="180px" arrow="always">
    <el-carousel-item v-for="item in banners" :key="item.link">
      <!-- <h3 class="small">{{ item }}</h3> -->
      <!-- <a :href="item.link">
        
      </a>-->
      <img :src="item.image" alt />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
// import { Swiper, SwiperItem } from "@components/common/swiper";
export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  // components: { Swiper, SwiperItem }
};
</script>

<style>
/* .el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
} */
</style>