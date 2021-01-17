const Joi = require('@hapi/joi')

const schema = {
    username: Joi.string().min(4).required(),
    email: Joi.string().min(8).required().email(),
    password: Joi.string().min(6).required()
}


module.exports.validateRegisterInput = (
    username,
    email,
    password,
    confirmPassword
) => {
    const record = {username:username, email:email, password:password}
    const errors = {}
    const {error} = Joi.validate(record, schema)
    if (error != null) {
        errors.note = error.details[0].message
    }
    if (password !== confirmPassword) {
        errors.confirmPassword = 'Password mismatch'
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1
    }
}

module.exports.validateLoginInput = (username, password) => {
    const errors = {}
    if (username.trim() === '') {
        errors.username = 'Username must not be empty'
    }
    if (password === '') {
        errors.username = 'Password must not be empty'
    }
    return {
        errors,
        valid: Object.keys(errors).length < 1
    }
}