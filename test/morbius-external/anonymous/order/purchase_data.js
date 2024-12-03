import 'dotenv/config';
import request from 'supertest';
import { expect } from 'chai';
import { generateRandomUUID , fetchMorbiusReferenceNo , fetchLatestTransaction, GetHorusTransactionIDfromOrderID } from '../../../functions.js';

const apiRequest = request(process.env.HOST);
const apiRequestHorus = request(process.env.HORUS_HOST);

describe("PURCHASE on Pejuang : Data", function() { //test scenario
    it("Pending Purchase : Data", async function() {
      try {
        const response = await apiRequest
          .post("/v1/orders/purchase")
          .set("X-Merchant-Code", "pejuang")
          .send({
            product_code: process.env.productData,
            account_no: "087877144694",
            purchase_ref: generateRandomUUID(),
            reference_no: "",
            server_id: "",
            username: "",
            platform: "",
            email: "deta@bdn.id",
            payment_method_id: 1, //QRIS
            split_payment: false
          });
  
        console.log("status", response.body.status);
        console.log("message", response.body.message);
        //console.log(response.body);
  
        // Assert
        expect(response.status).to.eql(200);
        expect(response.body).to.have.property("status");
        expect(response.body.status).to.eql(true);
        expect(response.body).to.have.property("message");
        expect(response.body.message).to.eql('success');
  
      } catch (error) {
        console.error("Error during update:", error.message);
        throw error;
      }
    });
  });


describe("PURCHASE on Gamefinity : Data", function() { //test scenario
this.timeout(100000);
  it("Pending Purchase : Data", async function() {
    try {
      const response = await apiRequest
        .post("/v1/orders/purchase")
        .set("X-Merchant-Code", "gamefinity")
        .send({
          product_code: process.env.productData,
          account_no: "087877144694",
          purchase_ref: generateRandomUUID(),
          reference_no: "",
          server_id: "",
          username: "",
          platform: "",
          email: "deta@bdn.id",
          payment_method_id: 1, //QRIS
          split_payment: false
        });

      console.log("status", response.body.status);
      console.log("message", response.body.message);
      //console.log(response.body);

      // Assert
      expect(response.status).to.eql(200);
      expect(response.body).to.have.property("status");
      expect(response.body.status).to.eql(true);
      expect(response.body).to.have.property("message");
      expect(response.body.message).to.eql('success');

    } catch (error) {
      console.error("Error during update:", error.message);
      throw error;
    }
  });

  it("Success Normal Payment : QRIS", async function() {
    try {
    const purchase = await apiRequest.post("/v1/orders/purchase").set("X-Merchant-Code", "gamefinity").send({
        product_code: process.env.productData,
        account_no: "087877144694",
        purchase_ref: generateRandomUUID(),
        reference_no: "",
        server_id: "",
        username: "",
        platform: "",
        email: "deta@bdn.id",
        payment_method_id: 1, //QRIS
        split_payment: false
    });

    // Assert
    expect(purchase.body.status).to.eql(true);
    expect(purchase.body.data.order_data.payment_method).to.eql('QRIS');
    expect(purchase.body.data.order_data.split_payment).to.eql(false);
    expect(purchase.body.data.order_data.coin_amount).to.eql(0);

    } catch (error) {
      console.error("Error during update:", error.message);
      throw error;
    }
  });

  it("Success Normal Payment : Virtual Account BCA", async function() {
    try {
    const purchase = await apiRequest.post("/v1/orders/purchase").set("X-Merchant-Code", "gamefinity").send({
        product_code: process.env.productData,
        account_no: "087877144694",
        purchase_ref: generateRandomUUID(),
        reference_no: "",
        server_id: "",
        username: "",
        platform: "",
        email: "deta@bdn.id",
        payment_method_id: 4, //Vitual Account BCA
        split_payment: false
    });

    // Assert
    expect(purchase.body.status).to.eql(true);
    expect(purchase.body.data.order_data.payment_method).to.eql('Virtual Account BCA');
    expect(purchase.body.data.order_data.split_payment).to.eql(false);
    expect(purchase.body.data.order_data.coin_amount).to.eql(0);

    } catch (error) {
      console.error("Error during update:", error.message);
      throw error;
    }
  });

  it("Success Normal Payment : Bank Transfer BCA", async function() {
    try {
    const purchase = await apiRequest.post("/v1/orders/purchase").set("X-Merchant-Code", "gamefinity").send({
        product_code: process.env.productData,
        account_no: "087877144694",
        purchase_ref: generateRandomUUID(),
        reference_no: "",
        server_id: "",
        username: "",
        platform: "",
        email: "deta@bdn.id",
        payment_method_id: 5, //Bank Transfer BCA
        split_payment: false
    });

    // Assert
    expect(purchase.body.status).to.eql(true);
    expect(purchase.body.data.order_data.payment_method).to.eql('Bank Transfer BCA');
    expect(purchase.body.data.order_data.split_payment).to.eql(false);
    expect(purchase.body.data.order_data.coin_amount).to.eql(0);

    } catch (error) {
      console.error("Error during update:", error.message);
      throw error;
    }
  });


  //for user login
  //success normal payment : QRIS
  //success Split payment : Coin + QRIS
  //success Full Coin Payment : Coin
  //success purchase payment success and transaction success
  //success purchase game topup
  //success purchase mobile
  //success purchase voucher

});
