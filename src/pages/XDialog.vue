<template>
  <div style="height: 1000px">
    <group>
      <x-switch v-model="show" :title="$t('Toggle')"></x-switch>
      <x-switch v-model="show2" :title="$t('use .sync')"></x-switch>
      <x-switch v-model="showToast" :title="$t('show toast')"></x-switch>
      <x-switch v-model="showHideOnBlur" :title="$t('hide on clicking mask')"></x-switch>
      <x-switch v-model="showDialogStyle" :title="$t('Toggle')" :inline-desc="$t('custom dialog style')"></x-switch>
    </group>

    <div v-transfer-dom>
      <x-dialog v-model="showToast" class="dialog-demo">
        <div style="padding:15px;">
          <x-button @click.native="doShowToast" type="primary">show toast</x-button>
        </div>
        <div @click="showToast=false">
          <span class="ayui-close"></span>
        </div>
      </x-dialog>
    </div>

    <div v-transfer-dom>
      <x-dialog v-model="show" class="dialog-demo">
        <div class="img-box">
          <img src="../assets/demo/dialog/01.jpg" style="max-width:100%">
        </div>
        <div @click="show=false">
          <span class="ayui-close"></span>
        </div>
      </x-dialog>
    </div>

    <div v-transfer-dom>
      <x-dialog :show.sync="show2" class="dialog-demo">
        <div class="img-box">
          <img src="../assets/demo/dialog/01.jpg" style="max-width:100%">
        </div>
        <div @click="show2=false">
          <span class="ayui-close"></span>
        </div>
      </x-dialog>
    </div>

    <div v-transfer-dom>
      <x-dialog v-model="showHideOnBlur" class="dialog-demo" hide-on-blur>
        <div class="img-box">
          <img src="../assets/demo/dialog/01.jpg" style="max-width:100%">
        </div>
        <div @click="showHideOnBlur=false">
          <span class="ayui-close"></span>
        </div>
      </x-dialog>
    </div>

    <div v-transfer-dom>
      <x-dialog v-model="showDialogStyle" hide-on-blur :dialog-style="{'max-width': '100%', width: '100%', height: '50%', 'background-color': 'transparent'}">
        <p style="color:#fff;text-align:center;" @click="showDialogStyle = false">
          <span style="font-size:30px;">HELLO WORLD</span>
          <br>
          <br>
          <span class="ayui-close"></span>
        </p>
      </x-dialog>
    </div>

    <group style="padding-top: 300px">
      <x-switch v-model="showScrollBox" :title="$t('long long content')"></x-switch>
    </group>

    <div v-transfer-dom>
      <x-dialog v-model="showScrollBox" class="dialog-demo">
        <p class="dialog-title">Long content</p>
        <div class="img-box" style="height:100px;padding:15px 0;overflow:scroll;-webkit-overflow-scrolling:touch;">
          <p v-for="i in 20">{{i}}</p>
        </div>
        <div @click="showScrollBox=false">
          <span class="ayui-close"></span>
        </div>
      </x-dialog>
    </div>

  </div>
</template>

<script>
import { XDialog, XButton, Group, XSwitch, XIcon } from '@/components'
import TransferDom from '@/directives/transfer-dom/index.js'

export default {
  directives: {
    TransferDom
  },
  components: {
    XDialog,
    XButton,
    Group,
    XSwitch,
    XIcon
  },
  methods: {
    doShowToast () {
      this.$ayui.toast.show({
        text: 'toast'
      })
    }
  },
  data () {
    return {
      show: false,
      show2: false,
      showToast: false,
      showHideOnBlur: false,
      showScrollBox: false,
      showDialogStyle: false
    }
  }
}
</script>

<style lang="less" scoped>
@import '../styles/close';

.dialog-demo {
  .ayui-dialog{
    border-radius: 8px;
    padding-bottom: 8px;
  }
  .dialog-title {
    line-height: 30px;
    color: #666;
  }
  .img-box {
    height: 350px;
    overflow: hidden;
  }
  .ayui-close {
    margin-top: 8px;
    margin-bottom: 8px;
  }
}
</style>
