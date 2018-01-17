const {Bookmark} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const {songId, userId} = req.query
      const bookmark = await Bookmark.findOne({
        where: {
          SongId: songId,
          UserId: userId
        }
      })
      res.send(bookmark)
    } catch (err) {
      res.status(500).send({
        error: 'An error is occured while loading bookmark'
      })
    }
  },
  async post (req, res) {
    try {
      const bookmark = req.body
      const newBookmark = await Bookmark.create(bookmark)
      res.send(newBookmark)
    } catch (err) {
      res.status(500).send({
        error: 'An error is occured while creating bookmark'
      })
    }
  },
  async delete (req, res) {
    try {
      const {bookmarkId} = req.params
      const bookmark = await Bookmark.findById(bookmarkId)
      await bookmark.destroy()
      res.send(bookmark)
    } catch (err) {
      res.status(500).send({
        error: 'An error is occured deleting the bookmark'
      })
    }
  }
}
