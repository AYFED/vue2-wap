<template>
  <transition :name="transition">
    <div class="ayui-loading_toast ay-loading" v-show="show">
      <div class="ayui-mask_transparent"></div>
      <div class="ayui-toast" :style="{ position: position }">
        <i class="ayui-loading ayui-icon_toast"></i>
        <p class="ayui-toast__content">{{ $t(text) || $t('loading') }}<slot></slot></p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'loading',
  model: {
    prop: 'show',
    event: 'change'
  },
  props: {
    show: Boolean,
    text: String,
    position: String,
    transition: {
      type: String,
      default: 'ayui-mask'
    }
  },
  watch: {
    show (val) {
      this.$emit('update:show', val)
    }
  }
}
</script>

<style lang="less">
@import '../../styles/ayui/widget/ayui_tips/ayui_mask';
@import '../../styles/ayui/widget/ayui_tips/ayui_toast';
@import '../../styles/ayui/widget/ayui-loading/ayui-loading.less';

.ay-loading .ayui-toast {
  z-index: 5001;
}
.ayui-icon_toast.ayui-loading {
  margin: 30px 0 0;
  width: 38px;
  height: 38px;
  vertical-align: baseline;
  display: inline-block;
}
.ayui-mask-enter, .ayui-mask-leave-active {
  opacity: 0;
}
.ayui-mask-leave-active, .ayui-mask-enter-active {
  transition: opacity 300ms;
}
</style>
