<template>
  <div class="ayui-swipeout">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'swipeout'
}
</script>

<style lang="less">
@import '../../styles/variable.less';

.ayui-swipeout {
  width: 100%;
  overflow: hidden;
}
.ayui-swipeout-item {
  position: relative;
}
.ayui-swipeout-button-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  font-size: 0;
  text-align: right;
}
.ayui-swipeout-button-box-left {
  text-align: left;
}
.ayui-swipeout-button-box > div {
  height: 100%;
}
.ayui-swipeout-button {
  height: 100%;
  text-align: center;
  font-size: 14px;
  color: @swipeout-button-font-color;
  border: none;
}
.ayui-swipeout-content {
  position: relative;
  background: @swipeout-content-bg-color;
}
.ayui-swipeout-content.ayui-swipeout-content-animated {
  transition: transform 0.2s;
}
.ayui-swipeout-button-primary {
  background-color: @swipeout-button-primary-bg-color;
}
.ayui-swipeout-button-warn {
  background-color: @swipeout-button-warn-bg-color;
}
.ayui-swipeout-button-default {
  background-color: @swipeout-button-default-bg-color;
}
</style>
