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
server.post('/login', function (req, res) {
    var _a = req.body, username = _a.username, password = _a.password;
    var success = username === 'netTrek' && password === 'netTrek';
    var authorized = success;
    if (success) {
        res.header('authorization', "Bearer netTrek");
        res.status(200);
    }
    else {
        res.status(401);
    }
    res.json({ success: success, authorized: authorized });
});
router.render = function (req, res, next) {
    if (req.url.indexOf('auth') === 0) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL3N1ZW5sdWUvV2Vic2l0ZXMvdHJhaW5pbmcvZ2ZuLTIwMTctMTEvZ2ZuL3NlcnZlci9zcmMvc2VydmVyLnRzIiwic291cmNlcyI6WyIvVXNlcnMvc3Vlbmx1ZS9XZWJzaXRlcy90cmFpbmluZy9nZm4tMjAxNy0xMS9nZm4vc2VydmVyL3NyYy9zZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7R0FHRzs7QUFFSCx3Q0FBMEM7QUFDMUMsNkNBQXFDO0FBRXJDLElBQU0sTUFBTSxHQUFRLFVBQVUsQ0FBQyxNQUFNLEVBQUcsQ0FBQztBQUN6QyxJQUFNLE1BQU0sR0FBUSxVQUFVLENBQUMsTUFBTSxDQUFHLGdCQUFnQixDQUFFLENBQUM7QUFDM0QsSUFBTSxXQUFXLEdBQUcsVUFBVSxDQUFDLFFBQVEsRUFBRyxDQUFDO0FBRTNDLE1BQU0sQ0FBQyxHQUFHLENBQUcsVUFBVSxDQUFDLFVBQVUsQ0FBRSxDQUFDO0FBRXJDLE1BQU0sQ0FBQyxHQUFHLENBQUcsT0FBTyxFQUFFLGtCQUFJLENBQUUsQ0FBQztBQUU3QixNQUFNLENBQUMsSUFBSSxDQUFHLFFBQVEsRUFBRSxVQUFFLEdBQUcsRUFBRSxHQUFHO0lBQzFCLElBQUEsYUFBaUMsRUFBL0Isc0JBQVEsRUFBRSxzQkFBUSxDQUFjO0lBQ3hDLElBQU0sT0FBTyxHQUFrQixRQUFRLEtBQUssU0FBUyxJQUFJLFFBQVEsS0FBSyxTQUFTLENBQUM7SUFDaEYsSUFBTSxVQUFVLEdBQWUsT0FBTyxDQUFDO0lBQ3ZDLEVBQUUsQ0FBQyxDQUFFLE9BQVEsQ0FBQyxDQUFDLENBQUM7UUFDZCxHQUFHLENBQUMsTUFBTSxDQUFHLGVBQWUsRUFBRSxnQkFBZ0IsQ0FBRSxDQUFDO1FBQ2pELEdBQUcsQ0FBQyxNQUFNLENBQUcsR0FBRyxDQUFFLENBQUM7SUFDckIsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ04sR0FBRyxDQUFDLE1BQU0sQ0FBRyxHQUFHLENBQUUsQ0FBQztJQUNyQixDQUFDO0lBQ0QsR0FBRyxDQUFDLElBQUksQ0FBRyxFQUFFLE9BQU8sU0FBQSxFQUFFLFVBQVUsWUFBQSxFQUFFLENBQUUsQ0FBQztBQUN2QyxDQUFDLENBQUUsQ0FBQztBQUVKLE1BQU0sQ0FBQyxNQUFNLEdBQUcsVUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUk7SUFFOUIsRUFBRSxDQUFDLENBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBRSxDQUFDLENBQUMsQ0FBQztRQUNwQyxJQUFJLEVBQUcsQ0FBQztRQUNSLE1BQU0sQ0FBQztJQUNULENBQUM7SUFFRCxJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDdkIsRUFBRSxDQUFDLENBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUcsZUFBZSxDQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3JELElBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBRTthQUMvQyxPQUFPLENBQUcsaUJBQWlCLEVBQUUsRUFBRSxDQUFFLENBQUM7UUFDckMsVUFBVSxHQUFJLEtBQUssS0FBSyxTQUFTLENBQUM7SUFDcEMsQ0FBQztJQUVELHVCQUF1QjtJQUN2QixtR0FBbUc7SUFDbkcsV0FBVztJQUNYLEdBQUcsQ0FBQyxNQUFNLENBQUcsZUFBZSxFQUFFLGdCQUFnQixDQUFFLENBQUM7SUFDakQsR0FBRyxDQUFDLElBQUksQ0FBRztRQUNULElBQUksRUFBSyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUk7UUFDeEIsT0FBTyxFQUFFLENBQUUsQ0FBRSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFFLEdBQUcsQ0FBQyxVQUFVLEtBQUssR0FBRyxDQUFFO1FBQzFELFVBQVUsWUFBQTtLQUNYLENBQUUsQ0FBQztJQUNKLElBQUk7QUFFTixDQUFDLENBQUM7QUFFRixNQUFNLENBQUMsR0FBRyxDQUFHLFdBQVcsQ0FBRSxDQUFDO0FBQzNCLE1BQU0sQ0FBQyxHQUFHLENBQUcsTUFBTSxDQUFFLENBQUM7QUFHdEIsTUFBTSxDQUFDLE1BQU0sQ0FBRyxJQUFJLEVBQUU7SUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBRyxxQ0FBcUMsQ0FBRSxDQUFDO0FBQ3hELENBQUMsQ0FBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBGaWxlIGNyZWF0ZWQgYnkgc3Vlbmx1ZSBvbiAxNi4xMS4xNy5cbiAqIENvcHlyaWdodCAoYykgMjAxNyBieSBuZXRUcmVrIEdtYkggJiBDby4gS0dcbiAqL1xuXG5pbXBvcnQgKiBhcyBqc29uU2VydmVyIGZyb20gJ2pzb24tc2VydmVyJztcbmltcG9ydCB7IGF1dGggfSBmcm9tICcuL2F1dGhTZXJ2aWNlJztcblxuY29uc3Qgc2VydmVyICAgICAgPSBqc29uU2VydmVyLmNyZWF0ZSAoKTtcbmNvbnN0IHJvdXRlciAgICAgID0ganNvblNlcnZlci5yb3V0ZXIgKCAnLi9tb2NrL2RiLmpzb24nICk7XG5jb25zdCBtaWRkbGV3YXJlcyA9IGpzb25TZXJ2ZXIuZGVmYXVsdHMgKCk7XG5cbnNlcnZlci51c2UgKCBqc29uU2VydmVyLmJvZHlQYXJzZXIgKTtcblxuc2VydmVyLmdldCAoICcvYXV0aCcsIGF1dGggKTtcblxuc2VydmVyLnBvc3QgKCAnL2xvZ2luJywgKCByZXEsIHJlcyApID0+IHtcbiAgY29uc3QgeyB1c2VybmFtZSwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5O1xuICBjb25zdCBzdWNjZXNzICAgICAgICAgICAgICAgID0gdXNlcm5hbWUgPT09ICduZXRUcmVrJyAmJiBwYXNzd29yZCA9PT0gJ25ldFRyZWsnO1xuICBjb25zdCBhdXRob3JpemVkICAgICAgICAgICAgID0gc3VjY2VzcztcbiAgaWYgKCBzdWNjZXNzICkge1xuICAgIHJlcy5oZWFkZXIgKCAnYXV0aG9yaXphdGlvbicsIGBCZWFyZXIgbmV0VHJla2AgKTtcbiAgICByZXMuc3RhdHVzICggMjAwICk7XG4gIH0gZWxzZSB7XG4gICAgcmVzLnN0YXR1cyAoIDQwMSApO1xuICB9XG4gIHJlcy5qc29uICggeyBzdWNjZXNzLCBhdXRob3JpemVkIH0gKTtcbn0gKTtcblxucm91dGVyLnJlbmRlciA9ICggcmVxLCByZXMsIG5leHQgKSA9PiB7XG5cbiAgaWYgKCByZXEudXJsLmluZGV4T2YoJ2F1dGgnKSA9PT0gMCApIHtcbiAgICBuZXh0ICgpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCBhdXRob3JpemVkID0gZmFsc2U7XG4gIGlmICggcmVxLmhlYWRlcnMuaGFzT3duUHJvcGVydHkgKCAnYXV0aG9yaXphdGlvbicgKSApIHtcbiAgICBjb25zdCB0b2tlbiA9IFN0cmluZyAoIHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb24gKVxuICAgICAgLnJlcGxhY2UgKCAvKChCZWFyZXIpfFxccykvZ2ksICcnICk7XG4gICAgYXV0aG9yaXplZCAgPSB0b2tlbiA9PT0gJ25ldFRyZWsnO1xuICB9XG5cbiAgLy8gaWYgKCAhYXV0aG9yaXplZCApIHtcbiAgLy8gICByZXMuc3RhdHVzKDQwMSkuanNvbih7IGVycm9yOiAndXNlciBpcyBub3QgYXV0aG9yaXplZCcsIGF1dGhvcml6ZWQ6IGZhbHNlLCBzdWNjZXNzOiBmYWxzZSAgfSk7XG4gIC8vIH0gZWxzZSB7XG4gIHJlcy5oZWFkZXIgKCAnYXV0aG9yaXphdGlvbicsIGBCZWFyZXIgbmV0VHJla2AgKTtcbiAgcmVzLmpzb24gKCB7XG4gICAgZGF0YSAgIDogcmVzLmxvY2Fscy5kYXRhLFxuICAgIHN1Y2Nlc3M6ICEgISByZXMubG9jYWxzLmRhdGEgJiYgKCByZXMuc3RhdHVzQ29kZSA9PT0gMjAwICksXG4gICAgYXV0aG9yaXplZFxuICB9ICk7XG4gIC8vIH1cblxufTtcblxuc2VydmVyLnVzZSAoIG1pZGRsZXdhcmVzICk7XG5zZXJ2ZXIudXNlICggcm91dGVyICk7XG5cblxuc2VydmVyLmxpc3RlbiAoIDMwMDAsICgpID0+IHtcbiAgY29uc29sZS5sb2cgKCAnSlNPTiBTZXJ2ZXIgaXMgcnVubmluZyBvbiBwb3J0IDMwMDAnICk7XG59ICk7XG5cbiJdfQ==