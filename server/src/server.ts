/**
 * File created by suenlue on 16.11.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */

import * as jsonServer from 'json-server';

import { auth, login } from './authService';

const server      = jsonServer.create ();
const router      = jsonServer.router ( './mock/db.json' );
const middlewares = jsonServer.defaults ();

server.use ( jsonServer.bodyParser );

server.get ( '/auth', auth );
server.post ( '/login', login );

router.render = ( req, res, next ) => {

  if ( req.url.indexOf ( 'auth' ) === 0 || req.url.indexOf ( 'login' ) === 0 ) {
    next ();
    return;
  }

  let authorized = false;
  if ( req.headers.hasOwnProperty ( 'authorization' ) ) {
    const token = String ( req.headers.authorization )
      .replace ( /((Bearer)|\s)/gi, '' );
    authorized  = token === 'netTrek';
  }

  if ( ! authorized ) {
    res.status ( 401 )
       .json ( { error: 'user is not authorized', authorized: false, success: false } );
  } else {
    // res.header ( 'authorization', `Bearer netTrek` );
    res.json ( {
      data   : res.locals.data,
      success: ! ! res.locals.data && ( res.statusCode === 200 ),
      authorized
    } );
  }

};

server.use ( middlewares );
server.use ( router );

server.listen ( 3000, () => {
  console.log ( 'JSON Server is running on port 3000' );
} );

