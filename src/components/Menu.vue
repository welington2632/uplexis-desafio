<template>
  <div class="menu">
      <slot></slot>
  </div>
</template>



<script>
export default {
    name: 'Menu'
}
</script>

<style lang="sass">
.menu 
  width: 95%
  border: 1px solid #0000000d
  margin: 25px auto
  display: flex
  justify-content: flex-start
  box-sizing: content-box
</style>