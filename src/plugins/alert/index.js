import { createVM, show, hide } from './util'

let $vm

const plugin = {
  install (Vue) {
    if (!$vm) {
      $vm = createVM(Vue)
    }

    const alert = {
      show (options = {}) {
        return show.call(this, $vm, options)
      },
      hide () {
        return hide.call(this, $vm)
      },
      isVisible () {
        return $vm.showValue
      }
    }

    if (!Vue.$ayui) {
      Vue.$ayui = {
        alert
      }
    } else {
      Vue.$ayui.alert = alert
    }

    Vue.mixin({
      created: function () {
        this.$ayui = Vue.$ayui
      }
    })
  }
}

export default plugin
export const install = plugin.install

