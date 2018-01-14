const {Song} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const songs = await Song.findAll({
        limit: 10
      })
      res.send(songs)
    } catch (err) {
      res.status(500).send({
        error: 'An error is occured while trying fetch the songs'
      })
    }
  },
  async post (req, res) {
    try {
      const song = await Song.create(req.body)
      console.log('here1111111')
      res.send(song)
    } catch (err) {
      console.log('here22222222')
      res.status(500).send({
        error: 'An error is occured while adding the song'
      })
    }
  },
  async show (req, res) {
    try {
      const song = await Song.findById(req.params.songId)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'An error is occured while trying fetch the songs'
      })
    }
  }
}
