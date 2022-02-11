const express = require("express");
const cors = require("cors");
const ctrllr = require('./controller');
const app = express();




app.use(cors());
app.use(express.json()); // When we want to be able to accept JSON.
// Endpoints------------------------------------------------------//
// You know, I realized too late but, I coulda just done queries and Id's for this but, ya know, it does what it needs to do, I suppose...
app.get("/api/compliment", ctrllr.getCompliment);
app.get("/api/fortune", ctrllr.getFortune);
app.get(`/api/message/value`, ctrllr.getMsg)

app.post("/api/message", ctrllr.createMessage)
app.put("/api/message/update", ctrllr.updateMsg)

app.delete("/api/message/delete", ctrllr.delMsg)


app.listen(4000, () => console.log("Server running on 4000"));