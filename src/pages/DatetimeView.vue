<template>
  <div>
    <datetime-view v-model="value1" ref="datetime" :format="format"></datetime-view>
    <p class="info">{{ $t('Current value') }}: {{ value1 }}</p>
    <div style="padding:15px;">
      <x-button @click.native="changeValue('2017-11-11')" :disabled="format !== 'YYYY-MM-DD'" type="primary"> {{ $t('Set 2017-11-11') }} </x-button>
      <x-button @click.native="changeValue('2016-08-08')" :disabled="format !== 'YYYY-MM-DD'" type="primary"> {{ $t('Set 2016-08-08') }} </x-button>
      <x-button @click.native="toggleFormat" :disabled="format === 'YYYY-MM-DD HH'" type="primary"> {{ $t('Toggle format') }} </x-button>
      <x-button @click.native="changeFormatAndValue" type="primary" style="width: 75%;"> {{ $t('Format 2019-10-23 10') }} </x-button>
      <x-button @click.native="showPopup = true" type="primary"> {{ $t('Show popup with datetime-view') }} </x-button>
    </div>
    <div v-transfer-dom>
      <popup v-model="showPopup">
        <datetime-view v-model="value2"></datetime-view>
      </popup>
    </div>
  </div>
</template>

<script>
import { DatetimeView, XButton, Popup } from '@/components'
import TransferDom from '@/directives/transfer-dom/index.js'

export default {
  components: {
    DatetimeView,
    XButton,
    Popup
  },
  directives: {
    TransferDom
  },
  data () {
    return {
      value1: '2017-10-11',
      value2: '2017-10-24',
      showPopup: false,
      format: 'YYYY-MM-DD'
    }
  },
  methods: {
    toggleFormat () {
      if (this.format === 'YYYY-MM-DD') {
        this.format = 'YYYY-MM-DD HH:mm'
      } else {
        this.format = 'YYYY-MM-DD'
      }
    },
    changeValue (val) {
      this.value1 = val
      this.$refs.datetime.render()
    },
    changeFormatAndValue () {
      this.format = 'YYYY-MM-DD HH'
      this.$nextTick(() => {
        this.value1 = '2019-10-23 10'
        this.$refs.datetime.render()
      })
    }
  }
}
</script>

<style scoped>
.info {
  padding-top: 15px;
  text-align: center;
  color: #666;
}
</style>
