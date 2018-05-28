<template>
 <div class="ayui-msg">
    <div class="ayui-msg__icon-area"><i class="ayui-iconfont" :class="`ayui-icon-${icon || 'success'}`"></i></div>
    <div class="ayui-msg__text-area">
      <h2 class="ayui-msg__title" v-html="title"></h2>
      <p class="ayui-msg__desc">
        <slot name="description"></slot>
      </p>
      <p class="ayui-msg__desc" v-if="description" v-html="description"></p>
    </div>
    <div class="ayui-msg__opr-area">
      <p class="ayui-btn-area">
        <slot name="buttons"></slot>
        <a v-for="button in buttons" href="javascript:;" class="ayui-btn" :class="`ayui-btn_${button.type}`" @click="onClick(button.onClick, button.link)">{{$t(button.text)}}</a>
      </p>
    </div>
  </div>
</template>

<script>
import { go } from '../../libs/router'

export default {
  name: 'msg',
  props: ['icon', 'title', 'description', 'buttons'],
  methods: {
    onClick (handler, link) {
      typeof handler === 'function' && handler()
      link && go(link, this.$router)
    }
  }
}
</script>

<style lang="less">
@import '../../styles/ayui/icon/ayui_icon_font.less';
@import '../../styles/ayui/widget/ayui_page/ayui_msg.less';
@import '../../styles/ayui/widget/ayui-button/ayui-button.less';
</style>
