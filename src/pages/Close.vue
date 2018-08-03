<template>
  <div>
    <span class="ayui-close" style="width:14px;height:14px;"></span>
    <br>
    <br>
    <span class="ayui-close"></span>
    <br>
    <br>
    <span class="ayui-close" style="width:30px;height:30px;color:#ccc;"></span>
    <br>
    <br>
    <span class="ayui-close ayui-close-2px" style="width:40px;height:40px;color:#ccc;"></span>
  </div>
</template>

<style lang="less">
@import '../styles/close.less';

.ayui-close-2px{
  &::before,
  &::after {
    height: 2px;
    margin-top: -1px;
    background-color: green;
  }
}
</style>
