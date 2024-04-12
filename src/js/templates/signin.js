// Adjust the form action (/signin) and method (POST) according to your backend setup.
const signinHbs = `
<div class="col-md-12">
  <div class="card card-container border border-dark border-4 rounded card-6 fw-bold">
    <img id="profile-img" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" class="profile-img-card" />
    <form action="/signin" method="POST">
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" name="username" class="form-control bg-light border border-dark" />
        {{#if errors.username}}
        <label class="error-feedback">{{errors.username.message}}</label>
        {{/if}}
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" name="password" class="form-control bg-light border border-dark" />
        {{#if errors.password}}
        <label class="error-feedback">{{errors.password.message}}</label>
        {{/if}}
      </div>
      <p></p>
      <div class="form-group">
        <button type="submit" class="btn btn-dark border border-2 border-dark btn-block button-2">
          Sign In
        </button>
      </div>
    </form>
    <p></p>
    {{#if responseMessage}}
    <div class="alert alert-success">
      {{responseMessage}}
    </div>
    {{/if}}
  </div>
</div>

`
export { signinHbs };