<script>
  import { onMount } from "svelte";
  // import function to register Swiper custom elements
  import { register } from "swiper/element/bundle";
  import { fade } from 'svelte/transition';

  export let photos;
  let currentUrl;

  register();

  onMount(async () => {

    currentUrl = window.location.pathname;
    const swiperEl = document.querySelector("swiper-container");
    swiperEl.initialize();
    
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
          <a href="/photos" class="flex flex-row items-center justify-center">
            <img
              transition:fade
              class="block sm:w-full lg:w-1/2"
              src={photo.attributes.lien_photo}
              alt="test"
              loading="lazy"
            />
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
