<template>
  <panel title="Songs">
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

      </v-flex>

      <v-flex xs6>
        <img class="album-image" :src="song.albumImageUrl" alt="">
      </v-flex>
    </v-layout>
  </div>
</panel>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  props: [
    'song'
  ],
  components: {
    Panel
  },
  mounted() {
    console.log("song")
    // TODO: https://www.youtube.com/watch?v=3zw5LgKDMhg
    console.log(song)
  }
}

</script>

<style>

</style>
