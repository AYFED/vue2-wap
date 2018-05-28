<template>
    <div>
        <group>
            <cell :title="item.title" :link="item.link" v-for="(item, index) in lists" :key="index"></cell>
        </group>
    </div>
</template>

<script>
  import {Cell, Group} from '@/components';

  export default {
    name: 'home',
    components: {
      Cell,
      Group
    },
    data() {
      return {
        lists:[
          {title:'基本折线图',link:'/component/v-chart/line_basic'},
          {title:'折线图:平滑曲线',link:'/component/v-chart/line_smooth_with_dot'},
          {title:'动态数据：实时折线',link:'/component/v-chart/line_realtime'},
          {title:'折线图：渐变',link:'/component/v-chart/line_gradient'},
          {title:'折线图:对比',link:'/component/v-chart/line_color'},
          {title:'折线图：显示点',link:'/component/v-chart/line_with_dot'},
          {title:'层叠面积图',link:'/component/v-chart/area_stack'},
          {title:'层叠柱状图',link:'/component/v-chart/bar_stack'},
          {title:'分组柱状图',link:'/component/v-chart/bar_series'},
          {title:'百分比柱状图',link:'/component/v-chart/bar_percent'},
          {title:'基础柱状图',link:'/component/v-chart/bar_basic'},
          {title:'带负值面积图',link:'/component/v-chart/area_negative'},
          {title:'环图: 资产配置',link:'/component/v-chart/pie_annular'},
          {title:'渐变填充面积图',link:'/component/v-chart/area_gradient'},
          {title:'饼图',link:'/component/v-chart/pie_basic'},
          {title:'区域图（存在空值）',link:'/component/v-chart/area_empty'},
          {title:'散点图',link:'/component/v-chart/point'},
          {title:'对比面积图：美国、苏联核储备对比',link:'/component/v-chart/area_compare'},
          {title:'基础面积图',link:'/component/v-chart/area_basic'},
          {title:'自定义渲染逻辑',link:'/component/v-chart/prevent_render'},
        ]
      };
    },
  };
</script>

<style scoped>
    .vue-version {
        text-align: center;
        font-size: 12px;
        color: #ccc;
    }

    .center {
        margin-top: 35px;
        text-align: center;
    }

    .ayui-notice {
        color: #666;
        line-height: 40px;
    }

    .ayui-title {
        vertical-align: middle;
        text-align: center;
        color: #04BE02;
        display: inline-block;
        width: 75px;
        height: 75px;
        line-height: 75px;
        border-radius: 50%;
    }

    body {
        font-family: Helvetica, sans-serif;
        background-color: #fff;
    }

</style>
