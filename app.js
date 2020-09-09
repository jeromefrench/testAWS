const express = require('express');
const app = express ();

app.get('/', (req, res) => {
  console.log("on a une request");
  res.send("Chat Lu Laeti Chat Lu Lateti");
});

const PORT = process.env.PORT || 8083
console.log("************************************************************************************************");
console.log("App listening on PORT", PORT);
app.listen(PORT, () => {
  console.log("Chat Lu Laeti Chat Lu Lateti");
});


