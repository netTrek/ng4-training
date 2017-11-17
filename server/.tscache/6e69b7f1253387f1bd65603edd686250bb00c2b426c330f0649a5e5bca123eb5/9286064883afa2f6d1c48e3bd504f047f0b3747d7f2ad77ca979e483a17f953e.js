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
// server.get ( '/users/:id', ( req, res, next ) => {
//   console.log ( 'route' );
//   next ();
// } );
router.render = function (req, res) {
    console.log('render');
    var authorized = false;
    if (req.headers.hasOwnProperty('authorization')) {
        var token = String(req.headers.authorization).replace(/((Bearer)|\s)/gi, '');
        authorized = token === 'netTrek';
    }
    // if ( !authorized ) {
    //   res.status(401).json({ error: 'user is not authorized', authorized: false, success: false  });
    // } else {
    res.header('authorization', "Bearer netTrek");
    res.json({
        data: res.locals.data,
        success: !!res.locals.data && (res.statusCode === 200),
        authorized: authorized
    });
    // }
};
server.use(middlewares);
server.use(router);
server.listen(3000, function () {
    console.log('JSON Server is running on port 3000');
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL3N1ZW5sdWUvV2Vic2l0ZXMvdHJhaW5pbmcvZ2ZuLTIwMTctMTEvZ2ZuL3NlcnZlci9zcmMvc2VydmVyLnRzIiwic291cmNlcyI6WyIvVXNlcnMvc3Vlbmx1ZS9XZWJzaXRlcy90cmFpbmluZy9nZm4tMjAxNy0xMS9nZm4vc2VydmVyL3NyYy9zZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7R0FHRzs7QUFFSCx3Q0FBMEM7QUFFMUMsSUFBTSxNQUFNLEdBQVEsVUFBVSxDQUFDLE1BQU0sRUFBRyxDQUFDO0FBQ3pDLElBQU0sTUFBTSxHQUFRLFVBQVUsQ0FBQyxNQUFNLENBQUcsZ0JBQWdCLENBQUUsQ0FBQztBQUMzRCxJQUFNLFdBQVcsR0FBRyxVQUFVLENBQUMsUUFBUSxFQUFHLENBQUM7QUFHM0MscURBQXFEO0FBQ3JELDZCQUE2QjtBQUM3QixhQUFhO0FBQ2IsT0FBTztBQUVQLE1BQU0sQ0FBQyxNQUFNLEdBQUcsVUFBQyxHQUFHLEVBQUUsR0FBRztJQUN2QixPQUFPLENBQUMsR0FBRyxDQUFHLFFBQVEsQ0FBRSxDQUFDO0lBQ3pCLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQztJQUN2QixFQUFFLENBQUMsQ0FBRSxHQUFHLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbEQsSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFFLENBQUMsT0FBTyxDQUFFLGlCQUFpQixFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2xGLFVBQVUsR0FBRyxLQUFLLEtBQUssU0FBUyxDQUFDO0lBQ25DLENBQUM7SUFFRCx1QkFBdUI7SUFDdkIsbUdBQW1HO0lBQ25HLFdBQVc7SUFDVCxHQUFHLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzlDLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDUCxJQUFJLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJO1FBQ3JCLE9BQU8sRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBRSxHQUFHLENBQUMsVUFBVSxLQUFLLEdBQUcsQ0FBRTtRQUN4RCxVQUFVLFlBQUE7S0FDWCxDQUFDLENBQUM7SUFDTCxJQUFJO0FBRU4sQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUFDLEdBQUcsQ0FBRyxXQUFXLENBQUUsQ0FBQztBQUMzQixNQUFNLENBQUMsR0FBRyxDQUFHLE1BQU0sQ0FBRSxDQUFDO0FBRXRCLE1BQU0sQ0FBQyxNQUFNLENBQUcsSUFBSSxFQUFFO0lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUcscUNBQXFDLENBQUUsQ0FBQztBQUN4RCxDQUFDLENBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRmlsZSBjcmVhdGVkIGJ5IHN1ZW5sdWUgb24gMTYuMTEuMTcuXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgYnkgbmV0VHJlayBHbWJIICYgQ28uIEtHXG4gKi9cblxuaW1wb3J0ICogYXMganNvblNlcnZlciBmcm9tICdqc29uLXNlcnZlcic7XG5cbmNvbnN0IHNlcnZlciAgICAgID0ganNvblNlcnZlci5jcmVhdGUgKCk7XG5jb25zdCByb3V0ZXIgICAgICA9IGpzb25TZXJ2ZXIucm91dGVyICggJy4vbW9jay9kYi5qc29uJyApO1xuY29uc3QgbWlkZGxld2FyZXMgPSBqc29uU2VydmVyLmRlZmF1bHRzICgpO1xuXG5cbi8vIHNlcnZlci5nZXQgKCAnL3VzZXJzLzppZCcsICggcmVxLCByZXMsIG5leHQgKSA9PiB7XG4vLyAgIGNvbnNvbGUubG9nICggJ3JvdXRlJyApO1xuLy8gICBuZXh0ICgpO1xuLy8gfSApO1xuXG5yb3V0ZXIucmVuZGVyID0gKHJlcSwgcmVzICkgPT4ge1xuICBjb25zb2xlLmxvZyAoICdyZW5kZXInICk7XG4gIGxldCBhdXRob3JpemVkID0gZmFsc2U7XG4gIGlmICggcmVxLmhlYWRlcnMuaGFzT3duUHJvcGVydHkoJ2F1dGhvcml6YXRpb24nKSApIHtcbiAgICBjb25zdCB0b2tlbiA9IFN0cmluZyggcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbiApLnJlcGxhY2UoIC8oKEJlYXJlcil8XFxzKS9naSwgJycpO1xuICAgIGF1dGhvcml6ZWQgPSB0b2tlbiA9PT0gJ25ldFRyZWsnO1xuICB9XG5cbiAgLy8gaWYgKCAhYXV0aG9yaXplZCApIHtcbiAgLy8gICByZXMuc3RhdHVzKDQwMSkuanNvbih7IGVycm9yOiAndXNlciBpcyBub3QgYXV0aG9yaXplZCcsIGF1dGhvcml6ZWQ6IGZhbHNlLCBzdWNjZXNzOiBmYWxzZSAgfSk7XG4gIC8vIH0gZWxzZSB7XG4gICAgcmVzLmhlYWRlcignYXV0aG9yaXphdGlvbicsIGBCZWFyZXIgbmV0VHJla2ApO1xuICAgIHJlcy5qc29uKHtcbiAgICAgIGRhdGE6IHJlcy5sb2NhbHMuZGF0YSxcbiAgICAgIHN1Y2Nlc3M6ICEhcmVzLmxvY2Fscy5kYXRhICYmICggcmVzLnN0YXR1c0NvZGUgPT09IDIwMCApLFxuICAgICAgYXV0aG9yaXplZFxuICAgIH0pO1xuICAvLyB9XG5cbn07XG5cbnNlcnZlci51c2UgKCBtaWRkbGV3YXJlcyApO1xuc2VydmVyLnVzZSAoIHJvdXRlciApO1xuXG5zZXJ2ZXIubGlzdGVuICggMzAwMCwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyAoICdKU09OIFNlcnZlciBpcyBydW5uaW5nIG9uIHBvcnQgMzAwMCcgKTtcbn0gKTtcblxuIl19