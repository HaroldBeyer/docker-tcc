const { Router } = require('express');
const { ScheduleService } = require('../services/schedule-service');

const scheduleRouter = Router();
const scheduleService = new ScheduleService();

scheduleRouter.get('/', async (req, res) => {
    const result = await scheduleService.getAll()
    res.json(result);
});

scheduleRouter.get('/:id', async (req, res) => {
    const result = await scheduleService.get(req)
    res.json(result);
});

scheduleRouter.post('/', async (req, res) => {
    const result = await scheduleService.insert(req)
    res.json(result);
});

module.exports = scheduleRouter;