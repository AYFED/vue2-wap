<template>
  <div class="ayui-grids">
    :class="{
      'ayui-grid-no-lr-borders': !showLrBorders
    }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'grid',
  methods: {
    countColumn () {
      this.childrenSize = this.$children.length
      this.$children.forEach((c, index) => (c.index = index))
    }
  },
  props: {
    rows: {
      type: Number,
      validator () {
        
        
        return true
      }
    },
    cols: {
      type: Number
    },
    showLrBorders: {
      type: Boolean,
      default: true
    },
    showVerticalDividers: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    column () {
      return this.cols || this.childrenSize
    }
  },
  data () {
    return {
      childrenSize: 3
    }
  }
}
</script>
<style lang="less">
@import '../../styles/ayui/widget/ayui-grid/ayui-grid.less';
.ayui-grids.ayui-grid-no-lr-borders {
  &:after {
    display: none;
  }
}
</style>
