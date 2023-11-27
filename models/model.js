const mongoose = require('mongoose')

const songSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    publishedDate: {
        type: Number
    },
    genre: {
        type: [String]
    },
    artist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "artist"
    }
})

const artistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    company: {
        type: String
    },
    song: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "song"
        }
    ]
})

let Song = mongoose.model("song", songSchema)
let Artist = mongoose.model("artist", artistSchema)

module.exports = {Song, Artist}