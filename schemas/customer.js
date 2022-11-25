import {Schema} from "mongoose";

export const Customer = new Schema(
    {
      email: { type: String, required: true },
      name: { type: String, required: true },
      balance: { type: Number, required: true, default: 0.00 },
    },
    { timestamps: true }
)