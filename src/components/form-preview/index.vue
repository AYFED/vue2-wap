<template>
  <div class="ayui-form-preview ayui-form-preview">
    <div class="ayui-form-preview__hd">
      <label class="ayui-form-preview__label" v-html="headerLabel"></label>
      <em class="ayui-form-preview__value" v-html="headerValue || '&nbsp;'"></em>
    </div>
    <div class="ayui-form-preview__bd">
      <div class="ayui-form-preview__item" v-for="item in bodyItems">
        <label class="ayui-form-preview__label">{{$t(item.label)}}</label>
        <span class="ayui-form-preview__value">{{$t(item.value)}}</span>
      </div>
    </div>
    <div class="ayui-form-preview__ft">
      <a class="ayui-form-preview__btn" :class="{'ayui-form-preview__btn_default': button.style==='default', 'ayui-form-preview__btn_primary': button.style === 'primary'}" href="javascript:" v-for="button in footerButtons" @click="onButtonClick(button.onButtonClick, button.link)">{{$t(button.text)}}</a>
    </div>
  </div>
</template>

<script>
import { go } from '../../libs/router'

export default {
  name: 'form-preview',
  props: ['headerLabel', 'headerValue', 'bodyItems', 'footerButtons', 'name'],
  methods: {
    onButtonClick (cb, link) {
      cb && cb(this.name)
      if (link) {
        go(link, this.$router)
      }
    }
  }
}
</script>

<style lang="less">
@import '../../styles/ayui/widget/ayui_cell/ayui_form/ayui-form-preview.less';
.ayui-form-preview {
  overflow: hidden;
}
</style>
