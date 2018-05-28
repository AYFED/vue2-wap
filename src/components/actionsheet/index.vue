<template>
    <div class="ay-actionsheet">
        <transition name="ayui-actionsheet-mask">
            <div class="ayui-mask ayui-mask_transparent" @click="onClickingMask" v-show="show"></div>
        </transition>
        <div class="ayui-skin_android" v-if="theme === 'android'">
            <transition name="ayui-android-actionsheet">
                <div class="ayui-actionsheet" v-show="show">
                    <div class="ayui-actionsheet__menu">
                        <div class="ayui-actionsheet__cell" :class="{'ayui-active':  menusNum==index}" v-for="(text, key, index) in menus" @click="
              onMenuClick(text, key,index)" v-html="$t(text.label || text)">
                        </div>
                    </div>
                </div>
            </transition>
        </div>
        <div class="ayui-actionsheet" :class="{'ayui-actionsheet_toggle': show}" v-else>
            <div class="ayui-actionsheet__menu">
                <div class="ayui-actionsheet__cell" v-if="hasHeaderSlot">
                    <slot name="header"></slot>
                </div>
                <div class="ayui-actionsheet__cell" v-for="(text, key, index) in menus" @click="onMenuClick(text, key, index)"
                     v-html="$t(text.label || text)"
                     :class="[`ayui-actionsheet-menu-${text.type || 'default'}`,{'ayui-active':isShowMenusNum ? menusIndexNum==index : false}]">
                </div>
            </div>
            <div class="ayui-actionsheet__action" @click="emitEvent('on-click-menu', 'cancel')" v-if="showCancel">
                <div class="ayui-actionsheet__cell">{{cancelText || $t('cancel_text')}}</div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'actionsheet',
    mounted() {
      this.hasHeaderSlot = !!this.$slots.header;
      this.$nextTick(() => {
        this.$tabbar = document.querySelector('.ayui-tabbar');
      });
    },
    props: {
      value: Boolean,
      showCancel: Boolean,
      cancelText: String,
      theme: {
        type: String,
        default: 'ios',
      },
      menus: {
        type: [Object, Array],
        default: () => ({}),
      },
      closeOnClickingMask: {
        type: Boolean,
        default: true,
      },
      closeOnClickingMenu: {
        type: Boolean,
        default: true,
      },
      menusNum: {
        type: Number,
        default: 0,
      },
      isShowMenusNum:{
        type: Boolean,
        default: false,
      }
    },
    data() {
      return {
        hasHeaderSlot: false,
        show: false,
        menusIndexNum:this.menusNum
      };
    },
    methods: {
      onMenuClick(text, key, index) {
        if (typeof text === 'string') {
          this.emitEvent('on-click-menu', key, text);
          if (!/.noop/.test(key)) this.menusIndexNum = index;
        } else {
          if (text.type !== 'disabled' && text.type !== 'info') {
            if (text.value || text.value === 0) {
              this.emitEvent('on-click-menu', text.value, text);
            } else {
              this.emitEvent('on-click-menu', '', text);
              this.show = false;
            }
          }
        }
      },
      onClickingMask() {
        this.$emit('on-click-mask');
        this.closeOnClickingMask && (this.show = false);
      },
      emitEvent(event, menu, item) {
        if (event === 'on-click-menu' && !/.noop/.test(menu)) {
          let _item = item;
          if (typeof _item === 'object') {
            _item = JSON.parse(JSON.stringify(_item));
          }
          this.$emit(event, menu, _item);
          this.$emit(`${event}-${menu}`);
          this.closeOnClickingMenu && (this.show = false);
        }
      },
      fixIos(zIndex) {
        if (this.$el.parentNode && this.$el.parentNode.className.indexOf('v-transfer-dom') !== -1) {
          return;
        }
        if (this.$tabbar && /iphone/i.test(navigator.userAgent)) {
          this.$tabbar.style.zIndex = zIndex;
        }
      },
    },
    watch: {
      show(val) {
        this.$emit('input', val);
        if (val) {
          this.fixIos(-1);
        } else {
          setTimeout(() => {
            this.fixIos(100);
          }, 200);
        }
      },
      value: {
        handler: function(val) {
          this.show = val;
        },
        immediate: true,
      },
    },
    beforeDestroy() {
      this.fixIos(100);
    },
  };
</script>

<style lang="less">
    @import '../../styles/ayui/widget/ayui_tips/ayui_mask';
    @import '../../styles/ayui/widget/ayui_tips/ayui_actionsheet';

    .ayui-actionsheet-menu-primary {
        color: @actionsheet-label-primary-color;
    }

    .ayui-actionsheet-menu-warn {
        color: @actionsheet-label-warn-color;
    }

    .ayui-actionsheet-menu-default {
        color: @actionsheet-label-default-color;
    }

    .ayui-actionsheet-menu-disabled {
        color: @actionsheet-label-disabled-color;
    }

    .ayui-actionsheet-mask-enter,
    .ayui-actionsheet-mask-leave-active,
    .ayui-android-actionsheet-enter,
    .ayui-android-actionsheet-leave-active {
        opacity: 0;
    }

    .ayui-actionsheet-mask-leave-active,
    .ayui-actionsheet-mask-enter-active,
    .ayui-android-actionsheet-leave-active,
    .ayui-android-actionsheet-enter-active {
        transition: opacity 300ms !important;
    }

    .ayui-active{
        font-family: "ayui" !important;
        font-size: 18px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
        -moz-osx-font-smoothing: grayscale;

        &:after{
            display: block;
            position: absolute;
            right: 20px;
            top: 25%;
            content: '\E664';
            color: #FF5523;
            font-size: 16px;
        }

    }
</style>
