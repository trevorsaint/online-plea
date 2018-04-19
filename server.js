const path       = require('path')
const express    = require('express')
const session    = require('express-session')
const nunjucks   = require('nunjucks')

const routes     = require('./app/routes')
const port       = process.env.PORT || 3000

const cookieParser = require('cookie-parser')
const bodyParser   = require('body-parser')
const app          = express()


module.exports = app


// Application settings
app.set('view engine', 'nunjucks')


// Set location of views
const appViews = [
  path.join(__dirname, '/app/views'),
  path.join(__dirname, '/app/views/layout'),
  path.join(__dirname, '/app/views/partials'),
  path.join(__dirname, '/app/views/macros'),
  path.join(__dirname, '/node_modules/govuk_template_jinja/views/layouts')
]


// Views defined in appViews
nunjucks.configure(appViews, {
  express: app,
  autoescape: true,
  watch: true,
  noCache: true
})


// Middleware to serve static assets
app.use('/public', express.static(path.join(__dirname, '/public')))
app.use('/public', express.static(path.join(__dirname, '/node_modules/govuk_template_jinja/assets')))
app.use('/public', express.static(path.join(__dirname, '/node_modules/govuk_frontend_toolkit')))
app.use('/public', express.static(path.join(__dirname, '/node_modules/govuk-elements-sass')))


// Support for parsing data in POSTs
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))


// Express session
app.use(session({
  secret: 'onlineplea',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false // (Recommended as true, but requires an https-enabled url)
  }
}))


// Send assetPath to all views / add variables that area available in all views
app.use((req, res, next) => {
  res.locals.asset_path = '/public/'
  next()
})


// locals
app.locals = require('./app/locals')


// Routes
routes.bind(app, '/public/')


// Start app and listen
app.listen(port)
console.log('Listening on port: ' + port)
