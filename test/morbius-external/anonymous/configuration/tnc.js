import { config as dotenvConfig } from "dotenv";
import { expect, should } from "chai";
import supertest from "supertest";

dotenvConfig();
should();

describe("GET Term and Condition on Merchant PEJUANG", function() {
    it("Success Get Term and Condition", async function() {
        try {
            this.timeout(10000);
            const key = "config:terms_and_conditions";
            const request = supertest(process.env.HOST)
                .get(`/v1/configurations/${key}`)
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

describe("GET Term and Condition on Merchant GAMEFINITY", function() {
    it("Success Get Term and Condition", async function() {
        try {
            this.timeout(10000);
            const key = "config:terms_and_conditions";
            const request = supertest(process.env.HOST)
                .get(`/v1/configurations/${key}`)
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

});