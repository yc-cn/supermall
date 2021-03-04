<template>
  <div id="category">
    <nav-bar class="nav-bar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="content">
      <tab-menu :categories="categories" @selectItem="selectItem"></tab-menu>
    </div>
  </div>
</template>

<script>

  import NavBar from "@/components/common/navbar/NavBar";

  import {getCategory} from "@/network/Caregory";
  import TabMenu from "@/views/category/childComps/TabMenu";

  export default {
    name: "Category",
    components: {
      TabMenu,
      NavBar
    },
    data() {
      return {
        categories: []
      }
    },
    created() {
      //1.请求分类数据
      this._getCategory()
    },
    methods: {
      _getCategory() {
        getCategory().then(res => {
          this.categories = res.data.category.list;
        })
      },
      selectItem() {
        console.log(1)
      }
    }

  }
</script>

<style scoped>
  #category {
    height: 100vh;
  }

  .nav-bar {
    background-color: var(--color-tint);
    /*font-weight: 700;*/
    color: #fff;
  }

  .content {
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;

    display: flex;
  }
</style>
