<template>
  <div>
    <br>
    <div style="text-align:center;">
      <inline-x-number width="50px"></inline-x-number>
    </div>
    <br>
    <div style="text-align:center;">
      <inline-x-number width="50px" button-style="round"></inline-x-number>
    </div>
    <group>
      <cell :title="$t('Used within cell')">
        <inline-x-number style="display:block;" :min="0" width="50px" button-style="round"></inline-x-number>
      </cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell, InlineXNumber } from '@/components'

export default {
  components: {
    Group,
    Cell,
    InlineXNumber
  }
}
</script>
