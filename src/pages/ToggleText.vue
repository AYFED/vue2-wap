<template>
  <div class="text-body" :style="scrollable ? 'height:375px;overflow:scroll;' : ''">
    <spinner name="crescent" v-show="text !== '初始化完成(单击以关闭我)'"></spinner>
    <br>
    <span>{{ text }}</span>
    <div v-if="scrollable" style="height:1000px;"></div>
  </div>
</template>

<script>
import { Spinner } from '@/components'

export default {
  components: {
    Spinner
  },
  props: {
    scrollable: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    setTimeout(() => {
      this.text = '初始化完成(单击以关闭我)'
    }, 2000)
  },
  data () {
    return {
      text: '初始化~'
    }
  }
}
</script>

<style>
.text-body {
  padding: 30px 0;
  color: #666;
  text-align: center;
}
</style>
