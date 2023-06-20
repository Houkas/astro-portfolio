<script lang="ts">
  import { onMount } from "svelte";
  import type { Photo } from "../models/photo";
  import PhotoSelected from "./PhotoSelected.svelte";
  import { fade } from "svelte/transition";

  let photos: Photo[] = [];
  let promise: Promise<Photo[]>;
  let photoSelectedDisplayed: boolean = false;
  let photoSelected: Photo | null = null;
  let photosToDisplay: Photo[] = [];

  onMount(() => {
    fetch(
      "https://api.hugo-richard-work.fr/api/photos?pagination[page]=1&pagination[pageSize]=1000"
    )
      .then((r) => r.json())
      .then((respPhotos) => {
        photos = respPhotos.data.filter(
          (d: Photo) => d.attributes.lien_photo_compressed !== null
        ).sort((a:Photo, b:Photo) =>{
           
          var c = new Date(a.attributes.createdAt).getDate();
          var d = new Date(b.attributes.createdAt).getDate();
          return  c - d 
        });
      });
  });
  // promise = getFilteredPhotos();

  async function getFilteredPhotos(): Promise<Photo[]> {
    const res = await fetch(
      "https://api.hugo-richard-work.fr/api/photos?pagination[page]=1&pagination[pageSize]=1000"
    );
    const photosToRet = await res.json();
    return photosToRet.data.filter(
      (d: Photo) => d.attributes.lien_photo_compressed !== null
    );
  }

  function openPopupPhoto(photo: Photo) {
    photoSelected = photo;
    photosToDisplay = photos.filter(
      (p) => p.attributes.description === photo.attributes.description
    );
    const indexPhotoSelected = photosToDisplay.findIndex(
      (el) => el.attributes.lien_photo === photoSelected?.attributes.lien_photo
    );
    photosToDisplay.splice(indexPhotoSelected, 1);
    photosToDisplay.unshift(photoSelected);
    photoSelectedDisplayed = !photoSelectedDisplayed;
  }

</script>

{#if photoSelectedDisplayed === true}
  <PhotoSelected
    photo={photoSelected}
    photosSwiper={photosToDisplay}
    bind:photoSelectedDisplayed
  />
{/if}
<div class="w-full flex flex-col justify-center items-center">
  <h1 class="text-center uppercase m-5 title-hugo">Photos</h1>
  <div class="flex flex-row flex-wrap justify-center max-w-[750px]">
    <!-- {#await promise then photos} -->
      {#each photos as photo}
        {#key photo}

            <img
              width="225"
              height="150"
              in:fade={{ duration: 1000 }}
              src={photo.attributes.lien_photo_compressed}
              alt={photo.attributes.description}
              class="max-w-[120px] md:max-w-[225px] m-2 cursor-pointer"
              on:click={() => {
                openPopupPhoto(photo);
              }}
              on:keydown={() => {
                openPopupPhoto(photo);
              }}
            />

        {/key}
      {/each}
    <!-- {/await} -->
  </div>
</div>

<style>
</style>
