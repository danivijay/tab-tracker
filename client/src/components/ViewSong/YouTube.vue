<template>
  <panel title="Youtube" class="ml-3">
    <youtube
    :video-id="youtubeId"
    :player-width="200"
    :player-height="295"
    ></youtube>
  </panel>
</template>

<script>

export default {
  props: [
    'youtubeId'
  ]
}
</script>

<style>

</style>
