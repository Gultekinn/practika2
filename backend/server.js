const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(express.json());
app.use (cors());
const PORT = 8080;

mongoose
  .connect("mongodb+srv://gultekin:gultekinn@cluster0.ez8varc.mongodb.net/")
  .then(res => {
    console.log("conected...");
  });
const cardSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
});

const UserModel = mongoose.model("cards", cardSchema);

//get
app.get("/", async (req, res) => {
  const data = await UserModel.find();
  res.send(data);
});

//post;
app.post("/", async (req, res) => {
  const newCards = new UserModel({
    ...req.body,

  });
  await newCards.save();
  res.send(newCards);
});

//delete
app.delete("/:id",async(req,res)=>{
    const {id}=req.params
    const newCards=await UserModel.findByIdAndDelete(id)
    res.send('delete')
})

app.listen(PORT, () => {
  console.log("app listen...");
});
