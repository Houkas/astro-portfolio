<script lang="ts">
  import { onMount } from "svelte";
  import type { Photo } from "../models/photo";
  import SwiperCards from "./SwiperCards.svelte";
  import { fade } from "svelte/transition";

  export let photo: Photo | null;
  export let photoSelectedDisplayed = false;
  export let photosSwiper: Photo[];
  $: so = screen.orientation;

  function checkOrientationApplycss(angle: number | null) {
    if (
      (angle != 0 || angle != null) &&
      window.innerWidth > window.innerHeight
    ) {
      let elPhoto: HTMLElement | null =
        document.getElementById("photoDiplayed");

      if (elPhoto && so.angle !== 0) {
        elPhoto.style.cssText = "max-height:70vh;";
      }
    }
  }

  onMount(() => {
    let musiqueHtml: HTMLElement | null =
      document.getElementById("musiqueHtml");
    let iframe = musiqueHtml?.getElementsByTagName("iframe");

    if (iframe !== undefined) {
      iframe[0].style.cssText =
        "padding-left: 10px;padding-right: 10px;height: 90px!important;";
    }

    so = screen.orientation;

    checkOrientationApplycss(null);

    screen.orientation.addEventListener("change", function (e) {});
    screen.orientation.onchange = function (e) {
      checkOrientationApplycss(screen.orientation.angle);
    };
  });
</script>

{#if photo}
  <div
    transition:fade="{{duration:500}}"
    class="fixed h-screen w-screen bg-white flex flex-col justify-center items-center"
  >
    <div
      class="absolute z-[999] top-[50px] md:right-[10px] right-[0px] cursor-pointer"
    >
      <img
        src="/close_dark.svg"
        alt="close button"
        class="close-button"
        on:click={() => (photoSelectedDisplayed = !photoSelectedDisplayed)}
        on:keydown={() => {}}
      />
    </div>
    <div
      class="relative top-[-20px] md:top-[0px] flex flex-col justify-center items-center"
    >
      <div
        class="w-screen max-w-[600px]"
        id="musiqueHtml"
        transition:fade={{ duration: 1000 }}
      >
        {@html photo?.attributes.musique}
      </div>
      <div>
        <a
          href={photo?.attributes.lien_photo}
          target="_blank"
          class="flex flex-row justify-center"
          >{#if photosSwiper.length > 0}
            <SwiperCards photos={photosSwiper} />
          {:else}
            <img
              transition:fade={{ duration: 1000 }}
              id="photoDiplayed"
              src={photo?.attributes.lien_photo}
              alt={photo?.attributes.description}
              class="sm:w-full lg:w-1/2"
            />
          {/if}
        </a>
      </div>
      <span transition:fade={{ duration: 1000 }} class="title-photo"
        >{photo?.attributes.description}</span
      >
    </div>
  </div>
{/if}

<style>
  #musiqueHtml iframe {
    padding-left: 5px;
    padding-right: 5px;
    height: 90px !important;
  }
</style>
