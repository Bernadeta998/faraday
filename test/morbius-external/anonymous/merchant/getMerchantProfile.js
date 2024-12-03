import { config as dotenvConfig } from "dotenv";
import { expect, should } from "chai";
import supertest from "supertest";

dotenvConfig();
should();

describe("GET MERCHANT PROFILE for GAMEFINITY", function() {
    it("Success Get Gamefinity Merchant Profile", async function() {
        try {
            const request = supertest(process.env.HOST)
                .get("/v1/merchants")
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

describe("GET MERCHANT PROFILE for PEJUANG", function() {
    it("Success Get Pejuang Merchant Profile", async function() {
        try {
            const request = supertest(process.env.HOST)
                .get("/v1/merchants")
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
