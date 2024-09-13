"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    database: "backend-api",
    port: 5433,
    user: "postgres",
    host: "localhost",
    password: "123",
});
exports.default = pool;
