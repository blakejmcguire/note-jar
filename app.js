const express = require('express')
const app = new express()

/* const helmet = require('helmet')
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            'script-src': 
                ["'self'", 'code.jquery.com', 'cdn.jsdelivr.net']
        }
    }
})) */

const path = require('path')
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api', require('./api.js'))

/**
const { auth } = require('express-openid-connect')
const { requiresAuth } = require('express-openid-connect');

const openIDConfig = {
    authRequired: false,
    auth0Logout: true,
}

app.use(auth(openIDConfig))

app.all('*', (req, res, next) => {
    //console.log(req.oidc.user)
    if(req.oidc.user !== undefined) {
        res.locals.authenticated = true
        res.locals.nickname = req.oidc.user.nickname
        res.locals.userId = req.oidc.user.sub
    }
    else {
        res.locals.authenticated = false
    }

    next()
})

app.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});
*/

module.exports = app