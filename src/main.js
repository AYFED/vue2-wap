import Vue from 'vue';
import Vuex from 'vuex';
import VuexI18n from 'vuex-i18n';
import App from './App.vue';
import router from './router';
import { sync } from 'vuex-router-sync';

import finalLocales from './i18n';

import DatetimePlugin from './plugins/datetime/index.js';
import CloseDialogsPlugin from './plugins/close-dialogs/index.js';
import ConfigPlugin from './plugins/config/index.js';
import BusPlugin from './plugins/bus/index.js';
import LocalePlugin from './plugins/locale/index.js';
import DevicePlugin from './plugins/device/index.js';
import ToastPlugin from './plugins/toast/index.js';
import AlertPlugin from './plugins/alert/index.js';
import ConfirmPlugin from './plugins/confirm/index.js';
import LoadingPlugin from './plugins/loading/index.js';
import WechatPlugin from './plugins/wechat/index.js';
import AjaxPlugin from './plugins/ajax/index.js';
import AppPlugin from './plugins/app/index.js';

Vue.config.productionTip = false;
Vue.use(Vuex);

require('es6-promise').polyfill();

const store = new Vuex.Store({
  modules: {
    i18n: VuexI18n.store,
  },
});

Vue.use(VuexI18n.plugin, store);

for (const i in finalLocales) {
  Vue.i18n.add(i, finalLocales[i]);
}

Vue.use(LocalePlugin);

const nowLocale = Vue.locale.get();
if (/zh/.test(nowLocale)) {
  Vue.i18n.set('zh');
} else {
  Vue.i18n.set('en');
}

if (/no-background-color=true/.test(location.href)) {
  document.body.style['background-color'] = '#fff';
}

// no transitoin in demo site
const shouldUseTransition = !/transition=none/.test(location.href);

store.registerModule('ayui', {
  state: {
    demoScrollTop: 0,
    isLoading: true,
    direction: shouldUseTransition ? 'forward' : '',
    count: 0,
  },
  mutations: {
    updateDemoPosition(state, payload) {
      state.demoScrollTop = payload.top;
    },
    updateLoadingStatus(state, payload) {
      state.isLoading = payload.isLoading;
    },
    updateDirection(state, payload) {
      if (!shouldUseTransition) {
        return;
      }
      state.direction = payload.direction;
    },
  },
  actions: {
    updateDemoPosition({ commit }, top) {
      commit({ type: 'updateDemoPosition', top });
    },
  },
});

// global ayui config
Vue.use(ConfigPlugin, {
  $layout: 'VIEW_BOX',
});

// plugins
Vue.use(DevicePlugin);
Vue.use(ToastPlugin);
Vue.use(AlertPlugin);
Vue.use(ConfirmPlugin);
Vue.use(LoadingPlugin);
Vue.use(WechatPlugin);
Vue.use(AjaxPlugin);
Vue.use(BusPlugin);
Vue.use(DatetimePlugin);

// test
if (process.env.platform === 'app') {
  Vue.use(AppPlugin, store);
}

const FastClick = require('fastclick');
FastClick.attach(document.body);

// 请求拦截器
Vue.http.interceptors.request.use((config) => {
  // 所有请求之前都要执行的操作
  console.log('请求拦截器');
  return config;
}, error =>
  // 错误处理
  Promise.reject(error));

// 响应拦截器
Vue.http.interceptors.response.use((response) => {
  // 所有请求完成后都要执行的操作
  console.log('响应拦截器');
  return response;
}, error =>
  // 错误处理
  Promise.reject(error));

Vue.use(CloseDialogsPlugin, router);

sync(store, router);

const history = window.sessionStorage;
history.clear();
let historyCount = history.getItem('count') * 1 || 0;
history.setItem('/', 0);
let isPush = false;
let endTime = Date.now();
const methods = ['push', 'go', 'replace', 'forward', 'back'];

document.addEventListener('touchend', () => {
  endTime = Date.now();
});

methods.forEach((key) => {
  const method = router[key].bind(router);
  router[key] = function (...args) {
    isPush = true;
    method(...args);
  };
});

router.beforeEach((to, from, next) => {
  store.commit('updateLoadingStatus', { isLoading: true });

  const toIndex = history.getItem(to.path);
  const fromIndex = history.getItem(from.path);

  if (toIndex) {
    if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) ||
        (toIndex === '0' && fromIndex === '0')) {
      store.commit('updateDirection', { direction: 'forward' });
    } else {
      // 判断是否是ios左滑返回
      if (!isPush && (Date.now() - endTime) < 377) {
        store.commit('updateDirection', { direction: '' });
      } else {
        store.commit('updateDirection', { direction: 'reverse' });
      }
    }
  } else {
    ++historyCount;
    history.setItem('count', historyCount);
    to.path !== '/' && history.setItem(to.path, historyCount);
    store.commit('updateDirection', { direction: 'forward' });
  }

  if (/\/http/.test(to.path)) {
    const url = to.path.split('http')[1];
    window.location.href = `http${url}`;
  } else {
    next();
  }
});

router.afterEach((to) => {
  isPush = false;
  setTimeout(() => {
    store.commit('updateLoadingStatus', { isLoading: false });
  }, 1000);
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
