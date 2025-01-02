import { config as dotenvConfig } from "dotenv";
import { expect, should } from "chai";
import supertest from "supertest";

dotenvConfig();
should();

describe("GET Privacy Policy on Merchant PEJUANG", function() {
    it("Success Get Privacy Policy", async function() {
        try {
            this.timeout(10000);
            const key = "config:privacy_policy";
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

describe("GET Privacy Policy on Merchant GAMEFINITY", function() {
    it("Success Get Privacy Policy", async function() {
        try {
            this.timeout(10000);
            const key = "config:privacy_policy";
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