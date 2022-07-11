<template>
<section>
  <b-container class="bv-example-row">
    <HeaderRed>PVC Coated Paper</HeaderRed>
    <b-row>
      <b-col>
          <b-card
          title="Card Title"
          img-src="./images copy/pvc paper/9.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
          >
          <b-card-text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </b-card-text>

          <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
    </b-col>
    <b-col>2 of 3</b-col>
    <b-col>3 of 3</b-col>
  </b-row>
</b-container>

</section>
 


</template>

<script>
import HeaderRed from '@/components/HeaderRed.vue'
export default {
    name: "Detail",
    components: { HeaderRed }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
