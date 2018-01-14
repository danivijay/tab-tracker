<template>
  <panel title="Youtube" class="ml-3">
    <span>{{youtubeId}}</span>
  </panel>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  props: [
    'youtubeId'
  ],
  components: {
    Panel
  }
}
</script>

<style>

</style>
