import { Router } from 'express';
import { serverAdapter } from "./queues/queueMonitor";
import messageRoutes from './routes/messageRoutes';
import swaggerUi from 'swagger-ui-express';
import { specs } from './config/swagger';

const routes = Router();

routes.use('/message', messageRoutes);
routes.use("/admin/queues", serverAdapter.getRouter());
routes.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

export default routes;


