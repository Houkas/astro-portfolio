<script lang="ts">
  import { onMount } from "svelte";
  // import function to register Swiper custom elements
  import { register } from "swiper/element/bundle";
  import { fade } from "svelte/transition";
  import type { Photo } from "../models/photo";

  export let photos: Photo[];
  let currentUrl: string;

  register();

  onMount(async () => {
    currentUrl = window.location.pathname;
    const swiperEl = document.querySelector("swiper-container");
    if (swiperEl) swiperEl.initialize();
  });
</script>

<swiper-container
  pagination="true"
  init="false"
  class={"flex flex-row items-center w-screen h-[45vh] " +
    (currentUrl === "/" ? "md:h-screen" : "md:h-full")}
>
  {#each photos as photo}
    <swiper-slide class="flex flex-row items-center" transition:fade>
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
              class=""
              src={photo.attributes.lien_photo}
              alt="test"
              loading="lazy"
            />
          </div>
        </a>
      </div>
    </swiper-slide>
  {/each}
</swiper-container>

<style>
  swiper-slide {
    text-align: center;
    font-size: 18px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  swiper-slide img {
    display: block;
  }
</style>
