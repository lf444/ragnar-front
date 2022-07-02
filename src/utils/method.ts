import { toast } from "react-toastify";

export function appLogger(
  tag: string,
  message: string,
  ...object: any[]
): void {
  const DEBUG = process.env.NODE_ENV === "development";
  if (DEBUG) {
    // eslint-disable-next-line no-console
    console.group();
    // eslint-disable-next-line no-console
    console.log(`[${tag.toUpperCase()}] ${message}`, ...object);
    // eslint-disable-next-line no-console
    console.groupEnd();
  }
}

export const errorToast = (errorCode: string) => {
  switch (errorCode) {
    case "CALL_EXCEPTION":
      toast.error("Error - Please check your network.");
      break;

    case "INSUFFICIENT_FUNDS":
      toast.error(
        "Error - The sending account does not have enough Avax to cover the cost of the transaction."
      );
      break;

    case "NUMERIC_FAULT":
      toast.error("Error - Illegal operation .");
      break;

    case "TRANSACTION_REPLACED":
      toast.error("Error - Ttransaction which has been replaced by another.");
      break;

    case "UNPREDICTABLE_GAS_LIMIT":
      toast.error("Error - Can't estimate the gas requirements");
      break;
    case "TX_ERRROR":
      toast.error("The transaction was rejected");
      break;

    default:
      toast.error("Unknown error.");
      break;
  }
};

export const successToast = (successCode: string) => {
  switch (successCode) {
    case "TX_SUCCESS":
      toast.success("The transaction was confirmed.");
      break;
    default:
      toast.success("SUCCES");
      break;
  }
};
