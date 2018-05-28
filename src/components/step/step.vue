<template>
	<div class="ayui-step">
    <slot></slot>
	</div>
</template>

<script>
export default {
  name: 'step',
  props: {
    value: Number,
    backgroundColor: {
      type: String,
      default: '#fff'
    },
    gutter: {
      type: String,
      default: '10px'
    }
  },
  created () {
    this.current = this.value
  },
  mounted () {
    this._mapPropsToChildComponent()
  },
  watch: {
    value (val) {
      this.current = val
    },
    current (val) {
      this._mapPropsToChildComponent()
      this.$emit('input', val)
    }
  },
  data () {
    return {
      current: 0
    }
  },
  methods: {
    _mapPropsToChildComponent () {
      const _this = this
      const len = this.$children.length - 1
      this.$children.forEach((child, index) => {
        child.currentStepNumber = (index + 1).toString()
        child.currentStepLast = index === len

        if (index === _this.current) {
          child.currentStatus = 'process'
        } else if (index < _this.current) {
          child.currentStatus = 'finish'
        } else {
          child.currentStatus = 'wait'
        }
      })
    }
  }
}
</script>

<style lang="less">
.ayui-step {
  display: flex;
}
.ayui-step-item {
  display: inline-block;
  position: relative;
  overflow: hidden;
}

.ayui-step-item-with-tail {
  flex: 1;
}

.ayui-step-item-tail {
  height: 1px;
  position: absolute;
  left: 0;
  top: 12px;
  padding: 0 0;
  transition: all 0.4s ease 0s;
}

.ayui-step-item-tail-finish {
  background: #FF5523 none repeat scroll 0 0;
}

.ayui-step-item-tail-process, .ayui-step-item-tail-wait {
  background: #CCC none repeat scroll 0 0;
}

.ayui-step-item-icon {
  width: 22px;
  height: 22px;
  display: inline-block;
  text-align: center;
}

.ayui-step-item-checked::before {
  font-size: 15px!important;
  line-height: 22px;
  margin: 0!important;
  transform: translateY(0px);
}

.ayui-step-item-title {
  font-size: 0.8rem;
}

.ayui-step-item-head {
  position: relative;
  display: inline-block;
  margin-right: -4px;

  .ayui-step-item-head-inner {
    width: 22px;
    height: 22px;
    line-height: 22px;
    border-radius: 99px;
    text-align: center;
    font-size: 14px;
    transition: all 0.4s ease 0s;
    background: #fff none repeat scroll 0 0;
  }
}

.ayui-step-item-head-finish .ayui-step-item-head-inner{
  border: 1px solid #FF5523;
  color: #FF5523;
}

.ayui-step-item-head-process .ayui-step-item-head-inner{
  border: 1px solid #FF5523;
  color: #FFF;
  background: #FF5523 none repeat scroll 0 0;
}

.ayui-step-item-head-wait .ayui-step-item-head-inner {
  border: 1px solid #888;
  color: #888;
}

.ayui-step-item-main {
  display: inline-block;
  position: relative;
  vertical-align: top;
  color: #888;
  padding-left: 5px;
}

.ayui-step-item-main-process {
  font-weight: bold;
  color: #666;
}
</style>
