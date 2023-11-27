const express = require("express")
const router = express.Router()
const artistControllers = require("../controllers/artistControllers")
//add an artist
router.post("/", artistControllers.addAnArtist)
//get all artists
router.get("/", artistControllers.getAllArtists)
//get an artist
router.get("/:id", artistControllers.getAnArtist)
//update an artist
router.put("/:id", artistControllers.updateAnArtist)
//delete an artist
router.delete("/:id", artistControllers.deleteAnArtist)

module.exports = router