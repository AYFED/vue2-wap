<template>
	<div class="ayui-panel ayui-panel_access">
    <div class="ayui-panel__hd" v-if="header && header.title" v-html="header.title" @click="$emit('on-click-header')"></div>
    <slot name="header"></slot>
    <div class="ayui-panel__bd">
      <div class="ayui-card-content"><slot name="content"></slot></div>
    </div>
    <div class="ayui-panel__ft">
      <a class="ayui-cell ayui-cell_access ayui-cell_link" href="javascript:" v-if="footer && footer.title" @click="onClickFooter">
        <div class="ayui-cell__bd" v-html="footer.title"></div>
      </a>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
import { go } from '../../libs/router'

export default {
  name: 'card',
  props: {
    header: Object,
    footer: Object
  },
  methods: {
    onClickFooter () {
      this.footer.link && go(this.footer.link, this.$router)
      this.$emit('on-click-footer')
    }
  }
}
</script>

<style lang="less">
@import '../../styles/ayui/widget/ayui_cell/ayui_cell_global';
@import '../../styles/ayui/widget/ayui_cell/ayui_access';
@import '../../styles/ayui/widget/ayui_panel/ayui_panel';
</style>
