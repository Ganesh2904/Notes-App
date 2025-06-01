const express = require("express");
const cors = require("cors");

const app = express();

let storage = [
    { id: 1, text: "string" },
    { id: 2, text: "string2" }
];

app.use(cors({
    origin: "http://localhost:5173"
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/notes", (req, res) => {
    return res.json(storage);
})

app.post("/notes", (req, res) => {
    const { text, id } = req.body;
    if (!text) return res.status(400).json("error");
    storage.push({ id: id, text: text });
    return res.json("success");
})

app.delete("/notes", (req, res) => {
    const id = req.body.id;
    if (!id) return res.status(400).json("error");

    const exists = storage.find(note => note.id == id);
    if (!exists) return res.status(404).json("error");

    storage = storage.filter(note => note.id != id);
    return res.json("success");
})

app.listen(5500, () => console.log("server started!"));