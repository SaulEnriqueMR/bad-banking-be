import {AccountTransactionSchema} from "../schemas/account-transaction-schema";
import {model} from "mongoose";

export const AccountTransaction = model("AccountTransaction", AccountTransactionSchema);
