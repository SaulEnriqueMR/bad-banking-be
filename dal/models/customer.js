import {CustomerSchema} from "../schemas/customer-schema.js";
import {model} from "mongoose";

export const Customer = model("customers", CustomerSchema);
