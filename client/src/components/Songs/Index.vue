<template>
  <div>
    <v-layout>
      <v-flex
        v-if="isUserLoggedIn"
        xs6>
        <songs-bookmarks />
        <recently-viewed-songs class="mt-3" />
      </v-flex>
      <v-flex
        :class="{
          xs12: !isUserLoggedIn,
          xs6: isUserLoggedIn
        }"
        xs6 class="ml-3">
        <songs-search-panel />
        <songs-panel class="mt-3" />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import SongsService from '@/services/SongsService'
import SongsBookmarks from './SongsBookmarks'
import RecentlyViewedSongs from './RecentlyViewedSongs'
import SongsPanel from './SongsPanel'
import SongsSearchPanel from './SongsSearchPanel'
export default {
  components: {
    SongsPanel,
    SongsSearchPanel,
    SongsBookmarks,
    RecentlyViewedSongs
  },
  data () {
    return {
      songs: null
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
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
