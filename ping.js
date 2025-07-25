const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/ping', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
