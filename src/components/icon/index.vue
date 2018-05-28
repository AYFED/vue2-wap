<template>
  <i :class="[className, isBig ? 'ayui-icon-big' : '']"></i>
</template>

<script>
export default {
  name: 'icon',
  props: {
    type: String,
    isBig: Boolean
  },
  computed: {
    className () { // compatible with old type param
      return `ayui-iconfont ayui-icon-${this.type.replace(/_/g, '-')}`
    }
  }
}
</script>

<style lang="less">
@import '../../styles/ayui/icon/ayui_icon_font';

/**
following styles will be removed after v3.0.0
*/
.ayui-icon-big:before {
  font-size: 93px;
}
</style>
