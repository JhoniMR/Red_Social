const express = require('express');
const router = express.Router();

const user = require('../methods/users');

router.post('/create', user.Create);
router.put('/update', user.Update);
router.delete('/delete', user.Delete);




module.exports = router;