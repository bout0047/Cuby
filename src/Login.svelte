<script>
  // Your login logic here
</script>

<style>
  /* Center the login form */
  .login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  /* Style the form inputs */
  input[type="text"],
  input[type="password"] {
    padding: 10px;
    margin: 10px;
    border: none;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    width: 100%;
    max-width: 300px;
  }

  /* Style the submit button */
  input[type="submit"] {
    background-color: rgb(101, 101, 253);
    color: white;
    padding: 10px;
    margin: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    max-width: 300px;
  }

  /* Style the error message */
  .error-message {
    color: red;
    margin: 10px;
  }
</style>

<div class="login-form">
  <h1>Login</h1>
  <form>
    <label for="username">Username:</label>
    <input type="text" id="username" name="username">

    <label for="password">Password:</label>
    <input type="password" id="password" name="password">

    <input type="submit" value="Login" href="">
  </form>

</div>
