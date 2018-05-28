<template>
  <div
    class="ayui-cell"
    :class="{
      'ayui-tap-active': isLink || !!link,
      'ayui-cell_access': isLink || !!link,
      'ayui-cell-no-border-intent': !borderIntent,
      'ayui-cell-disabled': disabled
    }"
    :style="style"
    @click="onClick">
    <div class="ayui-cell__hd">
      <slot name="icon"></slot>
    </div>
    <div class="ayui-cell-bd" :class="{'ayui-cell-primary': primary === 'title' && valueAlign !== 'left'}">
      <p>
        <label class="ay-label" :style="labelStyles" :class="labelClass" v-if="title || hasTitleSlot">
          <slot name="title">{{ title }}</slot>
        </label>
        <slot name="after-title"></slot>
      </p>
      <inline-desc>
        <slot name="inline-desc">{{ inlineDesc }}</slot>
      </inline-desc>
    </div>
    <div class="ayui-cell__ft" :class="valueClass">
      <slot name="value"></slot>
      <slot>{{ value }}</slot>
      <i class="ayui-loading" v-if="isLoading"></i>
    </div>
    <slot name="child"></slot>
  </div>
</template>

<script>
  import InlineDesc from '../inline-desc'
  import {go} from '../../libs/router'
  import props from './props'
  import cleanStyle from '../../libs/clean-style'
  import getParentProp from '../../libs/get-parent-prop'

  export default {
    name: 'cell',
    components: {
      InlineDesc
    },
    props: props(),
    created() {
    },
    beforeMount() {
      this.hasTitleSlot = !!this.$slots.title
    },
    computed: {
      labelStyles() {
        return cleanStyle({
          width: getParentProp(this, 'labelWidth'),
          textAlign: getParentProp(this, 'labelAlign'),
          marginRight: getParentProp(this, 'labelMarginRight')
        })
      },
      valueClass() {
        return {
          'ayui-cell-primary': this.primary === 'content' || this.valueAlign === 'left',
          'ayui-cell-align-left': this.valueAlign === 'left',
          'ayui-cell-arrow-transition': !!this.arrowDirection,
          'ayui-cell-arrow-up': this.arrowDirection === 'up',
          'ayui-cell-arrow-down': this.arrowDirection === 'down'
        }
      },
      labelClass() {
        return {
          'ayui-cell-justify': getParentProp(this, 'justify') === 'justify'
        }
      },
      style() {
        if (this.alignItems) {
          return {
            alignItems: this.alignItems
          }
        }
      }
    },
    methods: {
      onClick() {
        /* istanbul ignore next */
        !this.disabled && go(this.link, this.$router)
      }
    },
    data() {
      return {
        hasTitleSlot: true,
        hasMounted: false
      }
    }
  }
</script>

<style lang="less">
  @import '../../styles/variable.less';
  @import '../../styles/tap.less';
  @import '../../styles/ayui/base/mixin/setArrow.less';
  @import '../../styles/ayui/widget/ayui_cell/ayui_cell_global';
  @import '../../styles/ayui/widget/ayui-loading/ayui-loading.less';

  .ayui-cell-primary {
    flex: 1;
  }

  .ay-label {
    display: block;
    word-wrap: break-word;
    word-break: break-all;
  }

  .ayui-cell__ft .ayui-loading {
    display: block;
  }

  .ayui-cell__ft.ayui-cell-align-left {
    text-align: left;
  }

  .ayui-cell.ayui-cell-no-border-intent:before {
    left: 0;
  }

  .ayui-cell_access .ayui-cell__ft.ayui-cell-arrow-down:after {
    transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0) rotate(90deg);
  }

  .ayui-cell_access .ayui-cell__ft.ayui-cell-arrow-up:after {
    transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0) rotate(-90deg);
  }

  .ayui-cell-arrow-transition:after {
    transition: transform 300ms;
  }

  .ayui-cell-disabled {
    .ayui-label {
      color: #b2b2b2;
    }
    &.ayui-cell_access .ayui-cell__ft:after {
      border-color: @cell-disabled-arrow-color;
    }
  }
</style>
