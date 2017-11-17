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
});
server.use(middlewares);
server.use(router);
server.listen(3000, function () {
    console.log('JSON Server is running on port 3000');
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL3N1ZW5sdWUvV2Vic2l0ZXMvdHJhaW5pbmcvZ2ZuLTIwMTctMTEvZ2ZuL3NlcnZlci9zcmMvc2VydmVyLnRzIiwic291cmNlcyI6WyIvVXNlcnMvc3Vlbmx1ZS9XZWJzaXRlcy90cmFpbmluZy9nZm4tMjAxNy0xMS9nZm4vc2VydmVyL3NyYy9zZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7R0FHRzs7QUFHSCx3Q0FBMEM7QUFFMUMsSUFBTSxNQUFNLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ25DLElBQU0sTUFBTSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUNuRCxJQUFNLFdBQVcsR0FBRyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7QUFJMUMsa0NBQWtDO0FBQ2xDLEVBQUU7QUFDRiw0QkFBNEI7QUFDNUIseURBQXlEO0FBQ3pELHlGQUF5RjtBQUN6Rix3Q0FBd0M7QUFDeEMsTUFBTTtBQUNOLEVBQUU7QUFDRixnQkFBZ0I7QUFDaEIsNkJBQTZCO0FBQzdCLGlCQUFpQjtBQUNqQixRQUFRO0FBQ1IsS0FBSztBQUdMLE1BQU0sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLFVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRyxJQUFJO0lBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUUsQ0FBQztBQUNqQyxDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDeEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQU1uQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtJQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7QUFDckQsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEZpbGUgY3JlYXRlZCBieSBzdWVubHVlIG9uIDE2LjExLjE3LlxuICogQ29weXJpZ2h0IChjKSAyMDE3IGJ5IG5ldFRyZWsgR21iSCAmIENvLiBLR1xuICovXG5cblxuaW1wb3J0ICogYXMganNvblNlcnZlciBmcm9tICdqc29uLXNlcnZlcic7XG5cbmNvbnN0IHNlcnZlciA9IGpzb25TZXJ2ZXIuY3JlYXRlKCk7XG5jb25zdCByb3V0ZXIgPSBqc29uU2VydmVyLnJvdXRlcignLi9tb2NrL2RiLmpzb24nKTtcbmNvbnN0IG1pZGRsZXdhcmVzID0ganNvblNlcnZlci5kZWZhdWx0cygpO1xuXG5cblxuLy8gcm91dGVyLnJlbmRlciA9IChyZXEsIHJlcykgPT4ge1xuLy9cbi8vICAgbGV0IGF1dGhvcml6ZWQgPSBmYWxzZTtcbi8vICAgaWYgKCByZXEuaGVhZGVycy5oYXNPd25Qcm9wZXJ0eSgnYXV0aG9yaXphdGlvbicpICkge1xuLy8gICAgIGNvbnN0IHRva2VuID0gU3RyaW5nKCByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uICkucmVwbGFjZSggLygoQmVhcmVyKXxcXHMpL2dpLCAnJyk7XG4vLyAgICAgYXV0aG9yaXplZCA9IHRva2VuID09PSAnbmV0VHJlayc7XG4vLyAgIH1cbi8vXG4vLyAgIHJlcy5qc29ucCh7XG4vLyAgICAgZGF0YTogcmVzLmxvY2Fscy5kYXRhLFxuLy8gICAgIGF1dGhvcml6ZWRcbi8vICAgfSk7XG4vLyB9O1xuXG5cbnNlcnZlci5nZXQoJy91c2Vycy86aWQnLCAoIHJlcSwgcmVzICwgbmV4dCkgPT4ge1xuICBjb25zb2xlLmxvZyAoICByZXEucGFyYW1zLmlkICk7XG59KTtcblxuc2VydmVyLnVzZShtaWRkbGV3YXJlcyk7XG5zZXJ2ZXIudXNlKHJvdXRlcik7XG5cblxuXG5cblxuc2VydmVyLmxpc3RlbigzMDAwLCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdKU09OIFNlcnZlciBpcyBydW5uaW5nIG9uIHBvcnQgMzAwMCcpO1xufSk7XG5cbiJdfQ==