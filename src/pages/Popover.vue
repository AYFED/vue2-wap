<template>
  <div style="text-align:center;">
    <popover placement="top" style="margin: 20px;" @on-show="onShow" @on-hide="onHide">
      <div slot="content" class="popover-demo-content">
        hello world
      </div>
      <button class="btn btn-default">{{ $t('Popover on top') }}</button>
    </popover>

    <popover placement="bottom" style="margin: 20px;">
      <div slot="content" class="popover-demo-content">
        hello world
      </div>
      <button class="btn btn-default">{{ $t('Popover on bottom') }}</button>
    </popover>

    <popover placement="left" style="margin: 20px;">
      <div slot="content" class="popover-demo-content">
        hello world
      </div>
      <button class="btn btn-default">{{ $t('Popover on left') }}</button>
    </popover>

    <popover placement="right" style="margin: 20px;">
      <div slot="content" class="popover-demo-content">
        hello world
      </div>
      <button class="btn btn-default">{{ $t('Popover on right') }}</button>
    </popover>

    <div style="position:fixed;bottom:50px;text-align:center;width:100%;">
      <p>fixed element</p>
      <popover placement="right" style="margin: 20px;">
        <div slot="content" class="popover-demo-content">
          hello world
        </div>
        <button class="btn btn-default">{{ $t('Popover on right') }}</button>
      </popover>
    </div>
  </div>
</template>

<script>
  import {Popover} from '@/components'

  export default {
    components: {
      Popover
    },
    methods: {
      onShow() {
        console.log('on show')
      },
      onHide() {
        console.log('on hide')
      }
    }
  }
</script>

<style scoped>
  .popover-demo-content {
    padding: 5px 10px;
    font-size: 12px;
  }
</style>
