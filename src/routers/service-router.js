import { Router } from "express";
import { ServiceService } from "../services/service-service";

export const serviceRouter = Router();
const serviceService = new ServiceService()

serviceRouter.get('/', async (req, res) => {
    res(serviceService.getAll());
});

serviceRouter.get('/:id', async (req, res) => {
    res(serviceService.get(req));
});

serviceRouter.post('/', async (req, res) => {
    res(serviceService.insert(req));
});
