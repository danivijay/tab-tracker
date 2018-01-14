<template>
  <v-layout>
    <v-flex xs6>
      <song-metadata :song="song"></song-metadata>
    </v-flex>
    <v-flex xs6>
      <you-tube :youtubeId="song.youtubeId" />
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
import SongMetadata from './SongMetadata.vue'
import YouTube from './YouTube.vue'

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
    SongMetadata,
    YouTube
  }
}
</script>

<style>

</style>
