<template>
  <div class="ay-toast" v-show="isShowMask || show">
    <div class="ayui-mask_transparent" v-show="show"></div>
    <transition :name="currentTransition">
      <div class="ayui-toast" :style="{width: width}" :class="toastClass" v-show="show">
        <i class="ayui-iconfont ayui-icon-toast" v-show="type !== 'text'"></i>
        <p class="ayui-toast__content" v-if="text" :style="style" v-html="$t(text)"></p>
        <p class="ayui-toast__content" v-else :style="style">
          <slot></slot>
        </p>
      </div>
    </transition>
  </div>
</template>

<script>
import SafariFixIssue from '../../mixins/safari-fix'

export default {
  name: 'toast',
  mixins: [SafariFixIssue],
  props: {
    value: Boolean,
    time: {
      type: Number,
      default: 2000
    },
    type: {
      type: String,
      default: 'success'
    },
    transition: String,
    width: {
      type: String,
      default: '7.6em'
    },
    isShowMask: {
      type: Boolean,
      default: false
    },
    text: String,
    position: String
  },
  data () {
    return {
      show: false
    }
  },
  created () {
    if (this.value) {
      this.show = true
    }
  },
  computed: {
    currentTransition () {
      if (this.transition) {
        return this.transition
      }
      if (this.position === 'top') {
        return 'ayui-slide-from-top'
      }
      if (this.position === 'bottom') {
        return 'ayui-slide-from-bottom'
      }
      return 'ayui-fade'
    },
    toastClass () {
      return {
        'ayui-toast_forbidden': this.type === 'warn',
        'ayui-toast_cancel': this.type === 'cancel',
        'ayui-toast_success': this.type === 'success',
        'ayui-toast_text': this.type === 'text',
        'ayui-toast-top': this.position === 'top',
        'ayui-toast-bottom': this.position === 'bottom',
        'ayui-toast-middle': this.position === 'middle'
      }
    },
    style () {
      if (this.type === 'text' && this.width === 'auto') {
        return { padding: '10px' }
      }
    }
  },
  watch: {
    show (val) {
      if (val) {
        this.$emit('input', true)
        this.$emit('on-show')
        this.fixSafariOverflowScrolling('auto')

        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.show = false
          this.$emit('input', false)
          this.$emit('on-hide')
          this.fixSafariOverflowScrolling('touch')
        }, this.time)
      }
    },
    value (val) {
      this.show = val
    }
  }
}
</script>

<style lang="less">
@import '../../styles/transition.less';
@import '../../styles/ayui/widget/ayui_tips/ayui_mask';
@import '../../styles/ayui/icon/ayui_icon_font';
@import '../../styles/ayui/widget/ayui_tips/ayui_toast';

.ayui-toast.ayui-toast-top {
  top: @toast-position-top-offset;
}
.ayui-toast.ayui-toast-bottom {
  top: auto;
  bottom: @toast-position-bottom-offset;
  transform: translateX(-50%);
}
.ayui-toast.ayui-toast-middle {
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
}
.ayui-slide-from-top-enter, .ayui-slide-from-top-leave-active {
  opacity: 0;
  transform: translateX(-50%) translateY(-100%)!important;
}
.ayui-slide-from-bottom-enter, .ayui-slide-from-bottom-leave-active {
  opacity: 0;
  transform: translateX(-50%) translateY(100%)!important;
}
.ayui-slide-from-top-enter-active,
.ayui-slide-from-top-leave-active,
.ayui-slide-from-bottom-enter-active,
.ayui-slide-from-bottom-leave-active {
  transition: all 400ms cubic-bezier(.36,.66,.04,1);
}
.ayui-toast {
  transform: translateX(-50%);
  margin-left: 0!important;
}
.ayui-toast.ayui-toast_forbidden {
  color: #F76260;
}
.ayui-toast.ayui-toast_forbidden .ayui-toast__content {
  margin-top: 10px;
}
.ayui-toast.ayui-toast_text{
  min-height: 0;
}
.ayui-toast_text .ayui-toast__content {
  margin: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 15px;
}
.ayui-toast__content {
  font-size: @toast-content-font-size;
}
.ayui-loading_toast .ayui-toast__content {
  margin-top: 0;
}
.ayui-toast_success .ayui-icon_toast:before {
  content: "\EA08";
}
.ayui-toast_cancel .ayui-icon_toast:before {
  content: "\EA0D";
}
.ayui-toast_forbidden .ayui-icon_toast.ayui-icon-success-no-circle:before {
  content: "\EA0B";
  color: #F76260;
}
</style>
