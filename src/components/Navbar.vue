<template>
    <v-app-bar :elevation="0" rounded color="green">
  <template v-slot:prepend>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
  </template>

  <v-app-bar-title>Hilda's Kitchen</v-app-bar-title>
  <v-btn to="/">Home</v-btn>

  <v-btn to="/products">Products</v-btn>
  <v-btn to="/aboutus">About Us</v-btn>
  <v-btn to="/cart">Cart</v-btn>
  <v-btn to="/servicesOffered">Services Offered</v-btn>
  <v-btn to="/contactUs">Contact Us</v-btn>

</v-app-bar>
</template> 