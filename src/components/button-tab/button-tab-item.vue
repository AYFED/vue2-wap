<template>
  <a class="ayui-button-tab-item" :class="classes" href="javascript:" :style="style" @click="onItemClick">
    <slot></slot>
  </a>
</template>

<script>
import { childMixin } from '../../mixins/multi-items'

export default {
  name: 'button-tab-item',
  mixins: [childMixin],
  computed: {
    classes () {
      return {
        'ayui-button-group-current': this.currentIndex === this.$parent.currentIndex,
        'ayui-button-tab-item-first': this.currentIndex === 0,
        'ayui-button-tab-item-last': this.currentIndex === this.$parent.$children.length - 1,
        'ayui-button-tab-item-middle': this.currentIndex > 0 && this.currentIndex !== this.$parent.$children.length - 1
      }
    },
    style () {
      if (this.$parent.height) {
        return {
          height: `${this.$parent.height}px`,
          lineHeight: `${this.$parent.height}px`
        }
      }
    }
  }
}
</script>
