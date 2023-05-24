<script lang="ts">
    import { onMount } from 'svelte';
    import type { Photo } from '../models/photo';
    
    let photos: Photo[] =[];

    onMount(async () => {
      await fetch('https://api.hugo-richard-work.fr/api/photos')
      .then(r => r.json())
      .then(respPhotos => {
        photos = respPhotos.data;
      });
    });
</script>

<div class="w-full flex flex-col justify-center items-center ">
    <h1 class='text-center uppercase m-5 title-hugo'> Photos </h1>
    <div class="flex flex-row flex-wrap justify-center max-w-[750px]">
        {#each photos as photo}
            <img src={photo.attributes.lien_photo} alt="test" class="max-w-[120px] md:max-w-[225px] m-2">
        {/each}
    </div>

</div>

<style>

</style>