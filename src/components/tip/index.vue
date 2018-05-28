<template>
  <div class="ayui-group-tip" :style="{'text-align':align}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tip',
  props: {
    align: {
      type: String,
      default: 'left'
    }
  }
}
</script>

<style>
.ayui-group-tip, .ayui-group-tip p {
  font-size:14px;
  color:#888;
  text-align:center;
  padding-top:0.3em;
  padding-left:10px;
  padding-right:5px;
}
.ayui-group-tip .ayui-icon {
  padding-right: 3px;
}
</style>
