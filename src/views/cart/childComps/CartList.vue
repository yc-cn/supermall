<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item v-for="(item,index) in cartList" :product="item" :key="index"/>
    </scroll>
  </div>
</template>

<script>
  import Scroll from "@/components/common/scroll/Scroll";
  import CartListItem from "@/views/cart/childComps/CartListItem";

  import { mapGetters } from 'vuex'

  export default {
    name: "CartList",
    components:{
      Scroll,
      CartListItem
    },
    computed: {
      ...mapGetters(['cartList'])
    },
    activated() {
      this.$refs.scroll.refresh()
    }
  }
</script>

<style scoped>
  .cart-list {
    height: calc(100% - 130px);
    overflow: hidden;
  }

  .content {
    height: calc(100%);
    overflow: hidden;
  }
</style>
