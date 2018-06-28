import { Op } from 'sequelize';
import { User } from '../models';
import validator from 'validator';

/**
 *
 *
 * @class UsersController
 */
class UsersController {
  /**
   *
   *
   * @static
   * @param {*} req
   * @param {*} res
   * @returns {UsersController} The identifier for...
   * @memberof UsersController
   */
  static signup(req, res) {
    const errors = [];
    // Get form Object
    const formObject = {
      email: req.body.email,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      phone: req.body.phone,
      password: req.body.password,
      image_url: 'great'
    };

    // validate form object
    // validate form email
    if (!validator.isEmail(formObject.email)) {
      errors.push({ 'email error': 'invalid email. try you@domain.com' });
    } else if (validator.isEmpty(formObject.email)) {
      errors.push({ 'email error': 'email is required!' });
    }

    // validate form firstname
    if (!validator.isAlpha(formObject.firstname, 'en-GB') || !validator.isAlpha(formObject.firstname, 'en-US')) {
      errors.push({ 'firstname error': 'invalid firstname. firstname must contain only letters' });
    } else if (validator.isEmpty(formObject.firstname)) {
      errors.push({ 'firstname error': 'firstname is required!' });
    } else if (formObject.firstname.length < 3) {
      errors.push({ 'firstname error': 'firstname must contain at least 3 characters!' });
    }

    // validate form lastname
    if (!validator.isAlpha(formObject.lastname, 'en-GB') || !validator.isAlpha(formObject.lastname, 'en-US')) {
      errors.push({ 'lastname error': 'invalid lastname. lastname must contain only letters' });
    } else if (validator.isEmpty(formObject.lastname)) {
      errors.push({ 'lastname error': 'lastname is required!' });
    } else if (formObject.lastname.length < 3) {
      errors.push({ 'lastname error': 'lastname must contain at least 3 characters!' });
    }

    // validate form phone
    if (!validator.isNumeric(formObject.phone)) {
      errors.push({ 'phone error': 'invalid phone number. phone number must contain only digits' });
    } else if (validator.isEmpty(formObject.phone)) {
      errors.push({ 'phone error': 'phone number is required!' });
    } else if (formObject.phone.length < 11) {
      errors.push({ 'phone error': 'phone number must contain at least 11 digits!' });
    }

    if (errors.length > 0) {
      return res.status(400).send({
        message: `${errors.length} ${(errors.length === 1 ? 'field' : 'fields')} had validation ${(errors.length === 1 ? 'error' : 'errors')}.`,
        details: errors
      });
    }

    // check password

    // hash password

    // Create signup object

    // Create account if account does not exist
    return User
      .findOne({
        where: {
          [Op.or]: [
            { email: formObject.email },
            { phone: formObject.phone }
          ]
        }
      })
      .then((isExisting) => {
        // If account does not exist create the account
        if (!isExisting) {
          return User
            .create(formObject)
            .then(createdUser => res.status(201).json({
              id: createdUser.id,
              firstname: createdUser.firstname,
              lastname: createdUser.lastname,
              email: createdUser.email,
              phone: createdUser.phone
            }));
        }
        // If account already, respond with an error msg
        // if (isExisting) {

        // }
      })
      .catch(error => res.status(500).json({
        'Server Error': error
      }));
  }
}

export default UsersController;
