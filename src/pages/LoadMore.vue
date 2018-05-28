<template>
  <div>
    <load-more :tip="$t('The Loading')"></load-more>
    <load-more :show-loading="false" :tip="$t('The End')" background-color="#fbf9fe"></load-more>
    <load-more :show-loading="false" background-color="#fbf9fe"></load-more>
  </div>
</template>

<i18n>

</i18n>

<script>
import { LoadMore } from '@/components'

export default {
  components: {
    LoadMore
  }
}
</script>
