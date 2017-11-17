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
    res.jsonp({
        data: res.locals.data
    });
};
server.use(middlewares);
server.use(router);
server.listen(3000, function () {
    console.log('JSON Server is running on port 3000');
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL3N1ZW5sdWUvV2Vic2l0ZXMvdHJhaW5pbmcvZ2ZuLTIwMTctMTEvZ2ZuL3NlcnZlci9zcmMvc2VydmVyLnRzIiwic291cmNlcyI6WyIvVXNlcnMvc3Vlbmx1ZS9XZWJzaXRlcy90cmFpbmluZy9nZm4tMjAxNy0xMS9nZm4vc2VydmVyL3NyYy9zZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7R0FHRzs7QUFHSCx3Q0FBMEM7QUFFMUMsSUFBTSxNQUFNLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ25DLElBQU0sTUFBTSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUNuRCxJQUFNLFdBQVcsR0FBRyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7QUFJMUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxVQUFDLEdBQUcsRUFBRSxHQUFHO0lBQ3ZCLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDUixJQUFJLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJO0tBQ3RCLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUdGLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDeEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUluQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtJQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7QUFDckQsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEZpbGUgY3JlYXRlZCBieSBzdWVubHVlIG9uIDE2LjExLjE3LlxuICogQ29weXJpZ2h0IChjKSAyMDE3IGJ5IG5ldFRyZWsgR21iSCAmIENvLiBLR1xuICovXG5cblxuaW1wb3J0ICogYXMganNvblNlcnZlciBmcm9tICdqc29uLXNlcnZlcic7XG5cbmNvbnN0IHNlcnZlciA9IGpzb25TZXJ2ZXIuY3JlYXRlKCk7XG5jb25zdCByb3V0ZXIgPSBqc29uU2VydmVyLnJvdXRlcignLi9tb2NrL2RiLmpzb24nKTtcbmNvbnN0IG1pZGRsZXdhcmVzID0ganNvblNlcnZlci5kZWZhdWx0cygpO1xuXG5cblxucm91dGVyLnJlbmRlciA9IChyZXEsIHJlcykgPT4ge1xuICByZXMuanNvbnAoe1xuICAgIGRhdGE6IHJlcy5sb2NhbHMuZGF0YVxuICB9KTtcbn07XG5cblxuc2VydmVyLnVzZShtaWRkbGV3YXJlcyk7XG5zZXJ2ZXIudXNlKHJvdXRlcik7XG5cblxuXG5zZXJ2ZXIubGlzdGVuKDMwMDAsICgpID0+IHtcbiAgY29uc29sZS5sb2coJ0pTT04gU2VydmVyIGlzIHJ1bm5pbmcgb24gcG9ydCAzMDAwJyk7XG59KTtcblxuIl19