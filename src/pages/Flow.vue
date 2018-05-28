<template>
  <div>
    <flow>
      <flow-state state="1" :title="$t('Paid')" is-done></flow-state>
      <flow-line is-done></flow-line>

      <flow-state state="2" is-done>
        <span slot="title">{{ $t('Shipped') }}</span>
      </flow-state>
      <flow-line :tip="$t('In progress')"></flow-line>

      <flow-state state="3" :title="$t('Delivered')"></flow-state>
      <flow-line></flow-line>

      <flow-state state="4" :title="$t('Done')"></flow-state>
    </flow>


    <flow>
      <flow-state :title="$t('Paid')" is-done></flow-state>
      <flow-line is-done :line-span="15"></flow-line>

      <flow-state :title="$t('Shipped')" is-done></flow-state>
      <flow-line is-done :line-span="30"></flow-line>

      <flow-state :title="$t('Delivered')" is-done></flow-state>
      <flow-line :tip="$t('In progress')" tip-direction="bottom" :line-span="45" :process-span="60"></flow-line>

      <flow-state :title="$t('Done')"></flow-state>
    </flow>

    <flow orientation="vertical" style="height:250px;">
      <flow-state state="1" :title="$t('Paid')" is-done></flow-state>
      <flow-line is-done></flow-line>

      <flow-state state="2" :title="$t('Shipped')" is-done></flow-state>
      <flow-line :tip="$t('In progress')"></flow-line>

      <flow-state state="3" :title="$t('Delivered')"></flow-state>
      <flow-line></flow-line>

      <flow-state state="4" :title="$t('Done')"></flow-state>
    </flow>

    <flow orientation="vertical" style="height:200px;">
      <flow-state state="1" :title="$t('Paid')" is-done></flow-state>
      <flow-line is-done :line-span="15"></flow-line>

      <flow-state state="2" :title="$t('Shipped')" is-done></flow-state>
      <flow-line :line-span="30" :tip="$t('In progress')"></flow-line>

      <flow-state state="3" :title="$t('Delivered')"></flow-state>
      <flow-line :line-span="45"></flow-line>

      <flow-state state="4" :title="$t('Done')"></flow-state>
    </flow>

  </div>
</template>

<script>
import { Flow, FlowState, FlowLine } from '@/components'

export default {
  components: {
    Flow,
    FlowState,
    FlowLine
  }
}
</script>
