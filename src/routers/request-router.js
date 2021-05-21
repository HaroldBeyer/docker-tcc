const { Router } = require('express');
const { RequestService } = require('../services/request-service');

const requestRouter = Router();
const requestService = new RequestService()

requestRouter.get('/', async (req, res) => {
    res(requestService.getAll());
});

requestRouter.get('/:id', async (req, res) => {
    res(requestService.get(req));
});

requestRouter.post('/', async (req, res) => {
    res(requestService.insert(req));
});

requestRouter.put('/:id/confirm', async (req, res) => {
    res(requestService.confirm(req));
});

requestRouter.put('/:id/cancel', async (req, res) => {
    res(requestService.cancel(req));
});

module.exports = requestRouter;