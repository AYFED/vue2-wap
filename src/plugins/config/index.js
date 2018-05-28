export default {
  install (Vue, config = {}) {
    if (!Vue.ayui) {
      Vue.ayui = {
        config
      }
    } else {
      Vue.ayui.config = config
    }

    if (typeof window !== 'undefined') {
      window.ayui_CONFIG = config
    }

    Vue.mixin({
      created: function () {
        if (this.$ayui) {
          this.$ayui.config = config
        } else {
          this.$ayui = {
            config
          }
        }
      }
    })
  }
}
