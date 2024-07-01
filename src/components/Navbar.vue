<template>
    <v-app-bar :elevation="0" rounded color="#000080">
  <template v-slot:prepend>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
  </template>

  <v-app-bar-title>CANDY SHOP</v-app-bar-title>
  <v-btn to="/">Home</v-btn>

  <v-btn to="/products">Products</v-btn>
  <v-btn to="/aboutus">About Us</v-btn>
  <v-btn to="/cart">
    Cart
    <v-badge color="white" :content="cart.length">
<v-icon>mdi-store-outline</v-icon>
</v-badge>
  </v-btn>
  <v-btn to="/servicesOffered">Services Offered</v-btn>
  <v-btn to="/contactUs">Contact Us</v-btn>

</v-app-bar>
</template> 

<script>
import {mapGetters } from 'vuex'
export default {
computed: {
...mapGetters({
cart: 'cart'
})
},
}
</script>