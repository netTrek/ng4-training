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
        res.send(401).jsonp({ error: 'message' });
    }
    else {
        res.jsonp({
            data: res.locals.data,
            success: !!res.locals.data && (res.statusCode === 200),
            authorized: authorized
        });
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL3N1ZW5sdWUvV2Vic2l0ZXMvdHJhaW5pbmcvZ2ZuLTIwMTctMTEvZ2ZuL3NlcnZlci9zcmMvc2VydmVyLnRzIiwic291cmNlcyI6WyIvVXNlcnMvc3Vlbmx1ZS9XZWJzaXRlcy90cmFpbmluZy9nZm4tMjAxNy0xMS9nZm4vc2VydmVyL3NyYy9zZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7R0FHRzs7QUFFSCx3Q0FBMEM7QUFFMUMsSUFBTSxNQUFNLEdBQVEsVUFBVSxDQUFDLE1BQU0sRUFBRyxDQUFDO0FBQ3pDLElBQU0sTUFBTSxHQUFRLFVBQVUsQ0FBQyxNQUFNLENBQUcsZ0JBQWdCLENBQUUsQ0FBQztBQUMzRCxJQUFNLFdBQVcsR0FBRyxVQUFVLENBQUMsUUFBUSxFQUFHLENBQUM7QUFFM0MsTUFBTSxDQUFDLE1BQU0sR0FBRyxVQUFDLEdBQUcsRUFBRSxHQUFHO0lBRXZCLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQztJQUN2QixFQUFFLENBQUMsQ0FBRSxHQUFHLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbEQsSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFFLENBQUMsT0FBTyxDQUFFLGlCQUFpQixFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2xGLFVBQVUsR0FBRyxLQUFLLEtBQUssU0FBUyxDQUFDO0lBQ25DLENBQUM7SUFFRCxFQUFFLENBQUMsQ0FBRSxDQUFDLFVBQVcsQ0FBQyxDQUFDLENBQUM7UUFDbEIsR0FBRyxDQUFDLElBQUksQ0FBRyxHQUFHLENBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDTixHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ1IsSUFBSSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSTtZQUNyQixPQUFPLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsS0FBSyxHQUFHLENBQUU7WUFDeEQsVUFBVSxZQUFBO1NBQ1gsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztBQUVILENBQUMsQ0FBQztBQUVGLHFEQUFxRDtBQUNyRCxtQ0FBbUM7QUFDbkMsYUFBYTtBQUNiLE9BQU87QUFFUCxNQUFNLENBQUMsR0FBRyxDQUFHLFdBQVcsQ0FBRSxDQUFDO0FBQzNCLE1BQU0sQ0FBQyxHQUFHLENBQUcsTUFBTSxDQUFFLENBQUM7QUFFdEIsTUFBTSxDQUFDLE1BQU0sQ0FBRyxJQUFJLEVBQUU7SUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBRyxxQ0FBcUMsQ0FBRSxDQUFDO0FBQ3hELENBQUMsQ0FBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBGaWxlIGNyZWF0ZWQgYnkgc3Vlbmx1ZSBvbiAxNi4xMS4xNy5cbiAqIENvcHlyaWdodCAoYykgMjAxNyBieSBuZXRUcmVrIEdtYkggJiBDby4gS0dcbiAqL1xuXG5pbXBvcnQgKiBhcyBqc29uU2VydmVyIGZyb20gJ2pzb24tc2VydmVyJztcblxuY29uc3Qgc2VydmVyICAgICAgPSBqc29uU2VydmVyLmNyZWF0ZSAoKTtcbmNvbnN0IHJvdXRlciAgICAgID0ganNvblNlcnZlci5yb3V0ZXIgKCAnLi9tb2NrL2RiLmpzb24nICk7XG5jb25zdCBtaWRkbGV3YXJlcyA9IGpzb25TZXJ2ZXIuZGVmYXVsdHMgKCk7XG5cbnJvdXRlci5yZW5kZXIgPSAocmVxLCByZXMpID0+IHtcblxuICBsZXQgYXV0aG9yaXplZCA9IGZhbHNlO1xuICBpZiAoIHJlcS5oZWFkZXJzLmhhc093blByb3BlcnR5KCdhdXRob3JpemF0aW9uJykgKSB7XG4gICAgY29uc3QgdG9rZW4gPSBTdHJpbmcoIHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb24gKS5yZXBsYWNlKCAvKChCZWFyZXIpfFxccykvZ2ksICcnKTtcbiAgICBhdXRob3JpemVkID0gdG9rZW4gPT09ICduZXRUcmVrJztcbiAgfVxuXG4gIGlmICggIWF1dGhvcml6ZWQgKSB7XG4gICAgcmVzLnNlbmQgKCA0MDEgKS5qc29ucCh7IGVycm9yOiAnbWVzc2FnZScgfSk7XG4gIH0gZWxzZSB7XG4gICAgcmVzLmpzb25wKHtcbiAgICAgIGRhdGE6IHJlcy5sb2NhbHMuZGF0YSxcbiAgICAgIHN1Y2Nlc3M6ICEhcmVzLmxvY2Fscy5kYXRhICYmICggcmVzLnN0YXR1c0NvZGUgPT09IDIwMCApLFxuICAgICAgYXV0aG9yaXplZFxuICAgIH0pO1xuICB9XG5cbn07XG5cbi8vIHNlcnZlci5nZXQgKCAnL3VzZXJzLzppZCcsICggcmVxLCByZXMsIG5leHQgKSA9PiB7XG4vLyAgIGNvbnNvbGUubG9nICggcmVxLnBhcmFtcy5pZCApO1xuLy8gICBuZXh0ICgpO1xuLy8gfSApO1xuXG5zZXJ2ZXIudXNlICggbWlkZGxld2FyZXMgKTtcbnNlcnZlci51c2UgKCByb3V0ZXIgKTtcblxuc2VydmVyLmxpc3RlbiAoIDMwMDAsICgpID0+IHtcbiAgY29uc29sZS5sb2cgKCAnSlNPTiBTZXJ2ZXIgaXMgcnVubmluZyBvbiBwb3J0IDMwMDAnICk7XG59ICk7XG5cbiJdfQ==