<template>
<div>
  <inline-calendar
  ref="calendar"
  @on-change="onChange"
  @on-view-change="onViewChange"
  class="inline-calendar-demo"
  :show.sync="show"
  v-model="value"
  start-date="2016-04-01"
  end-date="2018-05-30"
  :range="range"
  :show-last-month="showLastMonth"
  :show-next-month="showNextMonth"
  :highlight-weekend="highlightWeekend"
  :return-six-rows="return6Rows"
  :hide-header="hideHeader"
  :hide-week-list="hideWeekList"
  :replace-text-list="replaceTextList"
  :weeks-list="weeksList"
  :render-function="buildSlotFn"
  :disable-past="disablePast"
  :disable-future="disableFuture"
  :disable-weekend="disableWeekend"
  :disable-date-function="disableDateFunction">
  </inline-calendar>

  <group>
    <cell :title="$t('Current value')" :value="value"></cell>
    <cell :title="$t('Start date')" value="2016-04-01"></cell>
    <cell :title="$t('End date')" value="2018-05-30"></cell>
  </group>

  <div style="margin: 15px;">
    <x-button type="primary" @click.native="$refs.calendar.switchViewToToday()">设置今天</x-button>
    <x-button type="primary" @click.native="$refs.calendar.switchViewToMonth(2017, 12)">设置月份(2017, 12)</x-button>
    <x-button type="primary" @click.native="$refs.calendar.switchViewToMonth(2018, 10)">改变月份(2018, 10)</x-button>
    <x-button type="primary" @click.native="$refs.calendar.switchViewToCurrentValue()">改变当前值</x-button>
  </div>

  <group :title="$t('Control days')" style="margin-top: 30px;">
    <x-switch v-model="disablePast" :title="$t('Disable past')"></x-switch>
    <x-switch v-model="disableFuture" :title="$t('Disable future')"></x-switch>
    <x-switch v-model="disableWeekend" :title="$t('Disable weekend')"></x-switch>
    <x-switch v-model="showLastMonth" :title="$t('Show last month')"></x-switch>
    <x-switch v-model="showNextMonth" :title="$t('Show next month')"></x-switch>
    <x-switch v-model="return6Rows" :inline-desc="$t('If not, the height of calendar would change')" :title="$t('Always show 6 rows')"></x-switch>
    <x-switch v-model="highlightWeekend" :title="$t('Highlight weekend')"></x-switch>
    <cell :title="$t('Current value')" :value="value"></cell>
  </group>
  <group :title="$t('Control navs')">
    <x-switch v-model="hideHeader" :title="$t('Hide header')"></x-switch>
    <x-switch v-model="hideWeekList" :title="$t('Hide week list')"></x-switch>
    <x-switch v-model="changeWeeksList" :title="$t('Change week list')"></x-switch>
  </group>
  <group :title="$t('Replace text')">
    <x-switch v-model="replace" :title="$t('Replace date text')"></x-switch>
  </group>
  <br>
  <div style="margin: 15px;">
    <x-button type="primary" @click.native="value='2020-11-11'"> {{ $t('Set time to') }} 2020-11-11</x-button>
    <x-button type="primary" @click.native="value='2020-11-22'"> {{ $t('Set time to') }} 2020-11-22</x-button>
    <x-button type="primary" @click.native="value='2016-08-09'"> {{ $t('Set time to') }} 2016-08-09</x-button>
    <x-button type="primary" @click.native="value='TODAY'"> {{ $t('Set time to') }} today</x-button>
    <x-button type="primary" @click.native="value='2016-06-05'"> {{ $t('Set time to') }} 2016-06-05</x-button>
  </div>
  <br>
  <group :title="$t('Custom every day cell')">
    <x-switch v-model="useCustomFn" :inline-desc="$t('Add red dot for dates with number 8')" :title="$t('Add custom contents in day cell')"></x-switch>
  </group>

  <br>

  <divider> {{ $t('We can render a list of calendars order by month') }}</divider>
  <group>
    <cell :title="$t('Current value')" :value="value"></cell>
  </group>
  <br>
</div>
</template>

<script>
import { InlineCalendar, Group, XSwitch, Radio, XButton, Cell, Divider } from '@/components'

export default {
  methods: {
    onChange (val) {
      console.log('on-change', val)
    },
    onViewChange (val, count) {
      console.log('on view change', val, count)
    }
  },
  data () {
    return {
      show: true,
      value: '',
      listValue: '',
      range: false,
      showLastMonth: true,
      showNextMonth: true,
      highlightWeekend: false,
      return6Rows: true,
      hideHeader: false,
      hideWeekList: false,
      replaceTextList: {},
      replace: false,
      changeWeeksList: false,
      weeksList: [],
      useCustomFn: false,
      buildSlotFn: () => '',
      disablePast: false,
      disableFuture: false,
      disableWeekend: false,
      disableDateFunction (date) {
        if (date.formatedDate === '2017-10-16') {
          return true
        }
      }
    }
  },
  watch: {
    replace (val) {
      this.replaceTextList = val ? {
        'TODAY': '今'
      } : {}
    },
    useCustomFn (val) {
      this.buildSlotFn = val ? (line, index, data) => {
        return /8/.test(data.date) ? '<div style="font-size:12px;text-align:center;"><span style="display:inline-block;width:5px;height:5px;background-color:red;border-radius:50%;"></span></div>' : '<div style="height:19px;"></div>'
      } : () => ''
    },
    changeWeeksList (val) {
      this.weeksList = val ? ['日', '一', '二', '三', '四', '五', '六 '] : ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
    }
  },
  components: {
    InlineCalendar,
    Group,
    XSwitch,
    Radio,
    XButton,
    Cell,
    Divider
  }
}
</script>

<style lang="less" scoped>
.inline-calendar-demo {
  background: rgba(255,255,255,0.9);
}
</style>
