<template>
  <div>
    <group :title="$t('Default')">
      <x-number :name="$t('Quantity')" :title="$t('Quantity')"></x-number>
    </group>

    <group :title="$t('listen')">
      <x-number :title="$t('Quantity')" :value="0" :min="0" @on-change="change"></x-number>
    </group>

    <group :title="$t('set width=100px')">
      <x-number :title="$t('Quantity')" width="100px"></x-number>
    </group>

    <group :title="$t('round style')">
      <x-number :title="$t('Quantity')" v-model="roundValue" button-style="round" :min="0" :max="5"></x-number>
    </group>

    <group :title="$t('set step=0.5')">
      <x-number :title="$t('Quantity')" :step="0.5"></x-number>
    </group>

    <group :title="$t('set value=1, min=-5 and max=8')">
      <x-number :title="$t('Quantity')" :min="-5" :max="8" :value="1"></x-number>
    </group>

    <group :title="$t('fillable = true')">
      <x-number :value="10" :title="$t('Quantity')" fillable></x-number>
    </group>

  </div>
</template>

<script>
import { Group, XNumber, XSwitch, Divider } from '@/components'

export default {
  components: {
    XNumber,
    Group,
    XSwitch,
    Divider
  },
  data () {
    return {
      roundValue: 0
    }
  },
  methods: {
    change (val) {
      console.log('change', val)
    }
  }
}
</script>
