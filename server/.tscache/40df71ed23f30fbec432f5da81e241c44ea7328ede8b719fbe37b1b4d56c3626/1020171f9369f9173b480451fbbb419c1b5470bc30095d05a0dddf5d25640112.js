"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('AuthService');
var AuthService = (function () {
    function AuthService(req, res) {
        this.req = req;
        this.res = res;
        var _a = req.query, response_type = _a.response_type, client_id = _a.client_id, client_secret = _a.client_secret, scope = _a.scope, redirect_uri = _a.redirect_uri, state = _a.state;
        res.set('Content-Type', 'text/html');
        res.status(200)
            .send(new Buffer("\n    <!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>login</title>\n</head>\n<body>\n  <table>\n    <tr>\n      <td>response_type</td>\n      <td>" + response_type + "</td>\n    </tr>\n    <tr>\n      <td>client_id</td>\n      <td>" + client_id + "</td>\n    </tr>\n    <tr>\n      <td>client_secret</td>\n      <td>" + client_secret + "</td>\n    </tr>\n    <tr>\n      <td>scope</td>\n      <td>" + scope + "</td>\n    </tr>\n    <tr>\n      <td>redirect_uri</td>\n      <td>" + redirect_uri + "</td>\n    </tr>\n    <tr>\n      <td>state</td>\n      <td>" + state + "</td>\n    </tr>\n</table>\n</body>\n</html>\n    "));
    }
    return AuthService;
}());
function auth(req, res, next) {
    console.log('auth again');
    var as = new AuthService(req, res);
}
exports.auth = auth;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL3N1ZW5sdWUvV2Vic2l0ZXMvdHJhaW5pbmcvZ2ZuLTIwMTctMTEvZ2ZuL3NlcnZlci9zcmMvYXV0aFNlcnZpY2UudHMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdWVubHVlL1dlYnNpdGVzL3RyYWluaW5nL2dmbi0yMDE3LTExL2dmbi9zZXJ2ZXIvc3JjL2F1dGhTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxDQUFDLEdBQUcsQ0FBRyxhQUFhLENBQUUsQ0FBQztBQUM5QjtJQUVFLHFCQUFzQixHQUFHLEVBQVUsR0FBRztRQUFoQixRQUFHLEdBQUgsR0FBRyxDQUFBO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBQTtRQUM5QixJQUFBLGNBQW1GLEVBQWpGLGdDQUFhLEVBQUUsd0JBQVMsRUFBRSxnQ0FBYSxFQUFFLGdCQUFLLEVBQUUsOEJBQVksRUFBRSxnQkFBSyxDQUFlO1FBQzFGLEdBQUcsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3JDLEdBQUcsQ0FBQyxNQUFNLENBQUUsR0FBRyxDQUFDO2FBQ1osSUFBSSxDQUFHLElBQUksTUFBTSxDQUFDLDhMQVdkLGFBQWEsd0VBSWIsU0FBUyw0RUFJVCxhQUFhLG9FQUliLEtBQUssMkVBSUwsWUFBWSxvRUFJWixLQUFLLHVEQUtaLENBQUUsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQTVDRCxJQTRDQztBQUVELGNBQXVCLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSTtJQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFHLFlBQVksQ0FBRSxDQUFDO0lBQzdCLElBQU0sRUFBRSxHQUFHLElBQUksV0FBVyxDQUFHLEdBQUcsRUFBRSxHQUFHLENBQUUsQ0FBQztBQUMxQyxDQUFDO0FBSEQsb0JBR0MiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZyAoICdBdXRoU2VydmljZScgKTtcbmNsYXNzIEF1dGhTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvciAoIHByaXZhdGUgcmVxLCBwcml2YXRlIHJlcyApIHtcbiAgICBjb25zdCB7IHJlc3BvbnNlX3R5cGUsIGNsaWVudF9pZCwgY2xpZW50X3NlY3JldCwgc2NvcGUsIHJlZGlyZWN0X3VyaSwgc3RhdGUgfSA9IHJlcS5xdWVyeTtcbiAgICByZXMuc2V0KCdDb250ZW50LVR5cGUnLCAndGV4dC9odG1sJyk7XG4gICAgcmVzLnN0YXR1cyAoMjAwKVxuICAgICAgIC5zZW5kICggbmV3IEJ1ZmZlcihgXG4gICAgPCFET0NUWVBFIGh0bWw+XG48aHRtbCBsYW5nPVwiZW5cIj5cbjxoZWFkPlxuICAgIDxtZXRhIGNoYXJzZXQ9XCJVVEYtOFwiPlxuICAgIDx0aXRsZT5sb2dpbjwvdGl0bGU+XG48L2hlYWQ+XG48Ym9keT5cbiAgPHRhYmxlPlxuICAgIDx0cj5cbiAgICAgIDx0ZD5yZXNwb25zZV90eXBlPC90ZD5cbiAgICAgIDx0ZD4ke3Jlc3BvbnNlX3R5cGV9PC90ZD5cbiAgICA8L3RyPlxuICAgIDx0cj5cbiAgICAgIDx0ZD5jbGllbnRfaWQ8L3RkPlxuICAgICAgPHRkPiR7Y2xpZW50X2lkfTwvdGQ+XG4gICAgPC90cj5cbiAgICA8dHI+XG4gICAgICA8dGQ+Y2xpZW50X3NlY3JldDwvdGQ+XG4gICAgICA8dGQ+JHtjbGllbnRfc2VjcmV0fTwvdGQ+XG4gICAgPC90cj5cbiAgICA8dHI+XG4gICAgICA8dGQ+c2NvcGU8L3RkPlxuICAgICAgPHRkPiR7c2NvcGV9PC90ZD5cbiAgICA8L3RyPlxuICAgIDx0cj5cbiAgICAgIDx0ZD5yZWRpcmVjdF91cmk8L3RkPlxuICAgICAgPHRkPiR7cmVkaXJlY3RfdXJpfTwvdGQ+XG4gICAgPC90cj5cbiAgICA8dHI+XG4gICAgICA8dGQ+c3RhdGU8L3RkPlxuICAgICAgPHRkPiR7c3RhdGV9PC90ZD5cbiAgICA8L3RyPlxuPC90YWJsZT5cbjwvYm9keT5cbjwvaHRtbD5cbiAgICBgICkpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdXRoICggcmVxLCByZXMsIG5leHQgKSB7XG4gIGNvbnNvbGUubG9nICggJ2F1dGggYWdhaW4nICk7XG4gIGNvbnN0IGFzID0gbmV3IEF1dGhTZXJ2aWNlICggcmVxLCByZXMgKTtcbn1cbiJdfQ==