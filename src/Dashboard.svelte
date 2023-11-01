<script>
    import Button from './Button.svelte';
  
    const buttons = [
      // ... other buttons with their respective icon classes or image paths
    ];
  </script>
  
  <div class="buttons-container">
    {#each buttons as button}
      <Button label={button.label} iconClass={button.iconClass} icon={button.icon} />
    {/each}
  </div>
  <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
    <!-- Background circle -->
    <circle cx="100" cy="100" r="95" fill="#E0E0E0" stroke="#000" stroke-width="2"/>
    
    <!-- Head -->
    <circle cx="100" cy="70" r="40" fill="#000"/>
    
    <!-- Body -->
    <ellipse cx="100" cy="150" rx="60" ry="40" fill="#000"/>
</svg>



<style>
  .buttons-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding: 20px;
  }
</style>
