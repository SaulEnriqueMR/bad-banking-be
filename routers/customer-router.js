import {Router} from "express";
import CustomerController from "../controllers/customer-controller.js";

const CustomerRouter = Router();
CustomerRouter.get('/customers/', CustomerController.find);
CustomerRouter.post('/customers/', CustomerController.save);

export { CustomerRouter };