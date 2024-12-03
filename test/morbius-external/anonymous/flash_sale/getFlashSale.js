import { config as dotenvConfig } from "dotenv";
import { expect, should } from "chai";
import supertest from "supertest";

dotenvConfig();
should();

describe("GET Flash Sale on Merchant Gamefinity", function() {
    it("Success Get Flash Sale", async function() {
        try {
            const request = supertest(process.env.HOST)
                .get("/v1/operators")
                .set("X-Merchant-Code", "Gamefinity");

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

describe("GET Flash Sale on Merchant Pejuang", function() {
    it("Success Get Flash Sale", async function() {
        try {
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