<template>
  <div>
    <group>
      <cell title="used in cell">
        <x-icon type="nav" class="cell-x-icon" @click.native="console"></x-icon>
      </cell>
    </group>
    <div style="padding: 15px;">
      <x-icon type="nav" size="30"></x-icon>
      <x-icon type="more" size="30"></x-icon>
      <x-icon type="home" size="30"></x-icon>
      <x-icon type="git" size="30"></x-icon>
      <br>
      <br>
      <p>省略了 自己去iconfont中添加 项目已经共享</p>
    </div>
  </div>
</template>

<script>
import { Group, Cell, XIcon } from '@/components'

export default {
  components: {
    Group,
    Cell,
    XIcon
  },
  methods: {
    console () {
      console.log('click')
    }
  }
}
</script>

<style>
.ayui-x-icon {
  fill: #F70968;
}
.cell-x-icon {
  display: block;
  fill: green;
}
</style>
