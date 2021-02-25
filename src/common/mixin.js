import {debounce} from "@/common/utils";
import BackTop from "@/components/content/backTop/BackTop"


export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null,
      newRefresh: null
    }
  },
  mounted(){
    this.newRefresh = debounce(this.$refs.scroll.refresh, 100)

    this.itemImgListener = () => {
      this.newRefresh()
    }

    this.$bus.$on('itemImageLoad', this.itemImgListener)

    //console.log('1111');
  }
}

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false,
    }
  },
  methods: {
    //返回顶部
    backClick() {
      this.$refs.scroll.scrollTo(0, 0)
    },
  }
}
