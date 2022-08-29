module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    verbose: true,
    clearMocks: true,
    setupFilesAfterEnv: ["./pt2/lib/prisma/client.mock.ts"],
};
