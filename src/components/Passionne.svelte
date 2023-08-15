<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  let photos = [];
  let photosShuffled = [];
  import { register } from "swiper/element/bundle";

  register();

  onMount(async () => {
    await fetch("https://api.hugo-richard-work.fr/api/photos")
      .then((r) => r.json())
      .then((respPhotos) => {
        photos = respPhotos.data;
        photosShuffled = photos.sort(() => 0.35 - Math.random());
      });
    const swiperEl = document.querySelector("swiper-container");
    swiperEl.initialize();
  });
</script>

<div class="flex flex-col h-screen">
  <h2 class="text-center uppercase relative top-2 title-passion m-5">
    Passionné
  </h2>
  <swiper-container
    pagination="true"
    init="false"
    class={"flex flex-row items-center w-screen"}
  >
    {#each photosShuffled as photo, i}
      {#if i < 3}
        <swiper-slide
          class="flex flex-row mb-5 h-[35vh] md:h-[75vh]"
          transition:fade
        >
          <div class="flex flex-row items-center justify-center">
            <a class="flex flex-row items-center justify-center" href="/photos">
              <div
                transition:fade
                class="blur-load block sm:w-full lg:w-1/2"
                style="background-image: url({photo.attributes
                  .lien_photo_compressed});"
              >
                <img
                  transition:fade
                  
                  src={photo.attributes.lien_photo}
                  alt={photo.attributes.description}
                  loading="lazy"
                />
              </div>
            </a>
          </div>
        </swiper-slide>
      {/if}
    {/each}
  </swiper-container>
</div>

<style>
  .title-passion {
    font-size: 35px;
    line-height: 45px;
    font-weight: 500;
    color: #484139;
    letter-spacing: 5px;
    font-family: "Noto Serif", serif;
  }
  swiper-slide {
    text-align: center;
    font-size: 18px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .swiper-pagination-bullet-active {
    background-color: #000 !important;
  }
</style>
