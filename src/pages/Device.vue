<template>
  <div>
    <group>
      <cell v-for="(item, key) in $device" :key="key" :title="key">{{item}}</cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell } from '@/components'

export default {
  components: {
    Group,
    Cell
  }
}
</script>
