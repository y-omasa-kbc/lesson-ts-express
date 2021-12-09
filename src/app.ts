import Express from "express";
import path from "path";

const app = Express();

app.set('views', path.join(__dirname, '/views'));
app.use(Express.static(__dirname + '/public'));


app.get("/", (req, res) => {
    res.render("./index.ejs", {});
});

app.get("/page1", (req, res) => {
    res.render("./page1.ejs", {});
});

app.listen(3000, () => {
    console.log("listening on port 3000!");
});
