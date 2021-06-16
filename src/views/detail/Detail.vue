<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :topImages="topImages"></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
    <detail-shop-info :shop="shop"></detail-shop-info>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";

import { getDetail, Goods, Shop } from "network/detail";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
    };
  },
  created() {
    // 保存传入的iid
    this.iid = this.$route.params.iid;

    // 根据iid请求详情数据
    getDetail(this.iid).then((res) => {
      // 获取顶部的图片轮播图数据
      const data = res.result;
      this.topImages = data.itemInfo.topImages;

      // 获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 创建店铺信息的对象
      this.shop = new Shop(data.shopInfo);
    });
  },
};
</script>

<style scoped>
</style>
