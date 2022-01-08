import Express from "express";
import path from "path";

import { Person } from "./Person";

const app = Express();

app.set('views', path.join(__dirname, '/views'));
app.use(Express.static(__dirname + '/public'));

app.use(Express.urlencoded({extended: true}));  //POSTで送られたデータの受け取りに必要

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

app.get("/page3", (req, res) => { // 普通にブラウザでアクセスされた場合  
    res.render("./page3in.ejs");
});

app.post("/page3", (req, res) => { // フォームからPOSTメソッドでデータ送信された場合
    const message = req.body.message;   
    res.render("./page3out.ejs", {message:message});
});

app.listen(3000, () => {
    console.log("listening on port 3000!");
});
