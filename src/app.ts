import express from 'express';
import 'express-async-errors';
import errorMiddleware from './middlewares/error.middleware';
import productsRoutes from './routes/productsRoutes';

const app = express();

app.use(express.json());
app.use(productsRoutes);
app.use(errorMiddleware);

export default app;
