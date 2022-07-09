<template>
<div>

  <b-navbar toggleable="lg" type="dark" class="bg-color">
    <b-navbar-brand href="#">Binyang Paper</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">About</b-nav-item>
        <b-nav-item-dropdown text="Products" left>
          <b-dropdown-item href="#">PVC coated Paper</b-dropdown-item>
          <b-dropdown-item href="#">Fabric Coated Paper</b-dropdown-item>
          <b-dropdown-item href="#">Speciality Art Paper</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item href="#">Others</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item href="#">What's new</b-nav-item>
        <b-nav-item href="#">Application</b-nav-item>
        <!-- <b-nav-item href="#">Blog</b-nav-item> -->
        <b-nav-item href="#">Contact</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">中</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
  name: 'TopBar',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.bg-color{
  background-color: #17c3b2;
}


</style>
