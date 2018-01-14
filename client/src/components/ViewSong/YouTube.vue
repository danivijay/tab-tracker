<template>
  <panel title="Youtube" class="ml-3">
    <youtube
    :video-id="youtubeId"
    :player-width="200"
    :player-height="200"
    ></youtube>
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
