const { Router } = require('express');
const { ServiceService } = require('../services/service-service');

const serviceRouter = Router();
const serviceService = new ServiceService()

serviceRouter.get('/', async (req, res) => {
    const result = await serviceService.getAll();
    res.send(result);
});

serviceRouter.get('/:id', async (req, res) => {
    res.send(serviceService.get(req));
});

serviceRouter.post('/', async (req, res) => {
    res(serviceService.insert(req));
});

module.exports = serviceRouter;