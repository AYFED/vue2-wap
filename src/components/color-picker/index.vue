<template>
  <div class="ayui-color-picker">
    <flexbox>
      <flexbox-item v-for="color in colors" :key="color" class="ayui-color-box">
        <span class="ayui-color-item" :style="{borderRadius: width/2 + 'px',backgroundColor: color, width: width + 'px', height: width + 'px'}" @click="change(color)" :class="{'ayui-color-white': color === '#fff' || color === '#FFF', 'ayui-color-picker-small': size === 'small', 'ayui-color-picker-middle': size === 'middle'}">
          <icon v-if="color === value" class="ayui-color-checked" :style="{lineHeight: width + 'px'}" type="success-no-circle"></icon>
        </span>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
import Icon from '../icon'
import { Flexbox, FlexboxItem } from '../flexbox'

const sizeMap = {
  'large': 40,
  'middle': 30,
  'small': 20
}
export default {
  name: 'color-picker',
  components: {
    Icon,
    Flexbox,
    FlexboxItem
  },
  created () {
    this.currentValue = this.value
  },
  props: {
    colors: {
      type: Array,
      required: true
    },
    size: {
      type: String,
      default: 'large'
    },
    value: String
  },
  computed: {
    width () {
      return sizeMap[this.size]
    }
  },
  data () {
    return {
      currentValue: ''
    }
  },
  watch: {
    value (val) {
      this.currentValue = val
    },
    currentValue (color) {
      this.$emit('on-change', color)
      this.$emit('input', color)
    }
  },
  methods: {
    change (color) {
      this.currentValue = color
    }
  }
}
</script>

<style lang="less">
@import '../../styles/ayui/icon/ayui_icon_font';

.ayui-color-box {
  text-align: center;
}
.ayui-color-picker {
  font-size: 0;
}
.ayui-color-item {
  display: inline-block;
  text-align: center;
  box-sizing: border-box;
  position: relative
}
.ayui-color-checked.ayui-icon-success-no-circle:before {
  color: #fff;
}
.ayui-color-checked {
  width: 100%;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}
.ayui-color-white {
  border: 1px solid #ccc;
}
.ayui-color-white .ayui-color-checked:before {
  color: #ccc;
}
.ayui-color-picker-small .ayui-color-checked:before{
  font-size: 10px;
}
.ayui-color-picker-middle .ayui-color-checked:before{
  font-size: 18px;
}
</style>
