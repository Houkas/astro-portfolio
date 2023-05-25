<script lang="ts">
    import { onMount } from "svelte";
    import type { Photo } from "../models/photo";

    export let photo: Photo | null;
    export let photoSelectedDisplayed = false;
    /*onMount(() => {
        let musiqueHtml: HTMLElement | null = document.getElementById('musiqueHtml');
        musiqueHtml!.innerHTML = photo!.attributes.musique;
    });*/
   
</script>

<div
    class="fixed h-screen w-screen bg-white flex flex-col justify-center items-center"
>
    <div class="w-[80%] flex flex-row-reverse cursor-pointer">
        <img
            src="/close_dark.svg"
            alt="close button"
            class="close-button"
            on:click={() => (photoSelectedDisplayed = !photoSelectedDisplayed)}
            on:keydown={() => {}}
        />
    </div>

    <div class="" id="musiqueHtml">
        {@html photo?.attributes.musique}
    </div>
    <div >
        <a href={photo?.attributes.lien_photo} target="_blank" class="flex flex-row justify-center">
            <img src={photo?.attributes.lien_photo} alt={photo?.attributes.description} class="sm:w-full lg:w-1/2"/>
        </a>
        
    </div>
</div>

<style>
</style>
