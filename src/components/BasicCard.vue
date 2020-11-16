<template>
  <div class="basic-card">
    <v-card class="card-body">
      <div class="info-card">
        <v-icon>
          {{ icon }}
        </v-icon>
        <span class="card-title">
          {{ title }}
        </span>
        <span class="card-subtitle">
          {{ subtitle }}
        </span>
      </div>
      <div class="info-interaction">
        <span class="price">R$ {{ price }}</span>
        <span class="saiba-mais" v-on:click="abreModal(this)">Saiba mais</span>
      </div>
    </v-card>
  </div>
</template>

<script>

export default {
  name: "BasicCard",
  props: {
    icon: String,
    title: String,
    subtitle: String,
    price: Number,
    lancamento: Date
  },
  methods: {
    abreModal: function () {
    this.$emit('abreModal', this);
    }
  }
};
</script>

<style lang="sass">
.basic-card
  display: flex
  align-items: center
  justify-content: center
  width: 25%
  @media screen and (max-width: 1279px)
      width: 33%
  @media screen and (max-width: 1023px)
      width: 50%
  @media screen and (max-width: 600px)
      width: 100%
  height: 280px
  margin: 15px 0
  .saiba-mais
    cursor: pointer 
  .card-body
    width: 85%
    height: 100%
    display: flex
    flex-direction: column
    align-items: center
    justify-content: space-between
    .info-card 
      display: flex
      align-items: center
      justify-content: space-evenly
      flex-direction: column
      flex: 1
      width: 95%
      background-color: transparent
      padding: 25px 0
      i
        font-size: 2rem
        color: #f37219
      .card-title
        font-weight: bold
        font-size: 1.2rem
        color: #555555
        font-weight: 500
      .card-subtitle
        font-size: .75rem
        color: #818181
        text-align: center
        font-weight: 400
    .info-interaction
      width: 100%
      background-color: #f37219
      display: flex
      justify-content: space-around
      align-items: center
      height: 40px
      color: white

</style>