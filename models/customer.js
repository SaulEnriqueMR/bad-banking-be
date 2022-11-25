import {CustomerSchema} from "../schemas/customer-schema";
import {model} from "mongoose";

export const Customer = model("Customer", CustomerSchema);
