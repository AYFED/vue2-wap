<template>
  <div class="ayui-circle-demo">
    <div style='width:100px;height:100px;'>
      <x-circle
        :percent="percent"
        :stroke-width="6"
        :trail-width="6"
        :stroke-color="['#36D1DC', '#5B86E5']"
        trail-color="#ececec">
        <span style="color:#36D1DC">{{ percent }}%</span>
      </x-circle>
    </div>
  </div>
</template>

<script>
import { XCircle } from '@/components'

export default {
  components: {
    XCircle
  },
  data () {
    return {
      percent: 80
    }
  }
}
</script>

<style scoped>
.ayui-circle-demo {
  padding-top: 20px;
  text-align: center;
}
.ayui-circle-demo > div {
  margin: 0 auto;
}
</style>
