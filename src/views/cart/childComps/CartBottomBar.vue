<template>
  <div class="bottom-bar">
    <div class="check-content">
      <CheckButton class="check-button"></CheckButton>
      <span>全选</span>
    </div>
    <div class="price">合计: {{ totalPrice }}</div>
    <div class="calculate">去结算({{ checkLength }})</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";
export default {
  name: "CartBottomBar",
  components: { CheckButton },
  computed: {
    totalPrice() {
      return (
        "￥" +
        this.$store.getters.cartList
          .filter((item) => {
            return item.checked;
          })
          .reduce((preVaule, item) => {
            return preVaule + item.price * item.count;
          }, 0)
      );
    },
    checkLength() {
      return this.$store.state.cartList.filter((item) => item.checked).length;
    },
  },
};
</script>

<style scoped>
.bottom-bar {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 49px;
  height: 49px;
  background-color: #eee;
  line-height: 49px;
}
.check-content {
  display: flex;
  align-items: center;
  margin-left: 5px;
}
.check-button {
  width: 22px;
  height: 22px;
  line-height: 22px;
  margin-right: 5px;
}
.price {
  margin-left: 20px;
}
.calculate {
  width: 90px;
  margin-left: auto;
  text-align: center;
  background-color: pink;
}
</style>
