<template>
  <div>
    <b-jumbotron class="head-bg">
      <b-container>

        <h1 class="text-left">Yiwu Binyang Paper CO.,LTD.</h1>
        <hr />
        <slot>
          <h3 class="text-left">Cover Materials</h3>
          <h3 class="text-left">PVC Coated Paper</h3>
          <h3 class="text-left">Bookbinding Cloth</h3>
        </slot>

      </b-container>
    </b-jumbotron>
  </div>
</template>
<script>
export default {
  name: 'Jumbo'
}
</script>
<style scoped lang="scss">
</style>
