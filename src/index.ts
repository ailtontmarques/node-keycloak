import express from 'express';
import keycloak, { memoryStore } from './keycloak';
import session from 'express-session';

var app = express();

app.use(
  session({
    secret: '1234567890',
    resave: false,
    saveUninitialized: true,
    store: memoryStore,
    cookie: {
      maxAge: 1000 * 60 * 10
    }
  })
)

app.use(keycloak.middleware({
  logout: '/logout',
  admin: '/'
  })
);

app.get('/', keycloak.protect(), (req, res, next) => {
  // console.log('access_token', req.kauth.grant.access_token);
  // console.log('id_token', req.kauth.grant.id_token);
  console.log('user', req.kauth.grant.id_token.content);
  res.json('Hello World!')
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Running at http://localhost:3000')
})
