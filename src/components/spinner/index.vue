<template>
  <span class="ayui-spinner" :class="className" :style="styles"></span>
</template>

<script>
import Spinner from './spinner'
const types = ['android', 'ios', 'ios-small', 'bubbles', 'circles', 'crescent', 'dots', 'lines', 'ripple', 'spiral']

export default {
  name: 'spinner',
  mounted () {
    this.$nextTick(() => {
      Spinner(this.$el, this.type, this.size)
    })
  },
  props: {
    type: {
      type: String,
      default: 'ios'
    },
    size: String
  },
  computed: {
    styles () {
      if (typeof this.size !== 'undefined' && this.size !== '28px') {
        return {
          width: this.size,
          height: this.size
        }
      }
    },
    className () {
      let rs = {}
      for (let i = 0; i < types.length; i++) {
        rs[`ayui-spinner-${types[i]}`] = this.type === types[i]
      }
      return rs
    }
  }
}
</script>

<style>
.ayui-spinner {
  stroke: #444;
  fill: #444;
  vertical-align: middle;
  display: inline-block;
  width: 28px;
  height: 28px;
}

.ayui-spinner svg {
  width: 28px;
  height: 28px;
}

.ayui-spinner.ayui-spinner-inverse {
  stroke: #fff;
  fill: #fff;
}

.ayui-spinner-android {
  stroke: #4b8bf4;
}

.ayui-spinner-ios, .ayui-spinner-ios-small {
  stroke: #69717d;
}

.ayui-spinner-spiral .stop1 {
  stop-color: #fff;
  stop-opacity: 0;
}

.ayui-spinner-spiral.ayui-spinner-inverse .stop1 {
  stop-color: #000;
}

.ayui-spinner-spiral.ayui-spinner-inverse .stop2 {
  stop-color: #fff;
}
</style>
