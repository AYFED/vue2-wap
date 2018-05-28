<template>
  <div class="ayui-loadmore" :class="{'ayui-loadmore_line':!showLoading, 'ayui-loadmore_dot': !showLoading && !tip}">
    <i class="ayui-loading" v-if="showLoading"></i>
    <span class="ayui-loadmore__tips" :style="getStyle()" v-show="tip || !showLoading">{{tip}}</span>
  </div>
</template>

<script>
export default {
  name: 'load-more',
  props: {
    showLoading: {
      type: Boolean,
      default: true
    },
    tip: String,
    backgroundColor: String
  },
  methods: {
    getStyle () {
      if (!this.showLoading && this.tip) {
        return {
          'background-color': this.backgroundColor
        }
      }
    }
  }
}
</script>

<style lang="less">
@import '../../styles/ayui/widget/ayui-loading/ayui-loading.less';
@import '../../styles/ayui/widget/ayui_tips/ayui-loadmore.less';
</style>
