<template>
  <div class="ayui-tab">
    <slot name="header"></slot>
    <div class="ayui-tab__panel ayui-fix-safari-overflow-scrolling" ref="viewBoxBody" id="ayui_view_box_body" :style='{paddingTop: bodyPaddingTop, paddingBottom: bodyPaddingBottom}'>
      <slot></slot>
    </div>
    <slot name="bottom"></slot>
  </div>
</template>

<script>
export default {
  name: 'view-box',
  props: ['bodyPaddingTop', 'bodyPaddingBottom'],
  methods: {
    scrollTo (top) {
      this.$refs.viewBoxBody.scrollTop = top
    },
    getScrollTop () {
      return this.$refs.viewBoxBody.scrollTop
    },
    getScrollBody () {
      return this.$refs.viewBoxBody
    }
  }
}
</script>

<style lang="less">
@import '../../styles/ayui/widget/ayui_tab/ay-tabbar';
</style>
