<template>
  <div>
    <div style="margin-top:15px;margin-left:10px;">
      <inline-x-switch v-model="value"></inline-x-switch>
    </div>
    <group>
      <x-switch title="switch" v-model="value"></x-switch>
    </group>
  </div>
</template>

<script>
import { InlineXSwitch, XSwitch, Group } from '@/components'

export default {
  components: {
    InlineXSwitch,
    XSwitch,
    Group
  },
  data () {
    return {
      value: false
    }
  }
}
</script>
