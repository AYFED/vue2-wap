<template>
  <button
    :style="buttonStyle"
    class="ayui-btn"
    :class="classes"
    :disabled="disabled"
    :type="actionType"
    @click="onClick">
    <i class="ayui-loading" v-if="showLoading"></i>
    <slot>{{ text }}</slot>
  </button>
</template>

<script>
import { go } from '../../libs/router'

export default {
  name: 'x-button',
  props: {
    type: {
      default: 'default'
    },
    disabled: Boolean,
    mini: Boolean,
    plain: Boolean,
    text: String,
    actionType: String,
    showLoading: Boolean,
    link: [String, Object],
    gradients: {
      type: Array,
      validator: function (val) {
        return val.length === 2
      }
    }
  },
  methods: {
    onClick () {
      !this.disabled && go(this.link, this.$router)
    }
  },
  computed: {
    noBorder () {
      return Array.isArray(this.gradients)
    },
    buttonStyle () {
      if (this.gradients) {
        return {
          background: `linear-gradient(90deg, ${this.gradients[0]}, ${this.gradients[1]})`,
          color: '#FFFFFF'
        }
      }
    },
    classes () {
      return [
        {
          'ayui-btn_disabled': this.disabled,
          'ayui-btn_mini': this.mini,
          'ayui-x-button-no-border': this.noBorder
        },
        `ayui-btn_${this.type}`,
        this.plain ? `ayui-btn_plain-${this.type}` : '',
        this.showLoading ? `ayui-btn_loading` : ''
      ]
    }
  }
}
</script>

<style lang="less">
@import '../../styles/ayui/widget/ayui-button/ayui-button.less';
@import '../../styles/ayui/widget/ayui-loading/ayui-loading.less';

.ayui-btn.ayui-x-button-no-border:after {
  display: none;
}
</style>
