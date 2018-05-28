<template>
  <div>
    <group>
      <x-switch :title="$t('Toggle')" v-model="show"></x-switch>
    </group>
    <group>
      <x-switch :title="$t('Toggle show-input')" v-model="show3"></x-switch>
    </group>
    <group>
      <x-switch :title="$t('Set default input value')" v-model="show5"></x-switch>
    </group>
    <group>
      <x-switch :title="$t('Toggle_android')" v-model="show2"></x-switch>
    </group>
    <group>
      <x-switch :title="$t('closeOnConfirm=false')" v-model="show4"></x-switch>
    </group>
    <div v-transfer-dom>
      <confirm v-model="show"
      :title="$t('Confirm deleting the item')"
      @on-cancel="onCancel"
      @on-confirm="onConfirm"
      @on-show="onShow"
      @on-hide="onHide">
        <p style="text-align:center;">{{ $t('Are you sure?') }}</p>
      </confirm>
    </div>
    <br>
    <div v-transfer-dom>
      <confirm v-model="show3"
      :show-input=true
      :title="$t('Confirm deleting the item')"
      :input-attrs="{type: 'number'}"
      @on-cancel="onCancel"
      @on-confirm="onConfirm"
      @on-show="onShow"
      @on-hide="onHide">
      </confirm>
    </div>
    <br>
    <div v-transfer-dom>
      <confirm v-model="show5"
      :show-input=true
      ref="confirm5"
      :title="$t('Confirm deleting the item')"
      :input-attrs="{type: 'string'}"
      @on-cancel="onCancel"
      @on-confirm="onConfirm5"
      @on-show="onShow5"
      @on-hide="onHide">
      </confirm>`
    </div>
    <br>
    <div v-transfer-dom>
      <confirm v-model="show2"
      :title="$t('Confirm deleting the item')"
      theme="android"
      @on-cancel="onCancel"
      @on-confirm="onConfirm"
      @on-show="onShow"
      @on-hide="onHide">
        <p style="text-align:center;">{{ $t('I miss u sunyi') }}</p>
      </confirm>
    </div>
    <br>
    <div v-transfer-dom>
      <confirm
      v-model="show4"
      :close-on-confirm="false"
      :title="$t('Confirm deleting the item')"
      @on-confirm="onConfirm4">
        <p style="text-align:center;">{{ $t('Are you sure?') }}</p>
      </confirm>
    </div>
    <br>
    <div style="padding:15px;">
      <x-button @click.native="showPlugin" type="primary">{{ $t('Show') }}</x-button>
    </div>
    <div style="padding:15px;">
      <x-button @click.native="showPlugin2" type="primary">{{ $t('Plugin usage') }}</x-button>
    </div>
    <div style="padding:15px;">
      <x-button @click.native="showPlugin3" type="primary"> {{ $t('Call prompt by using plugin') }} </x-button>
    </div>
  </div>
</template>

<script>
import { Confirm, Group, XSwitch, XButton } from '@/components'
import TransferDom from '@/directives/transfer-dom/index.js'

export default {
  directives: {
    TransferDom
  },
  components: {
    Confirm,
    Group,
    XSwitch,
    XButton
  },
  data () {
    return {
      show: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false
    }
  },
  methods: {
    onCancel () {
      console.log('on cancel')
    },
    onConfirm (msg) {
      console.log('on confirm')
      if (msg) {
        alert(msg)
      }
    },
    onConfirm4 () {
      console.log('on confirm')
      this.$ayui.loading.show({
        transition: '',
        text: 'processing'
      })
      setTimeout(() => {
        this.$ayui.loading.hide()
        this.show4 = false
      }, 1000)
    },
    onHide () {
      console.log('on hide')
    },
    onShow () {
      console.log('on show')
    },
    onShow5 () {
      this.$refs.confirm5.setInputValue('default')
    },
    onConfirm5 (value) {
      this.$refs.confirm5.setInputValue('')
      this.$ayui.toast.text('input value: ' + value)
    },
    showPlugin () {
      this.$ayui.confirm.show({
        title: 'Title',
        content: 'Content',
        onShow () {
          console.log('plugin show')
        },
        onHide () {
          console.log('plugin hide')
        },
        onCancel () {
          console.log('plugin cancel')
        },
        onConfirm () {
          console.log('plugin confirm')
        }
      })
    },
    showPlugin2 () {
      this.showPlugin()
    },
    showPlugin3 () {
      const _this = this
      this.$ayui.confirm.prompt('123', {
        title: 'Title',
        onShow () {
          console.log('promt show')
          _this.$ayui.confirm.setInputValue('set input value')
        },
        onHide () {
          console.log('prompt hide')
        },
        onCancel () {
          console.log('prompt cancel')
        },
        onConfirm (msg) {
          _this.$ayui.toast.text('input value: ' + msg)
        }
      })
    }
  }
}
</script>
