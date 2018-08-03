<template>
  <div>
    <divider>默认</divider>
    <div class="center">{{ new Date() | FormatTimeFilter }}</div>
    <divider>YYYY-MM-DD</divider>
    <div class="center">{{ new Date() | FormatTimeFilter('YYYY-MM-DD') }}</div>
    <divider>YYYY-MM-DD E</divider>
    <div class="center">{{ new Date() | FormatTimeFilter('YYYY-MM-DD E') }}</div>
    <divider>YYYY-MM-DD EE</divider>
    <div class="center">{{ new Date() | FormatTimeFilter('YYYY-MM-DD EE') }}</div>
  </div>
</template>

<script>
import { Divider } from '@/components'
import FormatTimeFilter from '@/filters/format-time.js'

export default {
  filters: {
    FormatTimeFilter
  },
  components: {
    Divider
  }
}
</script>

<style lang="less" scoped>
.center {
  text-align: center;
}
</style>
