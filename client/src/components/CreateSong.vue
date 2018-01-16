<template>
  <v-layout>
      <v-flex xs6>
        <panel title="Song Metadata">
          <v-text-field
              type="text"
              required
              :rules="[required]"
              label="Title"
              v-model="song.title"
            ></v-text-field>

          <v-text-field
              type="text"
              required
              :rules="[required]"
              label="Artist"
              v-model="song.artist"
            ></v-text-field>

          <v-text-field
              type="text"
              required
              :rules="[required]"
              label="Genre"
              v-model="song.genre"
            ></v-text-field>

          <v-text-field
              type="text"
              required
              :rules="[required]"
              label="Album"
              v-model="song.album"
            ></v-text-field>

          <v-text-field
              type="text"
              required
              :rules="[required]"
              label="Album Art URL"
              v-model="song.albumImageUrl"
            ></v-text-field>

          <v-text-field
              type="text"
              required
              :rules="[required]"
              label="YouTube ID"
              v-model="song.youtubeId"
            ></v-text-field>
        </panel>

      </v-flex>

      <v-flex xs6>
        <panel title="Song Structure" class="ml-3">
        <v-text-field
            type="text"
            required
            :rules="[required]"
            multi-line
            label="Lyrics"
            v-model="song.lyrics"
          ></v-text-field>

        <v-text-field
          type="text"
          required
          :rules="[required]"
          multi-line
          label="Tab"
          v-model="song.tab"
        ></v-text-field>
        <span class="error" v-if="error">
          {{error}}
        </span>
        <v-btn
          dark
          class="cyan"
          @click="create"
          >Create Song</v-btn>

        </panel>
      </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      required: (value) => !!value || 'Required',
      error: null
    }
  },
  methods: {
    async create () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields'
        return
      }
      try {
        await SongsService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style>

</style>
