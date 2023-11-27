const express = require("express")
const router = express.Router()
const songControllers = require("../controllers/songControllers")

//add a song
router.post("/", songControllers.addASong)
//get all songs
router.get("/", songControllers.getAllSongs)
//get a song
router.get("/:id", songControllers.getASong)
//update a song
router.put("/:id", songControllers.updateASong)
//delete a song
router.delete("/:id", songControllers.deleteASong)

module.exports = router