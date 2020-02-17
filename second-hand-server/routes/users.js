var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('this is the users module');
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    console.log('getting user with id: ', id);
    res.send({ id, name: 'john snow' });
});

router.post('/', (req, res) => {
    console.log('Creating user', req.body);
    res.send('ok');
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  console.log('updating user', id, req.body);

  res.send('ok');
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  console.log('Deleting user', id);
  res.send('too bad :)')
})

module.exports = router;
