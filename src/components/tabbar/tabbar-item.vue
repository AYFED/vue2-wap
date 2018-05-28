<template>
  <a href="javascript:;" class="ayui-tabbar__item" :class="{'ayui-bar__item_on': isActive, 'ayui-tabbar-simple': simple}" @click="onItemClick(true)">
    <div class="ayui-tabbar__icon" :class="[iconClass || $parent.iconClass, {'ayui-reddot': showDot}]" v-if="!simple">
      <slot name="icon" v-if="!simple && !(hasActiveIcon && isActive)"></slot>
      <slot name="icon-active" v-if="!simple && hasActiveIcon && isActive"></slot>
      <sup v-if="badge"><badge :text="badge"></badge></sup>
    </div>
    <p class="ayui-tabbar__label">
      <slot name="label"></slot>
    </p>
  </a>
</template>

<script>
import { childMixin } from '../../mixins/multi-items'
import Badge from '../badge'

export default {
  name: 'tabbar-item',
  components: {
    Badge
  },
  beforeMount () {
    if (!this.$slots.icon) {
      this.simple = true
    }
    if (this.$slots['icon-active']) {
      this.hasActiveIcon = true
    }
  },
  mixins: [childMixin],
  props: {
    showDot: {
      type: Boolean,
      default: false
    },
    badge: String,
    link: [String, Object],
    iconClass: String
  },
  computed: {
    isActive () {
      return this.$parent.index === this.currentIndex
    }
  },
  data () {
    return {
      simple: false,
      hasActiveIcon: false
    }
  }
}
</script>
