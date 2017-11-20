"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('AuthService');
var AuthService = (function () {
    function AuthService(req, res) {
        this.req = req;
        this.res = res;
        var _a = req.params, response_type = _a.response_type, client_id = _a.client_id, client_secret = _a.client_secret, scope = _a.scope, redirect_uri = _a.redirect_uri, state = _a.state;
        res.set('Content-Type', 'text/html');
        res.status(200)
            .send(new Buffer("\n    <!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>login</title>\n</head>\n<body>\n  <table>\n    <tr>\n      <td>response_type</td>\n      <td>" + response_type + "</td>\n    </tr>\n</table>\n</body>\n</html>\n    "));
    }
    return AuthService;
}());
function auth(req, res, next) {
    console.log('auth again');
    var as = new AuthService(req, res);
}
exports.auth = auth;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL3N1ZW5sdWUvV2Vic2l0ZXMvdHJhaW5pbmcvZ2ZuLTIwMTctMTEvZ2ZuL3NlcnZlci9zcmMvYXV0aFNlcnZpY2UudHMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdWVubHVlL1dlYnNpdGVzL3RyYWluaW5nL2dmbi0yMDE3LTExL2dmbi9zZXJ2ZXIvc3JjL2F1dGhTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxDQUFDLEdBQUcsQ0FBRyxhQUFhLENBQUUsQ0FBQztBQUM5QjtJQUVFLHFCQUFzQixHQUFHLEVBQVUsR0FBRztRQUFoQixRQUFHLEdBQUgsR0FBRyxDQUFBO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBQTtRQUM5QixJQUFBLGVBQW9GLEVBQWxGLGdDQUFhLEVBQUUsd0JBQVMsRUFBRSxnQ0FBYSxFQUFFLGdCQUFLLEVBQUUsOEJBQVksRUFBRSxnQkFBSyxDQUFnQjtRQUMzRixHQUFHLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUNyQyxHQUFHLENBQUMsTUFBTSxDQUFFLEdBQUcsQ0FBQzthQUNaLElBQUksQ0FBRyxJQUFJLE1BQU0sQ0FBQyw4TEFXZCxhQUFhLHVEQUtwQixDQUFFLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUF4QkQsSUF3QkM7QUFFRCxjQUF1QixHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUk7SUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBRyxZQUFZLENBQUUsQ0FBQztJQUM3QixJQUFNLEVBQUUsR0FBRyxJQUFJLFdBQVcsQ0FBRyxHQUFHLEVBQUUsR0FBRyxDQUFFLENBQUM7QUFDMUMsQ0FBQztBQUhELG9CQUdDIiwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2cgKCAnQXV0aFNlcnZpY2UnICk7XG5jbGFzcyBBdXRoU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IgKCBwcml2YXRlIHJlcSwgcHJpdmF0ZSByZXMgKSB7XG4gICAgY29uc3QgeyByZXNwb25zZV90eXBlLCBjbGllbnRfaWQsIGNsaWVudF9zZWNyZXQsIHNjb3BlLCByZWRpcmVjdF91cmksIHN0YXRlIH0gPSByZXEucGFyYW1zO1xuICAgIHJlcy5zZXQoJ0NvbnRlbnQtVHlwZScsICd0ZXh0L2h0bWwnKTtcbiAgICByZXMuc3RhdHVzICgyMDApXG4gICAgICAgLnNlbmQgKCBuZXcgQnVmZmVyKGBcbiAgICA8IURPQ1RZUEUgaHRtbD5cbjxodG1sIGxhbmc9XCJlblwiPlxuPGhlYWQ+XG4gICAgPG1ldGEgY2hhcnNldD1cIlVURi04XCI+XG4gICAgPHRpdGxlPmxvZ2luPC90aXRsZT5cbjwvaGVhZD5cbjxib2R5PlxuICA8dGFibGU+XG4gICAgPHRyPlxuICAgICAgPHRkPnJlc3BvbnNlX3R5cGU8L3RkPlxuICAgICAgPHRkPiR7cmVzcG9uc2VfdHlwZX08L3RkPlxuICAgIDwvdHI+XG48L3RhYmxlPlxuPC9ib2R5PlxuPC9odG1sPlxuICAgIGAgKSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1dGggKCByZXEsIHJlcywgbmV4dCApIHtcbiAgY29uc29sZS5sb2cgKCAnYXV0aCBhZ2FpbicgKTtcbiAgY29uc3QgYXMgPSBuZXcgQXV0aFNlcnZpY2UgKCByZXEsIHJlcyApO1xufVxuIl19