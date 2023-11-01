<script>
    export let label;
    export let iconClass = null;
    export let icon = null;
  </script>
  
  <button class="app-button">
    {#if iconClass}
      <i class={iconClass}></i>
    {:else if icon}
      <img src={icon} alt={label + " icon"} />
    {/if}
    <span>{label}</span>
  </button>
  
  <style>
    .app-button {
      display: flex;
      flex-direction: column;
      align-items: center;
      border: none;
      background-color: transparent;
      padding: 10px;
      cursor: pointer;
      transition: transform 0.2s;
    }
    .app-button:hover {
      transform: scale(1.05);
    }
    .app-button i, .app-button img {
      font-size: 40px; /* for the icon font */
      margin-bottom: 5px;
      width: 40px; /* for the image icon */
      height: 40px; /* for the image icon */
    }
    .app-button span {
      font-size: 14px;
    }
  </style>
  