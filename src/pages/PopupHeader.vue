<template>
  <div>
    <group>
      <x-switch v-model="show1" :title="$t('used with Popup')"></x-switch>
    </group>
    <div v-transfer-dom>
      <popup v-model="show1">
        <!-- group already has a top border, so we need to hide header's bottom border-->
        <popup-header
        :left-text="$t('cancel')"
        :right-text="$t('done')"
        :title="$t('Please select your card')"
        :show-bottom-border="false"
        @on-click-left="show1 = false"
        @on-click-right="show1 = false"></popup-header>
        <group gutter="0">
          <radio :options="[$t('Card 1'), $t('Card 2'), $t('Card 3'), $t('Card 4')]"></radio>
        </group>
      </popup>
    </div>
  </div>
</template>

<script>
import { PopupHeader, Popup, Group, XSwitch, Radio } from '@/components'
import TransferDom from '@/directives/transfer-dom/index.js'

export default {
  directives: {
    TransferDom
  },
  components: {
    PopupHeader,
    Popup,
    Group,
    XSwitch,
    Radio
  },
  data () {
    return {
      show1: false
    }
  }
}
</script>
