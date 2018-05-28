<template>
  <div style="text-align:center;margin-top:15px;">
    <divider>{{ $t('default type = img') }}</divider><br>
    <qrcode value="https://m.aoyou.com" type="img"></qrcode>
    <br>
    <br>
    <divider>{{ $t('type = canvas') }}</divider><br>
    <qrcode value="https://m.aoyou.com" type="canvas"></qrcode>
    <br>
    <qrcode :value="value" :fg-color="fgColor"></qrcode>
    <br>
    <span>{{ $t('current url') }}: {{value}}</span>
    <br>
    <span>{{ $t('current Color') }}: {{fgColor}}</span>
  </div>
</template>

<script>
import { Qrcode, Divider } from '@/components'

export default {
  mounted () {
    setInterval(() => {
      this.value = `https://m.aoyou.com?t=${Math.random()}`
      this.fgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`
    }, 3000)
  },
  components: {
    Qrcode,
    Divider
  },
  data () {
    return {
      value: 'https://m.aoyou.com',
      fgColor: '#000000'
    }
  }
}
</script>
