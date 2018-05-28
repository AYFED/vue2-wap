<template>
  <div>
    <group :title="$t('value map')">
      <x-switch :title="$t('default true')" :value-map="['0', '1']" v-model="stringValue"></x-switch>
      <cell title="value" :value="typeof stringValue + ' ' + stringValue"></cell>
    </group>
    <group :title="$t('Basic Usage')">
      <x-switch :title="$t('default false')"></x-switch>
      <x-switch :title="$t('default true')" :inline-desc="value1 + ''" v-model="value1"></x-switch>
    </group>
    <group :title="$t('disabled')">
      <x-switch :title="$t('default false')" disabled></x-switch>
      <x-switch :title="$t('default true')" :value="true" disabled></x-switch>
    </group>
    <group :title="$t('prevent default')">
      <x-switch :title="$t('default false')" prevent-default v-model="value2" @on-click="onClick"></x-switch>
    </group>
    <group :title="$t('html title')">
      <x-switch disabled :title="$t('switch red')"></x-switch>
    </group>
  </div>
</template>

<script>
import { XSwitch, Group, Cell } from '@/components'

export default {
  components: {
    XSwitch,
    Group,
    Cell
  },
  methods: {
    onClick (newVal, oldVal) {
      console.log(newVal, oldVal)
      this.$ayui.loading.show({
        text: 'in processing'
      })
      setTimeout(() => {
        this.$ayui.loading.hide()
        this.value2 = newVal
      }, 1000)
    }
  },
  data () {
    return {
      value1: true,
      value2: false,
      stringValue: '0'
    }
  }
}
</script>
