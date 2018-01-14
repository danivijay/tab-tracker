<template>
  <v-layout>
    <v-flex>
      <song-metadata :song="song"></song-metadata>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
import SongMetadata from './SongMetadata.vue'

export default {
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
  },
  components: {
    Panel,
    SongMetadata
  }
}
</script>

<style>

</style>
