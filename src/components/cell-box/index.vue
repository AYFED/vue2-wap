<template>
  <div
  class="ayui-cell-box ayui-cell"
  :class="className"
  :style="style"
  @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
import { go } from '../../libs/router'

export default {
  name: 'cell-box',
  props: {
    isLink: Boolean,
    link: [String, Object],
    borderIntent: {
      type: Boolean,
      default: true
    },
    noFlex: Boolean,
    alignItems: String
  },
  computed: {
    style () {
      if (this.alignItems) {
        return {
          'align-items': this.alignItems
        }
      }
    },
    className () {
      return {
        'ayui-tap-active': this.isLink || !!this.link,
        'ayui-cell_access': this.isLink || !!this.link,
        'ayui-cell-no-border-intent': !this.borderIntent
      }
    }
  },
  methods: {
    onClick () {
      this.link && go(this.link, this.$router)
    }
  }
}
</script>

<style lang="less">
@import '../../styles/variable.less';
@import '../../styles/tap.less';
@import '../../styles/ayui/base/mixin/setArrow.less';
@import '../../styles/ayui/widget/ayui_cell/ayui_cell_global';

.ayui-cell-primary {
  flex: 1;
}
.ayui-cell.ayui-cell-no-border-intent:before {
  left: 0;
}
</style>
