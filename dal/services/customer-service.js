import {Customer} from "../models/customer.js";

export const CustomerService = {

  find: () => Customer.find({}),

  save: async (customerData) => {
    const customer = new Customer({ ...customerData });
    customer.customerId = String(new Date().getTime());
    await customer.save();
    return customer;
  },
  
  makeTransaction: async (transactionData) => {
    let originAccount = await Customer.findOne({customerId: transactionData.originCustomer});
    if (originAccount === null) return null;
    
    transactionData.balanceBefore = originAccount.balance;
  
    if (transactionData.type === "deposit") {
      transactionData.balanceAfter = originAccount.balance + transactionData.amount;
    }
    else if (transactionData.type === "withdraw" || transactionData.type === "transfer") {
      transactionData.balanceAfter = originAccount.balance - transactionData.amount;
    }
    if (transactionData.type === "transfer") {
      const destinationCustomer = await Customer.findOne({customerId: transactionData.destinationCustomer});
      if (destinationCustomer === null) return null;
      
      const destinationTransactionData = {...transactionData};
      destinationTransactionData.balanceBefore = destinationCustomer.balance;
      destinationTransactionData.balanceAfter = destinationCustomer.balance + transactionData.amount;

      destinationCustomer.balance = destinationTransactionData.balanceAfter;
      destinationCustomer.transactions.push(destinationTransactionData);
      destinationCustomer.save();
    }
  
    originAccount.balance = transactionData.balanceAfter;
    originAccount.transactions.push(transactionData);
    await originAccount.save();
  
    return transactionData;
  },
};