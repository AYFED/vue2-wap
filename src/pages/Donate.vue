<template>
  <div class="donate">
    <img src="https://cdn4.buysellads.net/uu/1/3386/1525189909-61450.png" class="donate-img">
    <p class="desc">感谢捐赠，但是捐赠并不会让你在该项目上有任何特权。
    <br>
    购买【世界和我】产品也是支持该项目发展。
    <br>
    （天猫搜索 livingearth）
    </p>
  </div>
</template>

<script>
import { Divider } from '@/components'

export default {
  components: {
    Divider
  }
}
</script>

<style lang="less" scoped>
.donate {
  text-align: center;
  background-color: #fff;
}
.donate-img {
  max-width: 100%;
}
.desc {
  color: #999;
  font-size: 12px;
}
</style>
