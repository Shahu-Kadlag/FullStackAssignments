const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Student Model
const Student = mongoose.model("Student", {
  name: String,
  rollNo: Number,
  department: String,
  marks: Number
});

// CREATE
app.post("/students", async (req, res) => {
  const student = await Student.create(req.body);
  res.json(student);
});

// READ
app.get("/students", async (req, res) => {
  res.json(await Student.find());
});

// UPDATE
app.put("/students/:id", async (req, res) => {
  res.json(await Student.findByIdAndUpdate(
    req.params.id, req.body, { new: true }
  ));
});

// DELETE
app.delete("/students/:id", async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ message: "Student deleted" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});