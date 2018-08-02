<template>
  <div
    class="ayui-x-dialog"
    :class="{'ayui-x-dialog-absolute': layout === 'VIEW_BOX'}">
    <transition :name="maskTransition">
      <div class="ayui-mask" @click="hide" v-show="show" :style="maskStyle"></div>
    </transition>
    <transition :name="dialogTransition">
      <div :class="dialogClass" v-show="show" :style="dialogStyle">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import preventBodyScrollMixin from '../../mixins/prevent-body-scroll'

export default {
  mixins: [preventBodyScrollMixin],
  name: 'x-dialog',
  model: {
    prop: 'show',
    event: 'change'
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    maskTransition: {
      type: String,
      default: 'ayui-mask'
    },
    maskZIndex: [String, Number],
    dialogTransition: {
      type: String,
      default: 'ayui-dialog'
    },
    dialogClass: {
      type: String,
      default: 'ayui-dialog'
    },
    hideOnBlur: Boolean,
    dialogStyle: Object,
    scroll: {
      type: Boolean,
      default: true,
      validator (val) {
        return true
      }
    }
  },
  computed: {
    maskStyle () {
      if (typeof this.maskZIndex !== 'undefined') {
        return {
          zIndex: this.maskZIndex
        }
      }
    }
  },
  mounted () {
    if (typeof window !== 'undefined') {
      if (window.ayui_CONFIG && window.ayui_CONFIG.$layout === 'VIEW_BOX') {
        this.layout = 'VIEW_BOX'
      }
    }
  },
  watch: {
    show (val) {
      this.$emit('update:show', val)
      this.$emit(val ? 'on-show' : 'on-hide')
      if (val) {
        this.addModalClassName()
      } else {
        this.removeModalClassName()
      }
    }
  },
  methods: {
    shouldPreventScroll () {
      // hard to get focus on iOS device with fixed position, so just ignore it
      const iOS = /iPad|iPhone|iPod/i.test(window.navigator.userAgent)
      const hasInput = this.$el.querySelector('input') || this.$el.querySelector('textarea')
      if (iOS && hasInput) {
        return true
      }
    },
    hide () {
      if (this.hideOnBlur) {
        this.$emit('update:show', false)
        this.$emit('change', false)
        this.$emit('on-click-mask')
      }
    }
  },
  data () {
    return {
      layout: ''
    }
  }
}
</script>

<style lang="less">
@import '../../styles/transition.less';
@import '../../styles/ayui/widget/ayui_tips/ayui_mask';
@import '../../styles/ayui/widget/ayui_tips/ayui_dialog';
@import '../../styles/ayui-modal';

.ayui-x-dialog-absolute .ayui-dialog {
  position: absolute
}
</style>
