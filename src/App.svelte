<script>
	export let name;
	import SettingsMenu from "./SettingsMenu.svelte";
	import "@fortawesome/fontawesome-free/js/all.js";
</script>

<SettingsMenu />
<main>
	<div id="cubyconnect" class="cubyconnect">
		<a href="cubyconnect"
			><h1>Hello {name}! <i class="fa-solid fa-cube" /></h1></a
		>
	</div>

	<div class="profile">
		<a href="">profile</a><br />
		<i class="fa-regular fa-address-card icons" />
	</div>
	<div class="top">
		<div class="events">
			<a>events</a><br /><i class="fa-solid fa-users icons" />
		</div>
		<div class="calender">
			<a href="">calender</a><br />
			<i class="fa-regular fa-calendar-days icons" />
		</div>
	</div>
	<div class="bottom">
		<div class="stats">
			<a href="">stats</a><br /><i class="fa-solid fa-chart-line icons" />
		</div>
		<div class="self-help">
			<a href="">self-help center</a><br /><i
				class="fa-solid fa-circle-info icons"
			/>
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
	}

	.profile {
		background-color: dimgray;
		text-align: center;
		margin-bottom: 2cm;
		margin-left: 30%;
		margin-right: 30%;
		margin-top: 1.5cm;
	}

	.calender {
		background-color: dimgray;
		text-align: center;
		margin-left: 70%;
		margin-bottom: 1cm; 
		display: inline-block;
	}

	.events {
		background-color: dimgray;
		text-align: center;
		
		display: inline-block;
	}

	.stats {
		background-color: dimgray;
		text-align: center;
		margin-right: 60%;
		display: inline-block;
	}

	.self-help {
		background-color: dimgray;
		text-align: center;
		display: inline-block;
	}

	.cubyconnect {
		background-color: darkblue;
	}

	.icons {
		font-size: xx-large;
	}

	.top {
		font-size: 20px;
		padding: 20px;
	}

	.bottom {
		font-size: 20px;
		padding: 20px;
	}
</style>
