const express = require("express");
const app = express();
const user = require("./routes/user");

app.use("/api/users", user);

app.listen(3000, () => console.log(`SERVER IS RUNNING`));
