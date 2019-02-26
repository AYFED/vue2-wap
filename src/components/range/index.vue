<template>
  <div class="ayui-range-input-box" style="position:relative;margin-right:30px;margin-left:50px;">
    <input class="ayui-range-input" v-model.number="currentValue">
  </div>
</template>

<script>
import Powerange from './powerange'

export default {
  name: 'range',
  props: {
    decimal: Boolean,
    value: {
      default: 0,
      type: Number
    },
    min: {
      type: Number,
      default: 0
    },
    minHTML: String,
    maxHTML: String,
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    disabled: Boolean,
    disabledOpacity: Number,
    rangeBarHeight: {
      type: Number,
      default: 1
    },
    rangeHandleHeight: {
      type: Number,
      default: 30
    }
  },
  created () {
    this.currentValue = this.value
  },
  mounted () {
    const _this = this
    this.$nextTick(() => {
      setTimeout(function () {
        
        let options = {
          callback: function (value) {
            _this.currentValue = value
          },
          decimal: _this.decimal,
          start: _this.currentValue,
          min: _this.min,
          max: _this.max,
          minHTML: _this.minHTML,
          maxHTML: _this.maxHTML,
          disable: _this.disabled,
          disabledOpacity: _this.disabledOpacity,
        initialBarWidth: window.getComputedStyle(_this.$el.parentNode).width.replace('px', '') - 80,
          onTouchstart (e) {
            _this.$emit('on-touchstart', e)
          },
          onTouchend (e) {
            _this.$emit('on-touchend', e)
          }
        }
        if (_this.step !== 0) {
          options.step = _this.step
        }
        _this.range = new Powerange(_this.$el.querySelector('.ayui-range-input'), options)
        const handleTop = (_this.rangeHandleHeight - _this.rangeBarHeight) / 2
        _this.$el.querySelector('.range-handle').style.top = `-${handleTop}px`
        _this.$el.querySelector('.range-bar').style.height = `${_this.rangeBarHeight}px`
        _this.handleOrientationchange = () => {
          _this.update()
        }
        window.addEventListener('orientationchange', _this.handleOrientationchange, false)
      },1e3);
    })
  },
  methods: {
    update () {
      console.log('update', this.currentValue)
      let value = this.currentValue
      if (value < this.min) {
        value = this.min
      }
      if (value > this.max) {
        value = this.max
      }
      this.range.reInit({
        min: this.min,
        max: this.max,
        step: this.step,
        value
      })
      this.currentValue = value
      this.range.setStart(this.currentValue)
      this.range.setStep()
    }
  },
  data () {
    return {
      currentValue: 0
    }
  },
  watch: {
    currentValue (val) {
      this.range && this.range.setStart(val)
      this.$emit('input', val)
      this.$emit('on-change', val)
    },
    value (val) {
      this.currentValue = val
    },
    min () {
      this.update()
    },
    step () {
      this.update()
    },
    max () {
      this.update()
    }
  },
  beforeDestroy () {
    window.removeEventListener('orientationchange', this.handleOrientationchange, false)
  }
}
</script>

<style lang="less">
@import '../../styles/variable.less';
@import './powerange.less';

.ayui-cell__ft{
  display: block;
}
</style>

