const {Song, Artist} = require("../models/model")

const songControllers = {
    addASong: async(req, res) => {
        try {
            const song = new Song(req.body)
            const savedSong = await song.save()
            if (savedSong.artist) {
                const artist = Artist.findById(savedSong.artist)
                await artist.updateOne({$push: {song: savedSong}})
            }
            res.status(200).json(savedSong)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    getAllSongs: async(req, res) => {
        try {
            const song = await Song.find()
            res.status(200).json(song)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    getASong: async(req, res) => {
        try {
            const song = await Song.findById(req.params.id).populate("artist")
            res.status(200).json(song)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    updateASong: async(req, res) => {
        try {
            const song = await Song.findById(req.params.id)
            await song.updateOne({$set: req.body})
            res.status(200).json("Updated successfully!")
        } catch (err) {
            res.status(500).json(err)
        }
    },
    deleteASong: async(req, res) => {
        try {
            await Artist.updateOne({$pull: {song: req.params.id}})
            await Song.findByIdAndDelete(req.params.id)
            res.status(200).json("Deleted!")
        } catch (err) {
            res.status(500).json(err)
        }
    }
}

module.exports = songControllers