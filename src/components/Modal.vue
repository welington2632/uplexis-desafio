<template>
  <div class="modal-background" v-if="active">
    <div class="modal">
      <img :src="imgTitle" class="modal-header" />
      <div class="body">
        <span class="close-modal" v-on:click="fecharModal"
          ><v-icon>mdi-chevron-left</v-icon>{{ title }}</span
        >
        <div class="carousel-modal">
          <v-carousel :show-arrows="true" cycle :height="300">
            <v-carousel-item
              v-for="(item, i) in imgCarousel"
              :key="i"
              :src="item.src"
              class="home-carousel-img"
            >
            </v-carousel-item>
          </v-carousel>
        </div>
        <span class="description">{{ description }}</span>

        <div class="finalizar-compra">
          <span class="valor">R$ {{ valor }}</span>
          <button class="habilitar" v-on:click="fecharModal">Habilitar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    active: Boolean,
    imgTitle: String,
    imgCarousel: Array,
    title: String,
    description: String,
    valor: Number,
  },
  methods: {
    fecharModal: function () {
      this.$emit("fecharModal");
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="sass">
.modal-background
  position: fixed
  width: 100vw
  height: 100vh
  background-color: #00000087,
  z-index: 999
  display: flex
  align-items: center
  justify-content: center
.modal
  width: 50%
  height: 70%
  border-radius: 5px
  background-color: white
  overflow-y: overlay
  .carousel-modal
    max-width: 100%
  img
    max-width: 100%
  .body
    width: 90%
    max-height: 100%
    flex: 1
    margin: auto
    display: flex
    flex-direction: column
    align-items: center
  .close-modal
    display: block
    margin: 15px 0
    border-radius: 5px
    color: #ff7300
    cursor: pointer
    align-self: flex-start
    i
      color: #ff7300
    .carousel-modal
      max-width: 100%
  .description
    width: 100%
    margin: 15px auto
    color: #a4a4a4
  .finalizar-compra
    align-self: flex-start
    display: flex
    margin-bottom: 25px
    justify-content: space-between
    align-items: center
    button
      background: rgb(255,142,73)
      background: linear-gradient(35deg, rgba(255,142,73,0.8939950980392157) 0%, rgba(242,111,20,1) 39%)
      padding: 5px 15px
      border-radius: 5px
      color: white
      margin-left: 10px
@media screen and (max-width: 600px)
  .modal
    width: 90%

</style>