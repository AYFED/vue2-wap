<template>
	<li class="ayui-timeline-item">
		<div :class="['ayui-timeline-item-color', {'ayui-timeline-item-head': !isFirst,'ayui-timeline-item-head-first': isFirst }]" :style="headStyle">
			<icon v-show="isFirst && $parent.isShowIcon" type="success_no_circle" class="ayui-timeline-item-checked"></icon>
		</div>
		<div class="ayui-timeline-item-tail" :style="tailStyle"></div>
		<div class="ayui-timeline-item-content">
			<slot></slot>
		</div>
	</li>
</template>

<script>
import Icon from '../icon'

export default {
  name: 'timeline-item',
  data () {
    return {
      isLast: true,
      isFirst: true,
      headStyle: { backgroundColor: this.$parent.color }
    }
  },
  mounted () {
    this.$parent.setChildProps()
  },
  beforeDestroy () {
    // this will be null
    const $parent = this.$parent
    this.$nextTick(() => {
      $parent.setChildProps()
    })
  },
  components: {
    Icon
  },
  computed: {
    tailStyle () {
      return this.isLast ? { display: 'none', backgroundColor: this.$parent.color } : { display: 'block', backgroundColor: this.$parent.color }
    }
  }
}
</script>

