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
    res.json({ success: true, data: res.locals.data });
    // next ();
});
server.use(middlewares);
server.use(router);
server.listen(3000, function () {
    console.log('JSON Server is running on port 3000');
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL3N1ZW5sdWUvV2Vic2l0ZXMvdHJhaW5pbmcvZ2ZuLTIwMTctMTEvZ2ZuL3NlcnZlci9zcmMvc2VydmVyLnRzIiwic291cmNlcyI6WyIvVXNlcnMvc3Vlbmx1ZS9XZWJzaXRlcy90cmFpbmluZy9nZm4tMjAxNy0xMS9nZm4vc2VydmVyL3NyYy9zZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7R0FHRzs7QUFFSCx3Q0FBMEM7QUFFMUMsSUFBTSxNQUFNLEdBQVEsVUFBVSxDQUFDLE1BQU0sRUFBRyxDQUFDO0FBQ3pDLElBQU0sTUFBTSxHQUFRLFVBQVUsQ0FBQyxNQUFNLENBQUcsZ0JBQWdCLENBQUUsQ0FBQztBQUMzRCxJQUFNLFdBQVcsR0FBRyxVQUFVLENBQUMsUUFBUSxFQUFHLENBQUM7QUFFM0Msa0NBQWtDO0FBQ2xDLEVBQUU7QUFDRiw0QkFBNEI7QUFDNUIseURBQXlEO0FBQ3pELHlGQUF5RjtBQUN6Rix3Q0FBd0M7QUFDeEMsTUFBTTtBQUNOLEVBQUU7QUFDRixnQkFBZ0I7QUFDaEIsNkJBQTZCO0FBQzdCLGlCQUFpQjtBQUNqQixRQUFRO0FBQ1IsS0FBSztBQUVMLE1BQU0sQ0FBQyxHQUFHLENBQUcsWUFBWSxFQUFFLFVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJO0lBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUUsQ0FBQztJQUU5QixHQUFHLENBQUMsSUFBSSxDQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBRSxDQUFDO0lBQ3JELFdBQVc7QUFDYixDQUFDLENBQUUsQ0FBQztBQUVKLE1BQU0sQ0FBQyxHQUFHLENBQUcsV0FBVyxDQUFFLENBQUM7QUFDM0IsTUFBTSxDQUFDLEdBQUcsQ0FBRyxNQUFNLENBQUUsQ0FBQztBQUV0QixNQUFNLENBQUMsTUFBTSxDQUFHLElBQUksRUFBRTtJQUNwQixPQUFPLENBQUMsR0FBRyxDQUFHLHFDQUFxQyxDQUFFLENBQUM7QUFDeEQsQ0FBQyxDQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEZpbGUgY3JlYXRlZCBieSBzdWVubHVlIG9uIDE2LjExLjE3LlxuICogQ29weXJpZ2h0IChjKSAyMDE3IGJ5IG5ldFRyZWsgR21iSCAmIENvLiBLR1xuICovXG5cbmltcG9ydCAqIGFzIGpzb25TZXJ2ZXIgZnJvbSAnanNvbi1zZXJ2ZXInO1xuXG5jb25zdCBzZXJ2ZXIgICAgICA9IGpzb25TZXJ2ZXIuY3JlYXRlICgpO1xuY29uc3Qgcm91dGVyICAgICAgPSBqc29uU2VydmVyLnJvdXRlciAoICcuL21vY2svZGIuanNvbicgKTtcbmNvbnN0IG1pZGRsZXdhcmVzID0ganNvblNlcnZlci5kZWZhdWx0cyAoKTtcblxuLy8gcm91dGVyLnJlbmRlciA9IChyZXEsIHJlcykgPT4ge1xuLy9cbi8vICAgbGV0IGF1dGhvcml6ZWQgPSBmYWxzZTtcbi8vICAgaWYgKCByZXEuaGVhZGVycy5oYXNPd25Qcm9wZXJ0eSgnYXV0aG9yaXphdGlvbicpICkge1xuLy8gICAgIGNvbnN0IHRva2VuID0gU3RyaW5nKCByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uICkucmVwbGFjZSggLygoQmVhcmVyKXxcXHMpL2dpLCAnJyk7XG4vLyAgICAgYXV0aG9yaXplZCA9IHRva2VuID09PSAnbmV0VHJlayc7XG4vLyAgIH1cbi8vXG4vLyAgIHJlcy5qc29ucCh7XG4vLyAgICAgZGF0YTogcmVzLmxvY2Fscy5kYXRhLFxuLy8gICAgIGF1dGhvcml6ZWRcbi8vICAgfSk7XG4vLyB9O1xuXG5zZXJ2ZXIuZ2V0ICggJy91c2Vycy86aWQnLCAoIHJlcSwgcmVzLCBuZXh0ICkgPT4ge1xuICBjb25zb2xlLmxvZyAoIHJlcS5wYXJhbXMuaWQgKTtcblxuICByZXMuanNvbiggeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXMubG9jYWxzLmRhdGEgfSApO1xuICAvLyBuZXh0ICgpO1xufSApO1xuXG5zZXJ2ZXIudXNlICggbWlkZGxld2FyZXMgKTtcbnNlcnZlci51c2UgKCByb3V0ZXIgKTtcblxuc2VydmVyLmxpc3RlbiAoIDMwMDAsICgpID0+IHtcbiAgY29uc29sZS5sb2cgKCAnSlNPTiBTZXJ2ZXIgaXMgcnVubmluZyBvbiBwb3J0IDMwMDAnICk7XG59ICk7XG5cbiJdfQ==