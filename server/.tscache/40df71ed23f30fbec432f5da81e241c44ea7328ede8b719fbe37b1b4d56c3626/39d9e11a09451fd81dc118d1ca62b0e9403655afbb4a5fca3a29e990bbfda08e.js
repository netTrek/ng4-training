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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL3N1ZW5sdWUvV2Vic2l0ZXMvdHJhaW5pbmcvZ2ZuLTIwMTctMTEvZ2ZuL3NlcnZlci9zcmMvc2VydmVyLnRzIiwic291cmNlcyI6WyIvVXNlcnMvc3Vlbmx1ZS9XZWJzaXRlcy90cmFpbmluZy9nZm4tMjAxNy0xMS9nZm4vc2VydmVyL3NyYy9zZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7R0FHRzs7QUFFSCx3Q0FBMEM7QUFFMUMsNkNBQTRDO0FBRTVDLElBQU0sTUFBTSxHQUFRLFVBQVUsQ0FBQyxNQUFNLEVBQUcsQ0FBQztBQUN6QyxJQUFNLE1BQU0sR0FBUSxVQUFVLENBQUMsTUFBTSxDQUFHLGdCQUFnQixDQUFFLENBQUM7QUFDM0QsSUFBTSxXQUFXLEdBQUcsVUFBVSxDQUFDLFFBQVEsRUFBRyxDQUFDO0FBRTNDLE1BQU0sQ0FBQyxHQUFHLENBQUcsVUFBVSxDQUFDLFVBQVUsQ0FBRSxDQUFDO0FBRXJDLE1BQU0sQ0FBQyxHQUFHLENBQUcsT0FBTyxFQUFFLGtCQUFJLENBQUUsQ0FBQztBQUM3QixNQUFNLENBQUMsSUFBSSxDQUFHLFFBQVEsRUFBRSxtQkFBSyxDQUFFLENBQUM7QUFHaEMsTUFBTSxDQUFDLE1BQU0sR0FBRyxVQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSTtJQUU5QixFQUFFLENBQUMsQ0FBRSxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBRSxDQUFDLENBQUMsQ0FBQztRQUN0RSxJQUFJLEVBQUcsQ0FBQztRQUNSLE1BQU0sQ0FBQztJQUNULENBQUM7SUFFRCxJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDdkIsRUFBRSxDQUFDLENBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUcsZUFBZSxDQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3JELElBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBRTthQUMvQyxPQUFPLENBQUcsaUJBQWlCLEVBQUUsRUFBRSxDQUFFLENBQUM7UUFDckMsVUFBVSxHQUFJLEtBQUssS0FBSyxTQUFTLENBQUM7SUFDcEMsQ0FBQztJQUVELHVCQUF1QjtJQUN2QixtR0FBbUc7SUFDbkcsV0FBVztJQUNYLEdBQUcsQ0FBQyxNQUFNLENBQUcsZUFBZSxFQUFFLGdCQUFnQixDQUFFLENBQUM7SUFDakQsR0FBRyxDQUFDLElBQUksQ0FBRztRQUNULElBQUksRUFBSyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUk7UUFDeEIsT0FBTyxFQUFFLENBQUUsQ0FBRSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLEtBQUssR0FBRyxDQUFFO1FBQzFELFVBQVUsWUFBQTtLQUNYLENBQUUsQ0FBQztJQUNKLElBQUk7QUFFTixDQUFDLENBQUM7QUFFRixNQUFNLENBQUMsR0FBRyxDQUFHLFdBQVcsQ0FBRSxDQUFDO0FBQzNCLE1BQU0sQ0FBQyxHQUFHLENBQUcsTUFBTSxDQUFFLENBQUM7QUFHdEIsTUFBTSxDQUFDLE1BQU0sQ0FBRyxJQUFJLEVBQUU7SUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBRyxxQ0FBcUMsQ0FBRSxDQUFDO0FBQ3hELENBQUMsQ0FBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBGaWxlIGNyZWF0ZWQgYnkgc3Vlbmx1ZSBvbiAxNi4xMS4xNy5cbiAqIENvcHlyaWdodCAoYykgMjAxNyBieSBuZXRUcmVrIEdtYkggJiBDby4gS0dcbiAqL1xuXG5pbXBvcnQgKiBhcyBqc29uU2VydmVyIGZyb20gJ2pzb24tc2VydmVyJztcblxuaW1wb3J0IHsgYXV0aCwgbG9naW4gfSBmcm9tICcuL2F1dGhTZXJ2aWNlJztcblxuY29uc3Qgc2VydmVyICAgICAgPSBqc29uU2VydmVyLmNyZWF0ZSAoKTtcbmNvbnN0IHJvdXRlciAgICAgID0ganNvblNlcnZlci5yb3V0ZXIgKCAnLi9tb2NrL2RiLmpzb24nICk7XG5jb25zdCBtaWRkbGV3YXJlcyA9IGpzb25TZXJ2ZXIuZGVmYXVsdHMgKCk7XG5cbnNlcnZlci51c2UgKCBqc29uU2VydmVyLmJvZHlQYXJzZXIgKTtcblxuc2VydmVyLmdldCAoICcvYXV0aCcsIGF1dGggKTtcbnNlcnZlci5wb3N0ICggJy9sb2dpbicsIGxvZ2luICk7XG5cblxucm91dGVyLnJlbmRlciA9ICggcmVxLCByZXMsIG5leHQgKSA9PiB7XG5cbiAgaWYgKCByZXEudXJsLmluZGV4T2YoJ2F1dGgnKSA9PT0gMCB8fCByZXEudXJsLmluZGV4T2YoJ2xvZ2luJykgPT09IDAgKSB7XG4gICAgbmV4dCAoKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgYXV0aG9yaXplZCA9IGZhbHNlO1xuICBpZiAoIHJlcS5oZWFkZXJzLmhhc093blByb3BlcnR5ICggJ2F1dGhvcml6YXRpb24nICkgKSB7XG4gICAgY29uc3QgdG9rZW4gPSBTdHJpbmcgKCByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uIClcbiAgICAgIC5yZXBsYWNlICggLygoQmVhcmVyKXxcXHMpL2dpLCAnJyApO1xuICAgIGF1dGhvcml6ZWQgID0gdG9rZW4gPT09ICduZXRUcmVrJztcbiAgfVxuXG4gIC8vIGlmICggIWF1dGhvcml6ZWQgKSB7XG4gIC8vICAgcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBlcnJvcjogJ3VzZXIgaXMgbm90IGF1dGhvcml6ZWQnLCBhdXRob3JpemVkOiBmYWxzZSwgc3VjY2VzczogZmFsc2UgIH0pO1xuICAvLyB9IGVsc2Uge1xuICByZXMuaGVhZGVyICggJ2F1dGhvcml6YXRpb24nLCBgQmVhcmVyIG5ldFRyZWtgICk7XG4gIHJlcy5qc29uICgge1xuICAgIGRhdGEgICA6IHJlcy5sb2NhbHMuZGF0YSxcbiAgICBzdWNjZXNzOiAhICEgcmVzLmxvY2Fscy5kYXRhICYmICggcmVzLnN0YXR1c0NvZGUgPT09IDIwMCApLFxuICAgIGF1dGhvcml6ZWRcbiAgfSApO1xuICAvLyB9XG5cbn07XG5cbnNlcnZlci51c2UgKCBtaWRkbGV3YXJlcyApO1xuc2VydmVyLnVzZSAoIHJvdXRlciApO1xuXG5cbnNlcnZlci5saXN0ZW4gKCAzMDAwLCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nICggJ0pTT04gU2VydmVyIGlzIHJ1bm5pbmcgb24gcG9ydCAzMDAwJyApO1xufSApO1xuXG4iXX0=