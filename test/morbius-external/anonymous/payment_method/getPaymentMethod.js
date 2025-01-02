import { config as dotenvConfig } from "dotenv";
import { expect, should } from "chai";
import supertest from "supertest";

dotenvConfig();
should();

describe("GET PAYMENT METHOD for GAMEFINITY", function() {
    it("Success Get Payment Method", async function() {
        try {
            this.timeout(10000);
            const request = supertest(process.env.HOST)
                .get("/v1/payment-methods")
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
});

describe("GET PAYMENT METHOD for PEJUANG", function() {
    it("Success Get Payment Method", async function() {
        try {
            this.timeout(10000);
            const request = supertest(process.env.HOST)
                .get("/v1/payment-methods")
                .set("X-Merchant-Code", "pejuang");

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
});
