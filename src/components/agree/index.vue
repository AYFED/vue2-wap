<template>
  <label :for="`ayui-agree-${uuid}`" class="ayui-agree">
    <input :id="`ayui-agree-${uuid}`" type="checkbox" v-model="currentValue" class="ayui-agree__checkbox">
    <span class="ayui-agree__text">
      <slot></slot>
    </span>
  </label>
</template>

<script>
import uuidMixin from '../../mixins/uuid'

export default {
  name: 'agree',
  mixins: [uuidMixin],
  props: {
    value: Boolean
  },
  created () {
    this.currentValue = this.value
  },
  data () {
    return {
      currentValue: false
    }
  },
  watch: {
    value (val) {
      this.currentValue = val
    },
    currentValue (val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style lang="less">
@import '../../styles/ayui/widget/ayui-agree/ayui-agree.less';
</style>
