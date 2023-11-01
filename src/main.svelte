<script>
    import { Router, Route } from 'svelte-routing';
    import Login from './Login.svelte';
  </script>
  
  <Router>
    <Route path="/login" component={Login} />
  </Router>
  
  <div>
    <h1>Welcome to the Main Page!</h1>
    <!-- Main page content goes here -->
  </div>
  