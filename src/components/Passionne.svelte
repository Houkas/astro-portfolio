<script>
  import { onMount } from "svelte";
  import SwiperCards from "./SwiperCards.svelte";

  let photos = [];
  let photosShuffled = [];

  onMount(async () => {
    await fetch("https://api.hugo-richard-work.fr/api/photos")
      .then((r) => r.json())
      .then((respPhotos) => {
        photos = respPhotos.data;
        photosShuffled = photos.sort(() => 0.35 - Math.random());
      });
  });
</script>

<div class="flex flex-col h-screen justify-center">
  <h2 class="text-center uppercase relative top-2 title-passion m-5">
    Passionné
  </h2>

  <SwiperCards photos={photosShuffled} />
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
</style>
