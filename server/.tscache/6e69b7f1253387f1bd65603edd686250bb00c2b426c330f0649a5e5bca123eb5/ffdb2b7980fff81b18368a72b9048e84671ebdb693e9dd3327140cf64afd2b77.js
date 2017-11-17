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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL3N1ZW5sdWUvV2Vic2l0ZXMvdHJhaW5pbmcvZ2ZuLTIwMTctMTEvZ2ZuL3NlcnZlci9zcmMvc2VydmVyLnRzIiwic291cmNlcyI6WyIvVXNlcnMvc3Vlbmx1ZS9XZWJzaXRlcy90cmFpbmluZy9nZm4tMjAxNy0xMS9nZm4vc2VydmVyL3NyYy9zZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7R0FHRzs7QUFFSCx3Q0FBMEM7QUFFMUMsSUFBTSxNQUFNLEdBQVEsVUFBVSxDQUFDLE1BQU0sRUFBRyxDQUFDO0FBQ3pDLElBQU0sTUFBTSxHQUFRLFVBQVUsQ0FBQyxNQUFNLENBQUcsZ0JBQWdCLENBQUUsQ0FBQztBQUMzRCxJQUFNLFdBQVcsR0FBRyxVQUFVLENBQUMsUUFBUSxFQUFHLENBQUM7QUFFM0MsTUFBTSxDQUFDLE1BQU0sR0FBRyxVQUFDLEdBQUcsRUFBRSxHQUFHO0lBRXZCLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQztJQUN2QixFQUFFLENBQUMsQ0FBRSxHQUFHLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbEQsSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFFLENBQUMsT0FBTyxDQUFFLGlCQUFpQixFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2xGLFVBQVUsR0FBRyxLQUFLLEtBQUssU0FBUyxDQUFDO0lBQ25DLENBQUM7SUFHRCxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQ1IsSUFBSSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSTtRQUNyQixPQUFPLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsS0FBSyxHQUFHLENBQUU7UUFDeEQsVUFBVSxZQUFBO0tBQ1gsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBRUYscURBQXFEO0FBQ3JELG1DQUFtQztBQUNuQyxhQUFhO0FBQ2IsT0FBTztBQUVQLE1BQU0sQ0FBQyxHQUFHLENBQUcsV0FBVyxDQUFFLENBQUM7QUFDM0IsTUFBTSxDQUFDLEdBQUcsQ0FBRyxNQUFNLENBQUUsQ0FBQztBQUV0QixNQUFNLENBQUMsTUFBTSxDQUFHLElBQUksRUFBRTtJQUNwQixPQUFPLENBQUMsR0FBRyxDQUFHLHFDQUFxQyxDQUFFLENBQUM7QUFDeEQsQ0FBQyxDQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEZpbGUgY3JlYXRlZCBieSBzdWVubHVlIG9uIDE2LjExLjE3LlxuICogQ29weXJpZ2h0IChjKSAyMDE3IGJ5IG5ldFRyZWsgR21iSCAmIENvLiBLR1xuICovXG5cbmltcG9ydCAqIGFzIGpzb25TZXJ2ZXIgZnJvbSAnanNvbi1zZXJ2ZXInO1xuXG5jb25zdCBzZXJ2ZXIgICAgICA9IGpzb25TZXJ2ZXIuY3JlYXRlICgpO1xuY29uc3Qgcm91dGVyICAgICAgPSBqc29uU2VydmVyLnJvdXRlciAoICcuL21vY2svZGIuanNvbicgKTtcbmNvbnN0IG1pZGRsZXdhcmVzID0ganNvblNlcnZlci5kZWZhdWx0cyAoKTtcblxucm91dGVyLnJlbmRlciA9IChyZXEsIHJlcykgPT4ge1xuXG4gIGxldCBhdXRob3JpemVkID0gZmFsc2U7XG4gIGlmICggcmVxLmhlYWRlcnMuaGFzT3duUHJvcGVydHkoJ2F1dGhvcml6YXRpb24nKSApIHtcbiAgICBjb25zdCB0b2tlbiA9IFN0cmluZyggcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbiApLnJlcGxhY2UoIC8oKEJlYXJlcil8XFxzKS9naSwgJycpO1xuICAgIGF1dGhvcml6ZWQgPSB0b2tlbiA9PT0gJ25ldFRyZWsnO1xuICB9XG5cblxuICByZXMuanNvbnAoe1xuICAgIGRhdGE6IHJlcy5sb2NhbHMuZGF0YSxcbiAgICBzdWNjZXNzOiAhIXJlcy5sb2NhbHMuZGF0YSAmJiAoIHJlcy5zdGF0dXNDb2RlID09PSAyMDAgKSxcbiAgICBhdXRob3JpemVkXG4gIH0pO1xufTtcblxuLy8gc2VydmVyLmdldCAoICcvdXNlcnMvOmlkJywgKCByZXEsIHJlcywgbmV4dCApID0+IHtcbi8vICAgY29uc29sZS5sb2cgKCByZXEucGFyYW1zLmlkICk7XG4vLyAgIG5leHQgKCk7XG4vLyB9ICk7XG5cbnNlcnZlci51c2UgKCBtaWRkbGV3YXJlcyApO1xuc2VydmVyLnVzZSAoIHJvdXRlciApO1xuXG5zZXJ2ZXIubGlzdGVuICggMzAwMCwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyAoICdKU09OIFNlcnZlciBpcyBydW5uaW5nIG9uIHBvcnQgMzAwMCcgKTtcbn0gKTtcblxuIl19