import {Schema} from "mongoose";
import {AccountTransactionSchema} from "./account-transaction-schema";

export const CustomerSchema = new Schema(
    {
      email: { type: String, required: true },
      name: { type: String, required: true },
      balance: { type: Number, required: true, default: 0.00 },
      transactions: { type: [AccountTransactionSchema], required: false, default: [] }
    },
    { timestamps: true }
)
