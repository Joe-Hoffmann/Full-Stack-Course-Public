import express from "express"
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/submit", (req, res) =>{
    const title = req.body.title;
    const author = req.body.author;
    const date = req.body.date;
    const blogText = req.body.blogText;
    res.render("index.ejs", {title : title, author: author, date: date, blogText: blogText});
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});