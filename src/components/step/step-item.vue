<template>
<div class="ayui-step-item" :class=" { 'ayui-step-item-with-tail' : !currentStepLast} ">
  <div :class="'ayui-step-item-tail ' + 'ayui-step-item-tail-' + currentStatus" v-show="!currentStepLast" :style="{right: $parent.gutter}"></div>
  <div :class="'ayui-step-item-head ' + 'ayui-step-item-head-' + currentStatus">
    <div class="ayui-step-item-head-inner">
      <span v-if="!icon && currentStatus!='finish'" class="ayui-step-item-icon">{{currentStepNumber}}</span>
      <span v-else :class="'ayui-step-item-icon ' + 'ayui-step-item-' + iconName">
        <icon type="success_no_circle" class="ayui-step-item-checked"></icon>
      </span>
    </div>
  </div>
  <div :class="'ayui-step-item-main ' + 'ayui-step-item-main-' + currentStatus" :style="{backgroundColor: $parent.backgroundColor, paddingRight: currentStepLast ? 0 : $parent.gutter}">
    <span class="ayui-step-item-title">{{title}}</span>
    <div class="ayui-step-item-description">{{description}}</div>
  </div>
</div>
</template>

<script>
import Icon from '../icon'

export default {
  name: 'step-item',
  props: {
    title: String,
    description: String,
    stepNumber: Number,
    stepLast: Boolean,
    icon: String,
    status: String,
    tailWidth: Object
  },
  computed: {
    iconName () {
      return this.icon || 'check'
    }
  },
  created () {
    this.currentStatus = this.status
    this.currentStepLast = this.stepLast
    this.currentStepNumber = this.stepNumber
  },
  data () {
    return {
      currentStatus: '',
      currentStepLast: false,
      currentStepNumber: 0
    }
  },
  components: {
    Icon
  }
}
</script>
