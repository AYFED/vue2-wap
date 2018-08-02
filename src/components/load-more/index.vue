<template>
  <div class="ayui-loadmore" :class="{'ayui-loadmore_line':!showLoading, 'ayui-loadmore_dot': !showLoading && !tip}">
    <i class="ayui-loading" v-if="showLoading"></i>
    <span class="ayui-loadmore__tips" v-show="tip || !showLoading">{{tip}}</span>
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
    tip: String
  }
}
</script>


<style lang="less">
@import '../../styles/ayui/widget/ayui-loading/ayui-loading.less';
@import '../../styles/ayui/widget/ayui_tips/ayui-loadmore.less';

.ayui-loadmore{
  &.ayui-loadmore_line{
    display: flex;
    border-top: 0;

    &:before, &:after{
      position: relative;
      top: -1px;
      flex: 1;
      content: '';
      border-top: 1px solid @ayuiLineColorLight;
    }
  }
}
</style>
