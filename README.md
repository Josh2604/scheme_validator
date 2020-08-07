# Scheme validator component for Node.js apps

Scheme validator example:
```js
exports.validator = (req, res, next) => {
  const schema = Joi.object({
    user_name: Joi.string().required(),
    apells: Joi.string().required(),
  });
  const body = {
    user_name: "John",
    apells: "Doe"
  }
  const Validator = new ValidatorScheme(schema, body);
  const pass = await Validator.validate();
  if(!pass) return res.status(400).send({code: 400, customMessage: "message", success: false});
  
  return next();
 }
```

Dev dependencies:
- @hapi/joi
- Jest
