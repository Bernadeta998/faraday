import pkg from 'uuid';
import dotenv from 'dotenv';
import request from 'supertest';
dotenv.config();
const apiRequest = request(process.env.HOST);
const apiRequestHorus = request(process.env.HORUS_HOST);
const { v4: uuidv4 } = pkg;

export function generateRandomUUID() {
    return uuidv4();
}

export async function fetchMorbiusReferenceNo(token) {
    try {
      const transaction = await apiRequest.get("/v1/intl/transactions")
        .set("Authorization", `Bearer ${token}`);
  
      if (transaction.status === 200 && transaction.body.status && transaction.body.data.length > 0) {
        const MorbiuslatestTransaction = transaction.body.data[0].reference_no;
        console.log("Latest Transaction:", MorbiuslatestTransaction);
        return MorbiuslatestTransaction;
      } else {
        console.log("No transactions found or request failed.");
        return null;
      }
    } catch (error) {
      console.error("Error fetching transaction:", error.message);
      return null;
    }
  }

export async function GetHorusTransactionIDfromOrderID(token,morbiusRefNo) {
   try{
    const getHorusTransaction = await apiRequestHorus.get("/v1/intl/transaction")
    .set("Authorization", `Bearer ${token}`);
    if (getHorusTransaction.status === 200 && getHorusTransaction.body.status && getHorusTransaction.body.data.length > 0) {
      // Search for the transaction where the Horus Order ID matches the Morbius reference_no
      const matchingTransaction = getHorusTransaction.body.data.find(transaction => transaction.order_id === morbiusRefNo);

      if (matchingTransaction) {
        const horusTransactionId = matchingTransaction.transaction_id; // Assuming `transaction_id` is the field you're looking for
        console.log("Matching Horus Transaction ID found:", horusTransactionId);
        return horusTransactionId;
      } else {
        console.log("No matching Horus transaction found for the given Morbius reference_no.");
        return null;
      }
    } else {
      console.log("Failed to fetch Horus transactions or no data found.");
      return null;
    }
  } catch (error) {
    console.error("Error fetching Horus transaction:", error.message);
    return null;
  }
}

  export async function fetchLatestTransaction(token) {
    try {
      const transaction = await apiRequest.get("/v1/intl/transactions")
        .set("Authorization", `Bearer ${token}`);
  
      if (transaction.status === 200 && transaction.body.status && transaction.body.data.length > 0) {
        const latestTransaction = transaction.body.data[0];
        console.log("Latest Transaction:", latestTransaction);
        return latestTransaction;
      } else {
        console.log("No transactions found or request failed.");
        return null;
      }
    } catch (error) {
      console.error("Error fetching transaction:", error.message);
      return null;
    }
  }
