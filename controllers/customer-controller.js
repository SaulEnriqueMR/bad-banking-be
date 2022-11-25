import {CustomerService} from "../dal/services/customer-service.js";

const CustomerController = {
  find: async (req, res, next) => {
    try {
      const posts = await CustomerService.find({ ...req.query });
      res.json(posts);
    } catch (error) {
      error.msg = "Failed to get customers";
      next(error);
    }
  },

  save: async (req, res, next) => {
    try {
      const post = await CustomerService.save(req.body);
      res.json(post);
    } catch (error) {
      error.msg = "Failed to create customer";
      next(error);
    }
  },
}

export default CustomerController;
