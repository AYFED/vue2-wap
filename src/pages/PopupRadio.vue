<template>
  <div>
    <group>
      <popup-radio title="选项" :options="options1" v-model="option1"></popup-radio>
    </group>
    <group>
      <popup-radio title="自定义选项" :options="options2" v-model="option2" placeholder="placeholder"></popup-radio>
    </group>
    <group>
      <popup-radio title="带title选项" :options="options3" v-model="option3">
        <p slot="popup-header" class="ayui-1px-b demo3-slot">Please select</p>
      </popup-radio>
    </group>
    <group>
      <popup-radio title="只读选项" readonly :options="options3" v-model="option4">
        <p slot="popup-header" class="ayui-1px-b demo3-slot">Please select</p>
      </popup-radio>
    </group>
    <group>
      <popup-radio title="使用slot:each-item" :options="options3" v-model="option5">
        <template slot-scope="props" slot="each-item"><!-- use scope="props" when vue < 2.5.0 -->
          <p>
            custom item <img src="http://dn-placeholder.qbox.me/110x110/FF2D55/000" class="ayui-radio-icon"> {{
            props.label }}
            <br>
            <span style="color:#666;">{{ props.index + 1 }} another line</span>
          </p>
        </template>
      </popup-radio>
    </group>
  </div>
</template>

<script>
  import {Group, PopupRadio} from '@/components'

  export default {
    components: {
      Group,
      PopupRadio
    },
    data() {
      return {
        option1: 'A',
        options1: ['A', 'B', 'C'],
        option2: '',
        options2: [{
          key: 'A',
          value: 'label A'
        }, {
          key: 'B',
          value: 'label B'
        }],
        option3: 'C',
        options3: ['A', 'B', 'C'],
        option4: 'B',
        option5: 'B'
      }
    }
  }
</script>

<style scoped>
  .demo3-slot {
    text-align: center;
    padding: 8px 0;
    color: #888;
  }
</style>
