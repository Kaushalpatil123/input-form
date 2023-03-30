const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.set("strictQuery", true);
mongoose.connect(
  "mongodb+srv://patilkaushal925:knp123@cluster0.f4ipruk.mongodb.net/notesDB"
);

//create a data schema
const formsSchema = {
  //stucture of collection (forms)
  Name: String,
  Email: String,
  Password: String,
  Address: String,
  Feedback: String,

};

const Form = mongoose.model("Form", formsSchema);

app.get("/", function (req, res) {
  //to get the index.html content on the window
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  // to get the values from the form
  let newForm = new Form({
    Name: req.body.Name,
    Email: req.body.Email,
    Password: req.body.Password,
    Address: req.body.Address,
    Feedback: req.body.Feedback,
  });
  newForm.save();
  res.redirect("/");
});

app.listen(3000, function () {
  //to set the localhost
  console.log("server is running on 3000`");
});




  

