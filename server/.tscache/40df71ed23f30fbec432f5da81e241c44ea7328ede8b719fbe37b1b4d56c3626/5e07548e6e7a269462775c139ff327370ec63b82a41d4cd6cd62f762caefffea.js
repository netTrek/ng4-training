"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var url = require("url");
var AuthService = (function () {
    // tslint:disable-next-line
    // http://localhost:3000/auth?response_type=access%20id&client_id=netTrek&client_secret=netTrek&scope=profile%20users&redirect_uri=http://localhost/4200&state=4711
    function AuthService(req, res) {
        this.req = req;
        this.res = res;
        var _a = req.query, response_type = _a.response_type, client_id = _a.client_id, client_secret = _a.client_secret, scope = _a.scope, redirect_uri = _a.redirect_uri, state = _a.state;
        res.set('Content-Type', 'text/html');
        if (client_id === client_secret && client_id === 'netTrek') {
            res.status(200)
                .send("\n    <!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>login</title>\n</head>\n<body>\n  <form action=\"/login\" method=\"post\">\n    <input type=\"hidden\" name=\"response_type\" value=\"" + response_type + "\">\n    <input type=\"hidden\" name=\"client_id\" value=\"" + client_id + "\">\n    <input type=\"hidden\" name=\"client_secret\" value=\"" + client_secret + "\">\n    <input type=\"hidden\" name=\"scope\" value=\"" + scope + "\">\n    <input type=\"hidden\" name=\"redirect_uri\" value=\"" + redirect_uri + "\">\n    <input type=\"hidden\" name=\"state\" value=\"" + state + "\">\n    <table>\n      <tr>\n        <td><label for=\"username\">username</label></td>\n        <td><input type=\"text\" name=\"username\" id=\"username\" placeholder=\"netTrek\" required value=\"netTrek\"></td>\n      </tr>\n      <tr>\n        <td><label for=\"username\">password</label></td>\n        <td><input type=\"password\" name=\"password\" id=\"password\" required value=\"netTrek\"></td>\n      </tr>\n      <tr>\n        <td><label for=\"access_scope\">allow access to " + scope + "</label></td>\n        <td><input type=\"checkbox\" name=\"access_scope\" id=\"access_scope\"></td>\n      </tr>\n    </table>\n    <input type=\"submit\" value=\"submit\">\n</form>\n</body>\n</html>\n    ");
        }
        else {
            res.status(500)
                .send("\n    <!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>login</title>\n</head>\n<body>\n  <h1>Unkown client</h1>\n</body>\n</html>\n    ");
        }
    }
    return AuthService;
}());
function auth(req, res, next) {
    var as = new AuthService(req, res);
}
exports.auth = auth;
var Login = (function () {
    function Login(req, res) {
        this.req = req;
        this.res = res;
        var _a = req.body, response_type = _a.response_type, client_id = _a.client_id, client_secret = _a.client_secret, scope = _a.scope, redirect_uri = _a.redirect_uri, state = _a.state, access_scope = _a.access_scope, username = _a.username, password = _a.password;
        if (username === password && password === 'netTrek') {
            var access_token = '4711';
            res.redirect(url.format({
                pathname: redirect_uri,
                query: {
                    access_token: access_token
                }
            }));
        }
        else {
        }
    }
    return Login;
}());
function login(req, res, next) {
    var as = new Login(req, res);
}
exports.login = login;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL3N1ZW5sdWUvV2Vic2l0ZXMvdHJhaW5pbmcvZ2ZuLTIwMTctMTEvZ2ZuL3NlcnZlci9zcmMvYXV0aFNlcnZpY2UudHMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdWVubHVlL1dlYnNpdGVzL3RyYWluaW5nL2dmbi0yMDE3LTExL2dmbi9zZXJ2ZXIvc3JjL2F1dGhTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUJBQTJCO0FBRTNCO0lBQ0UsMkJBQTJCO0lBQzNCLG1LQUFtSztJQUNuSyxxQkFBc0IsR0FBRyxFQUFVLEdBQUc7UUFBaEIsUUFBRyxHQUFILEdBQUcsQ0FBQTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQUE7UUFDOUIsSUFBQSxjQUFtRixFQUFqRixnQ0FBYSxFQUFFLHdCQUFTLEVBQUUsZ0NBQWEsRUFBRSxnQkFBSyxFQUFFLDhCQUFZLEVBQUUsZ0JBQUssQ0FBZTtRQUMxRixHQUFHLENBQUMsR0FBRyxDQUFHLGNBQWMsRUFBRSxXQUFXLENBQUUsQ0FBQztRQUN4QyxFQUFFLENBQUMsQ0FBRSxTQUFTLEtBQUssYUFBYSxJQUFJLFNBQVMsS0FBSyxTQUFVLENBQUMsQ0FBQyxDQUFDO1lBQzdELEdBQUcsQ0FBQyxNQUFNLENBQUcsR0FBRyxDQUFFO2lCQUNkLElBQUksQ0FBRyx1T0FTc0MsYUFBYSxtRUFDakIsU0FBUyx1RUFDTCxhQUFhLCtEQUNyQixLQUFLLHNFQUNFLFlBQVksK0RBQ25CLEtBQUssNGVBV0ksS0FBSyxrTkFReEQsQ0FBRSxDQUFDO1FBQ0osQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sR0FBRyxDQUFDLE1BQU0sQ0FBRyxHQUFHLENBQUU7aUJBQ2QsSUFBSSxDQUFHLDhLQVdaLENBQUUsQ0FBQztRQUNKLENBQUM7SUFDSCxDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBMURELElBMERDO0FBRUQsY0FBdUIsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJO0lBQ25DLElBQU0sRUFBRSxHQUFHLElBQUksV0FBVyxDQUFHLEdBQUcsRUFBRSxHQUFHLENBQUUsQ0FBQztBQUMxQyxDQUFDO0FBRkQsb0JBRUM7QUFFRDtJQUNFLGVBQXNCLEdBQUcsRUFBVSxHQUFHO1FBQWhCLFFBQUcsR0FBSCxHQUFHLENBQUE7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFBO1FBQzlCLElBQUEsYUFHWSxFQUZWLGdDQUFhLEVBQUUsd0JBQVMsRUFBRSxnQ0FBYSxFQUFFLGdCQUFLLEVBQUUsOEJBQVksRUFBRSxnQkFBSyxFQUFFLDhCQUFZLEVBQ2pGLHNCQUFRLEVBQUUsc0JBQVEsQ0FDUDtRQUVuQixFQUFFLENBQUMsQ0FBRSxRQUFRLEtBQUssUUFBUSxJQUFJLFFBQVEsS0FBSyxTQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3RELElBQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQztZQUM1QixHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7Z0JBQ3RCLFFBQVEsRUFBRSxZQUFZO2dCQUN0QixLQUFLLEVBQUU7b0JBQ0wsWUFBWSxjQUFBO2lCQUNiO2FBQ0YsQ0FBQyxDQUFDLENBQUM7UUFDTixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7UUFFUixDQUFDO0lBQ0gsQ0FBQztJQUNILFlBQUM7QUFBRCxDQUFDLEFBbkJELElBbUJDO0FBRUQsZUFBd0IsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJO0lBQ3BDLElBQU0sRUFBRSxHQUFHLElBQUksS0FBSyxDQUFHLEdBQUcsRUFBRSxHQUFHLENBQUUsQ0FBQztBQUNwQyxDQUFDO0FBRkQsc0JBRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB1cmwgZnJvbSAndXJsJztcblxuY2xhc3MgQXV0aFNlcnZpY2Uge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgLy8gaHR0cDovL2xvY2FsaG9zdDozMDAwL2F1dGg/cmVzcG9uc2VfdHlwZT1hY2Nlc3MlMjBpZCZjbGllbnRfaWQ9bmV0VHJlayZjbGllbnRfc2VjcmV0PW5ldFRyZWsmc2NvcGU9cHJvZmlsZSUyMHVzZXJzJnJlZGlyZWN0X3VyaT1odHRwOi8vbG9jYWxob3N0LzQyMDAmc3RhdGU9NDcxMVxuICBjb25zdHJ1Y3RvciAoIHByaXZhdGUgcmVxLCBwcml2YXRlIHJlcyApIHtcbiAgICBjb25zdCB7IHJlc3BvbnNlX3R5cGUsIGNsaWVudF9pZCwgY2xpZW50X3NlY3JldCwgc2NvcGUsIHJlZGlyZWN0X3VyaSwgc3RhdGUgfSA9IHJlcS5xdWVyeTtcbiAgICByZXMuc2V0ICggJ0NvbnRlbnQtVHlwZScsICd0ZXh0L2h0bWwnICk7XG4gICAgaWYgKCBjbGllbnRfaWQgPT09IGNsaWVudF9zZWNyZXQgJiYgY2xpZW50X2lkID09PSAnbmV0VHJlaycgKSB7XG4gICAgICByZXMuc3RhdHVzICggMjAwIClcbiAgICAgICAgIC5zZW5kICggYFxuICAgIDwhRE9DVFlQRSBodG1sPlxuPGh0bWwgbGFuZz1cImVuXCI+XG48aGVhZD5cbiAgICA8bWV0YSBjaGFyc2V0PVwiVVRGLThcIj5cbiAgICA8dGl0bGU+bG9naW48L3RpdGxlPlxuPC9oZWFkPlxuPGJvZHk+XG4gIDxmb3JtIGFjdGlvbj1cIi9sb2dpblwiIG1ldGhvZD1cInBvc3RcIj5cbiAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJyZXNwb25zZV90eXBlXCIgdmFsdWU9XCIke3Jlc3BvbnNlX3R5cGV9XCI+XG4gICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiY2xpZW50X2lkXCIgdmFsdWU9XCIke2NsaWVudF9pZH1cIj5cbiAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJjbGllbnRfc2VjcmV0XCIgdmFsdWU9XCIke2NsaWVudF9zZWNyZXR9XCI+XG4gICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwic2NvcGVcIiB2YWx1ZT1cIiR7c2NvcGV9XCI+XG4gICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwicmVkaXJlY3RfdXJpXCIgdmFsdWU9XCIke3JlZGlyZWN0X3VyaX1cIj5cbiAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJzdGF0ZVwiIHZhbHVlPVwiJHtzdGF0ZX1cIj5cbiAgICA8dGFibGU+XG4gICAgICA8dHI+XG4gICAgICAgIDx0ZD48bGFiZWwgZm9yPVwidXNlcm5hbWVcIj51c2VybmFtZTwvbGFiZWw+PC90ZD5cbiAgICAgICAgPHRkPjxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VybmFtZVwiIGlkPVwidXNlcm5hbWVcIiBwbGFjZWhvbGRlcj1cIm5ldFRyZWtcIiByZXF1aXJlZCB2YWx1ZT1cIm5ldFRyZWtcIj48L3RkPlxuICAgICAgPC90cj5cbiAgICAgIDx0cj5cbiAgICAgICAgPHRkPjxsYWJlbCBmb3I9XCJ1c2VybmFtZVwiPnBhc3N3b3JkPC9sYWJlbD48L3RkPlxuICAgICAgICA8dGQ+PGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIGlkPVwicGFzc3dvcmRcIiByZXF1aXJlZCB2YWx1ZT1cIm5ldFRyZWtcIj48L3RkPlxuICAgICAgPC90cj5cbiAgICAgIDx0cj5cbiAgICAgICAgPHRkPjxsYWJlbCBmb3I9XCJhY2Nlc3Nfc2NvcGVcIj5hbGxvdyBhY2Nlc3MgdG8gJHtzY29wZX08L2xhYmVsPjwvdGQ+XG4gICAgICAgIDx0ZD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImFjY2Vzc19zY29wZVwiIGlkPVwiYWNjZXNzX3Njb3BlXCI+PC90ZD5cbiAgICAgIDwvdHI+XG4gICAgPC90YWJsZT5cbiAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwic3VibWl0XCI+XG48L2Zvcm0+XG48L2JvZHk+XG48L2h0bWw+XG4gICAgYCApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXMuc3RhdHVzICggNTAwIClcbiAgICAgICAgIC5zZW5kICggYFxuICAgIDwhRE9DVFlQRSBodG1sPlxuPGh0bWwgbGFuZz1cImVuXCI+XG48aGVhZD5cbiAgICA8bWV0YSBjaGFyc2V0PVwiVVRGLThcIj5cbiAgICA8dGl0bGU+bG9naW48L3RpdGxlPlxuPC9oZWFkPlxuPGJvZHk+XG4gIDxoMT5Vbmtvd24gY2xpZW50PC9oMT5cbjwvYm9keT5cbjwvaHRtbD5cbiAgICBgICk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdXRoICggcmVxLCByZXMsIG5leHQgKSB7XG4gIGNvbnN0IGFzID0gbmV3IEF1dGhTZXJ2aWNlICggcmVxLCByZXMgKTtcbn1cblxuY2xhc3MgTG9naW4ge1xuICBjb25zdHJ1Y3RvciAoIHByaXZhdGUgcmVxLCBwcml2YXRlIHJlcyApIHtcbiAgICBjb25zdCB7XG4gICAgICAgICAgICByZXNwb25zZV90eXBlLCBjbGllbnRfaWQsIGNsaWVudF9zZWNyZXQsIHNjb3BlLCByZWRpcmVjdF91cmksIHN0YXRlLCBhY2Nlc3Nfc2NvcGUsXG4gICAgICAgICAgICB1c2VybmFtZSwgcGFzc3dvcmRcbiAgICAgICAgICB9ID0gcmVxLmJvZHk7XG5cbiAgICBpZiAoIHVzZXJuYW1lID09PSBwYXNzd29yZCAmJiBwYXNzd29yZCA9PT0gJ25ldFRyZWsnICkge1xuICAgICAgY29uc3QgYWNjZXNzX3Rva2VuID0gJzQ3MTEnO1xuICAgICAgcmVzLnJlZGlyZWN0KHVybC5mb3JtYXQoe1xuICAgICAgICBwYXRobmFtZTogcmVkaXJlY3RfdXJpLFxuICAgICAgICBxdWVyeToge1xuICAgICAgICAgIGFjY2Vzc190b2tlblxuICAgICAgICB9XG4gICAgICB9KSk7XG4gICAgfSBlbHNlIHtcblxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9naW4gKCByZXEsIHJlcywgbmV4dCApIHtcbiAgY29uc3QgYXMgPSBuZXcgTG9naW4gKCByZXEsIHJlcyApO1xufVxuIl19