const express = require('express');
const Datastore = require('nedb');
const path = require('path');
const Joi = require('joi');

const router = express.Router();

db = new Datastore({ filename: path.join(__dirname, '..', 'data', 'items.db'), autoload: true });

const itemSchema = Joi.object().keys({
    userId: Joi.string().required(),
    name: Joi.string()
        .min(3)
        .max(30)
        .required(),
    description: Joi.string().max(500),
    image: Joi.string()
        .alphanum()
        .max(250),
    email: Joi.string().email({ minDomainAtoms: 2 }),
    price: Joi.number(),
});

const authFn = (req, res, next) => {
    // if (!req.isAuthenticated) {
    //     return res.sendStatus(403);
    // }
    next();
};

router.get('/', (req, res, next) => {
    const { q, userId } = req.query;
    if (userId) {
        db.find()
    }
    res.send('List of all items - not possible :)');
});

router.post('/', authFn, async (req, res, next) => {
    const { body } = req;
    // TODO: Validate body object - see
    const { userId } = req;

    const { error, value } = Joi.validate({userId, ...body}, itemSchema);
    if (error) {
        console.error(error);

        return res.status(400).send(error.message);
    }
    // const dbRes = await insert(value);
    db.insert(value, (err, dbRes) => {
        if (err) {
            return res.status(500).send(err);
        }
    
        res.status(201).send(dbRes);
    })
    
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    db.findOne({ _id: id }, (err, item) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send(item);
    });
});



module.exports = router;
