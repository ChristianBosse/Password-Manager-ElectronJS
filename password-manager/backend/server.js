const express = require("express");
const writePasswordRoutes = require("./Routes/writePasswordRoutes.js");
const readDataRoutes = require("./Routes/readDataRoutes.js");
const readPasswordRoutes = require("./Routes/readPasswordRoutes.js");
const updatePasswordRoutes = require("./Routes/updatePasswordRoutes.js");
const app = express();
const port = 3000;

//**** MAKE A PASSWORD GENERATOR ****//

app.get("/", (req, res) => res.send("Hello World!"));

//write encrypted password to pm.json
app.use("/write", writePasswordRoutes);

//read password from pm.json
app.use("/read", readDataRoutes);

//decrypt password from pm.json
app.use("/decrypt", readPasswordRoutes);

//update password in pm.json
app.use("/update", updatePasswordRoutes);

app.listen(port, () =>
    console.log(`Password Manager app listening on port ${port}!`)
);
