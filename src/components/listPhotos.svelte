<script lang="ts">
  import { onMount } from "svelte";
  import type { Photo } from "../models/photo";
  import PhotoSelected from "./PhotoSelected.svelte";

  let photos: Photo[] = [];
  let photoSelectedDisplayed: boolean = false;
  let photoSelected: Photo | null = null;

  onMount(async () => {
    await fetch("https://api.hugo-richard-work.fr/api/photos")
      .then((r) => r.json())
      .then((respPhotos) => {
        photos = respPhotos.data.filter(
          (d: Photo) => d.attributes.lien_photo_compressed !== null
        );
      });
  });

  function openPopupPhoto(photo: Photo) {
    photoSelectedDisplayed = !photoSelectedDisplayed
    photoSelected = photo;
  }
</script>

{#if photoSelectedDisplayed === true}
  <PhotoSelected photo={photoSelected} bind:photoSelectedDisplayed/>
{/if}
<div class="w-full flex flex-col justify-center items-center">
  <h1 class="text-center uppercase m-5 title-hugo">Photos</h1>
  <div class="flex flex-row flex-wrap justify-center max-w-[750px]">
    {#each photos as photo}
      <img
        src={photo.attributes.lien_photo_compressed}
        alt="test"
        class="max-w-[120px] md:max-w-[225px] m-2 cursor-pointer"
        on:click={() => {
          openPopupPhoto(photo);
        }}
        on:keydown={() => {
          openPopupPhoto(photo);
        }}
      />
    {/each}
  </div>
</div>

<style>
</style>
