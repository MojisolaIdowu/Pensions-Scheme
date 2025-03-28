//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

// Logging session data
router.use((req, res, next) => {
  console.log(JSON.stringify({
    method: req.method,
    url: req.originalUrl,
    data: req.session.data
  }, null, 2))
  next()
})