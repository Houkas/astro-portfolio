<script lang="ts">
    import { onMount } from 'svelte';
    import type { Photo } from '../models/photo';
    // import function to register Swiper custom elements
    import { register } from 'swiper/element/bundle';

    // register Swiper custom elements
    register();

    let photos: Photo[] =[];

    onMount(async () => {
      await fetch('https://api.hugo-richard-work.fr/api/photos')
      .then(r => r.json())
      .then(respPhotos => {
        photos = respPhotos.data;
      });
      console.log(photos)
    });
</script>

<div class="w-full flex flex-col justify-center items-center ">
    <h1 class='text-center uppercase m-5 title-hugo'> Photos </h1>
    <div class="flex flex-row flex-wrap justify-center max-w-[750px]">
        {#each photos as photo}
            <img src={photo.attributes.lien_photo} alt="test" class="max-w-[125px] md:max-w-[250px]">
        {/each}
    </div>

</div>

<style>

</style>