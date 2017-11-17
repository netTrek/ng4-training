/**
 * File created by suenlue on 16.11.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */

import * as jsonServer from 'json-server';

const server      = jsonServer.create ();
const router      = jsonServer.router ( './mock/db.json' );
const middlewares = jsonServer.defaults ();


// server.get ( '/users/:id', ( req, res, next ) => {
//   next ();
// } );


server.use(jsonServer.bodyParser);
server.post( '/login', ( req, res ) => {
  const { username, password } = req.body;
  const success = username === 'netTrek' && password === 'netTrek';
  const authorized = success;
  if ( success ) {
    res.header('authorization', `Bearer netTrek`);
    res.status(200);
  } else {
    res.status(401);
  }
  res.json( { success, authorized } );
});

router.render = (req, res, next ) => {
  console.log ( 'render', next );
  let authorized = false;
  if ( req.headers.hasOwnProperty('authorization') ) {
    const token = String( req.headers.authorization ).replace( /((Bearer)|\s)/gi, '');
    authorized = token === 'netTrek';
  }

  // if ( !authorized ) {
  //   res.status(401).json({ error: 'user is not authorized', authorized: false, success: false  });
  // } else {
    res.header('authorization', `Bearer netTrek`);
    res.json({
      data: res.locals.data,
      success: !!res.locals.data && ( res.statusCode === 200 ),
      authorized
    });
  // }

};

server.use ( middlewares );
server.use ( router );

server.listen ( 3000, () => {
  console.log ( 'JSON Server is running on port 3000' );
} );

