<template>
  <table class="ayui-table" :class="{'ayui-table-bordered': fullBordered, 'ayui-table-no-cell-bordered': !cellBordered, 'ayui-table-no-content-bordered': !contentBordered}">
    <slot></slot>
  </table>
</template>

<script>
export default {
  name: 'x-table',
  props: {
    fullBordered: Boolean,
    cellBordered: {
      type: Boolean,
      default: true
    },
    contentBordered: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="less">
@import '../../styles/1px.less';

.ayui-table {
  line-height: 40px;
  position: relative;
  width: 100%;
  border-collapse: collapse;

  &:after {
    .setTopLine();
  }
  th {
    font-weight: 500
  }
}

.ayui-table.ayui-table-bordered {
  &:before {
    .setLeftLine();
  }
}

.ayui-table td, .ayui-table th {
  border-bottom: 1px solid #e0e0e0;
  border-right: 1px solid #e0e0e0;
  text-align: center;
}

.ayui-table td, .ayui-table th {
  position:relative;
  border-right: 0;
  border-bottom: 0;
}

.ayui-table td, .ayui-table th {
  &:before {
    .setBottomLine();
  }
}

.ayui-table.ayui-table-no-content-bordered td {
  &:before {
    border-bottom-width: 0;
  }
}

.ayui-table.ayui-table-no-content-bordered tr:last-child td {
  &:before {
    border-bottom-width: 1px;
  }
}

.ayui-table td, .ayui-table th {
  &:after {
    .setRightLine();
  }
}

.ayui-table.ayui-table-no-cell-bordered td, .ayui-table.ayui-table-no-cell-bordered th {
  &:after {
    border-right-width: 0;
  }
}

.ayui-table tr td:last-child, .ayui-table tr th:last-child {
  &:after {
    border-right-width: 0;
  }
}

.ayui-table.ayui-table-bordered tr td:last-child, .ayui-table.ayui-table-bordered tr th:last-child {
  &:after {
    border-right-width: 1px;
  }
}
</style>
