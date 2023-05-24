  <!-- Initialize Swiper -->
<script>
    import { onMount } from 'svelte';
    //import type { Photo } from '../models/photo';
    // import function to register Swiper custom elements
    import { register } from 'swiper/element/bundle';
    // register Swiper custom elements
    register();
    
  let photos = [];

  onMount(async () => {
    await fetch('https://api.hugo-richard-work.fr/api/photos')
    .then(r => r.json())
    .then(respPhotos => {
      photos = respPhotos.data;
    });

    const swiperEl = document.querySelector('swiper-container');
    
    swiperEl.initialize();

  });
</script>
 
<div class="flex flex-col h-screen justify-center">

  <h2 class='text-center uppercase relative top-2 title-hugo m-5'>Passionné</h2>

    <swiper-container pagination="true" init="false" class="flex flex-row items-center w-screen h-[45vh] md:h-screen">
      {#each photos as photo, i}
        {#if i < 3}
          <swiper-slide class="flex flex-row items-center ">
            <div class="flex flex-row items-center justify-center ">
                <a href={photo.attributes.lien_photo} class="flex flex-row items-center justify-center">
                  <img class="block  sm:w-full lg:w-1/2" src={photo.attributes.lien_photo} alt="test">
                </a>
                
            </div>
          </swiper-slide>
        {/if}
      {/each}
    </swiper-container>



</div>

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

