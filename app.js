const express = require('express');
const app = express ();

app.get('/', (req, res) => {
  console.log("on a une request");
  res.send("hello you");
});

const PORT = process.env.port || 8081
console.log("************************************************************************************************");
console.log("App listening on PORT", PORT);
app.listen(PORT, () => {
  console.log("Hello babe");
});


