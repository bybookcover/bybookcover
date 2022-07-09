<template>
    <div class="projects-header page-header ">
      <div class="div-center">
        <h1 class="title1"><slot></slot></h1>
      </div>
    </div>
</template>

<script>
export default {
    name:'HeaderRed'
}
</script>

<style lang="scss">
 .div-center{   
   display: flex;
   align-items: center;
   justify-content: center;
 }
 .page-header {
  padding-bottom: 9px;
  margin: 40px 0 20px;
  border-bottom: 1px solid #eeeeee;
}
 /* 大标题红杠 */
.title1 {
  font-size: 34px;
  color: var(--text-color-darker);
  &:after{
    content: "";
    display: block;
    width: 100%;
    height: 4px;
    background-color: var(--primary-color);
    margin-top: 14px;
  }
}
</style>