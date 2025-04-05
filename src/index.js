const express = require('express');
const app = express();
const PORT = 3000;

app.disable('x-powered-by')

app.get('/', (req, res) => {
  res.send('Hello SonarQube!');
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

module.exports = app