<template>
  <div>
    <group :title="value[0] + ' ' + value[1] + ':' + value[2]">
      <datetime-range :title="$t('Choose')" start-date="2017-01-01" end-date="2017-02-02" :format="$t('daterange-format')" v-model="value" @on-change="onChange"></datetime-range>
    </group>
  </div>
</template>

<script>
import { Group, DatetimeRange } from '@/components'

export default {
  components: {
    Group,
    DatetimeRange
  },
  methods: {
    onChange (val) {
      console.log('change', val)
    }
  },
  data () {
    return {
      value: ['2017-01-15', '03', '05']
    }
  }
}
</script>
