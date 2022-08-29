import supertest from "supertest";

import { prismaMock } from "./lib/prisma/client.mock";

import app from "./app";

const request = supertest(app);

test("GET /planets", async () => {
    const planets = [
        {
            id: 3,
            name: "Mercury",
            description: null,
            diameter: 1234,
            moons: 0,
            createdAt: "2022-08-29T14:30:30.704Z",
            updatedAt: "2022-08-29T14:30:15.773Z",
        },
        {
            id: 4,
            name: "Venus",
            description: null,
            diameter: 5678,
            moons: 0,
            createdAt: "2022-08-29T14:31:25.882Z",
            updatedAt: "2022-08-29T14:31:13.530Z",
        },
    ];
    //@ts-ignore
    prismaMock.planet.findMany.mockResolvedValue(planets);

    const response = await request
        .get("/planets")
        .expect(200)
        .expect("content-type", /application\/json/);

    expect(response.body).toEqual(planets);
});
