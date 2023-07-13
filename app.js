const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const firstName = req.body.fname;
  const lastName = req.body.lname;
  const email = req.body.email;

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  };

  const jsonData = JSON.stringify(data);
  const url = "https://us10.api.mailchimp.com/3.0/lists/your-mailchimp-list-id";
  const options = {
    headers: {
      Authorization: "Basic " + Buffer.from("your-mailchimp-api-key").toString("base64"),
    },
  };

  axios
    .post(url, jsonData, options)
    .then(function (response) {
      console.log(response.data);
      res.sendFile(__dirname + "/success.html");
    })
    .catch(function (error) {
      console.error(error);
      res.sendFile(__dirname + "/failure.html");
    });
});

app.listen(process.env.PORT || 3000, function () {
  console.log("The server has started at 3000");
});



