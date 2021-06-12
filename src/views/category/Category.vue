<template>
  <div class="wrapper">
    <ul class="content">
      <li>分类列表1100</li>
      <li>分类列表2100</li>
      <li>分类列表3100</li>
      <li>分类列表4100</li>
      <li>分类列表5100</li>
      <li>分类列表6100</li>
      <li>分类列表7100</li>
      <li>分类列表8100</li>
      <li>分类列表9100</li>
      <li>分类列表10100</li>
      <li>分类列表11100</li>
      <li>分类列表12100</li>
      <li>分类列表13100</li>
      <li>分类列表14100</li>
      <li>分类列表15100</li>
      <li>分类列表16100</li>
      <li>分类列表17100</li>
      <li>分类列表18100</li>
      <li>分类列表19100</li>
      <li>分类列表20100</li>
      <li>分类列表21100</li>
      <li>分类列表22100</li>
      <li>分类列表23100</li>
      <li>分类列表24100</li>
      <li>分类列表25100</li>
      <li>分类列表26100</li>
      <li>分类列表27100</li>
      <li>分类列表28100</li>
      <li>分类列表29100</li>
      <li>分类列表30100</li>
      <li>分类列表31100</li>
      <li>分类列表32100</li>
      <li>分类列表33100</li>
      <li>分类列表34100</li>
      <li>分类列表35100</li>
      <li>分类列表36100</li>
      <li>分类列表37100</li>
      <li>分类列表38100</li>
      <li>分类列表39100</li>
      <li>分类列表40100</li>
      <li>分类列表41100</li>
      <li>分类列表42100</li>
      <li>分类列表43100</li>
      <li>分类列表44100</li>
      <li>分类列表45100</li>
      <li>分类列表46100</li>
      <li>分类列表47100</li>
      <li>分类列表48100</li>
      <li>分类列表49100</li>
      <li>分类列表50100</li>
      <li>分类列表51100</li>
      <li>分类列表52100</li>
      <li>分类列表53100</li>
      <li>分类列表54100</li>
      <li>分类列表55100</li>
      <li>分类列表56100</li>
      <li>分类列表57100</li>
      <li>分类列表58100</li>
      <li>分类列表59100</li>
      <li>分类列表60100</li>
      <li>分类列表61100</li>
      <li>分类列表62100</li>
      <li>分类列表63100</li>
      <li>分类列表64100</li>
      <li>分类列表65100</li>
      <li>分类列表66100</li>
      <li>分类列表67100</li>
      <li>分类列表68100</li>
      <li>分类列表69100</li>
      <li>分类列表70100</li>
      <li>分类列表71100</li>
      <li>分类列表72100</li>
      <li>分类列表73100</li>
      <li>分类列表74100</li>
      <li>分类列表75100</li>
      <li>分类列表76100</li>
      <li>分类列表77100</li>
      <li>分类列表78100</li>
      <li>分类列表79100</li>
      <li>分类列表80100</li>
      <li>分类列表81100</li>
      <li>分类列表82100</li>
      <li>分类列表83100</li>
      <li>分类列表84100</li>
      <li>分类列表85100</li>
      <li>分类列表86100</li>
      <li>分类列表87100</li>
      <li>分类列表88100</li>
      <li>分类列表89100</li>
      <li>分类列表90100</li>
      <li>分类列表91100</li>
      <li>分类列表92100</li>
      <li>分类列表93100</li>
      <li>分类列表94100</li>
      <li>分类列表95100</li>
      <li>分类列表96100</li>
      <li>分类列表97100</li>
      <li>分类列表98100</li>
      <li>分类列表99100</li>
      <li>分类列表100100</li>
    </ul>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Category",
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.scroll = new BScroll(document.querySelector(".wrapper"), {
      probeType: 3,
      pullUpLoad: true,
    });
    this.scroll.on("scroll", (position) => {
      // console.log(position);
    });
    this.scroll.on("pullingUp", () => {
      console.log("上拉加载更多");
      setTimeout(() => {
        this.scroll.finishPullUp();
      }, 2000);
    });
  },
};
</script>

<style scoped>
.wrapper {
  height: 150px;
  background-color: red;
  overflow: hidden;
}
</style>
