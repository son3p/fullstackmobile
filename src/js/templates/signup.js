const signupHbs = `
<div class="col-md-12">
  <div class="card card-container border border-dark border-4 rounded card-5 fw-bold">
    <img id="profile-img" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" class="profile-img-card" />
    {{#unless responseMessage}}
    <form action="/signup" method="POST">
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" name="username" class="form-control bg-light border border-dark" />
        {{#if errors.username}}
        <label class="error-feedback">{{errors.username.message}}</label>
        {{/if}}
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="text" name="email" class="form-control bg-light border border-dark" />
        {{#if errors.email}}
        <label class="error-feedback">{{errors.email.message}}</label>
        {{/if}}
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" name="password" class="form-control bg-light border border-dark"/>
        {{#if errors.password}}
        <label class="error-feedback">{{errors.password.message}}</label>
        {{/if}}
      </div>
      <p></p>
      <div class="form-group">
        <button type="submit" class="btn btn-dark border border-2 border-dark button-1">
          Sign Up
        </button>
      </div>
    </form>
    {{else}}
    <p></p>
    <div class="alert alert-success">
      {{responseMessage}}
    </div>
    {{/unless}}
  </div>
</div>
`
export { signupHbs };