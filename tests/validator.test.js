const ValidatorScheme = require('./../index');
const Joi = require('@hapi/joi');

test('Validación de Schema', async() => {
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
  expect(pass).toBe(true);
});

test('Menor cantidad de campos dentro del schema', async() => {
  const schema = Joi.object({
    user_name: Joi.string().required(),
  });
  const body = {
    user_name: "John",
    apells: "Doe"
  }
  const Validator = new ValidatorScheme(schema, body);
  const pass = await Validator.validate();
  expect(pass).toBe(false);
});

test('Menor cantidad de campos dentro del body', async() => {
  const schema = Joi.object({
    user_name: Joi.string().required(),
    apells: Joi.string().required()
  });
  const body = {
    user_name: "John",
  }
  const Validator = new ValidatorScheme(schema, body);
  const pass = await Validator.validate();
  expect(pass).toBe(false);
});

test('Sin definición de esquema', async() => {
  const schema = {};
  const body = {
    user_name: "John",
  }
  const Validator = new ValidatorScheme(schema, body);
  const pass = await Validator.validate();
  expect(pass).toBe(false);
});

test('Sin datos dentro del body', async() => {
  const schema = Joi.object({
    user_name: Joi.string().required(),
    apells: Joi.string().required()
  });
  const body = undefined;
  const Validator = new ValidatorScheme(schema, body);
  const pass = await Validator.validate();
  expect(pass).toBe(false);
});


test('Diferentes keys dentro del body', async() => {
  const schema = Joi.object({
    user_name: Joi.string().required(),
    apells: Joi.string().required()
  });
  const body = {
    user_name: "John",
    apell: "Doe"
  };
  const Validator = new ValidatorScheme(schema, body);
  const pass = await Validator.validate();
  expect(pass).toBe(false);
});
