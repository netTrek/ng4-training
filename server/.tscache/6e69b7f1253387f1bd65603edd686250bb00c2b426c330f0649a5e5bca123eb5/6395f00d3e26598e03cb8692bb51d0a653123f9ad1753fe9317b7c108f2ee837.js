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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL3N1ZW5sdWUvV2Vic2l0ZXMvdHJhaW5pbmcvZ2ZuLTIwMTctMTEvZ2ZuL3NlcnZlci9zcmMvc2VydmVyLnRzIiwic291cmNlcyI6WyIvVXNlcnMvc3Vlbmx1ZS9XZWJzaXRlcy90cmFpbmluZy9nZm4tMjAxNy0xMS9nZm4vc2VydmVyL3NyYy9zZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7R0FHRzs7QUFFSCx3Q0FBMEM7QUFFMUMsSUFBTSxNQUFNLEdBQVEsVUFBVSxDQUFDLE1BQU0sRUFBRyxDQUFDO0FBQ3pDLElBQU0sTUFBTSxHQUFRLFVBQVUsQ0FBQyxNQUFNLENBQUcsZ0JBQWdCLENBQUUsQ0FBQztBQUMzRCxJQUFNLFdBQVcsR0FBRyxVQUFVLENBQUMsUUFBUSxFQUFHLENBQUM7QUFHM0MscURBQXFEO0FBQ3JELDZCQUE2QjtBQUM3QixhQUFhO0FBQ2IsT0FBTztBQUVQLE1BQU0sQ0FBQyxNQUFNLEdBQUcsVUFBQyxHQUFHLEVBQUUsR0FBRztJQUN2QixPQUFPLENBQUMsR0FBRyxDQUFHLFFBQVEsQ0FBRSxDQUFDO0lBQ3pCLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQztJQUN2QixFQUFFLENBQUMsQ0FBRSxHQUFHLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbEQsSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFFLENBQUMsT0FBTyxDQUFFLGlCQUFpQixFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2xGLFVBQVUsR0FBRyxLQUFLLEtBQUssU0FBUyxDQUFDO0lBQ25DLENBQUM7SUFFRCx1QkFBdUI7SUFDdkIsbUdBQW1HO0lBQ25HLFdBQVc7SUFDVCxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ1AsSUFBSSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSTtRQUNyQixPQUFPLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsS0FBSyxHQUFHLENBQUU7UUFDeEQsVUFBVSxZQUFBO0tBQ1gsQ0FBQyxDQUFDO0lBQ0wsSUFBSTtBQUVOLENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxHQUFHLENBQUcsV0FBVyxDQUFFLENBQUM7QUFDM0IsTUFBTSxDQUFDLEdBQUcsQ0FBRyxNQUFNLENBQUUsQ0FBQztBQUV0QixNQUFNLENBQUMsTUFBTSxDQUFHLElBQUksRUFBRTtJQUNwQixPQUFPLENBQUMsR0FBRyxDQUFHLHFDQUFxQyxDQUFFLENBQUM7QUFDeEQsQ0FBQyxDQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEZpbGUgY3JlYXRlZCBieSBzdWVubHVlIG9uIDE2LjExLjE3LlxuICogQ29weXJpZ2h0IChjKSAyMDE3IGJ5IG5ldFRyZWsgR21iSCAmIENvLiBLR1xuICovXG5cbmltcG9ydCAqIGFzIGpzb25TZXJ2ZXIgZnJvbSAnanNvbi1zZXJ2ZXInO1xuXG5jb25zdCBzZXJ2ZXIgICAgICA9IGpzb25TZXJ2ZXIuY3JlYXRlICgpO1xuY29uc3Qgcm91dGVyICAgICAgPSBqc29uU2VydmVyLnJvdXRlciAoICcuL21vY2svZGIuanNvbicgKTtcbmNvbnN0IG1pZGRsZXdhcmVzID0ganNvblNlcnZlci5kZWZhdWx0cyAoKTtcblxuXG4vLyBzZXJ2ZXIuZ2V0ICggJy91c2Vycy86aWQnLCAoIHJlcSwgcmVzLCBuZXh0ICkgPT4ge1xuLy8gICBjb25zb2xlLmxvZyAoICdyb3V0ZScgKTtcbi8vICAgbmV4dCAoKTtcbi8vIH0gKTtcblxucm91dGVyLnJlbmRlciA9IChyZXEsIHJlcyApID0+IHtcbiAgY29uc29sZS5sb2cgKCAncmVuZGVyJyApO1xuICBsZXQgYXV0aG9yaXplZCA9IGZhbHNlO1xuICBpZiAoIHJlcS5oZWFkZXJzLmhhc093blByb3BlcnR5KCdhdXRob3JpemF0aW9uJykgKSB7XG4gICAgY29uc3QgdG9rZW4gPSBTdHJpbmcoIHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb24gKS5yZXBsYWNlKCAvKChCZWFyZXIpfFxccykvZ2ksICcnKTtcbiAgICBhdXRob3JpemVkID0gdG9rZW4gPT09ICduZXRUcmVrJztcbiAgfVxuXG4gIC8vIGlmICggIWF1dGhvcml6ZWQgKSB7XG4gIC8vICAgcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBlcnJvcjogJ3VzZXIgaXMgbm90IGF1dGhvcml6ZWQnLCBhdXRob3JpemVkOiBmYWxzZSwgc3VjY2VzczogZmFsc2UgIH0pO1xuICAvLyB9IGVsc2Uge1xuICAgIHJlcy5qc29uKHtcbiAgICAgIGRhdGE6IHJlcy5sb2NhbHMuZGF0YSxcbiAgICAgIHN1Y2Nlc3M6ICEhcmVzLmxvY2Fscy5kYXRhICYmICggcmVzLnN0YXR1c0NvZGUgPT09IDIwMCApLFxuICAgICAgYXV0aG9yaXplZFxuICAgIH0pO1xuICAvLyB9XG5cbn07XG5cbnNlcnZlci51c2UgKCBtaWRkbGV3YXJlcyApO1xuc2VydmVyLnVzZSAoIHJvdXRlciApO1xuXG5zZXJ2ZXIubGlzdGVuICggMzAwMCwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyAoICdKU09OIFNlcnZlciBpcyBydW5uaW5nIG9uIHBvcnQgMzAwMCcgKTtcbn0gKTtcblxuIl19