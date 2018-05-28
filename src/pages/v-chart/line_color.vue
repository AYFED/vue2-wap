<template>
  <div>
    <v-chart :data="data">
      <v-line series-field="type" />
    </v-chart>
  </div>
</template>

<script>
import { VChart, VLine, VAxis, VTooltip } from '@/components'
import data from './line_color.json'

export default {
  components: {
    VChart,
    VLine,
    VAxis,
    VTooltip
  },
  data () {
    return {
      data
    }
  }
}
</script>