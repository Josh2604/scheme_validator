
/*=============================================
=            Validator Scheme Definition      =
=============================================*/

class ValidatorScheme{
  constructor(schema={}, body={}){
    this.schema = schema;
    this.body = body;
  }
  
  async validate(){
    try{
      if(!this.body && !typeof this.body === 'object' && this.body.constructor !== Object) {
        throw new Error(`Body data must be an object like {"key": "value"}`);
      }
      await this.schema.validateAsync(this.body);
      return true;
    }catch{
      return false;
    }
  }
}
module.exports = ValidatorScheme;