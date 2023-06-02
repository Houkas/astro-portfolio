<script>
  import { onMount } from "svelte";
  // import function to register Swiper custom elements
  import { register } from "swiper/element/bundle";

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
  {#each photos as photo, i}
    {#if i < 3}
      <swiper-slide class="flex flex-row items-center">
        <div class="flex flex-row items-center justify-center">
          <a href="/photos" class="flex flex-row items-center justify-center">
            <img
              class="block sm:w-full lg:w-1/2"
              src={photo.attributes.lien_photo}
              alt="test"
            />
          </a>
        </div>
      </swiper-slide>
    {/if}
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
