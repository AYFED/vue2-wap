/**
* import { CloseDialogsPlugin } from 'ayui'
* Vue.use(CloseDialogsPlugin, router)
*/
export default {
  install (Vue, router) {
    router.beforeEach((to, from, next) => {
      const list = ['alert', 'confirm', 'toast', 'loading', 'datetime']
      list.forEach(one => {
        if (Vue.$ayui[one]) {
          Vue.$ayui[one].hide && Vue.$ayui[one].hide()
        }
      })
      next()
    })
  }
}
