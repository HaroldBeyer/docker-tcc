const { Router } = require('express');
const { ScheduleService } = require('../services/schedule-service');

const scheduleRouter = Router();
const scheduleService = new ScheduleService();

scheduleRouter.get('/', async (req, res) => {
    res(scheduleService.getAll());
});

scheduleRouter.get('/:id', async (req, res) => {
    res.send(scheduleService.get(req));
});

scheduleRouter.post('/', async (req, res) => {
    res(scheduleService.insert(req));
});

module.exports = scheduleRouter;