import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/profilecontactDB")
.then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));


// Define a schema and model for the contact form data
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Contact = mongoose.model("Contact", contactSchema);

// API endpoint 
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ message: "Message submitted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error submitting message!" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
