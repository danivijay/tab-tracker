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
          v-if="isUserLoggedIn && !isBookmarked"
          dark
          class="cyan"
          @click="bookmark"
          >Bookmark</v-btn>

          <v-btn
          v-if="isUserLoggedIn && isBookmarked"
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
  data () {
    return {
      isBookmarked: false
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  async mounted () {
    if(!this.isUserLoggedIn) {
      return
    }

    const bookmark = (await BookmarksService.index({
      songId: this.song.id,
      userId: this.$store.state.user.id
    })).data
    this.isBookmarked = !!bookmark
    console.log('bookmark', this.isBookmarked)
  },
  methods: {
    async bookmark () {
      try {
        await BookmarksService.post({
          songId: this.song.id,
          userId: this.$store.state.user.id
        })
      }
      catch (err) {
        console.log(err)
      }
    },
    async unbookmark () {
      try {
        await BookmarksService.delete({
          songId: this.song.id,
          userId: this.$store.state.user.id
        })
      }
      catch (err) {
        console.log(err)
      }
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
