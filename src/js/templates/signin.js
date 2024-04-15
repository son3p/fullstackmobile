const signinHbs = `
<form id="signinTodo" action="https://fullstackrestapi.azurewebsites.net/api/auth/login" method="POST">
    <div>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username">
    </div>
    <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password">
    </div>
    <div>
        <button type="submit">Sign in</button>
    </div>
</form>
`
export {signinHbs}