import supertest from "supertest";

import { prismaMock } from "./lib/prisma/client.mock";

import app from "./lib/app";

const request = supertest(app);

describe("POST /planets", async () => {
    test("valid request", async () => {
        const planet = {
            name: "Mercury",
            diameter: 1234,
            moons: 0,
        };

        // @ts-ignore
        prismaMock.planet.create.mockResolvedValue(planet);

        const response = await request
            .post("/planets")
            .send(planet)
            .expect(201)
            .expect("content-type", /application\/json/);

        expect(response.body).toEqual(planet);
    });

    test("invalid request", async () => {
        const planet = {
            diameter: 1234,
            moons: 0,
        };

        const response = await request
            .post("/planets")
            .send(planet)
            .expect(422)
            .expect("content-type", /application\/json/);

        expect(response.body).toEqual({
            errors: {
                body: expect.any(Array),
            },
        });
    });
});
