// automatically creating table on startup and inserting data
const sequelize = require("./model/dbconfig");
const Note = require("./model/note");
var cors = require("cors"); // for cross origin resource sharing so the frontend can call these endpoints

// simply synchronize the model with the db // use this if the other is commented out
// await sequelize.sync();

// default loading data // use this to delete old table and create a new one
sequelize.sync({ force: true }).then(async () => {
  // the force:true parameter will drop any existing tables and recreate them
  console.log("db is ready");
  for (let i = 1; i < 5; i++) {
    const note = {
      title: `title${i}`,
      content: `content${i}`,
    };
    await Note.create(note);
  }
  console.log("sample data inserted.");
});

// application
const express = require("express");
const noteRoutes = require("./routes/noteRoutes");

const app = express();
app.use(cors()); // Enable CORS for all routes

app.use(express.json());

// application routes
app.get("/", (req, resp) => resp.send("application is up and running"));

app.use("/api", noteRoutes.routes);

const PORT = 3005;
app.listen(PORT, () => {
  console.log(`Service endpoint= http://localhost:${PORT}`);
});
