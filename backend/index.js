const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://mongo:QBntEJxavG!rCu5@cluster0.1uysb.mongodb.net/GIMWORK-INTERVIEW?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

app.use(cors());
app.use(bodyParser.json());

app.get("/bloodbags", (req, res) => {
  client.connect(err => {
    if (err) throw err;
    var dbo = client.db("GIMWORK-INTERVIEW");
    //Find all documents in the customers collection:
    dbo.collection("French Bloodbags").find({}).toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
      client.close();
    });
  });
});



app.listen(9001, () => {
  console.log("Node server started on port 9001.");
});
