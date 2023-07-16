// represents the router class
const express = require("express");
const {
  getAllNotes,
  getNote,
  saveNote,
  updateNote,
  deleteNote,
} = require("../controller/noteController");

const router = express.Router();

// http://localhost:3005/api/notes
router.get("/notes", getAllNotes);

// http://localhost:3005/api/note/id
router.get("/note/:id", getNote);

// http://localhost:3005/api/note
/*
{
    "title": "randomTitle",
    "content": "randomContent",
}
*/
router.post("/note", saveNote);

// http://localhost:3005/api/note/id
/*
{
    "title": "randomTitle",
    "content": "randomContent",
}
*/
router.put("/note/:id", updateNote);

// http://localhost:3005/api/note/id
router.delete("/note/:id", deleteNote);

module.exports = {
  routes: router
};
