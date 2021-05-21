const { Router } = require('express');
const { RequestService } = require('../services/request-service');

const requestRouter = Router();
const requestService = new RequestService()

requestRouter.get('/', async (req, res) => {
    const result = await requestService.getAll();
    res.json(result);
});

requestRouter.get('/:id', async (req, res) => {
    const result = await requestService.get(req);
    res.json(result);
});

requestRouter.post('/', async (req, res) => {
    const result = await requestService.insert(req);
    res.json(result);
});

requestRouter.put('/:id/confirm', async (req, res) => {
    const result = await requestService.confirm(req);
    res.json(result);
});

requestRouter.put('/:id/cancel', async (req, res) => {
    const result = await requestService.cancel(req);
    res.json(result);
});

module.exports = requestRouter;