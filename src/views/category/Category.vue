<template>
  <div id="category">
    <nav-bar class="nav-bar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="content">
      <tab-menu :categories="categories" @selectItem="selectItem"></tab-menu>
      <scroll id="tab-content">
        <tab-content-category :subcategories="showSubcategory"/>
      </scroll>
    </div>
  </div>
</template>

<script>

  import NavBar from "@/components/common/navbar/NavBar";

  import TabMenu from "@/views/category/childComps/TabMenu";
  import TabContentCategory from "@/views/category/childComps/TabContentCategory";

  import Scroll from "@/components/common/scroll/Scroll";

  import {getCategory, getSubcategory} from "@/network/category";

  export default {
    name: "Category",
    components: {
      TabMenu,
      TabContentCategory,
      NavBar,
      Scroll
    },
    data() {
      return {
        categories: [],
        categoryData: {

        },
        currentIndex: -1
      }
    },
    created() {
      //1.请求分类数据
      this._getCategory()
    },
    computed: {
      showSubcategory() {
        if (this.currentIndex === -1) return {}
        return this.categoryData[this.currentIndex].subcategories
      },
    },
    methods: {
      _getCategory() {
        getCategory().then(res => {
          this.categories = res.data.category.list;

          for (let i = 0; i < this.categories.length; i++) {
            this.categoryData[i] = {
              subcategories: {},
            }
          }

          this._getSubcategory(0)
        })
      },
      _getSubcategory(index) {
        this.currentIndex = index;

        const maitKey = this.categories[index].maitKey;

        getSubcategory(maitKey).then(res => {
          this.categoryData[index].subcategories = res.data;
          this.categoryData = {...this.categoryData};
        })

      },
      selectItem(index) {
        this._getSubcategory(index)
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

  #tab-content {
    height: 100%;
    flex: 1;
    overflow: hidden;
  }
</style>
