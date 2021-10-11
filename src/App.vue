<template>
  <main id="app" class="app-component">
    <aside id="sidebar">
      <nav>
        <router-link to="/">Start</router-link>
        <router-link to="/edit">Edit</router-link>
      </nav>
    </aside>
    <div id="content">
      <router-view></router-view>
    </div>
  </main>
</template>

<script>
export default {
  name: 'App',
  components: {}
}
</script>

<style>
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: none;
}
#app {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
#sidebar {
  position: absolute;
  top: 0;
  left: 0;
  width: 240px;
  height: 100%;
  border-right: 1px solid #ccc;
}
#sidebar > nav > a {
  display: block;
  color: #000;
  text-decoration: none;
  padding: 2px 5px;
}
#sidebar > nav > a:hover, .router-link-exact-active {
  background: #eef;
}
#content {
  position: absolute;
  top: 0;
  left: 240px;
  bottom: 0;
  right: 0;
}
</style>
