<template>
    <div>
        <group>
            <x-switch title="默认 popup" v-model="show"></x-switch>
            <x-switch title="全屏 popup" v-model="show1"></x-switch>
            <x-switch title="多选项 popup (first)" v-model="show3"></x-switch>
            <x-switch title="遮罩 disable" v-model="show5"></x-switch>
            <x-switch title="Popup 地址栏" v-model="show6"></x-switch>
            <x-switch title="默认 max-height=100%" v-model="show12"></x-switch>
            <x-switch title="自定义 max-height=50%" v-model="show13"></x-switch>
        </group>

        <div v-transfer-dom>
            <popup v-model="show" @on-hide="log('hide')" @on-show="log('show')">
                <div class="popup0">
                    <group>
                        <x-switch title="其他 XSwitcher" v-model="show"></x-switch>
                        <x-switch title="显示 Toast" v-model="showToast"></x-switch>
                    </group>
                </div>
            </popup>
        </div>

        <div v-transfer-dom>
            <toast v-model="showToast">你成功了!</toast>
        </div>

        <div v-transfer-dom>
            <popup v-model="show1" height="100%">
                <div class="popup1">
                    <group>
                        <x-switch title="其他 XSwitcher" v-model="show1"></x-switch>
                    </group>
                </div>
            </popup>
        </div>

        <div v-transfer-dom>
            <popup v-model="show3">
                <div class="popup2">
                    <group>
                        <x-switch title="多选项 Popup (first)" v-model="show3"></x-switch>
                        <x-switch title="多选项 Popup (second)" v-model="show4"></x-switch>
                    </group>
                    <p style="margin: 20px;">这是第一个弹出层</p>
                </div>
            </popup>
        </div>

        <div v-transfer-dom>
            <popup v-model="show4">
                <div class="popup2">
                    <group>
                        <x-switch title="多选项 Popup (second)" v-model="show4"></x-switch>
                    </group>
                    <p style="margin: 20px;">这是第二个弹出层</p>
                </div>
            </popup>
        </div>

        <div v-transfer-dom>
            <popup v-model="show5" :hide-on-blur=false>
                <div class="popup2">
                    <group>
                        <x-switch title="遮罩 disable" v-model="show5"></x-switch>
                    </group>
                    <p style="margin: 20px;">这个遮罩不能点击</p>
                </div>
            </popup>
        </div>

        <div v-transfer-dom>
            <popup v-model="show6">
                <div class="popup1">
                    <group>
                        <x-switch title="Popup 地址栏" v-model="show6"></x-switch>
                    </group>
                    <group>
                        <x-address :title="title6" v-model="value6" :list="addressData" placeholder="请选择地址"
                                   inline-desc="可以设置placeholder" :popup-style="{zIndex: 502}"></x-address>
                    </group>
                </div>
            </popup>
        </div>

        <group>
            <x-switch title="不在打开时强制重发" v-model="show15"></x-switch>
            <x-switch title="在打开时强制重发" v-model="show14"></x-switch>
        </group>

        <div v-transfer-dom>
            <popup v-model="show15" position="bottom">
                <div>
                    <toggle-text @click.native="show15 = false"></toggle-text>
                </div>
            </popup>
        </div>

        <div v-transfer-dom>
            <popup v-model="show14" position="bottom" should-rerender-on-show>
                <div>
                    <toggle-text @click.native="show14 = false"></toggle-text>
                </div>
            </popup>
        </div>

        <group>
            <x-switch title="列表上展出" inline-desc="默认可滚动div" v-model="show17"></x-switch>
            <x-switch title="列表上展出" inline-desc="自定义可滚动div" v-model="show16"></x-switch>
        </group>

        <div v-transfer-dom>
            <popup v-model="show17" position="bottom" should-scroll-top-on-show>
                <group>
                    <cell v-for="i in 20" :key="i" :title="i"></cell>
                </group>
                <div style="padding: 15px;">
                    <x-button @click.native="show17 = false" plain type="primary"> 点击关闭 </x-button>
                </div>
            </popup>
        </div>

        <div v-transfer-dom>
            <popup v-model="show16" position="bottom" should-scroll-top-on-show>
                <toggle-text @click.native="show16 = false" scrollable class="ayui-scrollable"></toggle-text>
            </popup>
        </div>

        <group>
            <x-switch title="穿透 background" v-model="show7"></x-switch>
        </group>

        <div v-transfer-dom>
            <popup v-model="show7" height="270px" is-transparent>
                <div style="width: 95%;background-color:#fff;height:250px;margin:0 auto;border-radius:5px;padding-top:10px;">
                    <group>
                        <cell title="Product" value="Donate"></cell>
                        <cell title="Total" value="$10.24"></cell>
                    </group>
                    <div style="padding:20px 15px;">
                        <x-button type="primary">Pay</x-button>
                        <x-button @click.native="show7 = false">Cancel</x-button>
                    </div>
                </div>
            </popup>
        </div>

        <group title="set position">
            <x-switch title="左滑出(100% width)" v-model="show8"></x-switch>
            <x-switch title="右滑出" v-model="show9"></x-switch>
            <x-switch title="上滑出(no mask)" v-model="show10"></x-switch>
            <x-switch title="下滑出" v-model="show11"></x-switch>
        </group>

        <div v-transfer-dom>
            <popup v-model="show8" position="left" width="100%">
                <div class="position-horizontal-demo">
                    <span class="ayui-close" @click="show8 = false"></span>
                </div>
            </popup>
        </div>

        <div v-transfer-dom>
            <popup v-model="show9" position="right">
                <div style="width:200px;">
                </div>
            </popup>
        </div>

        <div v-transfer-dom>
            <popup v-model="show10" position="top" :show-mask="false">
                <div class="position-vertical-demo">
                    顶部提示信息
                </div>
            </popup>
        </div>

        <div v-transfer-dom>
            <popup v-model="show11" position="bottom">
                <div class="position-vertical-demo">
                    底部提示信息
                </div>
            </popup>
        </div>

        <div v-transfer-dom>
            <popup v-model="show12" position="bottom">
                <group>
                    <cell v-for="i in 20" :key="i" :title="i"></cell>
                </group>
                <div style="padding: 15px;">
                    <x-button @click.native="show12 = false" plain type="primary"> 关闭</x-button>
                </div>
            </popup>
        </div>

        <div v-transfer-dom>
            <popup v-model="show13" position="bottom" max-height="50%">
                <group>
                    <cell v-for="i in 20" :key="i" :title="i"></cell>
                </group>
                <div style="padding: 15px;">
                    <x-button @click.native="show13 = false" plain type="primary"> 关闭</x-button>
                </div>
            </popup>
        </div>

    </div>
