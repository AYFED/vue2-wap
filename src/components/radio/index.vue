<template>
  <div class="ayui-cells_radio" :class="disabled ? 'ayui-radio-disabled' : ''">
    <label class="ayui-cell ayui-cell_radio ayui-check__label" :for="`radio_${uuid}_${index}`" v-for="(one, index) in options">
      <div class="ayui-cell__bd">
        <slot name="each-item" :icon="one.icon" :label="getValue(one)" :index="index" :selected="currentValue === getKey(one)">
          <p>
            <img class="ayui-radio-icon" :src="one.icon" v-show="one && one.icon">
            <span class="ayui-radio-label" :style="currentValue === getKey(one) ? (selectedLabelStyle || '') : ''">{{ one | getValue }}</span>
          </p>
        </slot>
      </div>
      <div class="ayui-cell__ft">
        <input type="radio" class="ayui-check" v-model="currentValue" :id="disabled ? '' : `radio_${uuid}_${index}`" :value="getKey(one)">
        <span class="ayui-iconfont ayui-icon-checked"></span>
      </div>
    </label>
    <div class="ayui-cell" v-show="fillMode">
      <div class="ayui-cell__hd"><label for="" class="ayui-label">{{ fillLabel }}</label></div>
      <div class="ayui-cell__bd">
        <input class="ayui-input needsclick" type="text" v-model="fillValue" :placeholder="fillPlaceholder" @blur="isFocus=false" @focus="onFocus()">
      </div>
      <div class="ayui-cell__ft" v-show="value==='' && !isFocus">
        <i class="ayui-iconfont ayui-icon-warn"></i>
      </div>
    </div>
  </div>
</template>

<script>
import Base from '../../libs/base'
import { getValue, getKey, getLabel } from '../checklist/object-filter'
import props from './props'

export default {
  name: 'radio',
  mixins: [Base],
  filters: {
    getValue,
    getKey
  },
  props: props(),
  created () {
    this.handleChangeEvent = true
  },
  methods: {
    getValue,
    getKey,
    onFocus () {
      this.currentValue = this.fillValue || ''
      this.isFocus = true
    }
  },
  watch: {
    value (val) {
      this.currentValue = val
    },
    currentValue (newVal) {
      var isOption = contains(this.options, newVal)
      if (newVal !== '' && isOption) {
        this.fillValue = ''
      }
      this.$emit('on-change', newVal, getLabel(this.options, newVal))
      this.$emit('input', newVal)
    },
    fillValue (newVal) {
      if (this.fillMode && this.isFocus) {
        this.currentValue = newVal
      }
    }
  },
  data () {
    return {
      fillValue: '',
      isFocus: false,
      currentValue: this.value
    }
  }
}

function contains (a, obj) {
  var i = a.length
  while (i--) {
    if (a[i] === obj) {
      return true
    }
  }
  return false
}
</script>

<style lang="less">
@import '../../styles/ayui/widget/ayui_cell/ayui_check';
@import '../../styles/ayui/widget/ayui_cell/ayui_form/ayui_form_common';
@import '../../styles/ayui/icon/ayui_icon_font';

.ayui-cell_radio > * {
  pointer-events: none;
}
.ayui-radio-icon {
  width: 24px;
  height:24px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
}
.ayui-radio-label {
  vertical-align: middle;
}
.ayui-cells_radio.ayui-radio-disabled .ayui-check:checked + .ayui-icon-checked:before {
  opacity: 0.5;
}
</style>
