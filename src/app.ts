import express from 'express';
import 'express-async-errors';
import errorMiddleware from './middlewares/error.middleware';
import productsRoutes from './routes/productsRoutes';
import userRoutes from './routes/userRoutes';
import ordersRoutes from './routes/orderRoutes';

const app = express();

app.use(express.json());
app.use(productsRoutes);
app.use(userRoutes);
app.use(ordersRoutes);
app.use(errorMiddleware);

export default app;
