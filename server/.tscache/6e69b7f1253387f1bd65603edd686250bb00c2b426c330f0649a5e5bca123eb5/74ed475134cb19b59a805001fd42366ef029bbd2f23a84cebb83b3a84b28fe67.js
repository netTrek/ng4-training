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
// router.render = (req, res) => {
//
//   let authorized = false;
//   if ( req.headers.hasOwnProperty('authorization') ) {
//     const token = String( req.headers.authorization ).replace( /((Bearer)|\s)/gi, '');
//     authorized = token === 'netTrek';
//   }
//
//   res.jsonp({
//     data: res.locals.data,
//     authorized
//   });
// };
server.get('/users/:id', function (req, res, next) {
    console.log(req.params.id);
    next();
});
server.use(middlewares);
server.use(router);
server.listen(3000, function () {
    console.log('JSON Server is running on port 3000');
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL3N1ZW5sdWUvV2Vic2l0ZXMvdHJhaW5pbmcvZ2ZuLTIwMTctMTEvZ2ZuL3NlcnZlci9zcmMvc2VydmVyLnRzIiwic291cmNlcyI6WyIvVXNlcnMvc3Vlbmx1ZS9XZWJzaXRlcy90cmFpbmluZy9nZm4tMjAxNy0xMS9nZm4vc2VydmVyL3NyYy9zZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7R0FHRzs7QUFHSCx3Q0FBMEM7QUFFMUMsSUFBTSxNQUFNLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ25DLElBQU0sTUFBTSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUNuRCxJQUFNLFdBQVcsR0FBRyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7QUFJMUMsa0NBQWtDO0FBQ2xDLEVBQUU7QUFDRiw0QkFBNEI7QUFDNUIseURBQXlEO0FBQ3pELHlGQUF5RjtBQUN6Rix3Q0FBd0M7QUFDeEMsTUFBTTtBQUNOLEVBQUU7QUFDRixnQkFBZ0I7QUFDaEIsNkJBQTZCO0FBQzdCLGlCQUFpQjtBQUNqQixRQUFRO0FBQ1IsS0FBSztBQUdMLE1BQU0sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLFVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRyxJQUFJO0lBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUUsQ0FBQztJQUMvQixJQUFJLEVBQUcsQ0FBQztBQUNWLENBQUMsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUN4QixNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBTW5CLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO0lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUNBQXFDLENBQUMsQ0FBQztBQUNyRCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRmlsZSBjcmVhdGVkIGJ5IHN1ZW5sdWUgb24gMTYuMTEuMTcuXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgYnkgbmV0VHJlayBHbWJIICYgQ28uIEtHXG4gKi9cblxuXG5pbXBvcnQgKiBhcyBqc29uU2VydmVyIGZyb20gJ2pzb24tc2VydmVyJztcblxuY29uc3Qgc2VydmVyID0ganNvblNlcnZlci5jcmVhdGUoKTtcbmNvbnN0IHJvdXRlciA9IGpzb25TZXJ2ZXIucm91dGVyKCcuL21vY2svZGIuanNvbicpO1xuY29uc3QgbWlkZGxld2FyZXMgPSBqc29uU2VydmVyLmRlZmF1bHRzKCk7XG5cblxuXG4vLyByb3V0ZXIucmVuZGVyID0gKHJlcSwgcmVzKSA9PiB7XG4vL1xuLy8gICBsZXQgYXV0aG9yaXplZCA9IGZhbHNlO1xuLy8gICBpZiAoIHJlcS5oZWFkZXJzLmhhc093blByb3BlcnR5KCdhdXRob3JpemF0aW9uJykgKSB7XG4vLyAgICAgY29uc3QgdG9rZW4gPSBTdHJpbmcoIHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb24gKS5yZXBsYWNlKCAvKChCZWFyZXIpfFxccykvZ2ksICcnKTtcbi8vICAgICBhdXRob3JpemVkID0gdG9rZW4gPT09ICduZXRUcmVrJztcbi8vICAgfVxuLy9cbi8vICAgcmVzLmpzb25wKHtcbi8vICAgICBkYXRhOiByZXMubG9jYWxzLmRhdGEsXG4vLyAgICAgYXV0aG9yaXplZFxuLy8gICB9KTtcbi8vIH07XG5cblxuc2VydmVyLmdldCgnL3VzZXJzLzppZCcsICggcmVxLCByZXMgLCBuZXh0KSA9PiB7XG4gIGNvbnNvbGUubG9nICggIHJlcS5wYXJhbXMuaWQgKTtcbiAgbmV4dCAoKTtcbn0pO1xuXG5zZXJ2ZXIudXNlKG1pZGRsZXdhcmVzKTtcbnNlcnZlci51c2Uocm91dGVyKTtcblxuXG5cblxuXG5zZXJ2ZXIubGlzdGVuKDMwMDAsICgpID0+IHtcbiAgY29uc29sZS5sb2coJ0pTT04gU2VydmVyIGlzIHJ1bm5pbmcgb24gcG9ydCAzMDAwJyk7XG59KTtcblxuIl19