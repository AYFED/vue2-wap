<template>
  <div class="demo-list-box" id="demo_list_box" :style="{height: `${height}px`}">
    <flexbox :gutter="0" v-for="(list, index) in components" :key="index">
      <flexbox-item :span="1/3" v-for="component in list" :key="component.name" class="cbox ayui-1px-t ayui-tap-active"
                    @click.native="go(component.name.toLowerCase())">
        <div class="ayui-1px-r cbox-inner">
          <span class="ayui-iconfont" v-html="component.icon" :style="{color: component.color}"></span>
          <br>
          <span :style="[{fontSize: component.name.length > 12 ? '12px' : ''},{color: component.color}]">{{component.name | camelCase}}</span>
        </div>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
  import {Flexbox, FlexboxItem} from '@/components'
  import ComponentListData from '@/datas/component_list.json'
  import {mapState} from 'vuex'

  export default {
    name: 'demoList',
    components: {
      Flexbox,
      FlexboxItem
    },
    filters: {
      camelCase(input){
        let str = input.toLowerCase().replace(/-(.)/g, function (match, group1) {
          return group1.toUpperCase()
        })

        str = str.replace(/_(.)/g, function (match, group1) {
          return group1.toUpperCase()
        })
        return str.slice(0, 1).toUpperCase() + str.slice(1)
      }
    },
    activated() {
      document.querySelector('#demo_list_box').scrollTop = this.demoTop
    },
    methods: {
      go(name) {
        this.$router.push(`/component/${name}`)
      },
      split(array) {
        let chunks = []
        let count = Math.ceil(array.length / 3)
        while (count > 0) {
          chunks.push(array.slice((count - 1) * 3, count * 3))
          count--
        }
        chunks = chunks.reverse()
        const lastList = chunks[chunks.length - 1]
        const lastLength = lastList.length
        if (lastLength < 3) {
          for (let i = 0; i < 3 - lastLength; i++) {
            lastList.push({
              name: `--${i}--`,
              icon: ''
            })
          }
        }
        return chunks
      }
    },
    data() {
      return {
        height: window.innerHeight - 46 - 53,
        components: this.split(ComponentListData)
      }
    },
    computed: {
      ...mapState({
        demoTop: state => state.ayui.demoScrollTop
      })
    }
  }
</script>

<style lang="less" scoped>
  .cbox {
    text-align: center;
  }

  .cbox-inner {
    padding: 15px 0;
    width: 100%;
    height: 100%;
  }

  .demo-list-box {
    background-color: #fff;
    width: 100%;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
  }
</style>
