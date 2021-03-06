const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello World! This app uses React and Node.js with Express server." });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
