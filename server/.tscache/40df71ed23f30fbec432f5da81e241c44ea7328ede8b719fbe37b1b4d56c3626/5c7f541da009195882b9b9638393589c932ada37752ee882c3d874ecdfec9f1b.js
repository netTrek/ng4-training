"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('AuthService');
var AuthService = (function () {
    // http://localhost:3000/auth?response_type=access%20id&client_id=netTrek&client_secret=netTrek&scope=profile%20users&redirect_uri=http://localhost/4200&state=4711
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL3N1ZW5sdWUvV2Vic2l0ZXMvdHJhaW5pbmcvZ2ZuLTIwMTctMTEvZ2ZuL3NlcnZlci9zcmMvYXV0aFNlcnZpY2UudHMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdWVubHVlL1dlYnNpdGVzL3RyYWluaW5nL2dmbi0yMDE3LTExL2dmbi9zZXJ2ZXIvc3JjL2F1dGhTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxDQUFDLEdBQUcsQ0FBRyxhQUFhLENBQUUsQ0FBQztBQUM5QjtJQUNBLG1LQUFtSztJQUNqSyxxQkFBc0IsR0FBRyxFQUFVLEdBQUc7UUFBaEIsUUFBRyxHQUFILEdBQUcsQ0FBQTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQUE7UUFDOUIsSUFBQSxjQUFtRixFQUFqRixnQ0FBYSxFQUFFLHdCQUFTLEVBQUUsZ0NBQWEsRUFBRSxnQkFBSyxFQUFFLDhCQUFZLEVBQUUsZ0JBQUssQ0FBZTtRQUMxRixHQUFHLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUNyQyxHQUFHLENBQUMsTUFBTSxDQUFFLEdBQUcsQ0FBQzthQUNaLElBQUksQ0FBRyxJQUFJLE1BQU0sQ0FBQyw4TEFXZCxhQUFhLHdFQUliLFNBQVMsNEVBSVQsYUFBYSxvRUFJYixLQUFLLDJFQUlMLFlBQVksb0VBSVosS0FBSyx1REFLWixDQUFFLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUE1Q0QsSUE0Q0M7QUFFRCxjQUF1QixHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUk7SUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBRyxZQUFZLENBQUUsQ0FBQztJQUM3QixJQUFNLEVBQUUsR0FBRyxJQUFJLFdBQVcsQ0FBRyxHQUFHLEVBQUUsR0FBRyxDQUFFLENBQUM7QUFDMUMsQ0FBQztBQUhELG9CQUdDIiwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2cgKCAnQXV0aFNlcnZpY2UnICk7XG5jbGFzcyBBdXRoU2VydmljZSB7XG4vLyBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXV0aD9yZXNwb25zZV90eXBlPWFjY2VzcyUyMGlkJmNsaWVudF9pZD1uZXRUcmVrJmNsaWVudF9zZWNyZXQ9bmV0VHJlayZzY29wZT1wcm9maWxlJTIwdXNlcnMmcmVkaXJlY3RfdXJpPWh0dHA6Ly9sb2NhbGhvc3QvNDIwMCZzdGF0ZT00NzExXG4gIGNvbnN0cnVjdG9yICggcHJpdmF0ZSByZXEsIHByaXZhdGUgcmVzICkge1xuICAgIGNvbnN0IHsgcmVzcG9uc2VfdHlwZSwgY2xpZW50X2lkLCBjbGllbnRfc2VjcmV0LCBzY29wZSwgcmVkaXJlY3RfdXJpLCBzdGF0ZSB9ID0gcmVxLnF1ZXJ5O1xuICAgIHJlcy5zZXQoJ0NvbnRlbnQtVHlwZScsICd0ZXh0L2h0bWwnKTtcbiAgICByZXMuc3RhdHVzICgyMDApXG4gICAgICAgLnNlbmQgKCBuZXcgQnVmZmVyKGBcbiAgICA8IURPQ1RZUEUgaHRtbD5cbjxodG1sIGxhbmc9XCJlblwiPlxuPGhlYWQ+XG4gICAgPG1ldGEgY2hhcnNldD1cIlVURi04XCI+XG4gICAgPHRpdGxlPmxvZ2luPC90aXRsZT5cbjwvaGVhZD5cbjxib2R5PlxuICA8dGFibGU+XG4gICAgPHRyPlxuICAgICAgPHRkPnJlc3BvbnNlX3R5cGU8L3RkPlxuICAgICAgPHRkPiR7cmVzcG9uc2VfdHlwZX08L3RkPlxuICAgIDwvdHI+XG4gICAgPHRyPlxuICAgICAgPHRkPmNsaWVudF9pZDwvdGQ+XG4gICAgICA8dGQ+JHtjbGllbnRfaWR9PC90ZD5cbiAgICA8L3RyPlxuICAgIDx0cj5cbiAgICAgIDx0ZD5jbGllbnRfc2VjcmV0PC90ZD5cbiAgICAgIDx0ZD4ke2NsaWVudF9zZWNyZXR9PC90ZD5cbiAgICA8L3RyPlxuICAgIDx0cj5cbiAgICAgIDx0ZD5zY29wZTwvdGQ+XG4gICAgICA8dGQ+JHtzY29wZX08L3RkPlxuICAgIDwvdHI+XG4gICAgPHRyPlxuICAgICAgPHRkPnJlZGlyZWN0X3VyaTwvdGQ+XG4gICAgICA8dGQ+JHtyZWRpcmVjdF91cml9PC90ZD5cbiAgICA8L3RyPlxuICAgIDx0cj5cbiAgICAgIDx0ZD5zdGF0ZTwvdGQ+XG4gICAgICA8dGQ+JHtzdGF0ZX08L3RkPlxuICAgIDwvdHI+XG48L3RhYmxlPlxuPC9ib2R5PlxuPC9odG1sPlxuICAgIGAgKSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1dGggKCByZXEsIHJlcywgbmV4dCApIHtcbiAgY29uc29sZS5sb2cgKCAnYXV0aCBhZ2FpbicgKTtcbiAgY29uc3QgYXMgPSBuZXcgQXV0aFNlcnZpY2UgKCByZXEsIHJlcyApO1xufVxuIl19