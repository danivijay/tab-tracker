<template>
  <v-layout column>
    <v-flex>
      <panel title="Songs">
          <v-btn
            slot="action"
            :to="{
              name: 'songs-create'
            }"
            class="cyan accent-2"
            small
            light
            fab
            absolute
            right
            middle
            ><v-icon>add</v-icon>
          </v-btn>
        <div
          v-for="song in songs"
          class="song"
          :key="song.id">
          <v-layout>
            <v-flex xs6>
              <div class="song-title">
                {{song.title}}
              </div>
              <div class="song-artist">
                {{song.artist}}
              </div>
              <div class="song-genre">
                {{song.genre}}
              </div>
              <v-btn
              dark
              class="cyan"
              :to="{
                name: 'song',
                params: {songId: song.id
                }
              }"
              >View</v-btn>
            </v-flex>

            <v-flex xs6>
              <img class="album-image" :src="song.albumImageUrl" alt="">
            </v-flex>
          </v-layout>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      songs: null
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.songs = (await SongsService.index(value)).data
      }
    }
  }
}
</script>

<style scoped>
  .song {
    padding: 20px;
    height: 330px;
    overflow: hidden;
  }
  .song-title {
    font-size: 20px;
  }
  .song-artist {
    font-size: 15px;
  }
  .song-genre {
    font-size: 10px;
  }
  .album-image {
    width: 70%;
    margin: 0 auto;
  }
</style>
