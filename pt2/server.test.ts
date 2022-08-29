import supertest from "supertest";

import { prismaMock } from "./lib/prisma/client.mock";

import app from "./app";

const request = supertest(app);

test("GET /planets", async () => {
    const planet = {
        name: "Mercury",
        diameter: 1234,
        moons: 0,
    };

    const response = await request
        .post("/planets")
        .send(planet)
        .expect(201)
        .expect("content-type", /application\/json/);

    expect(response.body).toEqual(planet);
});
