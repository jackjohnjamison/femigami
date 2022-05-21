const express = require('express');

const router = express.Router();

router.get('/home', async (_req, res) => {
  res.status(200).json({ message: 'Femigami' });
});

module.exports = router;
