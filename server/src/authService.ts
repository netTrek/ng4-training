import * as url from 'url';
import * as btoa from 'btoa';

class AuthService {
  // tslint:disable-next-line
  // http://localhost:3000/auth?response_type=access%20id&client_id=netTrek&client_secret=netTrek&scope=profile%20users&redirect_uri=http://localhost/4200&state=4711
  constructor ( private req, private res ) {
    const { response_type, client_id, client_secret, scope, redirect_uri, state } = req.query;
    res.set ( 'Content-Type', 'text/html' );
    if ( client_id === client_secret && client_id === 'netTrek' ) {
      res.status ( 200 )
         .send ( `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>login</title>
</head>
<body>
  <form action="/login" method="post">
    <input type="hidden" name="response_type" value="${response_type}">
    <input type="hidden" name="client_id" value="${client_id}">
    <input type="hidden" name="client_secret" value="${client_secret}">
    <input type="hidden" name="scope" value="${scope}">
    <input type="hidden" name="redirect_uri" value="${redirect_uri}">
    <input type="hidden" name="state" value="${state}">
    <table>
      <tr>
        <td><label for="username">username</label></td>
        <td><input type="text" name="username" id="username" placeholder="netTrek" required value="netTrek"></td>
      </tr>
      <tr>
        <td><label for="username">password</label></td>
        <td><input type="password" name="password" id="password" required value="netTrek"></td>
      </tr>
      <tr>
        <td><label for="access_scope">allow access to ${scope}</label></td>
        <td><input type="checkbox" name="access_scope" id="access_scope"></td>
      </tr>
    </table>
    <input type="submit" value="submit">
</form>
</body>
</html>
    ` );
    } else {
      res.status ( 500 )
         .send ( `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>login</title>
</head>
<body>
  <h1>Unkown client</h1>
</body>
</html>
    ` );
    }
  }
}

export function auth ( req, res, next ) {
  const as = new AuthService ( req, res );
}

class Login {
  constructor ( private req, private res ) {
    const {
            response_type, client_id, client_secret, scope, redirect_uri, state, access_scope,
            username, password
          } = req.body;

    if ( username === password && password === 'netTrek' ) {

      console.log ( 'make redirect' );

      const access_token   = 'netTrek';
      const encryptionInfo = btoa (
        encodeURIComponent (
          JSON.stringify (
            { encryption: 'none' }
          )
        )
      );
      const userInfo       = btoa (
        encodeURIComponent (
          JSON.stringify (
            { username, scope }
          )
        )
      );
      const id_token       = `${encryptionInfo}:${userInfo}:noSig`;
      res.redirect ( url.format ( {
        pathname: redirect_uri,
        query   : {
          id_token, access_token, token_type: 'Bearer', state, expires_in: 3600
        }
      } ) );
    } else {
      res.status ( 500 )
         .send ( `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>login</title>
</head>
<body>
  <h1>Unkown user</h1>
</body>
</html>
    ` );
    }
  }
}

export function login ( req, res, next ) {
  const as = new Login ( req, res );
}
