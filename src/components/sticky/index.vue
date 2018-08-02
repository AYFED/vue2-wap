<template>
  <div class="ayui-sticky-box">
    <slot></slot>
  </div>
</template>

<script>
  import sticky from './sticky'

  export default {
    name: 'sticky',
  data () {
    return {
      initTimes: 0
    }
  },
    created() {
      this.$ayui && this.$ayui.bus && this.$ayui.bus.$on('ayui:after-view-enter', this.bindSticky)
    },
  activated () {
    if (this.initTimes > 0) {
      this.bindSticky()
    }
    this.initTimes++
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
      if (this.disabled) {
        return
      }
      this.$nextTick(() => {
        sticky(this.$el, {
          scrollBox: this.scrollBox,
          offset: this.offset,
          checkStickySupport: typeof this.checkStickySupport === 'undefined' ? true : this.checkStickySupport
        })
      })
    }
  },
  props: ['scrollBox', 'offset', 'checkStickySupport', 'disabled']
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
.ayui-sticky-fill {
  display: none;
}
.ayui-fixed + .ayui-sticky-fill {
  display: block;
}
</style>
