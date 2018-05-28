<template>
  <p class="ayui-x-hr"></p>
</template>

<script>
export default {
  name: 'x-hr'
}
</script>

<style lang="less">
@import '../../styles/ayui/base/mixin/setOnepx.less';

.ayui-x-hr {
  padding-top: 15px;
  margin-bottom: 15px;
  position: relative;
  &:before {
    .setBottomLine()
  }
}
</style>
