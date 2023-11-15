<script>
    import TopNav from "./TopNav.svelte";
	export let name;
	import "@fortawesome/fontawesome-free/js/all.js";
	import "img/calender.png"
</script>

<TopNav />
<main>
	<div id="cubyconnect" class="cubyconnect">
		<a href="cubyconnect"
			><h1>Hello {name}! <i class="fa-solid fa-cube" /></h1></a>
			<h1>Connect to cuby here!</h1>
	</div>

	<div class="profile">
		<a href="Profile.svelte">profile</a><br />
		<img src="img/profile.png" alt="profile"/>
	</div>
	<div class="top">
		<div class="events">
			<a href="Events.svelte">events</a><br />
			<img src="img/events.png" alt="events"/>
		</div>
		<div class="calender">
			<a href="Calender.svelte">calender</a><br />
			<img src="img/calender.png" alt="calender"/>
		</div>
	</div>
	<div class="bottom">
		<div class="stats">
			<a href="Stats.svelte">stats</a><br />
			<img src="img/stats.png" alt="stats"/>
		</div>
		<div class="self-help">
			<a href="Self-help.svelte">self-help</a><br />
			<img src="img/self help.png" alt="self help"/>
		</div>
	</div>
</main>

<style>
	main {
		padding: 1em;
		margin: 0 auto;
	}

	h1 {
		color: rgb(221, 143, 156);
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
	:global(body) {
		background-color: #87abab;
		overflow-x: none;
	}

	.profile {
		background-color: dimgray;
		text-align: center;
		margin-bottom: 2cm;
		margin-left: 25%;
		margin-right: 25%;
		margin-top: 1.5cm;
		border-radius: 20px;
		padding-left: 20px;
		padding-right: 20px;
		padding: 10px;
	}

	.calender {
		background-color: dimgray;
		text-align: center;
		padding: 10px;
		display: inline-block;
		border-radius: 20px;
		padding-left: 20px;
		padding-right: 20px;
		padding: 10px;
		margin-left: 10%;
	}

	.events {
		background-color: dimgray;
		text-align: center;
		padding: 10px;
		display: inline-block;
		border-radius: 20px;
		padding-left: 20px;
		padding-right: 20px;
		padding: 10px;		
	}

	.stats {
		background-color: dimgray;
		text-align: center;
		border-radius: 20px;
		padding-left: 20px;
		padding-right: 20px;
		margin-top: 1cm;
		display: inline-block;
		padding: 10px;
	}

	.self-help {
		background-color: dimgray;
		text-align: center;
		padding: 10px;
		display: inline-block;
		border-radius: 20px;
		padding-left: 20px;
		padding-right: 20px;
	}

	.cubyconnect {
		background-color: darkblue;
	}

	img {
		width: 3.3cm;
		height: 3.3cm;
	}
</style>
