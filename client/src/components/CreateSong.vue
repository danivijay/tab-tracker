<template>
  <v-layout>
      <v-flex xs6>
        <panel title="Song Metadata">
          <v-text-field
              type="text"
              label="Title"
              v-model="title"
            ></v-text-field>

          <v-text-field
              type="text"
              label="Artist"
              v-model="artist"
            ></v-text-field>

          <v-text-field
              type="text"
              label="Genre"
              v-model="genre"
            ></v-text-field>

          <v-text-field
              type="text"
              label="Album"
              v-model="album"
            ></v-text-field>

          <v-text-field
              type="text"
              label="Album Art URL"
              v-model="albumImageUrl"
            ></v-text-field>

          <v-text-field
              type="text"
              label="YouTube ID"
              v-model="youtubeId"
            ></v-text-field>
        </panel>
        <v-btn
          dark
          class="cyan"
          @click="create"
          >Create Song</v-btn>
      </v-flex>

      <v-flex xs6>
        <panel title="Song Structure" class="ml-3">
        <v-text-field
            type="text"
            multi-line
            label="Lyrics"
            v-model="lyrics"
          ></v-text-field>

        <v-text-field
          type="text"
          multi-line
          label="Tab"
          v-model="tab"
        ></v-text-field>
        </panel>
      </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      title: null,
      artist: null,
      genre: null,
      album: null,
      albumImageUrl: null,
      youtubeId: null,
      lyrics: null,
      tab: null
    }
  },
  methods: {
    create () {
      // TODO: https://youtu.be/1NSPAz1Qc-I?t=45m37s
    }
  },
  components: {
    Panel
  }
}
</script>

<style>

</style>
