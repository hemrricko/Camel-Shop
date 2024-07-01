const state = {
    stockDetails : [
        {
              itemNumber: 1,
              itemName : "Sweets",
              itemPrice : 5,
              itemQuantity : 30,
              itemImage: '../images/customerbox-aXq1oCCjlVM-unsplash.jpg',
              description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"
          },
          {
              itemNumber: 27466,
              itemName : "Lollipop",
              itemPrice : 10,
              itemQuantity : 4,
              itemImage: '..//images/arturo-esparza-Ky4q3IbRCLk-unsplash.jpg',
              description: "Our Lollipops are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"
          },
   {
              itemNumber: 273,
              itemName : "Chocolate",
              itemPrice : 250,
              itemQuantity : 70,
              itemImage: 'public/images/tetiana-bykovets-TzN2odwnesg-unsplash.jpg',
              description: "Our Chocolates are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"
          },
   {
              itemNumber: 27,
              itemName : "Smocha",
              itemPrice : 70,
              itemQuantity : 100,
              itemImage: 'public/images/Kenyan wrap_ Smocha _ chapo smokie.jpeg',
              description: "Our Smocha's are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"
          }
    ]
}
const getters = {
    stock: (state)=> state.stockDetails,
}
const actions = {

}
const mutations = {

}

export default{
    state,
    getters,
    actions,
    mutations,
}