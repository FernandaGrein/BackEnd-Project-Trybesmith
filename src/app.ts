import express from 'express';
import errorMiddleware from './middlewares/error.middleware';
import productsRoutes from './routes/productsRoutes';
import userRoutes from './routes/userRoutes';
import ordersRoutes from './routes/orderRoutes';
import loginRoutes from './routes/loginRoutes';

const app = express();

app.use(express.json());
app.use(productsRoutes);
app.use(userRoutes);
app.use(ordersRoutes);
app.use(loginRoutes);
app.use(errorMiddleware);

export default app;
