<template>
    <Button class="menu-button" v-bind:class="{ 'active': active }" v-on:click="cliqueMenuButton">
        <v-icon>
      {{icon}}
    </v-icon>
        <span>{{text}}</span>
    </Button>
</template>

<script>

export default {
    name: "MenuButton",
    props: {
        text: String,
        icon: String,
        active: Boolean
    },
    methods: {
        cliqueMenuButton: function () {
            this.$emit('cliqueMenuButton', this.text)
        }
    }
}
</script>

<style lang="sass">
.v-application .menu-button
    width: 10%
    height: 100%
    display: flex
    flex-direction: column
    align-items: center
    justify-content: space-evenly
    padding: 5px 0
    text-decoration: none
    color: #646464
    border-right: 1px solid #0000000d
    box-sizing: border-box
    span
        margin-top: 5px
        font-size: .8rem
.v-icon .menu-button i 
    transition: none
.menu-button:hover, .menu-button:hover i
        background-color: #f26f14
        color: white
.menu-button.active, .menu-button.active i
        background-color: #f26f14
        color: white
.menu-button:last-child
    border: none
</style>