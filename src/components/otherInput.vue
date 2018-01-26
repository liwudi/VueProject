<template>
  <div class="inputContainer">
    <img class="icon" src="../assets/logo.png" alt="">
    <input
      placeholder="placeholder"
      type="text"
      v-on:input="inputEvent"
      v-on:blur="blurEvent"
    />
  </div>
</template>

<script>
  export default {

  }
</script>

<style></style>
