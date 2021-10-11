<template>
  <div class="edit-component">
    <h1>Edit</h1>
    <textarea v-model="text"></textarea>
  </div>
</template>

<script>
export default {
  name: 'Edit',
  computed: {
    text: {
      get () { return this.$store.state.edit.text },
      set (value) { return this.$store.commit('edit/setText', value) }
    }
  }
}
</script>

<style scoped>
[class*=component] {
    padding: 1em;
}
textarea {
  width: 40em;
  height: 20em;
  margin: 1em 0;
  padding: 0.5em;
  border: 1px solid #ccc;
}
</style>
