"use strict";
/**
 * File created by suenlue on 16.11.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */
Object.defineProperty(exports, "__esModule", { value: true });
var jsonServer = require("json-server");
var authService_1 = require("./authService");
var server = jsonServer.create();
var router = jsonServer.router('./mock/db.json');
var middlewares = jsonServer.defaults();
server.use(jsonServer.bodyParser);
server.get('/auth', authService_1.auth);
server.post('/login', authService_1.login);
router.render = function (req, res, next) {
    if (req.url.indexOf('auth') === 0 || req.url.indexOf('login') === 0) {
        next();
        return;
    }
    var authorized = false;
    if (req.headers.hasOwnProperty('authorization')) {
        var token = String(req.headers.authorization)
            .replace(/((Bearer)|\s)/gi, '');
        authorized = token === 'netTrek';
    }
    if (!authorized) {
        res.status(401)
            .json({ error: 'user is not authorized', authorized: false, success: false });
    }
    else {
        // res.header ( 'authorization', `Bearer netTrek` );
        res.json({
            data: res.locals.data,
            success: !!res.locals.data && (res.statusCode === 200),
            authorized: authorized
        });
    }
};
server.use(middlewares);
server.use(router);
server.listen(3000, function () {
    console.log('JSON Server is running on port 3000');
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL3N1ZW5sdWUvV2Vic2l0ZXMvdHJhaW5pbmcvZ2ZuLTIwMTctMTEvZ2ZuL3NlcnZlci9zcmMvc2VydmVyLnRzIiwic291cmNlcyI6WyIvVXNlcnMvc3Vlbmx1ZS9XZWJzaXRlcy90cmFpbmluZy9nZm4tMjAxNy0xMS9nZm4vc2VydmVyL3NyYy9zZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7R0FHRzs7QUFFSCx3Q0FBMEM7QUFFMUMsNkNBQTRDO0FBRTVDLElBQU0sTUFBTSxHQUFRLFVBQVUsQ0FBQyxNQUFNLEVBQUcsQ0FBQztBQUN6QyxJQUFNLE1BQU0sR0FBUSxVQUFVLENBQUMsTUFBTSxDQUFHLGdCQUFnQixDQUFFLENBQUM7QUFDM0QsSUFBTSxXQUFXLEdBQUcsVUFBVSxDQUFDLFFBQVEsRUFBRyxDQUFDO0FBRTNDLE1BQU0sQ0FBQyxHQUFHLENBQUcsVUFBVSxDQUFDLFVBQVUsQ0FBRSxDQUFDO0FBRXJDLE1BQU0sQ0FBQyxHQUFHLENBQUcsT0FBTyxFQUFFLGtCQUFJLENBQUUsQ0FBQztBQUM3QixNQUFNLENBQUMsSUFBSSxDQUFHLFFBQVEsRUFBRSxtQkFBSyxDQUFFLENBQUM7QUFFaEMsTUFBTSxDQUFDLE1BQU0sR0FBRyxVQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSTtJQUU5QixFQUFFLENBQUMsQ0FBRSxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBRyxNQUFNLENBQUUsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUcsT0FBTyxDQUFFLEtBQUssQ0FBRSxDQUFDLENBQUMsQ0FBQztRQUM1RSxJQUFJLEVBQUcsQ0FBQztRQUNSLE1BQU0sQ0FBQztJQUNULENBQUM7SUFFRCxJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDdkIsRUFBRSxDQUFDLENBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUcsZUFBZSxDQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3JELElBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBRTthQUMvQyxPQUFPLENBQUcsaUJBQWlCLEVBQUUsRUFBRSxDQUFFLENBQUM7UUFDckMsVUFBVSxHQUFJLEtBQUssS0FBSyxTQUFTLENBQUM7SUFDcEMsQ0FBQztJQUVELEVBQUUsQ0FBQyxDQUFFLENBQUUsVUFBVyxDQUFDLENBQUMsQ0FBQztRQUNuQixHQUFHLENBQUMsTUFBTSxDQUFHLEdBQUcsQ0FBRTthQUNkLElBQUksQ0FBRyxFQUFFLEtBQUssRUFBRSx3QkFBd0IsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBRSxDQUFDO0lBQ3RGLENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNOLG9EQUFvRDtRQUNwRCxHQUFHLENBQUMsSUFBSSxDQUFHO1lBQ1QsSUFBSSxFQUFLLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSTtZQUN4QixPQUFPLEVBQUUsQ0FBRSxDQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUUsR0FBRyxDQUFDLFVBQVUsS0FBSyxHQUFHLENBQUU7WUFDMUQsVUFBVSxZQUFBO1NBQ1gsQ0FBRSxDQUFDO0lBQ04sQ0FBQztBQUVILENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxHQUFHLENBQUcsV0FBVyxDQUFFLENBQUM7QUFDM0IsTUFBTSxDQUFDLEdBQUcsQ0FBRyxNQUFNLENBQUUsQ0FBQztBQUV0QixNQUFNLENBQUMsTUFBTSxDQUFHLElBQUksRUFBRTtJQUNwQixPQUFPLENBQUMsR0FBRyxDQUFHLHFDQUFxQyxDQUFFLENBQUM7QUFDeEQsQ0FBQyxDQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEZpbGUgY3JlYXRlZCBieSBzdWVubHVlIG9uIDE2LjExLjE3LlxuICogQ29weXJpZ2h0IChjKSAyMDE3IGJ5IG5ldFRyZWsgR21iSCAmIENvLiBLR1xuICovXG5cbmltcG9ydCAqIGFzIGpzb25TZXJ2ZXIgZnJvbSAnanNvbi1zZXJ2ZXInO1xuXG5pbXBvcnQgeyBhdXRoLCBsb2dpbiB9IGZyb20gJy4vYXV0aFNlcnZpY2UnO1xuXG5jb25zdCBzZXJ2ZXIgICAgICA9IGpzb25TZXJ2ZXIuY3JlYXRlICgpO1xuY29uc3Qgcm91dGVyICAgICAgPSBqc29uU2VydmVyLnJvdXRlciAoICcuL21vY2svZGIuanNvbicgKTtcbmNvbnN0IG1pZGRsZXdhcmVzID0ganNvblNlcnZlci5kZWZhdWx0cyAoKTtcblxuc2VydmVyLnVzZSAoIGpzb25TZXJ2ZXIuYm9keVBhcnNlciApO1xuXG5zZXJ2ZXIuZ2V0ICggJy9hdXRoJywgYXV0aCApO1xuc2VydmVyLnBvc3QgKCAnL2xvZ2luJywgbG9naW4gKTtcblxucm91dGVyLnJlbmRlciA9ICggcmVxLCByZXMsIG5leHQgKSA9PiB7XG5cbiAgaWYgKCByZXEudXJsLmluZGV4T2YgKCAnYXV0aCcgKSA9PT0gMCB8fCByZXEudXJsLmluZGV4T2YgKCAnbG9naW4nICkgPT09IDAgKSB7XG4gICAgbmV4dCAoKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgYXV0aG9yaXplZCA9IGZhbHNlO1xuICBpZiAoIHJlcS5oZWFkZXJzLmhhc093blByb3BlcnR5ICggJ2F1dGhvcml6YXRpb24nICkgKSB7XG4gICAgY29uc3QgdG9rZW4gPSBTdHJpbmcgKCByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uIClcbiAgICAgIC5yZXBsYWNlICggLygoQmVhcmVyKXxcXHMpL2dpLCAnJyApO1xuICAgIGF1dGhvcml6ZWQgID0gdG9rZW4gPT09ICduZXRUcmVrJztcbiAgfVxuXG4gIGlmICggISBhdXRob3JpemVkICkge1xuICAgIHJlcy5zdGF0dXMgKCA0MDEgKVxuICAgICAgIC5qc29uICggeyBlcnJvcjogJ3VzZXIgaXMgbm90IGF1dGhvcml6ZWQnLCBhdXRob3JpemVkOiBmYWxzZSwgc3VjY2VzczogZmFsc2UgfSApO1xuICB9IGVsc2Uge1xuICAgIC8vIHJlcy5oZWFkZXIgKCAnYXV0aG9yaXphdGlvbicsIGBCZWFyZXIgbmV0VHJla2AgKTtcbiAgICByZXMuanNvbiAoIHtcbiAgICAgIGRhdGEgICA6IHJlcy5sb2NhbHMuZGF0YSxcbiAgICAgIHN1Y2Nlc3M6ICEgISByZXMubG9jYWxzLmRhdGEgJiYgKCByZXMuc3RhdHVzQ29kZSA9PT0gMjAwICksXG4gICAgICBhdXRob3JpemVkXG4gICAgfSApO1xuICB9XG5cbn07XG5cbnNlcnZlci51c2UgKCBtaWRkbGV3YXJlcyApO1xuc2VydmVyLnVzZSAoIHJvdXRlciApO1xuXG5zZXJ2ZXIubGlzdGVuICggMzAwMCwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyAoICdKU09OIFNlcnZlciBpcyBydW5uaW5nIG9uIHBvcnQgMzAwMCcgKTtcbn0gKTtcblxuIl19