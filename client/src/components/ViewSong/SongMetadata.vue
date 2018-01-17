<template>
  <panel title="Songs">
  <div class="song">
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
            name: 'song-edit',
            params () {
              return {
                songId: song.id
              }
            }
          }"
          >Edit Song</v-btn>
          <v-btn
          v-if="isUserLoggedIn"
          dark
          class="cyan"
          @click="setAsBookmark"
          >Bookmark</v-btn>

          <v-btn
          v-if="isUserLoggedIn"
          dark
          class="cyan"
          @click="unbookmark"
          >Unbookmark</v-btn>

      </v-flex>

      <v-flex xs6>
        <img class="album-image" :src="song.albumImageUrl" alt="">
      </v-flex>
    </v-layout>
  </div>
</panel>
</template>

<script>
import {mapState} from 'vuex'
import BookmarksService from '@/services/BookmarksService'

export default {
  props: [
    'song'
  ],
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  async mounted () {
    const bookmark = (await BookmarksService.index({
      songId: 1,
      userId: 1
    })).data
    console.log('bookmark', bookmark)
  },
  methods: {
    setAsBookmark () {
      console.log('bookmark')
    },
    unbookmark () {
      console.log('unbookmark')
    }
  }
}
</script>

<style scoped>

  .song {
    padding: 20px;
    height: 300px;
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
