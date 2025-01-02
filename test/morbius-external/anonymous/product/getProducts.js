import { config as dotenvConfig } from "dotenv";
import { expect, should } from "chai";
import supertest from "supertest";

dotenvConfig();
should();

describe("GET PRODUCT on Merchant GAMEFINITY", function() {
    it("Success Get All Product", async function() {
        try {
            this.timeout(10000);
            const request = supertest(process.env.HOST)
                .get("/v1/products/:operator_id")
                .set("X-Merchant-Code", "gamefinity");

            const response = await request;

            // Assert
            expect(response.status).to.eql(200);
            expect(response.body.message).to.eql("success");
            console.log(response.status);
            console.log(response.body);

        } catch (error) {
            console.error("Error during update:", error.message);
            throw error;
        }
    });

    it("Success Get Product by Operator ID", async function() {
        try {
            this.timeout(10000);
            const id = 1;
            const request = supertest(process.env.HOST)
                .get(`/v1/products/${id}`)
                .set("X-Merchant-Code", "gamefinity");

            const response = await request;

            // Assert
            expect(response.status).to.eql(200);
            expect(response.body.message).to.eql("success");
            console.log(response.status);
            console.log(response.body);

        } catch (error) {
            console.error("Error during update:", error.message);
            throw error;
        }
    });

    it("Success Get Product by Product ID", async function() {
        try {
            this.timeout(10000);
            const id = 1721
            const request = supertest(process.env.HOST)
                .get(`/v1/products/:operator_id?id=${id}`)
                .set("X-Merchant-Code", "gamefinity");

            const response = await request;

            // Assert
            expect(response.status).to.eql(200);
            expect(response.body.message).to.eql("success");
            console.log(response.status);
            console.log(response.body);

        } catch (error) {
            console.error("Error during update:", error.message);
            throw error;
        }
    });



    it("Failed Get Product by Product ID and Operator ID", async function() {
        try {
            this.timeout(10000);
            const id = 1721
            const request = supertest(process.env.HOST)
                .get(`/v1/products/${id}?id=${id}`)
                .set("X-Merchant-Code", "gamefinity");

            const response = await request;

            // Assert
            expect(response.status).to.eql(200);
            expect(response.body.message).to.eql("success");
            expect(response.body.data).to.eql([]);
            console.log(response.status);
            console.log(response.body);

        } catch (error) {
            console.error("Error during update:", error.message);
            throw error;
        }
    });

});
