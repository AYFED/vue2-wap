<template>
    <div>
        <div style="padding: 15px;">
            <button-tab>
                <button-tab-item>{{ $t('Today') }}</button-tab-item>
                <button-tab-item selected>{{ $t('This Week') }}</button-tab-item>
                <button-tab-item>{{ $t('This Month') }}</button-tab-item>
            </button-tab>
            <br>
            <divider>{{ $t('Use v-model to set selected item') }}</divider>
            <br>
            <button-tab v-model="demo01">
                <button-tab-item @on-item-click="consoleIndex()">{{ $t('Articles') }}</button-tab-item>
                <button-tab-item @on-item-click="consoleIndex()">{{ $t('Products') }}</button-tab-item>
            </button-tab>
            <br>
            <button-tab v-model="demo01">
                <button-tab-item>{{ $t('Articles sync') }}</button-tab-item>
                <button-tab-item>{{ $t('Products sync') }}</button-tab-item>
            </button-tab>
            <br>
            <divider>{{ $t('Red Dot') }}</divider>
            <br>
            <button-tab>
                <button-tab-item selected>{{ $t('All Messages') }}</button-tab-item>
                <button-tab-item><span class="ayui-reddot-s">{{ $t('New Messages') }}</span></button-tab-item>
            </button-tab>
        </div>
    </div>
</template>

<script>
  import {ButtonTab, ButtonTabItem, Divider} from '@/components'

  export default {
    components: {
      ButtonTab,
      ButtonTabItem,
      Divider
    },
    methods: {
      consoleIndex() {
        console.log('click demo01', this.demo01)
      }
    },
    data() {
      return {
        demo01: 0
      }
    }
  }
</script>

<style lang="less">

    .ayui-reddot-s:after {
        background-color: #31a5f7 !important;
    }

</style>
