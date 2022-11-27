import {Schema} from "mongoose";

export const CustomerSchema = new Schema(
    {
      email: { type: String, required: true, unique: true },
      name: { type: String, required: true },
      balance: { type: Number, required: true, default: 0.00 },
      transactions: [{
            type:  { type: String, required: false },
            amount: { type: Number, required: false },
            balanceBefore: { type: Number, required: false },
            balanceAfter: { type: Number, required: false },
            originCustomer: { type: String, required: false },
            destinationCustomer: { type: String, required: false },
      }],
      customerId: { type: String, required: false }
    },
    { timestamps: true }
)
