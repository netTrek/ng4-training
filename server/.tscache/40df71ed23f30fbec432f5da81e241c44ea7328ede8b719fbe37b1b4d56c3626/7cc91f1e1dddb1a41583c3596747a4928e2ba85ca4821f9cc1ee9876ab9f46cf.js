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
            .send(new Buffer("\n    <!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>login</title>\n</head>\n<body>\nhhh\n</body>\n</html>\n    "));
    }
    return AuthService;
}());
function auth(req, res, next) {
    console.log('auth again');
    var as = new AuthService(req, res);
}
exports.auth = auth;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL3N1ZW5sdWUvV2Vic2l0ZXMvdHJhaW5pbmcvZ2ZuLTIwMTctMTEvZ2ZuL3NlcnZlci9zcmMvYXV0aFNlcnZpY2UudHMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdWVubHVlL1dlYnNpdGVzL3RyYWluaW5nL2dmbi0yMDE3LTExL2dmbi9zZXJ2ZXIvc3JjL2F1dGhTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxDQUFDLEdBQUcsQ0FBRyxhQUFhLENBQUUsQ0FBQztBQUM5QjtJQUVFLHFCQUFzQixHQUFHLEVBQVUsR0FBRztRQUFoQixRQUFHLEdBQUgsR0FBRyxDQUFBO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBQTtRQUM5QixJQUFBLGVBQW9GLEVBQWxGLGdDQUFhLEVBQUUsd0JBQVMsRUFBRSxnQ0FBYSxFQUFFLGdCQUFLLEVBQUUsOEJBQVksRUFBRSxnQkFBSyxDQUFnQjtRQUMzRixHQUFHLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUNyQyxHQUFHLENBQUMsTUFBTSxDQUFFLEdBQUcsQ0FBQzthQUNaLElBQUksQ0FBRyxJQUFJLE1BQU0sQ0FBQyx5SkFXckIsQ0FBRSxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBbkJELElBbUJDO0FBRUQsY0FBdUIsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJO0lBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUcsWUFBWSxDQUFFLENBQUM7SUFDN0IsSUFBTSxFQUFFLEdBQUcsSUFBSSxXQUFXLENBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBRSxDQUFDO0FBQzFDLENBQUM7QUFIRCxvQkFHQyIsInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nICggJ0F1dGhTZXJ2aWNlJyApO1xuY2xhc3MgQXV0aFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yICggcHJpdmF0ZSByZXEsIHByaXZhdGUgcmVzICkge1xuICAgIGNvbnN0IHsgcmVzcG9uc2VfdHlwZSwgY2xpZW50X2lkLCBjbGllbnRfc2VjcmV0LCBzY29wZSwgcmVkaXJlY3RfdXJpLCBzdGF0ZSB9ID0gcmVxLnBhcmFtcztcbiAgICByZXMuc2V0KCdDb250ZW50LVR5cGUnLCAndGV4dC9odG1sJyk7XG4gICAgcmVzLnN0YXR1cyAoMjAwKVxuICAgICAgIC5zZW5kICggbmV3IEJ1ZmZlcihgXG4gICAgPCFET0NUWVBFIGh0bWw+XG48aHRtbCBsYW5nPVwiZW5cIj5cbjxoZWFkPlxuICAgIDxtZXRhIGNoYXJzZXQ9XCJVVEYtOFwiPlxuICAgIDx0aXRsZT5sb2dpbjwvdGl0bGU+XG48L2hlYWQ+XG48Ym9keT5cbmhoaFxuPC9ib2R5PlxuPC9odG1sPlxuICAgIGAgKSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1dGggKCByZXEsIHJlcywgbmV4dCApIHtcbiAgY29uc29sZS5sb2cgKCAnYXV0aCBhZ2FpbicgKTtcbiAgY29uc3QgYXMgPSBuZXcgQXV0aFNlcnZpY2UgKCByZXEsIHJlcyApO1xufVxuIl19