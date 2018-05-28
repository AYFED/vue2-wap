<template>
  <div class="ayui-wepay-flow" :class="{'ayui-wepay-flow_vertical': orientation ===
  'vertical'}">
    <div class="ayui-wepay-flow__bd">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'flow',
  props: {
    orientation: {
      type: String,
      default: 'horizontal'
    }
  }
}
</script>

<style lang="less">
@bubbleCorlor:#ff8a00;
.setBubbleCommon(@height,@backgroundColor,@fontSize,@color,@borderRadius) {
  height: @height;
  line-height: @height;
  background-color: @backgroundColor;
  font-size: @fontSize;
  color: @color;
  white-space: nowrap;
  padding: 0 6px;
  position: relative;
  border-radius: @borderRadius;
  &:after{
    content: '';
    display:inline-block;
    width:0;
    height:0;
    overflow:hidden;
    font-size:0;
    position: absolute;
  }
}
.setBubblePrivate(@direction, @backgroundColor) when (@direction = top) {
  &:after{
    border-color:@backgroundColor transparent transparent transparent;
    border-style:solid;
    border-width:5px 3px;
    left: 50%;
    transform: translate(-50%, 0);
    bottom: -10px;
  }
}
.setBubblePrivate(@direction, @backgroundColor) when (@direction = bottom) {
  &:after{
    border-color: transparent transparent @backgroundColor transparent;
    border-style: dashed dashed solid dashed;
    border-width:5px 3px;
    left: 50%;
    transform: translate(-50%, 0);
    top: -10px;
  }
}
.setBubblePrivate(@direction, @backgroundColor) when (@direction = left) {
  &:after{
    border-color: transparent transparent transparent  @backgroundColor;
    border-style:solid;
    border-width: 3px 5px;
    top: 50%;
    transform: translate(0, -50%);
    right: -10px;
  }
}
.setBubblePrivate(@direction, @backgroundColor) when (@direction = right) {
  &:after{
    border-color: transparent @backgroundColor transparent transparent;
    border-style:solid;
    border-width: 3px 5px;
    top: 50%;
    transform: translate(0, -50%);
    left: -10px;
  }
}
.ayui-wepay-flow,
.ayui-wepay-flow-auto{
  padding: 40px;
}
.ayui-wepay-flow__bd{
  display: flex;
  justify-content:space-between;
  align-items:center;
}
.ayui-wepay-flow__li{
  width: 14px;
  height: 14px;
  position: relative;
  z-index: 1;
 .ayui-wepay-flow__state{
    position: absolute;
    left: 0;
    top: 0;
    width: 14px;
    height: 14px;
    font-size: 10px;
    line-height: 14px;
    text-align: center;
    color: #FFF;
    border-radius: 7px;
    box-sizing: border-box;
  }
}
.ayui-wepay-flow__state{
  background-color: #E2E2E2;
  .ayui-wepay-flow__li_done &{
    background-color: #FF5523;
  }
}
[class^="ayui-wepay-flow__title-"],[class*=" ayui-wepay-flow__title-"]{
  position: absolute;
  color: #999999;
  font-size: 14px;
  font-weight: normal;
  white-space: nowrap;
  text-align: center;
}
.ayui-wepay-flow__title-top{
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, 0);
  .ayui-wepay-flow__li_done &{
    color: #333;
  }
}
.ayui-wepay-flow__title-bottom{
  top: 20px;
  left: 50%;
  transform: translate(-50%, 0);
  .ayui-wepay-flow__li_done &{
    color: #333;
  }
}
.ayui-wepay-flow__title-left{
  right: 30px;
  top: 50%;
  transform: translate(0, -50%);
  .ayui-wepay-flow__li_done &{
    color: #333;
  }
  text-align: right;
}
.ayui-wepay-flow__title-right{
  left: 30px;
  top: 50%;
  transform: translate(0, -50%);
  text-align: left;
  .ayui-wepay-flow__li_done &{
    color: #333;
  }
}
[class^="ayui-wepay-flow__intro-"],[class*=" ayui-wepay-flow__intro-"]{
  .setBubbleCommon(20px,@bubbleCorlor,10px,#FFF,4px);
}
.ayui-wepay-flow__intro-top{
  bottom: 25px;
  left: 50%;
  transform: translate(-50%, 0);
  .setBubblePrivate(top,@bubbleCorlor);
  position: absolute;
}
.ayui-wepay-flow__intro-bottom{
  top: 25px;
  left: 50%;
  transform: translate(-50%, 0);
  .setBubblePrivate(bottom,@bubbleCorlor);
  position: absolute;
}
.ayui-wepay-flow__intro-right{
  left: 36px;
  top: 50%;
  transform: translate(0, -50%);
  .setBubblePrivate(right,@bubbleCorlor);
  position: absolute;
}
.ayui-wepay-flow__intro-left{
  right: 36px;
  top: 50%;
  transform: translate(0, -50%);
  .setBubblePrivate(left,@bubbleCorlor);
  position: absolute;
}

[class^="ayui-wepay-flow__info-"]{
  .setBubbleCommon(14px,#FF5523,10px,#FFF,2px);
  position: absolute;
  .ayui-wepay-flow__line_ing &{
    display: block;
  }
}
.ayui-wepay-flow__info-top{
  display: none;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 11px;
  .ayui-wepay-flow__line_ing &{
    display: block;
  }
  .setBubblePrivate(top,#FF5523);
}
.ayui-wepay-flow__info-bottom{
  display: none;
  left: 50%;
  transform: translate(-50%, 0);
  top: 11px;
  .ayui-wepay-flow__line_ing &{
    display: block;
  }
  .setBubblePrivate(bottom,#FF5523);
}
.ayui-wepay-flow__info-left{
  display: none;
  top: 50%;
  transform: translate(0, -50%);
  right: 12px;
  .ayui-wepay-flow__line_ing &{
    display: block;
  }
  .setBubblePrivate(left,#FF5523);
}
.ayui-wepay-flow__info-right{
  display: none;
  top: 50%;
  transform: translate(0, -50%);
  left: 12px;
  .ayui-wepay-flow__line_ing &{
    display: block;
  }
  .setBubblePrivate(right,#FF5523);
}
.ayui-wepay-flow__line{
  flex:1;
  background-color: #E2E2E2;
  height: 3px;
  position: relative;
}
.ayui-wepay-flow__title{
  color: #999999;
  font-size: 14px;
  font-weight: normal;
}
.ayui-wepay-flow__info{
  color: #999999;
  font-size: 12px;
}
.ayui-wepay-flow__process{
  display: none;
  background-color: #FF5523;
  height: 3px;
  position: relative;
  .ayui-wepay-flow__line_ing &{
    display: block;
    width: 50%;
  }
  .ayui-wepay-flow__line_done &{
    display: block;
  }
}
.ayui-wepay-flow_custom{
  .ayui-wepay-flow__bd{
    justify-content:flex-start;
  }
  .ayui-wepay-flow__line{
    flex:none;
    width: 100px;
  }
}
.ayui-wepay-flow_vertical{
  .ayui-wepay-flow__bd{
    flex-direction:column;
    height: 100%;
    box-sizing: border-box;
  }
  .ayui-wepay-flow__line{
    height: auto;
    width: 3px;
  }
  .ayui-wepay-flow__line_ing{
    .ayui-wepay-flow__process{
      height: 50%;
    }
  }
  .ayui-wepay-flow__process{
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 3px;
  }
  .ayui-wepay-flow__line_done{
    .ayui-wepay-flow__process{
      height: 100%;
    }
  }
}

.ayui-wepay-flow_vertical-custom{
  .ayui-wepay-flow__bd{
    flex-direction:column;
    height: 100%;
    box-sizing: border-box;
  }
  .ayui-wepay-flow__line{
    width: 3px;
    flex:none;
  }
  .ayui-wepay-flow__line_ing{
    .ayui-wepay-flow__process{
      height: 50%;
    }
  }
  .ayui-wepay-flow__process{
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 3px;
  }
  .ayui-wepay-flow__line_done{
    .ayui-wepay-flow__process{
      height: 100%;
    }
  }
}
.ayui-wepay-flow-auto{
  position: relative;
}
.ayui-wepay-flow-auto__bd{
  position: relative;
}
.ayui-wepay-flow-auto__state{
  position: absolute;
  left: 0;
  top: 4px;
  width: 14px;
  height: 14px;
  font-size: 10px;
  line-height: 14px;
  text-align: center;
  color: #FFF;
  border-radius: 7px;
  background-color: #E2E2E2;
  z-index: 2;
}
.ayui-wepay-flow-auto__state_on{
    background-color: #FF5523;
}
.ayui-wepay-flow-auto__line{
  position: absolute;
  z-index: 1;
  width: 2px;
  background-color: #dddddd;
  top: 10px;
  bottom: -4px;
  left: 6px;
  z-index: 1;
}
.ayui-wepay-flow-auto__line_on{
  background-color: #FF5523;
}
.ayui-wepay-flow-auto__li{
  position: relative;
  padding-bottom: 20px;
  padding-left: 30px;
}
.ayui-wepay-flow-auto__title{
  color: #999999;
  font-size: 14px;
  font-weight: normal;
}
.ayui-wepay-flow-auto__info{
  color: #999999;
  font-size: 12px;
}
</style>
