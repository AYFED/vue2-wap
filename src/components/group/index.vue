<template>
  <div>
    <div
    class="ayui-cells__title"
    v-if="title"
    :style="cleanStyle({
      color: titleColor
    })"
    v-html="title"></div>
    <slot name="title"></slot>
    <div
    class="ayui-cells"
    :class="{
      'ayui-no-group-title': !title
    }"
    :style="cleanStyle({
      marginTop: typeof gutter === 'number' ? (gutter + 'px') : gutter
    })">
      <slot name="after-title"></slot>
      <slot></slot>
    </div>
    <div
    class="ayui-cells__title ayui-group-footer-title"
    v-if="footerTitle"
    :style="cleanStyle({
      color: footerTitleColor
    })"
    v-html="footerTitle"></div>
  </div>
</template>

<script>
import cleanStyle from '../../libs/clean-style'

export default {
  name: 'group',
  methods: {
    cleanStyle
  },
  props: {
    title: String,
    titleColor: String,
    labelWidth: String,
    labelAlign: String,
    labelMarginRight: String,
    gutter: [String, Number],
    footerTitle: String,
    footerTitleColor: String
  }
}
</script>

<style lang="less">
@import '../../styles/ayui/widget/ayui_cell/ayui_access';
@import '../../styles/ayui/widget/ayui_cell/ayui_cell_global';
@import '../../styles/blank.less';

.ayui-no-group-title {
  margin-top: @group-title-margin-top;
}

.ayui-group-footer-title.ayui-cells__title {
  margin-top: @group-footer-title-margin-top;
  margin-bottom: @group-footer-title-margin-bottom;
  padding-top: 0;
  font-size: 12px;
}

/* global config for group items */
.ayui-cell-value {
  color: @cell-value-color;
}
.ayui-cell-placeholder {
  color: @cell-placeholder-color;
}
</style>
