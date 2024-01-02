const express = require("express");
const app = express();

app.get("/", (req, res) => {
        console.log("localhost:3000");
        res.send({ id: "lsj", num: 1 });
});

app.listen(3000, () => {
        console.log("server run");
});
