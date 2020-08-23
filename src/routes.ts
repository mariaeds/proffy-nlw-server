import express from 'express';
import ClassesControllers from './controllers/ClassesControllers';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();
const classesControllers = new ClassesControllers();
const connectionsController = new   ConnectionsController();

routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

routes.post('/connections',connectionsController.create)
routes.get('/connections',connectionsController.index)

export default routes;