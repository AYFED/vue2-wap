<template>
  <div class="ayui-panel ayui-panel_access">
    <div class="ayui-panel__hd" v-if="header" @click="onClickHeader" v-html="header">
      <slot name="header"></slot>
    </div>
    <div class="ayui-panel__bd">
      <slot name="body">
        <!--type==='1'-->
        <template v-if="type === '1'">
          <a :href="getUrl(item.url)" v-for="item in list" @click.prevent="onItemClick(item)" class="ayui-media-box ayui-media-box_appmsg">
            <div class="ayui-media-box__hd" v-if="item.src">
              <img class="ayui-media-box__thumb" :src="item.src" @error="onImgError(item, $event)" alt="">
            </div>
            <div class="ayui-media-box__bd">
              <h4 class="ayui-media-box__title" v-html="item.title"></h4>
              <p class="ayui-media-box__desc" v-html="item.desc"></p>
            </div>
          </a>
        </template>
        <!--type==='2'-->
        <template v-if="type === '2'">
          <div class="ayui-media-box ayui-media-box_text" v-for="item in list" @click.prevent="onItemClick(item)">
            <h4 class="ayui-media-box__title" v-html="item.title"></h4>
            <p class="ayui-media-box__desc" v-html="item.desc"></p>
          </div>
        </template>
        <!--type==='3'-->
        <template v-if="type === '3'">
          <div class="ayui-media-box ayui-media-box_small-appmsg">
            <div class="ayui-cells">
              <a class="ayui-cell ayui-cell_access" :href="getUrl(item.url)" v-for="item in list" @click.prevent="onItemClick(item)">
                <div class="ayui-cell__hd">
                  <img :src="item.src" alt="" @error="onImgError(item, $event)" style="width:20px;margin-right:5px;display:block">
                </div>
                <div class="ayui-cell__bd">
                  <p v-html="item.title"></p>
                </div>
                <span class="ayui-cell__ft"></span>
              </a>
              </div>
          </div>
        </template>
        <!--type==='4'-->
        <template v-if="type === '4'">
          <div class="ayui-media-box ayui-media-box_text" v-for="item in list" @click.prevent="onItemClick(item)">
            <h4 class="ayui-media-box__title" v-html="item.title"></h4>
            <p class="ayui-media-box__desc" v-html="item.desc"></p>
            <ul class="ayui-media-box__info" v-if="item.meta">
              <li class="ayui-media-box__info__meta" v-html="item.meta.source"></li>
              <li class="ayui-media-box__info__meta" v-html="item.meta.date"></li>
              <li class="ayui-media-box__info__meta ayui-media-box__info__meta_extra" v-html="item.meta.other"></li>
            </ul>
          </div>
        </template>
        <!--type==='5'-->
        <template v-if="type === '5'">
          <div class="ayui-media-box ayui-media-box_text" v-for="item in list" @click.prevent="onItemClick(item)">
            <div class="ayui-media-box_appmsg">
              <div class="ayui-media-box__hd" v-if="item.src">
                <img class="ayui-media-box__thumb" @error="onImgError(item, $event)" :src="item.src" alt="">
              </div>
              <div class="ayui-media-box__bd">
                <h4 class="ayui-media-box__title" v-html="item.title"></h4>
                <p class="ayui-media-box__desc" v-html="item.desc"></p>
              </div>
            </div>
            <ul class="ayui-media-box__info" v-if="item.meta">
              <li class="ayui-media-box__info__meta" v-html="item.meta.source"></li>
              <li class="ayui-media-box__info__meta" v-html="item.meta.date"></li>
              <li class="ayui-media-box__info__meta ayui-media-box__info__meta_extra" v-html="item.meta.other"></li>
            </ul>
          </div>
        </template>
      </slot>
    </div>
    <div class="ayui-panel__ft">
      <a class="ayui-cell ayui-cell_access ayui-cell_link" :href="getUrl(footer.url)" v-if="footer && type !== '3'" @click.prevent="onClickFooter">
        <div class="ayui-cell__bd" v-html="footer.title"></div>
      </a>
    </div>
  </div>
</template>

<script>
import { go, getUrl } from '../../libs/router'

export default {
  name: 'panel',
  props: {
    header: String,
    footer: Object,
    list: Array,
    type: {
      type: String,
      default: '1'
    }
  },
  methods: {
    onImgError (item, $event) {
      this.$emit('on-img-error', JSON.parse(JSON.stringify(item)), $event)
      if (item.fallbackSrc) {
        $event.target.src = item.fallbackSrc
      }
    },
    getUrl (url) {
      return getUrl(url, this.$router)
    },
    onClickFooter () {
      this.$emit('on-click-footer')
      go(this.footer.url, this.$router)
    },
    onClickHeader () {
      this.$emit('on-click-header')
    },
    onItemClick (item) {
      this.$emit('on-click-item', item)
      go(item.url, this.$router)
    }
  }
}
</script>

<style lang="less">
@import '../../styles/ayui/widget/ayui_cell/ayui_cell_global';
@import '../../styles/ayui/widget/ayui_cell/ayui_access';
@import '../../styles/ayui/widget/ayui_panel/ayui_panel';
@import '../../styles/ayui/widget/ayui_media_box/ayui_media_box';
</style>
