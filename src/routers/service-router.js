const { Router } = require('express');
const { ServiceService } = require('../services/service-service');

const serviceRouter = Router();
const serviceService = new ServiceService()

serviceRouter.get('/', async (req, res) => {
    const result = await serviceService.getAll();
    res.send(result);
});

serviceRouter.get('/:id', async (req, res) => {
    const result = await serviceService.get(req);
    res.send(result);
});

serviceRouter.post('/', async (req, res) => {
    const result = await serviceService.insert(req);
    res.send(result);
});

module.exports = serviceRouter;