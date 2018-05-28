export default {
  mounted () {
    // fix for ssr
    if (typeof V_SSR === 'undefined') {
      if (process.env.NODE_ENV === 'development') {
        console.warn('[AYUI] 当前版本组件要求更新到最新版本')
      }
    } else if (typeof V_SSR !== 'undefined' && V_SSR) { // eslint-disable-line
      this.uuid = createId()
    }
  },
  data () {
    return {
      uuid: createId()
    }
  }
}

function createId () {
  return Math.random().toString(36).substring(3, 8)
}
