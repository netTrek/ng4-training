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
                    access_token: access_token, scope: scope, token_type: 'Bearer', state: state, expires_in: 3600
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL3N1ZW5sdWUvV2Vic2l0ZXMvdHJhaW5pbmcvZ2ZuLTIwMTctMTEvZ2ZuL3NlcnZlci9zcmMvYXV0aFNlcnZpY2UudHMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdWVubHVlL1dlYnNpdGVzL3RyYWluaW5nL2dmbi0yMDE3LTExL2dmbi9zZXJ2ZXIvc3JjL2F1dGhTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUJBQTJCO0FBRTNCO0lBQ0UsMkJBQTJCO0lBQzNCLG1LQUFtSztJQUNuSyxxQkFBc0IsR0FBRyxFQUFVLEdBQUc7UUFBaEIsUUFBRyxHQUFILEdBQUcsQ0FBQTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQUE7UUFDOUIsSUFBQSxjQUFtRixFQUFqRixnQ0FBYSxFQUFFLHdCQUFTLEVBQUUsZ0NBQWEsRUFBRSxnQkFBSyxFQUFFLDhCQUFZLEVBQUUsZ0JBQUssQ0FBZTtRQUMxRixHQUFHLENBQUMsR0FBRyxDQUFHLGNBQWMsRUFBRSxXQUFXLENBQUUsQ0FBQztRQUN4QyxFQUFFLENBQUMsQ0FBRSxTQUFTLEtBQUssYUFBYSxJQUFJLFNBQVMsS0FBSyxTQUFVLENBQUMsQ0FBQyxDQUFDO1lBQzdELEdBQUcsQ0FBQyxNQUFNLENBQUcsR0FBRyxDQUFFO2lCQUNkLElBQUksQ0FBRyx1T0FTc0MsYUFBYSxtRUFDakIsU0FBUyx1RUFDTCxhQUFhLCtEQUNyQixLQUFLLHNFQUNFLFlBQVksK0RBQ25CLEtBQUssNGVBV0ksS0FBSyxrTkFReEQsQ0FBRSxDQUFDO1FBQ0osQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sR0FBRyxDQUFDLE1BQU0sQ0FBRyxHQUFHLENBQUU7aUJBQ2QsSUFBSSxDQUFHLDhLQVdaLENBQUUsQ0FBQztRQUNKLENBQUM7SUFDSCxDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBMURELElBMERDO0FBRUQsY0FBdUIsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJO0lBQ25DLElBQU0sRUFBRSxHQUFHLElBQUksV0FBVyxDQUFHLEdBQUcsRUFBRSxHQUFHLENBQUUsQ0FBQztBQUMxQyxDQUFDO0FBRkQsb0JBRUM7QUFFRDtJQUNFLGVBQXNCLEdBQUcsRUFBVSxHQUFHO1FBQWhCLFFBQUcsR0FBSCxHQUFHLENBQUE7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFBO1FBQzlCLElBQUEsYUFHWSxFQUZWLGdDQUFhLEVBQUUsd0JBQVMsRUFBRSxnQ0FBYSxFQUFFLGdCQUFLLEVBQUUsOEJBQVksRUFBRSxnQkFBSyxFQUFFLDhCQUFZLEVBQ2pGLHNCQUFRLEVBQUUsc0JBQVEsQ0FDUDtRQUVuQixFQUFFLENBQUMsQ0FBRSxRQUFRLEtBQUssUUFBUSxJQUFJLFFBQVEsS0FBSyxTQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3RELElBQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQztZQUM1QixHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7Z0JBQ3RCLFFBQVEsRUFBRSxZQUFZO2dCQUN0QixLQUFLLEVBQUU7b0JBQ0wsWUFBWSxjQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxLQUFLLE9BQUEsRUFBRSxVQUFVLEVBQUUsSUFBSTtpQkFDbkU7YUFDRixDQUFDLENBQUMsQ0FBQztRQUNOLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztRQUVSLENBQUM7SUFDSCxDQUFDO0lBQ0gsWUFBQztBQUFELENBQUMsQUFuQkQsSUFtQkM7QUFFRCxlQUF3QixHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUk7SUFDcEMsSUFBTSxFQUFFLEdBQUcsSUFBSSxLQUFLLENBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBRSxDQUFDO0FBQ3BDLENBQUM7QUFGRCxzQkFFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHVybCBmcm9tICd1cmwnO1xuXG5jbGFzcyBBdXRoU2VydmljZSB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAvLyBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXV0aD9yZXNwb25zZV90eXBlPWFjY2VzcyUyMGlkJmNsaWVudF9pZD1uZXRUcmVrJmNsaWVudF9zZWNyZXQ9bmV0VHJlayZzY29wZT1wcm9maWxlJTIwdXNlcnMmcmVkaXJlY3RfdXJpPWh0dHA6Ly9sb2NhbGhvc3QvNDIwMCZzdGF0ZT00NzExXG4gIGNvbnN0cnVjdG9yICggcHJpdmF0ZSByZXEsIHByaXZhdGUgcmVzICkge1xuICAgIGNvbnN0IHsgcmVzcG9uc2VfdHlwZSwgY2xpZW50X2lkLCBjbGllbnRfc2VjcmV0LCBzY29wZSwgcmVkaXJlY3RfdXJpLCBzdGF0ZSB9ID0gcmVxLnF1ZXJ5O1xuICAgIHJlcy5zZXQgKCAnQ29udGVudC1UeXBlJywgJ3RleHQvaHRtbCcgKTtcbiAgICBpZiAoIGNsaWVudF9pZCA9PT0gY2xpZW50X3NlY3JldCAmJiBjbGllbnRfaWQgPT09ICduZXRUcmVrJyApIHtcbiAgICAgIHJlcy5zdGF0dXMgKCAyMDAgKVxuICAgICAgICAgLnNlbmQgKCBgXG4gICAgPCFET0NUWVBFIGh0bWw+XG48aHRtbCBsYW5nPVwiZW5cIj5cbjxoZWFkPlxuICAgIDxtZXRhIGNoYXJzZXQ9XCJVVEYtOFwiPlxuICAgIDx0aXRsZT5sb2dpbjwvdGl0bGU+XG48L2hlYWQ+XG48Ym9keT5cbiAgPGZvcm0gYWN0aW9uPVwiL2xvZ2luXCIgbWV0aG9kPVwicG9zdFwiPlxuICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInJlc3BvbnNlX3R5cGVcIiB2YWx1ZT1cIiR7cmVzcG9uc2VfdHlwZX1cIj5cbiAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJjbGllbnRfaWRcIiB2YWx1ZT1cIiR7Y2xpZW50X2lkfVwiPlxuICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImNsaWVudF9zZWNyZXRcIiB2YWx1ZT1cIiR7Y2xpZW50X3NlY3JldH1cIj5cbiAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJzY29wZVwiIHZhbHVlPVwiJHtzY29wZX1cIj5cbiAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJyZWRpcmVjdF91cmlcIiB2YWx1ZT1cIiR7cmVkaXJlY3RfdXJpfVwiPlxuICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInN0YXRlXCIgdmFsdWU9XCIke3N0YXRlfVwiPlxuICAgIDx0YWJsZT5cbiAgICAgIDx0cj5cbiAgICAgICAgPHRkPjxsYWJlbCBmb3I9XCJ1c2VybmFtZVwiPnVzZXJuYW1lPC9sYWJlbD48L3RkPlxuICAgICAgICA8dGQ+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJuYW1lXCIgaWQ9XCJ1c2VybmFtZVwiIHBsYWNlaG9sZGVyPVwibmV0VHJla1wiIHJlcXVpcmVkIHZhbHVlPVwibmV0VHJla1wiPjwvdGQ+XG4gICAgICA8L3RyPlxuICAgICAgPHRyPlxuICAgICAgICA8dGQ+PGxhYmVsIGZvcj1cInVzZXJuYW1lXCI+cGFzc3dvcmQ8L2xhYmVsPjwvdGQ+XG4gICAgICAgIDx0ZD48aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzd29yZFwiIHJlcXVpcmVkIHZhbHVlPVwibmV0VHJla1wiPjwvdGQ+XG4gICAgICA8L3RyPlxuICAgICAgPHRyPlxuICAgICAgICA8dGQ+PGxhYmVsIGZvcj1cImFjY2Vzc19zY29wZVwiPmFsbG93IGFjY2VzcyB0byAke3Njb3BlfTwvbGFiZWw+PC90ZD5cbiAgICAgICAgPHRkPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiYWNjZXNzX3Njb3BlXCIgaWQ9XCJhY2Nlc3Nfc2NvcGVcIj48L3RkPlxuICAgICAgPC90cj5cbiAgICA8L3RhYmxlPlxuICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJzdWJtaXRcIj5cbjwvZm9ybT5cbjwvYm9keT5cbjwvaHRtbD5cbiAgICBgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcy5zdGF0dXMgKCA1MDAgKVxuICAgICAgICAgLnNlbmQgKCBgXG4gICAgPCFET0NUWVBFIGh0bWw+XG48aHRtbCBsYW5nPVwiZW5cIj5cbjxoZWFkPlxuICAgIDxtZXRhIGNoYXJzZXQ9XCJVVEYtOFwiPlxuICAgIDx0aXRsZT5sb2dpbjwvdGl0bGU+XG48L2hlYWQ+XG48Ym9keT5cbiAgPGgxPlVua293biBjbGllbnQ8L2gxPlxuPC9ib2R5PlxuPC9odG1sPlxuICAgIGAgKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1dGggKCByZXEsIHJlcywgbmV4dCApIHtcbiAgY29uc3QgYXMgPSBuZXcgQXV0aFNlcnZpY2UgKCByZXEsIHJlcyApO1xufVxuXG5jbGFzcyBMb2dpbiB7XG4gIGNvbnN0cnVjdG9yICggcHJpdmF0ZSByZXEsIHByaXZhdGUgcmVzICkge1xuICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHJlc3BvbnNlX3R5cGUsIGNsaWVudF9pZCwgY2xpZW50X3NlY3JldCwgc2NvcGUsIHJlZGlyZWN0X3VyaSwgc3RhdGUsIGFjY2Vzc19zY29wZSxcbiAgICAgICAgICAgIHVzZXJuYW1lLCBwYXNzd29yZFxuICAgICAgICAgIH0gPSByZXEuYm9keTtcblxuICAgIGlmICggdXNlcm5hbWUgPT09IHBhc3N3b3JkICYmIHBhc3N3b3JkID09PSAnbmV0VHJlaycgKSB7XG4gICAgICBjb25zdCBhY2Nlc3NfdG9rZW4gPSAnNDcxMSc7XG4gICAgICByZXMucmVkaXJlY3QodXJsLmZvcm1hdCh7XG4gICAgICAgIHBhdGhuYW1lOiByZWRpcmVjdF91cmksXG4gICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgYWNjZXNzX3Rva2VuLCBzY29wZSwgdG9rZW5fdHlwZTogJ0JlYXJlcicsIHN0YXRlLCBleHBpcmVzX2luOiAzNjAwXG4gICAgICAgIH1cbiAgICAgIH0pKTtcbiAgICB9IGVsc2Uge1xuXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dpbiAoIHJlcSwgcmVzLCBuZXh0ICkge1xuICBjb25zdCBhcyA9IG5ldyBMb2dpbiAoIHJlcSwgcmVzICk7XG59XG4iXX0=