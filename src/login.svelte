<script>
    let username = '';
    let password = '';
  
    function handleLogin() {
      if (username === 'admin' && password === 'password') {
        window.location.href = '/main'; 
      } else {
        alert('Invalid credentials!');
      }
    }
  </script>
  
  <div>
    <label>
      Username:
      <input bind:value={username} type="text" />
    </label>
    <label>
      Password:
      <input bind:value={password} type="password" />
    </label>
    <button on:click={handleLogin}>Login</button>
  </div>
  