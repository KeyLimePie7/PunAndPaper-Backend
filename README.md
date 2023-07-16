# Hello

This is the backend for my notetaking web application. It is made in JavaScript, using ExpressJS, SQLite3, and Sequelize.

It has basic CRUD procedures, getting all notes, getting individual notes, creating notes, updating notes, and deleting notes.

Use it together with the frontend notetaking application for the best experience.

# How to use

First, run `npm i`, then `npm start`. The backend will run on localhost:3005.

Here are the endpoints available, you can test them using Postman or cURL:

HTTP GET - Get all notes
http://localhost:3005/api/notes

HTTP GET - Get note by id
http://localhost:3005/api/note/id

HTTP POST - Create a new note
http://localhost:3005/api/note

```
{
    "title": "{{$randomFullName}}",
    "content": "{{$randomEmail}}",
}
```

HTTP PUT - Update a note
http://localhost:3005/api/note/id

```
{
    "title": "{{$randomFullName}}",
    "content": "{{$randomEmail}}",
}
```

HTTP DELETE - Delete a note
http://localhost:3005/api/note/id
