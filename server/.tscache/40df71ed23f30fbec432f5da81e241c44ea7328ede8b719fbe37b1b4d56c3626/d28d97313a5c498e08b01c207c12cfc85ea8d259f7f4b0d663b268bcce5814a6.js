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
            res.redirect(url.format({
                pathname: redirect_uri,
                query: {
                    "a": 1,
                    "b": 2,
                    "valid": "your string here"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL3N1ZW5sdWUvV2Vic2l0ZXMvdHJhaW5pbmcvZ2ZuLTIwMTctMTEvZ2ZuL3NlcnZlci9zcmMvYXV0aFNlcnZpY2UudHMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdWVubHVlL1dlYnNpdGVzL3RyYWluaW5nL2dmbi0yMDE3LTExL2dmbi9zZXJ2ZXIvc3JjL2F1dGhTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUJBQTJCO0FBRTNCO0lBQ0UsMkJBQTJCO0lBQzNCLG1LQUFtSztJQUNuSyxxQkFBc0IsR0FBRyxFQUFVLEdBQUc7UUFBaEIsUUFBRyxHQUFILEdBQUcsQ0FBQTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQUE7UUFDOUIsSUFBQSxjQUFtRixFQUFqRixnQ0FBYSxFQUFFLHdCQUFTLEVBQUUsZ0NBQWEsRUFBRSxnQkFBSyxFQUFFLDhCQUFZLEVBQUUsZ0JBQUssQ0FBZTtRQUMxRixHQUFHLENBQUMsR0FBRyxDQUFHLGNBQWMsRUFBRSxXQUFXLENBQUUsQ0FBQztRQUN4QyxFQUFFLENBQUMsQ0FBRSxTQUFTLEtBQUssYUFBYSxJQUFJLFNBQVMsS0FBSyxTQUFVLENBQUMsQ0FBQyxDQUFDO1lBQzdELEdBQUcsQ0FBQyxNQUFNLENBQUcsR0FBRyxDQUFFO2lCQUNkLElBQUksQ0FBRyx1T0FTc0MsYUFBYSxtRUFDakIsU0FBUyx1RUFDTCxhQUFhLCtEQUNyQixLQUFLLHNFQUNFLFlBQVksK0RBQ25CLEtBQUssNGVBV0ksS0FBSyxrTkFReEQsQ0FBRSxDQUFDO1FBQ0osQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sR0FBRyxDQUFDLE1BQU0sQ0FBRyxHQUFHLENBQUU7aUJBQ2QsSUFBSSxDQUFHLDhLQVdaLENBQUUsQ0FBQztRQUNKLENBQUM7SUFDSCxDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBMURELElBMERDO0FBRUQsY0FBdUIsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJO0lBQ25DLElBQU0sRUFBRSxHQUFHLElBQUksV0FBVyxDQUFHLEdBQUcsRUFBRSxHQUFHLENBQUUsQ0FBQztBQUMxQyxDQUFDO0FBRkQsb0JBRUM7QUFFRDtJQUNFLGVBQXNCLEdBQUcsRUFBVSxHQUFHO1FBQWhCLFFBQUcsR0FBSCxHQUFHLENBQUE7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFBO1FBQzlCLElBQUEsYUFHWSxFQUZWLGdDQUFhLEVBQUUsd0JBQVMsRUFBRSxnQ0FBYSxFQUFFLGdCQUFLLEVBQUUsOEJBQVksRUFBRSxnQkFBSyxFQUFFLDhCQUFZLEVBQ2pGLHNCQUFRLEVBQUUsc0JBQVEsQ0FDUDtRQUVuQixFQUFFLENBQUMsQ0FBRSxRQUFRLEtBQUssUUFBUSxJQUFJLFFBQVEsS0FBSyxTQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3RELEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztnQkFFdEIsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLEtBQUssRUFBRTtvQkFDTCxHQUFHLEVBQUUsQ0FBQztvQkFDTixHQUFHLEVBQUUsQ0FBQztvQkFDTixPQUFPLEVBQUMsa0JBQWtCO2lCQUMzQjthQUNGLENBQUMsQ0FBQyxDQUFDO1FBQ04sQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1FBRVIsQ0FBQztJQUNILENBQUM7SUFDSCxZQUFDO0FBQUQsQ0FBQyxBQXJCRCxJQXFCQztBQUVELGVBQXdCLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSTtJQUNwQyxJQUFNLEVBQUUsR0FBRyxJQUFJLEtBQUssQ0FBRyxHQUFHLEVBQUUsR0FBRyxDQUFFLENBQUM7QUFDcEMsQ0FBQztBQUZELHNCQUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdXJsIGZyb20gJ3VybCc7XG5cbmNsYXNzIEF1dGhTZXJ2aWNlIHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gIC8vIGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hdXRoP3Jlc3BvbnNlX3R5cGU9YWNjZXNzJTIwaWQmY2xpZW50X2lkPW5ldFRyZWsmY2xpZW50X3NlY3JldD1uZXRUcmVrJnNjb3BlPXByb2ZpbGUlMjB1c2VycyZyZWRpcmVjdF91cmk9aHR0cDovL2xvY2FsaG9zdC80MjAwJnN0YXRlPTQ3MTFcbiAgY29uc3RydWN0b3IgKCBwcml2YXRlIHJlcSwgcHJpdmF0ZSByZXMgKSB7XG4gICAgY29uc3QgeyByZXNwb25zZV90eXBlLCBjbGllbnRfaWQsIGNsaWVudF9zZWNyZXQsIHNjb3BlLCByZWRpcmVjdF91cmksIHN0YXRlIH0gPSByZXEucXVlcnk7XG4gICAgcmVzLnNldCAoICdDb250ZW50LVR5cGUnLCAndGV4dC9odG1sJyApO1xuICAgIGlmICggY2xpZW50X2lkID09PSBjbGllbnRfc2VjcmV0ICYmIGNsaWVudF9pZCA9PT0gJ25ldFRyZWsnICkge1xuICAgICAgcmVzLnN0YXR1cyAoIDIwMCApXG4gICAgICAgICAuc2VuZCAoIGBcbiAgICA8IURPQ1RZUEUgaHRtbD5cbjxodG1sIGxhbmc9XCJlblwiPlxuPGhlYWQ+XG4gICAgPG1ldGEgY2hhcnNldD1cIlVURi04XCI+XG4gICAgPHRpdGxlPmxvZ2luPC90aXRsZT5cbjwvaGVhZD5cbjxib2R5PlxuICA8Zm9ybSBhY3Rpb249XCIvbG9naW5cIiBtZXRob2Q9XCJwb3N0XCI+XG4gICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwicmVzcG9uc2VfdHlwZVwiIHZhbHVlPVwiJHtyZXNwb25zZV90eXBlfVwiPlxuICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImNsaWVudF9pZFwiIHZhbHVlPVwiJHtjbGllbnRfaWR9XCI+XG4gICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiY2xpZW50X3NlY3JldFwiIHZhbHVlPVwiJHtjbGllbnRfc2VjcmV0fVwiPlxuICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInNjb3BlXCIgdmFsdWU9XCIke3Njb3BlfVwiPlxuICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInJlZGlyZWN0X3VyaVwiIHZhbHVlPVwiJHtyZWRpcmVjdF91cml9XCI+XG4gICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwic3RhdGVcIiB2YWx1ZT1cIiR7c3RhdGV9XCI+XG4gICAgPHRhYmxlPlxuICAgICAgPHRyPlxuICAgICAgICA8dGQ+PGxhYmVsIGZvcj1cInVzZXJuYW1lXCI+dXNlcm5hbWU8L2xhYmVsPjwvdGQ+XG4gICAgICAgIDx0ZD48aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlcm5hbWVcIiBpZD1cInVzZXJuYW1lXCIgcGxhY2Vob2xkZXI9XCJuZXRUcmVrXCIgcmVxdWlyZWQgdmFsdWU9XCJuZXRUcmVrXCI+PC90ZD5cbiAgICAgIDwvdHI+XG4gICAgICA8dHI+XG4gICAgICAgIDx0ZD48bGFiZWwgZm9yPVwidXNlcm5hbWVcIj5wYXNzd29yZDwvbGFiZWw+PC90ZD5cbiAgICAgICAgPHRkPjxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgcmVxdWlyZWQgdmFsdWU9XCJuZXRUcmVrXCI+PC90ZD5cbiAgICAgIDwvdHI+XG4gICAgICA8dHI+XG4gICAgICAgIDx0ZD48bGFiZWwgZm9yPVwiYWNjZXNzX3Njb3BlXCI+YWxsb3cgYWNjZXNzIHRvICR7c2NvcGV9PC9sYWJlbD48L3RkPlxuICAgICAgICA8dGQ+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJhY2Nlc3Nfc2NvcGVcIiBpZD1cImFjY2Vzc19zY29wZVwiPjwvdGQ+XG4gICAgICA8L3RyPlxuICAgIDwvdGFibGU+XG4gICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cInN1Ym1pdFwiPlxuPC9mb3JtPlxuPC9ib2R5PlxuPC9odG1sPlxuICAgIGAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzLnN0YXR1cyAoIDUwMCApXG4gICAgICAgICAuc2VuZCAoIGBcbiAgICA8IURPQ1RZUEUgaHRtbD5cbjxodG1sIGxhbmc9XCJlblwiPlxuPGhlYWQ+XG4gICAgPG1ldGEgY2hhcnNldD1cIlVURi04XCI+XG4gICAgPHRpdGxlPmxvZ2luPC90aXRsZT5cbjwvaGVhZD5cbjxib2R5PlxuICA8aDE+VW5rb3duIGNsaWVudDwvaDE+XG48L2JvZHk+XG48L2h0bWw+XG4gICAgYCApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXV0aCAoIHJlcSwgcmVzLCBuZXh0ICkge1xuICBjb25zdCBhcyA9IG5ldyBBdXRoU2VydmljZSAoIHJlcSwgcmVzICk7XG59XG5cbmNsYXNzIExvZ2luIHtcbiAgY29uc3RydWN0b3IgKCBwcml2YXRlIHJlcSwgcHJpdmF0ZSByZXMgKSB7XG4gICAgY29uc3Qge1xuICAgICAgICAgICAgcmVzcG9uc2VfdHlwZSwgY2xpZW50X2lkLCBjbGllbnRfc2VjcmV0LCBzY29wZSwgcmVkaXJlY3RfdXJpLCBzdGF0ZSwgYWNjZXNzX3Njb3BlLFxuICAgICAgICAgICAgdXNlcm5hbWUsIHBhc3N3b3JkXG4gICAgICAgICAgfSA9IHJlcS5ib2R5O1xuXG4gICAgaWYgKCB1c2VybmFtZSA9PT0gcGFzc3dvcmQgJiYgcGFzc3dvcmQgPT09ICduZXRUcmVrJyApIHtcbiAgICAgIHJlcy5yZWRpcmVjdCh1cmwuZm9ybWF0KHtcbiAgICAgICAgXG4gICAgICAgIHBhdGhuYW1lOiByZWRpcmVjdF91cmksXG4gICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgXCJhXCI6IDEsXG4gICAgICAgICAgXCJiXCI6IDIsXG4gICAgICAgICAgXCJ2YWxpZFwiOlwieW91ciBzdHJpbmcgaGVyZVwiXG4gICAgICAgIH1cbiAgICAgIH0pKTtcbiAgICB9IGVsc2Uge1xuXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dpbiAoIHJlcSwgcmVzLCBuZXh0ICkge1xuICBjb25zdCBhcyA9IG5ldyBMb2dpbiAoIHJlcSwgcmVzICk7XG59XG4iXX0=