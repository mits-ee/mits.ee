const express = require('express');

const router = express.Router();

router.post('/calculate-result', (req, res) => {
  res.json({
    name: 'Internal server error',
    image: 'media/error.jpg',
    imagePosition: 'center',
    description: 'Tegelt on päris vastuse arvutamine lihtsalt peidus! ;)',
  });
});

module.exports = router;
