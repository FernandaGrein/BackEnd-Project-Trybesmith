import { Router } from 'express';
import ProductController from '../controllers/productsControllers';
import productsValidation from '../middlewares/productsValidation';

const router = Router();
const productController = new ProductController();

router.post('/products', productsValidation, productController.create);
router.get('/products', productController.getAllProducts);

export default router;