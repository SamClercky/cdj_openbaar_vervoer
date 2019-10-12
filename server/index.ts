require("./includeenv");
import express from "express";
import path from "path";
import bodyparser from "body-parser";

const app = express();
const port = process.env.PORT as unknown as number;

app.use("/", express.static(path.join(__dirname, "..", "build")));
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

app.get("/pages/*", (req, res) => {
    console.log(`SPA redirect van ${req.url} naar /build/index.html`);
    res.sendFile(path.join(__dirname, "..", "build", "index.html"))
});

app.listen(port, () => console.log(`De website is aan het luisteren op poort ${port}`));