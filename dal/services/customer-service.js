import {Customer} from "../models/customer.js";

export const CustomerService = {

  find: () => Customer.find({}),

  save: async (customerData) => {
    const customer = new Customer({ ...customerData });
    await customer.save();
    return customer;
  },
};
