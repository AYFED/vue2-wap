<template>
  <div class="ayui-cell ayui-cell-form-preview" :class="{'ayui-cell-no-border-intent': !borderIntent}">
    <div class="ayui-form-preview__bd">
      <div class="ayui-form-preview__item" v-for="item in list">
        <label class="ayui-form-preview__label" v-html="$t(item.label)"></label>
        <span class="ayui-form-preview__value" v-html="$t(item.value)"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cell-form-preview',
  props: {
    list: Array,
    borderIntent: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="less">
@import '../../styles/ayui/widget/ayui_cell/ayui_cell_global';
@import '../../styles/ayui/widget/ayui_cell/ayui_form/ayui-form-preview.less';

.ayui-cell-form-preview .ayui-form-preview__bd {
  width: 100%;
  padding: 0;
}
</style>

