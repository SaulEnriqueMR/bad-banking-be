import {Schema} from "mongoose";

export const Transaction = new Schema(
    {
      type: { type: String, required: true },
      amount: { type: Number, required: true },
      balanceBefore: { type: Number, required: true },
      balanceAfter: { type: Number, required: true }
    },
    {timestamps: true}
)