<template>
    <!----------------- Glide display----------------->

    <div class="glide">
      <div class="glide__track" data-glide-el="track">
        <div class="glide__slides">
          <div class="glide__slide div-center">
            <div class="slide-caption">
              <h1>PVC coated Paper</h1>
              <h3>Certificate Cover,Notebook Cover,File Holder Cover</h3>
              <a href="./single.html"><button class="btn btn-primary">Learn More</button></a>
            </div>
            <div class="backdrop"></div>
            <img src="@/assets/images/1.jpg" alt="backgroud-img">
          </div>
          <div class="glide__slide div-center">
            <div class="slide-caption">
              <h1>Fabric Coated Paper</h1>
              <h3>Photo Album Cover Material,Notebook Cover</h3>
              <a href="./fabric.html"><button class="btn btn-primary">Learn More</button></a>
            </div>
            <div class="backdrop"></div>
            <img src="@/assets/images/3.jpg" alt="backgroud-img">
          </div>
          <div class="glide__slide div-center">
            <div class="slide-caption">
              <h1>Speciality Paper</h1>
              <h3>Color Paper, Printing Paper, Package Paper</h3>
              <a href="./speciality-paper.html"><button class="btn btn-primary">Learn More</button></a>
            </div>
            <div class="backdrop"></div>
            <img src="@/assets/images/4.jpg" alt="backgroud-img">
          </div>
        </div>
      </div>
      <div class="glide__arrows" data-glide-el="controls">
        <button class="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
        <button class="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
      </div>
      <div class="glide__bullets" data-glide-el="controls[nav]">
        <button class="glide__bullet" data-glide-dir="=0"></button>
        <button class="glide__bullet" data-glide-dir="=1"></button>
        <button class="glide__bullet" data-glide-dir="=2"></button>
      </div>
    </div>

</template>

<script>
import Glide from '@glidejs/glide'

export default {
  name:'Glide',
  mounted () {
    new Glide('.glide',{
      // autoplay: 3000,
      hoverpause: true,
      perView: 1
    }).mount()
  }
}
</script>

<style scoped lang="scss">
@import "node_modules/@glidejs/glide/src/assets/sass/glide.core";

// Optional Theme Stylesheet
@import "node_modules/@glidejs/glide/src/assets/sass/glide.theme";



 /* 设定图片尺寸 */
 
 .glide__slide img {
   width: 100vw;
   height: 90vh;

 }

    
    /** on active **/
    
   .btn-primary,.btn-primary:visited,.btn-primary:active{
        background-color: rgb(248, 64, 64);
        border: rgb(248, 64, 64);
        background: rgb(248, 64, 64);
    }
    .btn-primary:hover{
      background-color: rgb(212, 46, 46);
    }
 
 /* 半透明层 */
 .backdrop{
   background-color: var(--backdrop-color);
   position: absolute;
   width: 100%;
   height: 100%;
   z-index: 60;
   left:0;
   top: 0;
   opacity: 0.4;
 }
 /* 父节点居中 */
 .div-center{   
   display: flex;
   align-items: center;
   justify-content: center;
 }


 </style>>
