<template>
  <div class="ayui-search-box"
       :class="{ 'ayui-search-fixed':isFixed }"
       :style="{ top: isFixed ? top : '', position: fixPosition }">
    <div class="ayui-search-bar"
         :class="{'ayui-search-bar_focusing': !isCancel || currentValue}">
      <slot name="left"></slot>
      <form class="ayui-search-bar__form" @submit.prevent="$emit('on-submit', value)" action=".">
        <label :for="`search_input_${uuid}`"
               class="ayui-search-mask"
               @click="touch"
               v-show="!isFixed && autoFixed"></label>
        <div class="ayui-search-bar__box">
          <i class="ayui-icon-search"></i>
          <input v-model="currentValue"
                 ref="input"
                 type="search"
                 autocomplete="off"
                 class="ayui-search-bar__input"
                 :id="`search_input_${uuid}`"
                 :placeholder="placeholder"
                 :required="required"
                 @focus="onFocus"
                 @blur="onBlur"
                 @compositionstart="onComposition($event, 'start')"
                 @compositionend="onComposition($event, 'end')"
                 @input="onComposition($event, 'input')"/>
          <a href="javascript:"
             class="ayui-iconfont ayui-icon-clear"
             @click="clear"
             v-show="currentValue"></a>
        </div>
        <label :for="`search_input_${uuid}`"
               class="ayui-search-bar__label"
               v-show="!isFocus && !value">
          <i class="ayui-icon-search"></i>
          <span>{{ placeholder || $t('_placeholder') }}</span>
        </label>
      </form>
      <a href="javascript:"
         class="ayui-search-bar__cancel-btn"
         @click="cancel">{{ cancelText || $t('cancel_text') }}
      </a>
      <slot name="right"></slot>
    </div>
    <div class="ayui-cells ayui-search_show" v-show="isFixed">
      <slot></slot>
      <div class="ayui-cell ayui-cell_access"
           v-for="item in results"
           @click="handleResultClick(item)">
        <div class="ayui-cell__bd ayui-cell_primary">
          <p>{{item.title}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import uuidMixin from '../../mixins/uuid'

  export default {
    name: 'search',
    mixins: [uuidMixin],
    props: {
      required: {
        type: Boolean,
        default: false
      },
      placeholder: String,
      cancelText: String,
      value: {
        type: String,
        default: ''
      },
      results: {
        type: Array,
        default() {
          return []
        }
      },
      autoFixed: {
        type: Boolean,
        default: true
      },
      top: {
        type: String,
        default: '0px'
      },
      position: {
        type: String,
        default: 'fixed'
      },
      autoScrollToTop: Boolean
    },
    created() {
      if (this.value) {
        this.currentValue = this.value
      }
    },
    computed: {
      fixPosition() {
        if (this.isFixed) {
          return this.position === 'absolute' ? 'absolute' : 'fixed'
        }
        return 'static'
      }
    },
    methods: {
      emitEvent() {
        this.$nextTick(() => {
          this.$emit('input', this.currentValue)
          this.$emit('on-change', this.currentValue)
        })
      },
      onComposition($event, type) {
        if (type === 'start') {
          this.onInput = true
        }
        if (type === 'end') {
          this.onInput = false
          this.emitEvent()
        }
        if (type === 'input') {
          if (!this.onInput) {
            this.emitEvent()
          }
        }
      },
      clear() {
        this.currentValue = ''
      this.emitEvent()
        this.isFocus = true
        this.setFocus()
        if (this.autoFixed && !this.isFixed) {
          this.isFixed = true
        }
      this.$emit('on-clear')
      },
      cancel() {
        this.isCancel = true
        this.currentValue = ''
      this.emitEvent()
        this.isFixed = false
        this.$emit('on-cancel')
      },
      handleResultClick(item) {
        this.$emit('result-click', item) // just for compatibility
        this.$emit('on-result-click', item)
        this.isCancel = true
        this.isFixed = false
      },
      touch() {
        this.isCancel = false
        if (this.autoFixed) {
          this.isFixed = true
        }
        this.$emit('on-touch')
      },
      setFocus() {
        this.$refs.input.focus()
      },
      setBlur() {
        this.$refs.input.blur()
      },
      onFocus() {
        this.isFocus = true
        this.$emit('on-focus')
        this.touch()
      },
      onBlur() {
        this.isFocus = false
        this.$emit('on-blur')
      }
    },
    data() {
      return {
        onInput: false,
        currentValue: '',
        isCancel: true,
        isFocus: false,
        isFixed: false
      }
    },
    watch: {
      isFixed(val) {
        if (val === true) {
          this.setFocus()
          this.isFocus = true

          if (this.autoScrollToTop) {
            setTimeout(() => {
              window.scrollTo(0, 0)
            }, 150)
          }
        } else {
        }
      },
      value(val) {
        this.currentValue = val
      }
    }
  }
</script>

<style lang="less">
  @import '../../styles/ayui/icon/ayui_icon_font';
  @import '../../styles/ayui/widget/ayui_searchbar/ayui_searchbar';
  @import '../../styles/ayui/widget/ayui_cell/ayui_cell_global';
  @import '../../styles/ayui/widget/ayui_cell/ayui_access';

  .ayui-search-fixed {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 5;
    background: rgba(255, 255, 255, 1);
    backdrop-filter: blur(5px);
  }

  .ayui-search-box {
    width: 100%;
  }

  .ayui-cells.ayui-search_show {
    margin-top: 0 !important;
    overflow-y: auto;
    position: fixed;
    width: 100%;
    max-height: 100%;

    .ayui-cell:last-child {
      margin-bottom: 150px;
    }

    &::-webkit-scrollbar {
      display: none;
    }

    &::after {
      display: none;
    }
  }

  .ayui-search-mask {
    position: absolute;
    left: 0;
    top: 0;
    width: 90%;
    height: 100%;
    z-index: 5;
  }

  .ayui-icon-clear:before {
    content: '\e641';
    color: #999;
    font-size: 12px;
  }
</style>
