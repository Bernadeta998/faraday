import { config as dotenvConfig } from "dotenv";
import { expect, should } from "chai";
import supertest from "supertest";

dotenvConfig();
should();

describe("GET OPERATOR", function() {
    it("Success Get Operator", async function() {
        try {
            this.timeout(10000);
            const request = supertest(process.env.HOST)
                .get("/v1/operators")
                .set("Authorization", `Bearer ${process.env.TOKEN}`);

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
            this.timeout(10000);
            const id = 1
            const request = supertest(process.env.HOST)
                .get(`/v1/operators?id=${id}`)
                .set("Authorization", `Bearer ${process.env.TOKEN}`);

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
            this.timeout(10000);
            const code = "FIFA"
            const request = supertest(process.env.HOST)
                .get(`/v1/operators?code=${code}`)
                .set("Authorization", `Bearer ${process.env.TOKEN}`);

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
            this.timeout(10000);
            const type_id = 3
            const request = supertest(process.env.HOST)
                .get(`/v1/operators?product_type_id=${type_id}`)
                .set("Authorization", `Bearer ${process.env.TOKEN}`);

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
    it("Failed Get Operator (Product id not found)", async function() {
        try {
            this.timeout(10000);
            const id = "HAHAHA"
            const request = supertest(process.env.HOST)
                .get(`/v1/operators?id=${id}`)
                .set("Authorization", `Bearer ${process.env.TOKEN}`);

            const response = await request;

            // Assert
            response.status.should.not.equal(200);
            expect(response.body.message).to.eql("false");
            
            console.log("Response Status:", response.status);

        } catch (error) {
            console.error("Error during update:", error.message);
            throw error;
        }
    });
    it("Failed Get Operator (Product code not found )", async function() {
        try {
            this.timeout(10000);
            const code = "HAHAHA"
            const request = supertest(process.env.HOST)
                .get(`/v1/operators?code=${code}`)
                .set("Authorization", `Bearer ${process.env.TOKEN}`);

            const response = await request;

            // Assert
            response.status.should.not.equal(200);
            expect(response.body.message).to.eql("false");
            response.body.data.should.equal(empty)
            
            console.log("Response Status:", response.status);

        } catch (error) {
            console.error("Error during update:", error.message);
            throw error;
        }
    });
});
