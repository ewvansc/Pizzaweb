
const express = require("express");
const accountsRoutes = require("./routes/routes");

const app = express();
const port = 5001;

app.use (express.json());
const cors = require("cors");
app.use(cors({
origin: '*'
}));

app.get("/", (req, res)=> {
res.send("who will the super bowl??")
})

app.use("/accounts", accountsRoutes);

app.listen(port, () => console.log('running on ${port}'))