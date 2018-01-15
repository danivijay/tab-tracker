<template>
  <div>
    <v-layout>
      <v-flex xs6>
        <song-metadata :song="song"></song-metadata>
      </v-flex>
      <v-flex xs6>
        <you-tube :youtubeId="song.youtubeId" />
      </v-flex>
    </v-layout>
    <v-layout class="mt-3">
      <v-flex xs6>
        <panel title="Tabs">
          <div>
            <pre>
              {{song.tab}}
            </pre>
          </div>
        </panel>
      </v-flex>
      <v-flex xs6>
        <panel title="Lyrics" class="ml-3">
          <pre>
            {{song.lyrics}}
          </pre>
        </panel>
      </v-flex>
    </v-layout>
  </div>
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
    song.lyrics = song.lyrics.replace(/\n/g, "<br />");
    song.tab = song.tab.replace(/\n/g, "<br />");
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
