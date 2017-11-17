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
    console.log(res);
    res.json({ success: true, data: res.locals.data });
    // next ();
});
server.use(middlewares);
server.use(router);
server.listen(3000, function () {
    console.log('JSON Server is running on port 3000');
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL3N1ZW5sdWUvV2Vic2l0ZXMvdHJhaW5pbmcvZ2ZuLTIwMTctMTEvZ2ZuL3NlcnZlci9zcmMvc2VydmVyLnRzIiwic291cmNlcyI6WyIvVXNlcnMvc3Vlbmx1ZS9XZWJzaXRlcy90cmFpbmluZy9nZm4tMjAxNy0xMS9nZm4vc2VydmVyL3NyYy9zZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7R0FHRzs7QUFFSCx3Q0FBMEM7QUFFMUMsSUFBTSxNQUFNLEdBQVEsVUFBVSxDQUFDLE1BQU0sRUFBRyxDQUFDO0FBQ3pDLElBQU0sTUFBTSxHQUFRLFVBQVUsQ0FBQyxNQUFNLENBQUcsZ0JBQWdCLENBQUUsQ0FBQztBQUMzRCxJQUFNLFdBQVcsR0FBRyxVQUFVLENBQUMsUUFBUSxFQUFHLENBQUM7QUFFM0Msa0NBQWtDO0FBQ2xDLEVBQUU7QUFDRiw0QkFBNEI7QUFDNUIseURBQXlEO0FBQ3pELHlGQUF5RjtBQUN6Rix3Q0FBd0M7QUFDeEMsTUFBTTtBQUNOLEVBQUU7QUFDRixnQkFBZ0I7QUFDaEIsNkJBQTZCO0FBQzdCLGlCQUFpQjtBQUNqQixRQUFRO0FBQ1IsS0FBSztBQUVMLE1BQU0sQ0FBQyxHQUFHLENBQUcsWUFBWSxFQUFFLFVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJO0lBRXpDLE9BQU8sQ0FBQyxHQUFHLENBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUUsQ0FBQztJQUM5QixPQUFPLENBQUMsR0FBRyxDQUFHLEdBQUcsQ0FBRSxDQUFDO0lBRXBCLEdBQUcsQ0FBQyxJQUFJLENBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFFLENBQUM7SUFDckQsV0FBVztBQUNiLENBQUMsQ0FBRSxDQUFDO0FBRUosTUFBTSxDQUFDLEdBQUcsQ0FBRyxXQUFXLENBQUUsQ0FBQztBQUMzQixNQUFNLENBQUMsR0FBRyxDQUFHLE1BQU0sQ0FBRSxDQUFDO0FBRXRCLE1BQU0sQ0FBQyxNQUFNLENBQUcsSUFBSSxFQUFFO0lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUcscUNBQXFDLENBQUUsQ0FBQztBQUN4RCxDQUFDLENBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRmlsZSBjcmVhdGVkIGJ5IHN1ZW5sdWUgb24gMTYuMTEuMTcuXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgYnkgbmV0VHJlayBHbWJIICYgQ28uIEtHXG4gKi9cblxuaW1wb3J0ICogYXMganNvblNlcnZlciBmcm9tICdqc29uLXNlcnZlcic7XG5cbmNvbnN0IHNlcnZlciAgICAgID0ganNvblNlcnZlci5jcmVhdGUgKCk7XG5jb25zdCByb3V0ZXIgICAgICA9IGpzb25TZXJ2ZXIucm91dGVyICggJy4vbW9jay9kYi5qc29uJyApO1xuY29uc3QgbWlkZGxld2FyZXMgPSBqc29uU2VydmVyLmRlZmF1bHRzICgpO1xuXG4vLyByb3V0ZXIucmVuZGVyID0gKHJlcSwgcmVzKSA9PiB7XG4vL1xuLy8gICBsZXQgYXV0aG9yaXplZCA9IGZhbHNlO1xuLy8gICBpZiAoIHJlcS5oZWFkZXJzLmhhc093blByb3BlcnR5KCdhdXRob3JpemF0aW9uJykgKSB7XG4vLyAgICAgY29uc3QgdG9rZW4gPSBTdHJpbmcoIHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb24gKS5yZXBsYWNlKCAvKChCZWFyZXIpfFxccykvZ2ksICcnKTtcbi8vICAgICBhdXRob3JpemVkID0gdG9rZW4gPT09ICduZXRUcmVrJztcbi8vICAgfVxuLy9cbi8vICAgcmVzLmpzb25wKHtcbi8vICAgICBkYXRhOiByZXMubG9jYWxzLmRhdGEsXG4vLyAgICAgYXV0aG9yaXplZFxuLy8gICB9KTtcbi8vIH07XG5cbnNlcnZlci5nZXQgKCAnL3VzZXJzLzppZCcsICggcmVxLCByZXMsIG5leHQgKSA9PiB7XG5cbiAgY29uc29sZS5sb2cgKCByZXEucGFyYW1zLmlkICk7XG4gIGNvbnNvbGUubG9nICggcmVzICk7XG5cbiAgcmVzLmpzb24oIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzLmxvY2Fscy5kYXRhIH0gKTtcbiAgLy8gbmV4dCAoKTtcbn0gKTtcblxuc2VydmVyLnVzZSAoIG1pZGRsZXdhcmVzICk7XG5zZXJ2ZXIudXNlICggcm91dGVyICk7XG5cbnNlcnZlci5saXN0ZW4gKCAzMDAwLCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nICggJ0pTT04gU2VydmVyIGlzIHJ1bm5pbmcgb24gcG9ydCAzMDAwJyApO1xufSApO1xuXG4iXX0=