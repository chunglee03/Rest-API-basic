const {Song, Artist} = require("../models/model")

const artistControllers = {
    addAnArtist: async(req, res) => {
        try {
            const artist = new Artist(req.body)
            const savedArtist = await artist.save()
            res.status(200).json(savedArtist)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    getAllArtists: async(req, res) => {
        try {
            const artist = await Artist.find()
            res.status(200).json(artist)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    getAnArtist: async(req, res) => {
        try {
            const artist = await Artist.findById(req.params.id).populate("song")
            res.status(200).json(artist)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    updateAnArtist: async(req, res) => {
        try {
            const artist = await Artist.findById(req.params.id)
            await artist.updateOne({$set: req.body})
            res.status(200).json("Updated successfully!")
        } catch (err) {
            res.status(500).json(err)
        }
    },
    deleteAnArtist: async(req, res) => {
        try {
            await Song.updateOne({artist: req.params.id}, {$set: {artist: null}})
            await Artist.findByIdAndDelete(req.params.id)
            res.status(200).json("Deleted!")
        } catch (err) {
            res.status(500).json(err)
        }
    }
}

module.exports = artistControllers
