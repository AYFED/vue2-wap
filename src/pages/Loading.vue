<template>
  <div>
    <group>
      <x-switch :title="$t('Toggle')" v-model="show1" @on-change="show1change"></x-switch>
      <x-switch title="无提示文字" v-model="show2" @on-change="show2change"></x-switch>
    </group>
    <div v-transfer-dom>
      <loading :show="show1" :text="text1"></loading>
    </div>
    <div v-transfer-dom>
      <loading :show="show2" text=""></loading>
    </div>
    <div style="padding: 15px;margin-top: 25px;">
      <x-button @click.native="showLoading" type="primary">{{ $t('Show loading') }}</x-button>
    </div>
    <div style="padding: 15px;">
      <x-button @click.native="showDelayLoading" type="primary">延时1s后显示</x-button>
    </div>
  </div>
</template>

<script>
import { Loading, Group, XSwitch, XButton } from '@/components'
import TransferDom from '@/directives/transfer-dom/index.js'

export default {
  directives: {
    TransferDom
  },
  components: {
    Loading,
    Group,
    XSwitch,
    XButton
  },
  data () {
    return {
      show1: false,
      show2: false,
      text1: 'Processing'
    }
  },
  methods: {
    showLoading () {
      this.$ayui.loading.show({
        text: '2s后关闭'
      })
      setTimeout(() => {
        this.$ayui.loading.hide()
      }, 2000)
    },
    showDelayLoading () {
      this.$ayui.loading.show({
        text: 'Loading',
        delay: 1e3
      })
      setTimeout(() => {
        this.$ayui.loading.hide()
      }, 2000)
    },
    show1change (val) {
      if (val) {
        tick(0, (percent) => {
          if (percent === 100) {
            this.show1 = false
            return
          }
          this.text1 = `${percent}%`
        })
      }
    },
    show2change (val) {
      if (val) {
        tick(0, (percent) => {
          if (percent === 100) {
            this.show2 = false
            return
          }
        })
      }
    }
  }
}

function tick (i, cb) {
  setTimeout(function () {
    i++
    cb(i)
    if (i < 100) {
      tick(i, cb)
    }
  }, 10)
}
</script>
