<script>
    import { onMount } from 'svelte';
    import mockEvents from './mockData.js';
  
    let events = [];
  
    onMount(() => {
      events = mockEvents;
    });
  </script>
  
  <aside id="events-sidebar">
    <h2>Upcoming Events</h2>
    <ul id="events-list">
      {#each events as event}
        <li>
          <div class="event-title">{event.title}</div>
          <div>{event.date} at {event.time}</div>
          <div>{event.location}</div>
          <p>{event.description}</p>
        </li>
      {/each}
    </ul>
  </aside>
  
  <style>
    #events-sidebar {
      /* ... styles ... */
    }
    /* ... more styles ... */
  </style>
  