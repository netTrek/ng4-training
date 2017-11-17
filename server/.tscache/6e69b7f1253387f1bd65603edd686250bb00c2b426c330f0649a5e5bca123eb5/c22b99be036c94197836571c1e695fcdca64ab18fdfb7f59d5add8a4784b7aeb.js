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
    if (!authorized) {
        res.json({ authorized: authorized }).send(401);
    }
    res.jsonp({
        data: res.locals.data,
        success: !!res.locals.data && (res.statusCode === 200),
        authorized: authorized
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL3N1ZW5sdWUvV2Vic2l0ZXMvdHJhaW5pbmcvZ2ZuLTIwMTctMTEvZ2ZuL3NlcnZlci9zcmMvc2VydmVyLnRzIiwic291cmNlcyI6WyIvVXNlcnMvc3Vlbmx1ZS9XZWJzaXRlcy90cmFpbmluZy9nZm4tMjAxNy0xMS9nZm4vc2VydmVyL3NyYy9zZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7R0FHRzs7QUFFSCx3Q0FBMEM7QUFFMUMsSUFBTSxNQUFNLEdBQVEsVUFBVSxDQUFDLE1BQU0sRUFBRyxDQUFDO0FBQ3pDLElBQU0sTUFBTSxHQUFRLFVBQVUsQ0FBQyxNQUFNLENBQUcsZ0JBQWdCLENBQUUsQ0FBQztBQUMzRCxJQUFNLFdBQVcsR0FBRyxVQUFVLENBQUMsUUFBUSxFQUFHLENBQUM7QUFFM0MsTUFBTSxDQUFDLE1BQU0sR0FBRyxVQUFDLEdBQUcsRUFBRSxHQUFHO0lBRXZCLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQztJQUN2QixFQUFFLENBQUMsQ0FBRSxHQUFHLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbEQsSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFFLENBQUMsT0FBTyxDQUFFLGlCQUFpQixFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2xGLFVBQVUsR0FBRyxLQUFLLEtBQUssU0FBUyxDQUFDO0lBQ25DLENBQUM7SUFFRCxFQUFFLENBQUMsQ0FBRSxDQUFDLFVBQVcsQ0FBQyxDQUFDLENBQUM7UUFDbEIsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFDLFVBQVUsWUFBQSxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUcsR0FBRyxDQUFFLENBQUM7SUFDdEMsQ0FBQztJQUVELEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDUixJQUFJLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJO1FBQ3JCLE9BQU8sRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxLQUFLLEdBQUcsQ0FBRTtRQUN4RCxVQUFVLFlBQUE7S0FDWCxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFFRixxREFBcUQ7QUFDckQsbUNBQW1DO0FBQ25DLGFBQWE7QUFDYixPQUFPO0FBRVAsTUFBTSxDQUFDLEdBQUcsQ0FBRyxXQUFXLENBQUUsQ0FBQztBQUMzQixNQUFNLENBQUMsR0FBRyxDQUFHLE1BQU0sQ0FBRSxDQUFDO0FBRXRCLE1BQU0sQ0FBQyxNQUFNLENBQUcsSUFBSSxFQUFFO0lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUcscUNBQXFDLENBQUUsQ0FBQztBQUN4RCxDQUFDLENBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRmlsZSBjcmVhdGVkIGJ5IHN1ZW5sdWUgb24gMTYuMTEuMTcuXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgYnkgbmV0VHJlayBHbWJIICYgQ28uIEtHXG4gKi9cblxuaW1wb3J0ICogYXMganNvblNlcnZlciBmcm9tICdqc29uLXNlcnZlcic7XG5cbmNvbnN0IHNlcnZlciAgICAgID0ganNvblNlcnZlci5jcmVhdGUgKCk7XG5jb25zdCByb3V0ZXIgICAgICA9IGpzb25TZXJ2ZXIucm91dGVyICggJy4vbW9jay9kYi5qc29uJyApO1xuY29uc3QgbWlkZGxld2FyZXMgPSBqc29uU2VydmVyLmRlZmF1bHRzICgpO1xuXG5yb3V0ZXIucmVuZGVyID0gKHJlcSwgcmVzKSA9PiB7XG5cbiAgbGV0IGF1dGhvcml6ZWQgPSBmYWxzZTtcbiAgaWYgKCByZXEuaGVhZGVycy5oYXNPd25Qcm9wZXJ0eSgnYXV0aG9yaXphdGlvbicpICkge1xuICAgIGNvbnN0IHRva2VuID0gU3RyaW5nKCByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uICkucmVwbGFjZSggLygoQmVhcmVyKXxcXHMpL2dpLCAnJyk7XG4gICAgYXV0aG9yaXplZCA9IHRva2VuID09PSAnbmV0VHJlayc7XG4gIH1cblxuICBpZiAoICFhdXRob3JpemVkICkge1xuICAgIHJlcy5qc29uKHthdXRob3JpemVkfSkuc2VuZCAoIDQwMSApO1xuICB9XG5cbiAgcmVzLmpzb25wKHtcbiAgICBkYXRhOiByZXMubG9jYWxzLmRhdGEsXG4gICAgc3VjY2VzczogISFyZXMubG9jYWxzLmRhdGEgJiYgKCByZXMuc3RhdHVzQ29kZSA9PT0gMjAwICksXG4gICAgYXV0aG9yaXplZFxuICB9KTtcbn07XG5cbi8vIHNlcnZlci5nZXQgKCAnL3VzZXJzLzppZCcsICggcmVxLCByZXMsIG5leHQgKSA9PiB7XG4vLyAgIGNvbnNvbGUubG9nICggcmVxLnBhcmFtcy5pZCApO1xuLy8gICBuZXh0ICgpO1xuLy8gfSApO1xuXG5zZXJ2ZXIudXNlICggbWlkZGxld2FyZXMgKTtcbnNlcnZlci51c2UgKCByb3V0ZXIgKTtcblxuc2VydmVyLmxpc3RlbiAoIDMwMDAsICgpID0+IHtcbiAgY29uc29sZS5sb2cgKCAnSlNPTiBTZXJ2ZXIgaXMgcnVubmluZyBvbiBwb3J0IDMwMDAnICk7XG59ICk7XG5cbiJdfQ==