import { config as dotenvConfig } from "dotenv";
import { expect, should } from "chai";
import supertest from "supertest";

dotenvConfig();
should();

describe("SEARCH OPERATOR on Merchant GAMEFINTIY", function() {
    it("Success Search Operator FIFA", async function() {
        try {
            const label = "FIFA"
            const request = supertest(process.env.HOST)
                .get(`/v1/operators/list?label=${label}`)
                .set("X-Merchant-Code", "gamefinity");

            const response = await request;

            // Assert
            const data = response.body.data[0];
            const labelsearch = data.label
            const id = data.id
            expect(response.status).to.eql(200);
            expect(response.body.message).to.eql("success");
            console.log(response.status);
            console.log(response.body.message);
            console.log("id:",id);
            console.log("label:",labelsearch);

        } catch (error) {
            console.error("Error during update:", error.message);
            throw error;
        }
    });

    it("Failed Search Operator (Not Found)", async function() {
        try {
            const label = "ohayo"
            const request = supertest(process.env.HOST)
                .get(`/v1/operators/list?label=${label}`)
                .set("X-Merchant-Code", "gamefinity");

            const response = await request;

            // Assert
            expect(response.status).to.eql(200);
            expect(response.body.message).to.eql("success");
            expect(response.body.data).to.eql([]);
            

        } catch (error) {
            console.error("Error during update:", error.message);
            throw error;
        }
    });

});

describe("SEARCH OPERATOR on Merchant PEJUANG", function() {
    it("Success Search Operator FIFA", async function() {
        try {
            const label = "FIFA"
            const request = supertest(process.env.HOST)
                .get(`/v1/operators/list?label=${label}`)
                .set("X-Merchant-Code", "pejuang");

            const response = await request;

            // Assert
            const data = response.body.data[0];
            const labelsearch = data.label
            const id = data.id
            expect(response.status).to.eql(200);
            expect(response.body.message).to.eql("success");
            console.log(response.status);
            console.log(response.body.message);
            console.log("id:",id);
            console.log("label:",labelsearch);

        } catch (error) {
            console.error("Error during update:", error.message);
            throw error;
        }
    });

    it("Failed Search Operator (Not Found)", async function() {
        try {
            const label = "ohayo"
            const request = supertest(process.env.HOST)
                .get(`/v1/operators/list?label=${label}`)
                .set("X-Merchant-Code", "pejuang");

            const response = await request;

            // Assert
            expect(response.status).to.eql(200);
            expect(response.body.message).to.eql("success");
            expect(response.body.data).to.eql([]);
            

        } catch (error) {
            console.error("Error during update:", error.message);
            throw error;
        }
    });

});
