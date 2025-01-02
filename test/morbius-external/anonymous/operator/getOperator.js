import { config as dotenvConfig } from "dotenv";
import { expect, should } from "chai";
import supertest from "supertest";

dotenvConfig();
should();

describe("GET OPERATOR on Merchant PEJUANG", function() {
    it("Success Get Operator", async function() {
        try {
            this.timeout(10000);
            const request = supertest(process.env.HOST)
                .get("/v1/operators")
                .set("X-Merchant-Code", "pejuang");

            const response = await request;

            // Assert
            expect(response.status).to.eql(200);
            expect(response.body.message).to.eql("success");
            console.log(response.status);
            console.log(response.body.message);

        } catch (error) {
            console.error("Error during update:", error.message);
            throw error;
        }
    });

});

describe("GET OPERATOR on Merchant GAMEFINITY", function() {
    it("Success Get Operator", async function() {
        try {
            this.timeout(10000);
            const request = supertest(process.env.HOST)
                .get("/v1/operators")
                .set("X-Merchant-Code", "gamefinity");

            const response = await request;

            // Assert
            expect(response.status).to.eql(200);
            expect(response.body.message).to.eql("success");
            console.log(response.status);
            console.log(response.body.message);

        } catch (error) {
            console.error("Error during update:", error.message);
            throw error;
        }
    });

    it("Success Get Operator by ID ", async function() {
        try {
            const id = 1
            const request = supertest(process.env.HOST)
                .get(`/v1/operators?id=${id}`)
                .set("X-Merchant-Code", "gamefinity");

            const response = await request;

            // Assert
            expect(response.status).to.eql(200);
            expect(response.body.message).to.eql("success");
            
    
            const operator = response.body.data[0];
            const operatorId = operator.id;
            const operatorLabel = operator.label;
            console.log("Status:", response.body.status)
            console.log("Message:", response.body.message)
            console.log("Operator ID:", operatorId);
            console.log("Operator Label:", operatorLabel);

        } catch (error) {
            console.error("Error during update:", error.message);
            throw error;
        }
    });

    it("Success Get Operator by code", async function() {
        try {
            const code = "FIFA"
            const request = supertest(process.env.HOST)
                .get(`/v1/operators?code=${code}`)
                .set("X-Merchant-Code", "gamefinity");

            const response = await request;

            // Assert
            expect(response.status).to.eql(200);
            expect(response.body.message).to.eql("success");
            
    
            const operator = response.body.data[0];
            const operatorId = operator.id;
            const operatorLabel = operator.label;
            const operatorCode = operator.code;
            console.log("Status:", response.body.status)
            console.log("Message:", response.body.message)
            console.log("Operator ID:", operatorId);
            console.log("Operator Label:", operatorLabel);
            console.log("Operator Code:", operatorCode);

        } catch (error) {
            console.error("Error during update:", error.message);
            throw error;
        }
    });

    it("Success Get Operator by product type ID", async function() {
        try {
            const type_id = 3
            const request = supertest(process.env.HOST)
                .get(`/v1/operators?product_type_id=${type_id}`)
                .set("X-Merchant-Code", "gamefinity");

            const response = await request;

            // Assert
            expect(response.status).to.eql(200);
            expect(response.body.message).to.eql("success");
            
    
            const operator = response.body.data[0];
            const operatorId = operator.id;
            const operatorLabel = operator.label;
            const operatorCode = operator.code;
            const operatorProductType = operator.product_type.id
            const operatorProductTypeName = operator.product_type.label
            console.log("Status:", response.body.status)
            console.log("Message:", response.body.message)
            console.log("Operator ID:", operatorId);
            console.log("Operator Label:", operatorLabel);
            console.log("Operator Code:", operatorCode);
            console.log("Product Type ID:", operatorProductType);
            console.log("Product Type Name:", operatorProductTypeName);

        } catch (error) {
            console.error("Error during update:", error.message);
            throw error;
        }
    });

    it("Failed Get Operator (Empty Data)", async function() {
        try {
            const id = 100
            const request = supertest(process.env.HOST)
                .get(`/v1/operators?id=${id}`)
                .set("X-Merchant-Code", "gamefinity");

            const response = await request;

            // Assert
            expect(response.status).to.eql(200);
            expect(response.body.message).to.eql("success");
            expect(response.body.data).to.eql([]);

            console.log(response.body)
            console.log("Response Status:", response.status);

        } catch (error) {
            console.error("Error during update:", error.message);
            throw error;
        }
    });


});
