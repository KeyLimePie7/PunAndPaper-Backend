// represents the jpa layer to fetch data from db
const Note = require("../model/note");

const getAllNotes = async (req, res) => {
  const notes = await Note.findAndCountAll(); // this method will scan the db, and return every record in the rows property, and the number of records in the count property
  res.send({
    context: notes.rows,
    total: notes.count,
  });
};

const getNote = async (req, res) => {
  const id = req.params.id;
  await Note.findOne({ where: { id: id } }).then((item) => {
    // find and return a single record based on the PK
    if (item != null) {
      res.send(item);
    } else {
      res.sendStatus(404);
    }
  });
};

const saveNote = async (req, res) => {
  const note = {
    title: req.body.title,
    content: req.body.content,
  };
  await Note.create(note).then(() => {
    res.sendStatus(201);
  });
};

const updateNote = async (req, res) => {
  const id = req.params.id;
  await Note.findByPk(id).then((item) => {
    if (item != null) {
      item
        .update({
          title: req.body.title,
          content: req.body.content,
        })
        .then(() => {
          res.sendStatus(204);
        });
    } else {
      res.sendStatus(404);
    }
  });
};

const deleteNote = async (req, res) => {
  const id = req.params.id;
  await Note.findByPk(id).then((item) => {
    if (item != null) {
      item.destroy();
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  });
};

module.exports = {
  getAllNotes,
  getNote,
  saveNote,
  updateNote,
  deleteNote,
};
