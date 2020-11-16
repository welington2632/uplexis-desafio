<template>
  <v-app>
    <Modal
      :active="modal.active"
      :imgTitle="modal.imgTitle"
      :imgCarousel="modal.imgCarousel"
      :title="modal.title"
      :description="modal.description"
      :valor="modal.valor"
      v-on:fecharModal="modal.active = false"
    />
    <header>
      <div>
        <v-carousel :show-arrows="false" hide-delimiters cycle>
          <v-carousel-item
            v-for="(item, i) in items.banner"
            :key="i"
            :src="item.src"
            :href="item.href"
            class="home-carousel-img"
          >
          </v-carousel-item>
        </v-carousel>
      </div>
      <Menu>
        <MenuButton
          v-for="button in items.MenuButtons"
          :key="button.text"
          :text="button.text"
          :icon="button.icon"
          :active="button.active"
          v-on:cliqueMenuButton="filtrarCategoria($event)"
        />
      </Menu>
      <section class="ordenar">
        <v-subheader class="ordenar-text"> ORDENAR </v-subheader>
        <v-select
          :items="items.selects"
          label="Filtre por"
          solo
          v-on:change="filtrar"
        ></v-select>
      </section>
    </header>
    <main>
      <section class="info-cards">
        <BasicCard
          v-for="card in items.cardsActive"
          v-bind:key="card.id"
          :title="card.title"
          :subtitle="card.subtitle"
          :icon="card.icon"
          :price="card.price"
          :lancamento="card.lancamento"
          v-on:abreModal="abreModal($event)"
        />
      </section>
    </main>
  </v-app>
</template>

<script>
import Menu from "./components/Menu.vue";
import MenuButton from "./components/MenuButton.vue";
import BasicCard from "./components/BasicCard.vue";
import MenuJson from "./json/menu.json";
import CardsJson from "./json/cardsHome.json";
import Modal from "./components/Modal.vue";
export default {
  name: "App",

  components: {
    Menu,
    MenuButton,
    BasicCard,
    Modal,
  },

  methods: {
    filtrarCategoria: function (categoria) {
      // Método responsável por fazer o filtro dos cards da home
      this.ativarMenuButton(categoria);
      this.atualizarCards(this.items.cards);
      if (categoria != "Todos") {
        let cardsFiltrados = [];
        this.items.cardsActive.forEach((card) => {
          if (card.title == categoria) cardsFiltrados.push(card);
        });
        this.atualizarCards(cardsFiltrados);
      }
    },
    atualizarCards: function (cards) {
      // Método responsável por "Desenhar" os cards na tela
      this.items.cardsActive = [];
      cards.forEach((element) => {
        let cardConvertido = {
          icon: element.icon,
          title: element.title,
          subtitle: element.subtitle,
          price: element.price,
          lancamento: new Date(element.lancamento),
        };
        this.items.cardsActive.push(cardConvertido);
      });
    },
    abreModal: function (card) {
      // Como o próprio nome sugere, ele abre o modal e seta as props
      this.modal.title = card.title;
      this.modal.description = card.subtitle;
      this.modal.valor = card.price;
      this.modal.active = true;
    },

    ativarMenuButton: function (nome) {
      // Este método controla qual filtro de categoria está ativo no momento
      this.items.MenuButtons.forEach((menu) => {
        if (menu.text != nome) {
          menu.active = false;
        } else {
          menu.active = true;
        }
      });
    },
    filtrar: function (select) {
      // Filtro de ordenação
      var arrayDefault = this.items.cardsActive;
      switch (select) {
        case "Valor Menor para Maior":
          arrayDefault.sort(function (a, b) {
            if (a.price > b.price) {
              return 1;
            }
            if (a.price < b.price) {
              return -1;
            }
            return 0;
          });

          break;
        case "Valor Maior para Menor":
          arrayDefault.sort(function (a, b) {
            if (a.price < b.price) {
              return 1;
            }
            if (a.price > b.price) {
              return -1;
            }
            return 0;
          });

          break;
        case "Lançamento":
          break;
        default:
          break;
      }
    },
  },

  data: () => ({
    items: {
      banner: [
        {
          src: require("./assets/banner01.png"),
        },
        {
          src: require("./assets/banner02.png"),
        },
      ],
      selects: [
        "Lançamento",
        "Valor Menor para Maior",
        "Valor Maior para Menor",
      ],
      cardsActive: [],
      MenuButtons: MenuJson,
      cards: CardsJson,
    },
    modal: {
      active: false,
      imgTitle: require("./assets/banner02.png"),
      imgCarousel: [
        {
          src: require("./assets/ModalCarousel.png"),
        },
        {
          src: require("./assets/ModalCarousel.png"),
        },
        {
          src: require("./assets/ModalCarousel.png"),
        },
      ],
      title: "Histórico Presencial",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      valor: 29.99,
    },
  }),

  created() {
    this.atualizarCards(this.items.cards);
  },
};
</script>

<style lang="sass">
button:focus
  outline: none!important
div.ordenar
  display: flex
  justify-content: flex-start
  align-items: center
  flex-direction: row
.v-subheader.ordenar-text
  font-weight: bold
section
  width: 90%
  margin: auto
section.info-cards
  display: flex
  justify-content: flex-start
  margin: 0 auto 25px auto
  flex-wrap: wrap
.home-carousel-img
  .v-image__image--cover
    background-size: contain!important
.home-carousel-img .v-image.v-responsive, .v-window.v-item-group.v-carousel
  height: auto!important
section.ordenar
  display: flex
  align-items: baseline
  justify-content: flex-start
  width: 88%
  .v-input
    max-width: 180px
@media screen and (max-width: 800px)
  .menu
    flex-wrap: wrap
  .v-application .menu-button
    width: 20%
@media screen and (max-width: 600px)
  .menu
    width: 100%
    margin: 0
    flex-direction: column
  .v-application .menu-button
    width: 100%
  section.ordenar
    align-items: center
    justify-content: center
    flex-direction: column
    .v-input
      max-width: none
</style>