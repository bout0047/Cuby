import App from './App.svelte';
import EventSidebar from './EventSidebar.svelte';
import mockEvents from './mockData.js'; // Assuming you have this file with mock data

const app = new EventSidebar({
  target: document.body,
  props: {
    events: mockEvents // Passing the mock events as props
  }
});

export default app;