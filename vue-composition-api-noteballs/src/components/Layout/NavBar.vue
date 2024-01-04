<template>
  <nav class="navbar is-fixed-top is-success"
    role="navigation"
    aria-label="main navigation">
    <div class="navbar-brand">
      <div class="navbar-item is-size-4 is-family-monospace">
        Noteballs
      </div>

      <a
        class="navbar-burger"
        aria-expanded="false"
        aria-label="menu"
        data-target="navbarBasicExample"
        role="button">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample"
      class="navbar-menu">
      <div class="navbar-end">
        <RouterLink
          class="navbar-item"
          active-class="is-active"
          to="/">
          Notes
        </RouterLink>
        <RouterLink
          class="navbar-item"
          active-class="is-active"
          to="/stats">
          Stats
        </RouterLink>
      </div>
    </div>
  </nav>
</template>
