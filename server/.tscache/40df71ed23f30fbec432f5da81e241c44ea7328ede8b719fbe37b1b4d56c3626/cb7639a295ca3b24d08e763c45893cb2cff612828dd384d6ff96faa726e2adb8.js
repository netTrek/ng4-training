"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('AuthService');
var AuthService = (function () {
    function AuthService(req, res) {
        this.req = req;
        this.res = res;
        var _a = req.params, response_type = _a.response_type, client_id = _a.client_id, client_secret = _a.client_secret, scope = _a.scope, redirect_uri = _a.redirect_uri, state = _a.state;
        res.render("\n    <!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>login</title>\n</head>\n<body>\n\n</body>\n</html>\n    ");
    }
    return AuthService;
}());
function auth(req, res, next) {
    console.log('auth again');
    var as = new AuthService(req, res);
}
exports.auth = auth;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL3N1ZW5sdWUvV2Vic2l0ZXMvdHJhaW5pbmcvZ2ZuLTIwMTctMTEvZ2ZuL3NlcnZlci9zcmMvYXV0aFNlcnZpY2UudHMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdWVubHVlL1dlYnNpdGVzL3RyYWluaW5nL2dmbi0yMDE3LTExL2dmbi9zZXJ2ZXIvc3JjL2F1dGhTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxDQUFDLEdBQUcsQ0FBRyxhQUFhLENBQUUsQ0FBQztBQUM5QjtJQUVFLHFCQUFzQixHQUFHLEVBQVUsR0FBRztRQUFoQixRQUFHLEdBQUgsR0FBRyxDQUFBO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBQTtRQUM5QixJQUFBLGVBQW9GLEVBQWxGLGdDQUFhLEVBQUUsd0JBQVMsRUFBRSxnQ0FBYSxFQUFFLGdCQUFLLEVBQUUsOEJBQVksRUFBRSxnQkFBSyxDQUFnQjtRQUMzRixHQUFHLENBQUMsTUFBTSxDQUFHLHNKQVdaLENBQUUsQ0FBQztJQUNOLENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUFqQkQsSUFpQkM7QUFFRCxjQUF1QixHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUk7SUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBRyxZQUFZLENBQUUsQ0FBQztJQUM3QixJQUFNLEVBQUUsR0FBRyxJQUFJLFdBQVcsQ0FBRyxHQUFHLEVBQUUsR0FBRyxDQUFFLENBQUM7QUFDMUMsQ0FBQztBQUhELG9CQUdDIiwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2cgKCAnQXV0aFNlcnZpY2UnICk7XG5jbGFzcyBBdXRoU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IgKCBwcml2YXRlIHJlcSwgcHJpdmF0ZSByZXMgKSB7XG4gICAgY29uc3QgeyByZXNwb25zZV90eXBlLCBjbGllbnRfaWQsIGNsaWVudF9zZWNyZXQsIHNjb3BlLCByZWRpcmVjdF91cmksIHN0YXRlIH0gPSByZXEucGFyYW1zO1xuICAgIHJlcy5yZW5kZXIgKCBgXG4gICAgPCFET0NUWVBFIGh0bWw+XG48aHRtbCBsYW5nPVwiZW5cIj5cbjxoZWFkPlxuICAgIDxtZXRhIGNoYXJzZXQ9XCJVVEYtOFwiPlxuICAgIDx0aXRsZT5sb2dpbjwvdGl0bGU+XG48L2hlYWQ+XG48Ym9keT5cblxuPC9ib2R5PlxuPC9odG1sPlxuICAgIGAgKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXV0aCAoIHJlcSwgcmVzLCBuZXh0ICkge1xuICBjb25zb2xlLmxvZyAoICdhdXRoIGFnYWluJyApO1xuICBjb25zdCBhcyA9IG5ldyBBdXRoU2VydmljZSAoIHJlcSwgcmVzICk7XG59XG4iXX0=