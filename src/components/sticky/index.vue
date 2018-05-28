<template>
  <div class="ayui-sticky-box">
    <slot></slot>
  </div>
</template>

<script>
  import sticky from './sticky'

  export default {
    name: 'sticky',
    created() {
      this.$ayui && this.$ayui.bus && this.$ayui.bus.$on('ayui:after-view-enter', this.bindSticky)
    },
    mounted() {
      this.$nextTick(() => {
        this.bindSticky()
      })
    },
    beforeDestroy() {
      this.$ayui && this.$ayui.bus && this.$ayui.bus.$off('ayui:after-view-enter', this.bindSticky)
    },
    methods: {
      bindSticky() {
        this.$nextTick(() => {
          setTimeout(() => {
            sticky(this.$el, {
              scrollBox: this.scrollBox,
              offset: this.offset,
              checkStickySupport: typeof this.checkStickySupport === 'undefined' ? true : this.checkStickySupport
            })
          }, 1000)
        })
      }
    },
    props: ['scrollBox', 'offset', 'checkStickySupport']
  }
</script>

<style lang="less">
  @import '../../styles/variable.less';

  .ayui-sticky-box {
    z-index: @sticky-zindex;
  }

  .ayui-sticky {
    width: 100%;
    position: sticky;
    top: 0;
  }

  .ayui-fixed {
    width: 100%;
    position: fixed;
    top: 0;
    transform: translate3d(0, 0, 0);
  }
</style>
