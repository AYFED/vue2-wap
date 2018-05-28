<template>
  <div>
    <badge text="1"></badge>
    <br>
    <badge text="123"></badge>
    <br>
    <group :title="$t('Used in a Cell')">
      <cell :title="$t('Red dot')" is-link>
        <div class="badge-value">
          <span class="vertical-middle">{{ $t('New Messages') }} &nbsp;</span>
          <badge></badge>
        </div>
      </cell>
      <cell :title="$t('Single digit')" is-link>
        <div class="badge-value">
          <span class="vertical-middle">{{ $t('New Messages') }} &nbsp;</span>
          <badge text="8"></badge>
        </div>
      </cell>
      <cell :title="$t('Big Number')" is-link>
        <div class="badge-value">
          <span class="vertical-middle">{{ $t('New Messages') }} &nbsp;</span>
          <badge text="888"></badge>
        </div>
      </cell>
    </group>
  </div>
</template>

<script>
  import {Badge, Group, Cell} from '@/components'

  export default {
    components: {
      Badge,
      Group,
      Cell
    }
  }
</script>

<style lang="less">
  .badge-value {
    display: inline-block !important;
  }

  .vertical-middle {
    vertical-align: middle;
  }
</style>
