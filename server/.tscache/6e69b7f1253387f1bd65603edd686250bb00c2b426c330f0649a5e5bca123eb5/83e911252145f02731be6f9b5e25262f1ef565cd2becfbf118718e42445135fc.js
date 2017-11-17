"use strict";
/**
 * File created by suenlue on 16.11.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */
Object.defineProperty(exports, "__esModule", { value: true });
var jsonServer = require("json-server");
var server = jsonServer.create();
var router = jsonServer.router('./mock/db.json');
var middlewares = jsonServer.defaults();
server.use(middlewares);
server.use(router);
server.use(function (req, res, next) {
    console.log('RESPONSE', res);
    next();
});
server.listen(3000, function () {
    console.log('JSON Server is running on port 3000');
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL3N1ZW5sdWUvV2Vic2l0ZXMvdHJhaW5pbmcvZ2ZuLTIwMTctMTEvZ2ZuL3NlcnZlci9zcmMvc2VydmVyLnRzIiwic291cmNlcyI6WyIvVXNlcnMvc3Vlbmx1ZS9XZWJzaXRlcy90cmFpbmluZy9nZm4tMjAxNy0xMS9nZm4vc2VydmVyL3NyYy9zZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7R0FHRzs7QUFHSCx3Q0FBMEM7QUFFMUMsSUFBTSxNQUFNLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ25DLElBQU0sTUFBTSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUNuRCxJQUFNLFdBQVcsR0FBRyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7QUFFMUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUN4QixNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRW5CLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUk7SUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBRyxVQUFVLEVBQUcsR0FBRyxDQUFFLENBQUM7SUFDakMsSUFBSSxFQUFFLENBQUM7QUFDVCxDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO0lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUNBQXFDLENBQUMsQ0FBQztBQUNyRCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRmlsZSBjcmVhdGVkIGJ5IHN1ZW5sdWUgb24gMTYuMTEuMTcuXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgYnkgbmV0VHJlayBHbWJIICYgQ28uIEtHXG4gKi9cblxuXG5pbXBvcnQgKiBhcyBqc29uU2VydmVyIGZyb20gJ2pzb24tc2VydmVyJztcblxuY29uc3Qgc2VydmVyID0ganNvblNlcnZlci5jcmVhdGUoKTtcbmNvbnN0IHJvdXRlciA9IGpzb25TZXJ2ZXIucm91dGVyKCcuL21vY2svZGIuanNvbicpO1xuY29uc3QgbWlkZGxld2FyZXMgPSBqc29uU2VydmVyLmRlZmF1bHRzKCk7XG5cbnNlcnZlci51c2UobWlkZGxld2FyZXMpO1xuc2VydmVyLnVzZShyb3V0ZXIpO1xuXG5zZXJ2ZXIudXNlKChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICBjb25zb2xlLmxvZyAoICdSRVNQT05TRScgLCByZXMgKTtcbiAgbmV4dCgpO1xufSk7XG5cbnNlcnZlci5saXN0ZW4oMzAwMCwgKCkgPT4ge1xuICBjb25zb2xlLmxvZygnSlNPTiBTZXJ2ZXIgaXMgcnVubmluZyBvbiBwb3J0IDMwMDAnKTtcbn0pO1xuXG4iXX0=