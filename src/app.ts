import Express from "express";
import path from "path";

import { Person } from "./Person";

const app = Express();

app.set('views', path.join(__dirname, '/views'));
app.use(Express.static(__dirname + '/public'));


app.get("/", (req, res) => {
    const content = "Hello World";
    res.render("./index.ejs", {message:content});
});

app.get("/page1", (req, res) => {
    const p = new Person(1, "John Doe");
    res.render("./page1.ejs", {person:p});
});

app.get("/page2", (req, res) => {
    const nums: number[] = [];
    nums.push(111);
    nums.push(222);
    nums.push(333);
    res.render("./page2.ejs", {ary:nums});
});

app.listen(3000, () => {
    console.log("listening on port 3000!");
});
