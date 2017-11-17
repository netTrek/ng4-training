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
    next();
});
server.use(middlewares);
server.use(router);
server.listen(3000, function () {
    console.log('JSON Server is running on port 3000');
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL3N1ZW5sdWUvV2Vic2l0ZXMvdHJhaW5pbmcvZ2ZuLTIwMTctMTEvZ2ZuL3NlcnZlci9zcmMvc2VydmVyLnRzIiwic291cmNlcyI6WyIvVXNlcnMvc3Vlbmx1ZS9XZWJzaXRlcy90cmFpbmluZy9nZm4tMjAxNy0xMS9nZm4vc2VydmVyL3NyYy9zZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7R0FHRzs7QUFFSCx3Q0FBMEM7QUFFMUMsSUFBTSxNQUFNLEdBQVEsVUFBVSxDQUFDLE1BQU0sRUFBRyxDQUFDO0FBQ3pDLElBQU0sTUFBTSxHQUFRLFVBQVUsQ0FBQyxNQUFNLENBQUcsZ0JBQWdCLENBQUUsQ0FBQztBQUMzRCxJQUFNLFdBQVcsR0FBRyxVQUFVLENBQUMsUUFBUSxFQUFHLENBQUM7QUFFM0Msa0NBQWtDO0FBQ2xDLEVBQUU7QUFDRiw0QkFBNEI7QUFDNUIseURBQXlEO0FBQ3pELHlGQUF5RjtBQUN6Rix3Q0FBd0M7QUFDeEMsTUFBTTtBQUNOLEVBQUU7QUFDRixnQkFBZ0I7QUFDaEIsNkJBQTZCO0FBQzdCLGlCQUFpQjtBQUNqQixRQUFRO0FBQ1IsS0FBSztBQUVMLE1BQU0sQ0FBQyxHQUFHLENBQUcsWUFBWSxFQUFFLFVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJO0lBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUUsQ0FBQztJQUU5QixHQUFHLENBQUMsSUFBSSxDQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBRSxDQUFDO0lBQ3JELElBQUksRUFBRyxDQUFDO0FBQ1YsQ0FBQyxDQUFFLENBQUM7QUFFSixNQUFNLENBQUMsR0FBRyxDQUFHLFdBQVcsQ0FBRSxDQUFDO0FBQzNCLE1BQU0sQ0FBQyxHQUFHLENBQUcsTUFBTSxDQUFFLENBQUM7QUFFdEIsTUFBTSxDQUFDLE1BQU0sQ0FBRyxJQUFJLEVBQUU7SUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBRyxxQ0FBcUMsQ0FBRSxDQUFDO0FBQ3hELENBQUMsQ0FBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBGaWxlIGNyZWF0ZWQgYnkgc3Vlbmx1ZSBvbiAxNi4xMS4xNy5cbiAqIENvcHlyaWdodCAoYykgMjAxNyBieSBuZXRUcmVrIEdtYkggJiBDby4gS0dcbiAqL1xuXG5pbXBvcnQgKiBhcyBqc29uU2VydmVyIGZyb20gJ2pzb24tc2VydmVyJztcblxuY29uc3Qgc2VydmVyICAgICAgPSBqc29uU2VydmVyLmNyZWF0ZSAoKTtcbmNvbnN0IHJvdXRlciAgICAgID0ganNvblNlcnZlci5yb3V0ZXIgKCAnLi9tb2NrL2RiLmpzb24nICk7XG5jb25zdCBtaWRkbGV3YXJlcyA9IGpzb25TZXJ2ZXIuZGVmYXVsdHMgKCk7XG5cbi8vIHJvdXRlci5yZW5kZXIgPSAocmVxLCByZXMpID0+IHtcbi8vXG4vLyAgIGxldCBhdXRob3JpemVkID0gZmFsc2U7XG4vLyAgIGlmICggcmVxLmhlYWRlcnMuaGFzT3duUHJvcGVydHkoJ2F1dGhvcml6YXRpb24nKSApIHtcbi8vICAgICBjb25zdCB0b2tlbiA9IFN0cmluZyggcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbiApLnJlcGxhY2UoIC8oKEJlYXJlcil8XFxzKS9naSwgJycpO1xuLy8gICAgIGF1dGhvcml6ZWQgPSB0b2tlbiA9PT0gJ25ldFRyZWsnO1xuLy8gICB9XG4vL1xuLy8gICByZXMuanNvbnAoe1xuLy8gICAgIGRhdGE6IHJlcy5sb2NhbHMuZGF0YSxcbi8vICAgICBhdXRob3JpemVkXG4vLyAgIH0pO1xuLy8gfTtcblxuc2VydmVyLmdldCAoICcvdXNlcnMvOmlkJywgKCByZXEsIHJlcywgbmV4dCApID0+IHtcbiAgY29uc29sZS5sb2cgKCByZXEucGFyYW1zLmlkICk7XG5cbiAgcmVzLmpzb24oIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzLmxvY2Fscy5kYXRhIH0gKTtcbiAgbmV4dCAoKTtcbn0gKTtcblxuc2VydmVyLnVzZSAoIG1pZGRsZXdhcmVzICk7XG5zZXJ2ZXIudXNlICggcm91dGVyICk7XG5cbnNlcnZlci5saXN0ZW4gKCAzMDAwLCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nICggJ0pTT04gU2VydmVyIGlzIHJ1bm5pbmcgb24gcG9ydCAzMDAwJyApO1xufSApO1xuXG4iXX0=