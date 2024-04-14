const signupHbs = `
<form id="signupTodo" action="https://fullstackrestapi.azurewebsites.net/api/auth/register" method="POST">
    <div>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username">
    </div>
    <div>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email">
    </div>
    <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password">
    </div>
    <div>
        <button type="submit">Sign up</button>
    </div>
</form>
`
export {signupHbs}