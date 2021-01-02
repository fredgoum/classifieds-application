const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');

const stuffCtrl = require('../controllers/stuff');

/* CRUD Methods */
router.post('/', auth, stuffCtrl.createThing);
router.get('/', auth, stuffCtrl.getAllThing);
router.get('/:id', auth, stuffCtrl.getOneThing);
router.put('/:id', auth, stuffCtrl.modifyThing);
router.delete('/:id', auth, stuffCtrl.deleteThing);

module.exports = router;
