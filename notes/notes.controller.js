const express = require('express');
const router = express.Router();
const noteService = require('./note.service');

// routes

router.post('/', create);
router.post('/list', searchByIds)
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;

function create(req, res, next) {
    noteService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function searchByIds(req, res, next) {
    noteService.searchByIds(req.body.id)
    .then((data) => res.json(data))
    .catch(err => next(err));
}

function update(req, res, next) {
    noteService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    noteService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}