const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }

    const {error, value} = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(403).send({
            error: 'Invalid Email',
            info: value
          })
          break
        case 'password':
          res.status(403).send({
            error: `Password must be <br>
            1. Valid charactors : lowercase, uppercase, numeric <br>
            2. Greater than 8 characters <br>
            3. Less than 32 characters`,
            info: value
          })
          break
        default:
          res.status(400).send({
            error: 'Invalid registration information',
            info: value
          })
      }
    } else {
      next()
    }
  }
}
