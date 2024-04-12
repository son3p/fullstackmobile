const signupHbs = `
<div class="container">
    <h2>Signup</h2>
    <form id="signup-form">
        <div class="form-group">
            <label for="username">Username</label>
            <input type="text" id="username" class="form-control" placeholder="Enter your username" required>
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" class="form-control" placeholder="Enter your email" required>
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" class="form-control" placeholder="Enter your password" required>
        </div>
        <button type="submit" class="btn btn-primary">Sign Up</button>
    </form>
    <div id="response-message" class="alert alert-success"></div>
</div>
;
`
export { signupHbs };