<template>
    <div style="height:100%;">
        <div v-transfer-dom>
            <loading v-model="isLoading"></loading>
        </div>
        <div v-transfer-dom>
            <actionsheet :menus="menus" v-model="showMenu" :showCancel="false" :menusNum=1 :isShowMenusNum = true @on-click-menu="changeLocale"></actionsheet>
        </div>
        <drawer v-show="!isLoading"
                width="200px;"
                :show.sync="drawerVisibility"
                :show-mode="showModeValue"
                :placement="showPlacementValue"
                :drawer-style="{'background-color':'#fff', width: '200px',}">

            <!-- drawer content -->
            <div slot="drawer">
                <group title="AYUI 组件库(2.0)" style="margin-top:20px;">
                    <cell title="组件实例" link="/demo" value="演示" @click.native="drawerVisibility = false">
                    </cell>
                    <cell title="支持关注" link="project/donate" @click.native="drawerVisibility = false">
                    </cell>
                    <cell title="Github" link="https://github.com/AYFED" value=""
                          @click.native="drawerVisibility = false"></cell>
                </group>
                <group title="设置模式">
                    <radio v-model="showMode" :options="['push', 'overlay']" @on-change="onShowModeChange"></radio>
                </group>
                <group title="设置左右">
                    <radio v-model="showPlacement" :options="['left', 'right']" @on-change="onPlacementChange"></radio>
                </group>
            </div>

            <!-- main content -->
            <view-box ref="viewBox" body-padding-top="46px" body-padding-bottom="55px">
                <x-header slot="header"
                          style="width:100%;position:absolute;left:0;top:0;z-index:100;"
                          :left-options="leftOptions"
                          :right-options="rightOptions"
                          :title="title"
                          :transition="headerTransition"
                          @on-click-more="onClickMore">
          <span v-if="route.path === '/' || route.path === '/component/drawer'" slot="overwrite-left"
                @click="drawerVisibility = !drawerVisibility">
            <i class="ayui-iconfont ayui-icon-nav"></i>
          </span>
                </x-header>

                <!-- remember to import BusPlugin in main.js if you use components: x-img and sticky -->
                <transition
                        @after-enter="$ayui.bus && $ayui.bus.$emit('ayui:after-view-enter')"
                        :name="viewTransition" :css="!!direction">
                    <router-view class="router-view"></router-view>
                </transition>

                <tabbar class="ayui-demo-tabbar" icon-class="ayui-center" v-show="!isTabbarDemo" slot="bottom">
                    <tabbar-item :link="{path:'/'}" :selected="route.path === '/'">
            <span class="ayui-iconfont ayui-icon-home" slot="icon"
                  style="position:relative;top: -2px;font-size: 22px;"></span>
                        <span slot="label">Home</span>
                    </tabbar-item>
                    <tabbar-item :link="{path:'/demo'}" :selected="isDemo" badge="9">
                        <span class="ayui-iconfont ayui-icon-demo" slot="icon" style="font-size: 22px;"></span>
                        <span slot="label"><span v-if="componentName"
                                                 class="ayui-demo-tabbar-component">{{componentName}}</span><span
                                v-else>Demos</span></span>
                    </tabbar-item>
                </tabbar>

            </view-box>
        </drawer>
    </div>
</template>