</template>

<script>
  import { Cell, Group, Popup, Toast, XAddress, XButton, XSwitch } from '@/components';
  import ToggleText from './ToggleText'

  import TransferDom from '@/directives/transfer-dom/index.js';
  import ChinaAddressData from '@/datas/china_address.json';

  export default {
    directives: {
      TransferDom,
    },
    components: {
      Popup,
      Group,
      Cell,
      XSwitch,
      Toast,
      XAddress,
      XButton,
      ToggleText
    },
    data() {
      return {
        addressData: ChinaAddressData,
        show: false,
        show1: false,
        show3: false,
        show4: false,
        show5: false,
        show6: false,
        title6: '默认空的',
        value6: [],
        show7: false,
        showToast: false,
        show8: false,
        show9: false,
        show10: false,
        show11: false,
        show12: false,
        show13: false,
        show14: false,
        show15: false,
        show16: false,
        show17: false
      };
    },
    methods: {
      log(str) {
        console.log(str);
      },
      onClick(newVal, oldVal) {
        this.showToast = newVal;
        this.show = false;
      },
    },
    watch: {
      show10(val) {
        if (val) {
          setTimeout(() => {
            this.show10 = false;
          }, 1000);
        }
      },
      show11(val) {
        if (val) {
          setTimeout(() => {
            this.show11 = false;
          }, 1000);
        }
      },
    },
  };
</script>

<style lang="less" scoped>
    @import '../styles/close.less';

    .popup0 {
        padding-bottom: 15px;
        height: 200px;
    }

    .popup1 {
        width: 100%;
        height: 100%;
    }

    .popup2 {
        padding-bottom: 15px;
        height: 400px;
    }

    .position-vertical-demo {
        background-color: #ffe26d;
        color: #000;
        text-align: center;
        padding: 15px;
    }

    .position-horizontal-demo {
        position: relative;
        height: 100%;
        .ayui-close {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%) scale(4);
            color: #000;
        }
    }
</style>
