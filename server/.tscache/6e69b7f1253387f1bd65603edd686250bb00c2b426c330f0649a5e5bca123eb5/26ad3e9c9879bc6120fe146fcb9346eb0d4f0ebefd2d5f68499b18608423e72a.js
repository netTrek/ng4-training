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
    var authorized = false;
    if (req.headers.hasOwnProperty('authorization')) {
        var token = String(req.headers.authorization).replace(/((Bearer)|\s)/gi, '');
        authorized = token === 'netTrek';
    }
    // if ( !authorized ) {
    //   res.status(401).json({ error: 'user is not authorized', authorized: false, success: false  });
    // } else {
    res.json({
        data: res.locals.data,
        success: !!res.locals.data && (res.statusCode === 200),
        authorized: authorized
    });
    // }
};
// server.get ( '/users/:id', ( req, res, next ) => {
//   console.log ( req.params.id );
//   next ();
// } );
server.use(middlewares);
server.use(router);
server.listen(3000, function () {
    console.log('JSON Server is running on port 3000');
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL3N1ZW5sdWUvV2Vic2l0ZXMvdHJhaW5pbmcvZ2ZuLTIwMTctMTEvZ2ZuL3NlcnZlci9zcmMvc2VydmVyLnRzIiwic291cmNlcyI6WyIvVXNlcnMvc3Vlbmx1ZS9XZWJzaXRlcy90cmFpbmluZy9nZm4tMjAxNy0xMS9nZm4vc2VydmVyL3NyYy9zZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7R0FHRzs7QUFFSCx3Q0FBMEM7QUFFMUMsSUFBTSxNQUFNLEdBQVEsVUFBVSxDQUFDLE1BQU0sRUFBRyxDQUFDO0FBQ3pDLElBQU0sTUFBTSxHQUFRLFVBQVUsQ0FBQyxNQUFNLENBQUcsZ0JBQWdCLENBQUUsQ0FBQztBQUMzRCxJQUFNLFdBQVcsR0FBRyxVQUFVLENBQUMsUUFBUSxFQUFHLENBQUM7QUFFM0MsTUFBTSxDQUFDLE1BQU0sR0FBRyxVQUFDLEdBQUcsRUFBRSxHQUFHO0lBRXZCLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQztJQUN2QixFQUFFLENBQUMsQ0FBRSxHQUFHLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbEQsSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFFLENBQUMsT0FBTyxDQUFFLGlCQUFpQixFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2xGLFVBQVUsR0FBRyxLQUFLLEtBQUssU0FBUyxDQUFDO0lBQ25DLENBQUM7SUFFRCx1QkFBdUI7SUFDdkIsbUdBQW1HO0lBQ25HLFdBQVc7SUFDVCxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ1AsSUFBSSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSTtRQUNyQixPQUFPLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsS0FBSyxHQUFHLENBQUU7UUFDeEQsVUFBVSxZQUFBO0tBQ1gsQ0FBQyxDQUFDO0lBQ0wsSUFBSTtBQUVOLENBQUMsQ0FBQztBQUVGLHFEQUFxRDtBQUNyRCxtQ0FBbUM7QUFDbkMsYUFBYTtBQUNiLE9BQU87QUFFUCxNQUFNLENBQUMsR0FBRyxDQUFHLFdBQVcsQ0FBRSxDQUFDO0FBQzNCLE1BQU0sQ0FBQyxHQUFHLENBQUcsTUFBTSxDQUFFLENBQUM7QUFFdEIsTUFBTSxDQUFDLE1BQU0sQ0FBRyxJQUFJLEVBQUU7SUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBRyxxQ0FBcUMsQ0FBRSxDQUFDO0FBQ3hELENBQUMsQ0FBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBGaWxlIGNyZWF0ZWQgYnkgc3Vlbmx1ZSBvbiAxNi4xMS4xNy5cbiAqIENvcHlyaWdodCAoYykgMjAxNyBieSBuZXRUcmVrIEdtYkggJiBDby4gS0dcbiAqL1xuXG5pbXBvcnQgKiBhcyBqc29uU2VydmVyIGZyb20gJ2pzb24tc2VydmVyJztcblxuY29uc3Qgc2VydmVyICAgICAgPSBqc29uU2VydmVyLmNyZWF0ZSAoKTtcbmNvbnN0IHJvdXRlciAgICAgID0ganNvblNlcnZlci5yb3V0ZXIgKCAnLi9tb2NrL2RiLmpzb24nICk7XG5jb25zdCBtaWRkbGV3YXJlcyA9IGpzb25TZXJ2ZXIuZGVmYXVsdHMgKCk7XG5cbnJvdXRlci5yZW5kZXIgPSAocmVxLCByZXMgKSA9PiB7XG5cbiAgbGV0IGF1dGhvcml6ZWQgPSBmYWxzZTtcbiAgaWYgKCByZXEuaGVhZGVycy5oYXNPd25Qcm9wZXJ0eSgnYXV0aG9yaXphdGlvbicpICkge1xuICAgIGNvbnN0IHRva2VuID0gU3RyaW5nKCByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uICkucmVwbGFjZSggLygoQmVhcmVyKXxcXHMpL2dpLCAnJyk7XG4gICAgYXV0aG9yaXplZCA9IHRva2VuID09PSAnbmV0VHJlayc7XG4gIH1cblxuICAvLyBpZiAoICFhdXRob3JpemVkICkge1xuICAvLyAgIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgZXJyb3I6ICd1c2VyIGlzIG5vdCBhdXRob3JpemVkJywgYXV0aG9yaXplZDogZmFsc2UsIHN1Y2Nlc3M6IGZhbHNlICB9KTtcbiAgLy8gfSBlbHNlIHtcbiAgICByZXMuanNvbih7XG4gICAgICBkYXRhOiByZXMubG9jYWxzLmRhdGEsXG4gICAgICBzdWNjZXNzOiAhIXJlcy5sb2NhbHMuZGF0YSAmJiAoIHJlcy5zdGF0dXNDb2RlID09PSAyMDAgKSxcbiAgICAgIGF1dGhvcml6ZWRcbiAgICB9KTtcbiAgLy8gfVxuXG59O1xuXG4vLyBzZXJ2ZXIuZ2V0ICggJy91c2Vycy86aWQnLCAoIHJlcSwgcmVzLCBuZXh0ICkgPT4ge1xuLy8gICBjb25zb2xlLmxvZyAoIHJlcS5wYXJhbXMuaWQgKTtcbi8vICAgbmV4dCAoKTtcbi8vIH0gKTtcblxuc2VydmVyLnVzZSAoIG1pZGRsZXdhcmVzICk7XG5zZXJ2ZXIudXNlICggcm91dGVyICk7XG5cbnNlcnZlci5saXN0ZW4gKCAzMDAwLCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nICggJ0pTT04gU2VydmVyIGlzIHJ1bm5pbmcgb24gcG9ydCAzMDAwJyApO1xufSApO1xuXG4iXX0=