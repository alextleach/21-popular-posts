'use strict'

const User = use('App/Model/User');
const Hash = use('Hash');


class UserController {

  * index(request, response) {
    //
  }

  * create(request, response) {
    yield response.sendView('register');
    }

  * store(request, response) {
    // Grab user input
    const { user_name, email, password } = request.all();
    // Attempt to create a user
    try {
      yield User.create({ user_name, email, password: yield Hash.make(password) });

      // Send success message
      yield request.with({ success: 'Registration Complete! Please Log In.' })
      // Make message and input last only one request
      .flash();

      // Redirect to login
      response.redirect('/');
    } catch (e) {
      // Send back old input
      yield request.withAll()
      // Send error message
      .andWith({ error: 'This user already exists. Please try again.' })
      // Make message and input last only one request
      .flash();

      // Redirect back
      response.redirect('back');
    }

  }

  * show(request, response) {
    //
  }

  * edit(request, response) {
    //
  }

  * update(request, response) {
    //
  }

  * destroy(request, response) {
    //
  }

}

module.exports = UserController
