<template>
  <div class="ayui-alert">
    <x-dialog
    v-model="showValue"
    :mask-transition="maskTransition"
    :dialog-transition="dialogTransition"
    :hide-on-blur="hideOnBlur"
    :mask-z-index="maskZIndex"
    @on-hide="$emit('on-hide')"
    @on-show="$emit('on-show')">
      <div class="ayui-dialog__hd">
        <strong class="ayui-dialog__title">{{title}}</strong>
      </div>
      <div class="ayui-dialog__bd">
        <slot>
          <div v-html="content"></div>
        </slot>
      </div>
      <div class="ayui-dialog__ft">
        <a href="javascript:;"
        class="ayui-dialog__btn ayui-dialog__btn_primary"
        @click="_onHide">{{buttonText || $t('button_text')}}</a>
      </div>
    </x-dialog>
  </div>
</template>

<script>
import XDialog from '../x-dialog'

export default {
  name: 'alert',
  components: {
    XDialog
  },
  created () {
    if (typeof this.value !== 'undefined') {
      this.showValue = this.value
    }
  },
  props: {
    value: Boolean,
    title: String,
    content: String,
    buttonText: String,
    hideOnBlur: {
      type: Boolean,
      default: false
    },
    maskTransition: {
      type: String,
      default: 'ayui-mask'
    },
    dialogTransition: {
      type: String,
      default: 'ayui-dialog'
    },
    maskZIndex: [Number, String]
  },
  data () {
    return {
      showValue: false
    }
  },
  methods: {
    _onHide () {
      this.showValue = false
    }
  },
  watch: {
    value (val) {
      this.showValue = val
    },
    showValue (val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style lang="less">
@import '../../styles/transition.less';
@import '../../styles/ayui/widget/ayui_tips/ayui_mask';
@import '../../styles/ayui/widget/ayui_tips/ayui_dialog';
</style>
