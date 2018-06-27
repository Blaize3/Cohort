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
