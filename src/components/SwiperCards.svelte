 
 <!-- Swiper JS -->

<!-- Initialize Swiper -->
<script>
  // import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

</script>
 
<div class="flex flex-row items-center justify-center h-screen">
  <swiper-container >
    <swiper-slide class="flex flex-row items-center justify-center">
      <div class="flex flex-row items-center justify-center w-[50px] bg-red-900 h-[50px]">
          test
      </div>
    </swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
  </swiper-container>
</div>




<style>
   .swiper {
      width: 100%;
      height: 100%;
    }

    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .swiper-slide img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
</style>

