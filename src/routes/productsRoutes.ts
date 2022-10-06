import { Router } from 'express';
import ProductController from '../controllers/productsControllers';

const router = Router();
const productController = new ProductController();

router.post('/products', productController.create);

export default router;