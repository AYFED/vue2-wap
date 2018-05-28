<template>
  <div>
    <group>
      <x-switch :title="$t('Show Me')" v-model="show"></x-switch>
    </group>
    <div v-transfer-dom>
      <alert v-model="show" :title="$t('Congratulations')" @on-show="onShow" @on-hide="onHide"> {{ $t('Your Message is sent successfully~') }}</alert>
    </div>

    <group title="Prop: content">
      <x-switch :title="$t('Show Me')" v-model="show2"></x-switch>
    </group>
    <div v-transfer-dom>
      <alert v-model="show2" :title="$t('Congratulations')" :content="$t('Your Message is sent successfully~')"></alert>
    </div>

    <group :title="$t('Use as a plugin')">
      <cell :title="$t('Show Me')" @click.native="showPlugin" is-link></cell>
      <cell :title="$t('Will auto close in 3s')" @click.native="showPluginAuto" is-link></cell>
    </group>

    <group :title="$t('Use as a module')">
      <cell :title="$t('Show Me')" @click.native="showModule" is-link></cell>
      <cell :title="$t('Will auto close in 3s')" @click.native="showModuleAuto" is-link></cell>
    </group>
  </div>
</template>

<script>
import { Alert, Group, XSwitch, Cell } from '@/components'
import TransferDom from '@/directives/transfer-dom/index.js'
import AlertModule from '@/plugins/alert/module'

export default {
  directives: {
    TransferDom
  },
  components: {
    Alert,
    Group,
    XSwitch,
    Cell
  },
  data () {
    return {
      show: false,
      show1: false,
      show2: false
    }
  },
  methods: {
    onHide () {
      console.log('on hide')
    },
    onShow () {
      console.log('on show')
    },
    showPlugin () {
      this.$ayui.alert.show({
        title: 'It is Cool',
        content: this.$t('Do you agree?'),
        onShow () {
          console.log('Plugin: I\'m showing')
        },
        onHide () {
          console.log('Plugin: I\'m hiding now')
        }
      })
    },
    showModule () {
      AlertModule.show({
        title: 'Module is Cool',
        content: this.$t('Do you agree?'),
        onShow () {
          console.log('Module: I\'m showing')
        },
        onHide () {
          console.log('Module: I\'m hiding now')
        }
      })
    },
    showModuleAuto () {
      this.showModule()
      setTimeout(() => {
        AlertModule.hide()
      }, 3000)
    },
    showPluginAuto () {
      this.showPlugin()
      setTimeout(() => {
        this.$ayui.alert.hide()
      }, 3000)
    }
  }
}
</script>
