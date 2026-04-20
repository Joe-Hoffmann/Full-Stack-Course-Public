import express from "express";
const app = express();
const port = 3000;


app.get("/", (req, res) => {
    const d = new Date();
    let day = d.getDay();
    let today = "a weekday";
    let toDo = "work hard";
    if (day == 0 || day == 6) {
        today = "the weekend";
        toDo = "have fun";
    }
    res.render("index.ejs", {dayType: today, whatDo: toDo});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});