<script>
  import {
    Radio,
    Group,
    Cell,
    Badge,
    Drawer,
    Actionsheet,
    ButtonTab,
    ButtonTabItem,
    ViewBox,
    XHeader,
    Tabbar,
    TabbarItem,
    Loading,
  } from '@/components';
  import TransferDom from '@/directives/transfer-dom/index.js';
  import {mapState, mapActions} from 'vuex';

  export default {
    name: 'app',
    directives: {
      TransferDom,
    },
    components: {
      Radio,
      Group,
      Cell,
      Badge,
      Drawer,
      ButtonTab,
      ButtonTabItem,
      ViewBox,
      XHeader,
      Tabbar,
      TabbarItem,
      Loading,
      Actionsheet,
    },
    methods: {
      onShowModeChange(val) {
        /** hide drawer before changing showMode **/
        this.drawerVisibility = false;
        setTimeout(() => {
          this.showModeValue = val;
        }, 400);
      },
      onPlacementChange(val) {
        /** hide drawer before changing position **/
        this.drawerVisibility = false;
        setTimeout(() => {
          this.showPlacementValue = val;
        }, 400);
      },
      onClickMore() {
        this.showMenu = true;
      },
      changeLocale(locale) {
        this.$i18n.set(locale);
        this.$locale.set(locale);
      },
      ...mapActions([
        'updateDemoPosition',
      ]),
    },
    mounted() {
      this.handler = () => {
        if (this.path === '/demo') {
          this.box = document.querySelector('#demo_list_box');
          this.updateDemoPosition(this.box.scrollTop);
        }
      };
    },
    beforeDestroy() {
      this.box && this.box.removeEventListener('scroll', this.handler, false);
    },
    watch: {
      path(path) {
        if (path === '/component/demo') {
          this.$router.replace('/demo');
          return;
        }
        if (path === '/demo') {
          setTimeout(() => {
            this.box = document.querySelector('#demo_list_box');
            if (this.box) {
              this.box.removeEventListener('scroll', this.handler, false);
              this.box.addEventListener('scroll', this.handler, false);
            }
          }, 1000);
        } else {
          this.box && this.box.removeEventListener('scroll', this.handler, false);
        }
      },
    },
    computed: {
      ...mapState({
        route: state => state.route,
        path: state => state.route.path,
        demoTop: state => state.ayui.demoScrollTop,
        isLoading: state => state.ayui.isLoading,
        direction: state => state.ayui.direction,
      }),
      isShowBar() {
        if (/component/.test(this.path)) {
          return true;
        }
        return false;
      },
      leftOptions() {
        return {
          showBack: this.route.path !== '/',
        };
      },
      rightOptions() {
        return {
          showMore: true,
        };
      },
      headerTransition() {
        if (!this.direction) return '';
        return this.direction === 'forward' ? 'ayui-header-fade-in-right' : 'ayui-header-fade-in-left';
      },
      componentName() {
        if (this.route.path) {
          const parts = this.route.path.split('/');
          if (/component/.test(this.route.path) && parts[2]) return parts[2];
        }
      },
      isDemo() {
        return /component|demo/.test(this.route.path);
      },
      isTabbarDemo() {
        return /tabbar/.test(this.route.path);
      },
      title() {
        if (this.route.path === '/') return 'Home';
        if (this.route.path === '/project/donate') return 'Donate';
        if (this.route.path === '/demo') return 'Demo list';
        return this.componentName ? `Demo/${this.componentName}` : 'Demo/~~';
      },
      viewTransition() {
        if (!this.direction) return '';
        return 'ayui-pop-' + (this.direction === 'forward' ? 'in' : 'out');
      },
    },
    data() {
      return {
        showMenu: false,
        menus: {
          'language.noop': '<div class="menu-title">语言选择<br><small>你可以在这里修改你的语言选择</small></div>',
          'zh': '中文',
          'en': 'English',
        },
        drawerVisibility: false,
        showMode: 'push',
        showModeValue: 'push',
        showPlacement: 'left',
        showPlacementValue: 'left',
      };
    },
  };
</script>

<style lang="less">
    @import './styles/reset.less';
    @import './styles/1px.less';
    @import './styles/tap.less';

    body {
        background-color: #fff;
        touch-action: none;
    }

    html, body {
        height: 100%;
        width: 100%;
        overflow-x: hidden;
    }

    .ayui-tabbar.ayui-demo-tabbar {
        background: #FFFFFF;
    }

    .ayui-demo-tabbar .ayui-bar__item_on .demo-icon-22 {
        color: #FF5523;
    }

    .ayui-demo-tabbar .ayui-tabbar_item.ayui-bar__item_on .ayui-demo-tabbar-icon-home {
        color: rgb(53, 73, 94);

    }

    .demo-icon-22:before {
        content: attr(icon);
    }

    .ayui-demo-tabbar-component {
        background-color: #FF5523;
        color: #fff;
        border-radius: 7px;
        padding: 0 4px;
        line-height: 14px;
    }

    .ayui-tabbar__icon + .ayui-tabbar__label {
        margin-top: 0 !important;
    }

    .ayui-demo-header-box {
        z-index: 100;
        position: absolute;
        width: 100%;
        left: 0;
        top: 0;
    }

    .router-view {
        width: 100%;
        top: 46px;
    }

    .ayui-tabbar__item.ayui-bar__item_on .ayui-tabbar__icon, .ayui-tabbar__item.ayui-bar__item_on .ayui-tabbar__icon > i, .ayui-tabbar__item.ayui-bar__item_on .ayui-tabbar__label {
        color: #FF5647 !important;
    }

    .ayui-pop-out-enter-active,
    .ayui-pop-out-leave-active,
    .ayui-pop-in-enter-active,
    .ayui-pop-in-leave-active {
        will-change: transform;
        transition: all 500ms;
        height: 100%;
        top: 46px;
        position: absolute;
        backface-visibility: hidden;
        perspective: 1000px;
    }

    .ayui-pop-out-enter {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
    }

    .ayui-pop-out-leave-active {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
    }

    .ayui-pop-in-enter {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
    }

    .ayui-pop-in-leave-active {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
    }

    .menu-title {
        color: #888;
        font-size: 14px;
        line-height: 1.4;
    }
</style>
