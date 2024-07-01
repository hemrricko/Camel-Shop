<script>
export default {
  data() {
      return {
        image: "/images/vinicius-amnx-amano-dbOV1qSiL-c-unsplash (1).jpg",
        message: "Hello World!",
        product: 'Sweets',
        url: 'https://www.vuejs.org/',
        //simple array demo
        stock: ["Sweets", "Lollipop", "Chocolate"],
        //Object demo
        stockDetails : [
            {
                itemNumber: 1,   
                itemName : "Sweets",
                itemPrice : 5,
                itemQuantity : 30,
                itemImage: '/images/customerbox-aXq1oCCjlVM-unsplash.jpg'
            },
            {
                itemNumber: 27466,
                itemName : "Lollipop",
                itemPrice : 10,
                itemQuantity : 4,
                itemImage: '/images/jamie-albright-AHF_ZktTL6Q-unsplash (1).jpg'
            },
            {
              itemNumber: 232,
                itemName : "Chocolate",
                itemPrice : 120,
                itemQuantity : 50,
                itemImage: '/images/tetiana-bykovets-TzN2odwnesg-unsplash.jpg'
            }
        ],
        totalStock: 100
      }
    },

    methods() {
      //we shall add our functions here
    },

    computed(){
      //we use this when working with forms
    }
}
</script>

<template>
 <v-card
    class="mx-auto"
    width="1000"
  >
    <v-card-text class="bg-surface-light pt-4">
      <v-carousel show-arrows="hover">
  <v-carousel-item
    src="public/images/iwona-castiello-d-antonio-dnMLdR814aA-unsplash.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="public/images/jacqueline-brandwayn-fA_dsZkS87s-unsplash.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="public/images/diana-light-3bgJzhTscYg-unsplash.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="public/images/leo-roza-VkMrtmuy9mY-unsplash.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="public/images/bao-menglong-j9oQ7nbKYNI-unsplash.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="public/images/merve-aydin-jD2dIC2IZME-unsplash.jpg"
    cover
  ></v-carousel-item>

</v-carousel>
    </v-card-text>
  </v-card>
  <br/>
  <br/>
  <v-divider></v-divider>
  <v-divider></v-divider>
  <v-card align="center" color="green">
        <v-card-item>
          <v-card-title>Karibu Camel Shop</v-card-title>

          <v-card-subtitle>Because Life Is Sweeter Together</v-card-subtitle>
        </v-card-item>

        <v-card-text>
         Welcome to our candy wonderland!  <br/> <p>
            Indulge in the sweetest delights and explore a world of sugary fantasies. At Camel Shop, we offer a delightful assortment of candies, chocolates, and treats that promise to tantalize your taste buds. <br/> Whether you're seeking nostalgic favorites or exciting new flavors, our shelves are stocked to satisfy every craving. Step inside and treat yourself to a symphony of sweetness. Happiness is just a candy away!
          </p>
        </v-card-text>
      </v-card>
<v-divider></v-divider>
<v-divider></v-divider>
<v-divider></v-divider>
<h3 class="text-center">What our customers say</h3>
<v-divider></v-divider>
<v-row>
    <v-col cols="12" md="4">
      <v-card
        subtitle="Lionel Kamau"
        text="My came in time and I really loved the employees hospitality."
        title="Excellent Customer Service 💯"
      ></v-card>

      <div class="text-center text-caption">Using Props Only</div>
    </v-col>

    <v-col cols="12" md="4">
      <v-card>
        <template v-slot:title>
          Splendid Services
        </template>

        <template v-slot:subtitle>
          Daniella Ogumba
        </template>

        <template v-slot:text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!
        </template>
      </v-card>

      <div class="text-center text-caption">Using Slots Only</div>
    </v-col>

    <v-col cols="12" md="4">
      <v-card>
        <v-card-item>
          <v-card-title>This is a title</v-card-title>

          <v-card-subtitle>This is a card subtitle</v-card-subtitle>
        </v-card-item>

        <v-card-text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!
        </v-card-text>
      </v-card>

      <div class="text-center text-caption">Using Markup Only</div>
    </v-col>
  </v-row>
</template>

<style>

</style>
