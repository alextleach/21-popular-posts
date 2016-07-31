'use strict'

class SessionController {

  * index(request, response) {
    //
  }

  * create(request, response) {
      yield response.sendView('login');
  }

  * store(request, response) {
    const { email, password } = request.all();

    try {
      // Try to login the user
      yield request.auth.attempt(email, password);

      // Send success message
      yield request.with({ success: 'You have successfully logged in!' })
        // Make message and input last only one request
        .flash();

      // Redirect to login
      response.redirect('/posts');
    } catch (e) {
      // Send back old input
      yield request.withAll()
      // Send error message
      .andWith({ error: 'The email and password do not match!' })
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
    yield request.auth.logout();

    // Send success message
    yield request
    .with({ success: 'You are logged out!' })
    // Make message and input last only one request
    .flash();

    // Redirect back
    response.redirect('/login');
  }

}

module.exports = SessionController
