import { config as dotenvConfig } from "dotenv";
import { expect, should } from "chai";
import supertest from "supertest";

dotenvConfig();
should();

describe("GET MERCHANT BANNER on Gamefinity", function() {
    it("Success Get Merchant Banner", async function() {
        try {
            const request = supertest(process.env.HOST)
                .get("/v1/merchant-banners")
                .set("X-Merchant-Code", "gamefinity");

            const response = await request;

            // Assert
            expect(response.status).to.eql(200);
            expect(response.body.message).to.eql("success");
            console.log(response.status);
            console.log(response.body.message);
            console.log(response.body);

        } catch (error) {
            console.error("Error during update:", error.message);
            throw error;
        }
    });

});

describe("GET MERCHANT BANNER on Pejuang", function() {
    it("Success Get Merchant Banner", async function() {
        try {
            const request = supertest(process.env.HOST)
                .get("/v1/merchant-banners")
                .set("X-Merchant-Code", "pejuang");

            const response = await request;

            // Assert
            expect(response.status).to.eql(200);
            expect(response.body.message).to.eql("success");
            console.log(response.status);
            console.log(response.body.message);
            console.log(response.body)

        } catch (error) {
            console.error("Error during update:", error.message);
            throw error;
        }
    });

});