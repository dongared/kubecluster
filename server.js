const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello from OpenShift Pod!');
});

app.listen(port, () => {
  console.log(`Web app running on http://localhost:${port}`);
});
