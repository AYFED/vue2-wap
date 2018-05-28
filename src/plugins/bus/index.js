export default {
  install (Vue) {
    const bus = new Vue({})
    if (!Vue.$ayui) {
      Vue.$ayui = {
        bus
      }
    } else {
      Vue.$ayui.bus = bus
    }

    Vue.mixin({
      created: function () {
        if (this.$ayui) {
          this.$ayui.bus = bus
        } else {
          this.$ayui = {
            bus
          }
        }
      }
    })
  }
}
