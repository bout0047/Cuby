<script>
    // import {browser} from "$app/environment";





// function back() {
//     if (browser) window.history.back();
// }
</script>
<main>
    <div class="top-left">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- <div on:click={back()}>
        </div> -->
        <i class="fa-solid fa-arrow-rotate-left icon"></i>

    </div>
    <div class="top-right">
        <a href="Profile.svelte"><i class="fa-solid fa-user" style="padding-right: 8px;"></i></a>
        <a href="Settings.svelte"><i class="fa-solid fa-gear"></i></a>
    </div>
</main>

<style>
    .top-right {
        text-align: right;
        font-size: xx-large;
        padding-right: 5px;
        display: inline-block;
        margin-left: 80%;
    }

    .top-left {
        display: inline-block;
        text-align: left;
        font-size: xx-large;
        padding-left: 15px;
    }
</style>