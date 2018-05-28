<template>
  <div class="ayui-check-icon" @click="updateValue">
    <icon type="success" v-show="type === 'default' && value"></icon>
    <icon type="success-circle" v-show="type === 'plain' && value"></icon>
    <icon type="circle" v-show="!value"></icon>
    <span><slot></slot></span>
  </div>
</template>

<script>
import Icon from '../icon'

export default {
  name: 'check-icon',
  components: {
    Icon
  },
  methods: {
    updateValue () {
      this.$emit('update:value', !this.value)
    }
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'default'
    }
  }
}
</script>

<style lang="less">
@import '../../styles/variable.less';

.ayui-check-icon {
  display: inline-block;
}
.ayui-check-icon > span {
  line-height: 23px;
  color: #222;
  vertical-align: middle;
}

.ayui-icon-success,.ayui-icon-success-circle,.ayui-icon-circle{
  vertical-align: -2px;
}

.ayui-check-icon > .ayui-icon-success:before, .ayui-check-icon > .ayui-icon-success-circle:before {
  color: @check-icon-color-checked;
}
</style>
