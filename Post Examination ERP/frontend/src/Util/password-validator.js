import PasswordValidator from 'password-validator';

const schema = new PasswordValidator();
schema
  .is().min(6)
  .is().max(50)
  .has()
  .uppercase()
  .has()
  .lowercase()
  .has()
  .digits(1)
  .has()
  .not()
  .spaces();

export default schema;
