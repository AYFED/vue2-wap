<template>
  <div class="ayui-progress">
    <div class="ayui-progress__bar">
      <div class="ayui-progress__inner-bar" :style="{width: percent + '%'}"></div>
    </div>
    <a href="javascript:;" class="ayui-progress_opr" v-show="showCancel">
      <i class="ayui-iconfont ayui-icon-clear" @click="cancel"></i>
    </a>
  </div>
</template>

<script>
import Base from '../../libs/base'

export default {
  name: 'x-progress',
  mixins: [Base],
  props: {
    percent: {
      type: Number,
      default: 0
    },
    showCancel: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    cancel () {
      this.$emit('on-cancel')
    }
  }
}
</script>

<style lang="less">
@import '../../styles/ayui/widget/ayui_progress/ayui_progress';
</style>
