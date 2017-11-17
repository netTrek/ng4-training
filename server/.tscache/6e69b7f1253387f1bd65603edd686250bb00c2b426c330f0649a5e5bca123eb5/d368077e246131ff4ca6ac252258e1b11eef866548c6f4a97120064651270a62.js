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
router.render = function (req, res) {
    req;
    res.jsonp({
        data: res.locals.data
    });
};
server.use(middlewares);
server.use(router);
// server.use((req, res, next) => {
//   res.jsonp({
//     saban: res.locals.data
//   });
//   console.log ( res );
//   next();
// });
server.listen(3000, function () {
    console.log('JSON Server is running on port 3000');
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL3N1ZW5sdWUvV2Vic2l0ZXMvdHJhaW5pbmcvZ2ZuLTIwMTctMTEvZ2ZuL3NlcnZlci9zcmMvc2VydmVyLnRzIiwic291cmNlcyI6WyIvVXNlcnMvc3Vlbmx1ZS9XZWJzaXRlcy90cmFpbmluZy9nZm4tMjAxNy0xMS9nZm4vc2VydmVyL3NyYy9zZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7R0FHRzs7QUFHSCx3Q0FBMEM7QUFFMUMsSUFBTSxNQUFNLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ25DLElBQU0sTUFBTSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUNuRCxJQUFNLFdBQVcsR0FBRyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7QUFJMUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxVQUFDLEdBQUcsRUFBRSxHQUFHO0lBRXZCLEdBQUcsQ0FBQTtJQUVILEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDUixJQUFJLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJO0tBQ3RCLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUdGLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDeEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUduQixtQ0FBbUM7QUFDbkMsZ0JBQWdCO0FBQ2hCLDZCQUE2QjtBQUM3QixRQUFRO0FBQ1IseUJBQXlCO0FBQ3pCLFlBQVk7QUFDWixNQUFNO0FBR04sTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7SUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO0FBQ3JELENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBGaWxlIGNyZWF0ZWQgYnkgc3Vlbmx1ZSBvbiAxNi4xMS4xNy5cbiAqIENvcHlyaWdodCAoYykgMjAxNyBieSBuZXRUcmVrIEdtYkggJiBDby4gS0dcbiAqL1xuXG5cbmltcG9ydCAqIGFzIGpzb25TZXJ2ZXIgZnJvbSAnanNvbi1zZXJ2ZXInO1xuXG5jb25zdCBzZXJ2ZXIgPSBqc29uU2VydmVyLmNyZWF0ZSgpO1xuY29uc3Qgcm91dGVyID0ganNvblNlcnZlci5yb3V0ZXIoJy4vbW9jay9kYi5qc29uJyk7XG5jb25zdCBtaWRkbGV3YXJlcyA9IGpzb25TZXJ2ZXIuZGVmYXVsdHMoKTtcblxuXG5cbnJvdXRlci5yZW5kZXIgPSAocmVxLCByZXMpID0+IHtcblxuICByZXFcblxuICByZXMuanNvbnAoe1xuICAgIGRhdGE6IHJlcy5sb2NhbHMuZGF0YVxuICB9KTtcbn07XG5cblxuc2VydmVyLnVzZShtaWRkbGV3YXJlcyk7XG5zZXJ2ZXIudXNlKHJvdXRlcik7XG5cblxuLy8gc2VydmVyLnVzZSgocmVxLCByZXMsIG5leHQpID0+IHtcbi8vICAgcmVzLmpzb25wKHtcbi8vICAgICBzYWJhbjogcmVzLmxvY2Fscy5kYXRhXG4vLyAgIH0pO1xuLy8gICBjb25zb2xlLmxvZyAoIHJlcyApO1xuLy8gICBuZXh0KCk7XG4vLyB9KTtcblxuXG5zZXJ2ZXIubGlzdGVuKDMwMDAsICgpID0+IHtcbiAgY29uc29sZS5sb2coJ0pTT04gU2VydmVyIGlzIHJ1bm5pbmcgb24gcG9ydCAzMDAwJyk7XG59KTtcblxuIl19