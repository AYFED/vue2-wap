<template>
    <div>
        <div class="center">
            <img src="https://pic1.aoyou.com/webapp/msite/root/log.png" style="width:50%;">
            <p class="ayui-notice">v{{version}}</p>
        </div>
        <group>
            <cell title="Demo" link="/demo">
                <span class="ayui-iconfont ayui-icon-shehuade" slot="icon"
                      style="color:#F70968;margin-right: 10px;"></span>
            </cell>
            <cell title="GitHub" link="https://github.com/AYFED" value="关注">
                <span class="ayui-iconfont ayui-icon-git" slot="icon" style="color:#35495e;margin-right: 10px;"></span>
            </cell>
        </group>
        <br>
        <p class="vue-version">current vue version: {{ vueVersion }}</p>
    </div>
</template>

<script>
  import {Cell, Group} from '@/components';

  const pkg = require('../../package.json');
  const version = pkg.version;
  const vueVersion = pkg.dependencies.vue.split('^').length == 1 ?
      pkg.dependencies.vue.split('^')[0] :
      pkg.dependencies.vue.split('^')[1];

  export default {
    name: 'home',
    components: {
      Cell,
      Group
    },
    data() {
      return {
        version,
        vueVersion,
      };
    },
  };
</script>

<style scoped>
    .vue-version {
        text-align: center;
        font-size: 12px;
        color: #ccc;
    }

    .center {
        margin-top: 35px;
        text-align: center;
    }

    .ayui-notice {
        color: #666;
        line-height: 40px;
    }

    .demo-icon {
        margin-right: 15px;
    }

    .ayui-title {
        vertical-align: middle;
        text-align: center;
        color: #04BE02;
        display: inline-block;
        width: 75px;
        height: 75px;
        line-height: 75px;
        border-radius: 50%;
    }

    body {
        font-family: Helvetica, sans-serif;
        background-color: #fff;
    }

    .demo-tip {
        background-color: #fefcec;
        color: #f76a24;
        font-size: 12px;
        padding: 5px 10px;
        margin-top: 15px;
    }
</style>
