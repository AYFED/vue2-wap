<template>
  <div style="">
    <blur :blur-amount=20 :url="url">
      <p class="center"><img :src="url"></p>
    </blur>
    <flexbox :gutter="0">
      <flexbox-item v-for="(img, index) in images" :key="index"><img :src="img" style="width:100%" @click="url = img"/>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
  import {Flexbox, FlexboxItem, Blur} from '@/components'

  export default {
    components: {
      Blur,
      Flexbox,
      FlexboxItem
    },
    data() {
      return {
        images: [
          'https://pic2.aoyou.com/visaattraction/106.jpg?imageView2/1/w/105/h/70/q/90',
          'https://pic2.aoyou.com/visaattraction/186.jpg?imageView2/1/w/105/h/70/q/90',
          'https://pic2.aoyou.com/visaattraction/205.jpg?imageView2/1/w/105/h/70/q/90'
        ],
        url: 'https://pic2.aoyou.com/visaattraction/106.jpg?imageView2/1/w/105/h/70/q/90'
      }
    }
  }
</script>

<style scoped>
  .center {
    text-align: center;
    padding-top: 20px;
    color: #fff;
    font-size: 18px;
  }

  .center img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 4px solid #ececec;
  }
</style>
