<template>
  <div>
    <b-navbar toggleable="lg" type="dark">
      <b-navbar-brand href="/">Sherlock on Spotify</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/originale" exact-active-class="active"
            >Die Originale</b-nav-item
          >
          <b-nav-item to="/neue" exact-active-class="active"
            >Die neuen Fälle</b-nav-item
          >
          <b-nav-item to="/reloaded" exact-active-class="active"
            >Die alten Fälle (Reloaded)</b-nav-item
          >
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <!-- <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Suche</b-button
            >
          </b-nav-form>
        </b-navbar-nav> -->
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
