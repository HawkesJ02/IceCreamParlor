// SECTION Vars and Objects

const iceCream = [{
  name: 'Cookie Dough',
  image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
  price: 1
}, {
  name: 'Vanilla',
  image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
  price: 1
}, {
  name: 'Strawberry',
  image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
  price: 2
}]

const toppings = [{
  name: 'Sprinkles',
  image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
  price: 1
}, {
  name: 'Chocolate Chips',
  image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
  price: 2
}]

const containers = [{
  name: 'Waffle Cone',
  image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
  price: 2
}, {
  name: 'Waffle Bowl',
  image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
  price: 4
}]

let cart = []

// SECTION FUNCTIONS

function draw_cart(){
let cart = document.getElementById("cart")
let template = ``

cart.forEach(item => {
  
});

}

function draw_total(){

}

function draw_toppings(){
let topping_cards = document.getElementById("topping_cards")
let template = ``

for (let i = 0; i < toppings.length; i++) {
  const t = toppings[i];
  template += `
  <div>
  <img src="${t.image}">
  <div>${t.name}</div>
  <div>${t.price}</div>
  <button onclick="add_topping('${t.name}')">ADD</button>
  </div>
  `

console.log(`  <div class="topping_cards">
<img src="${t.image}">
<div class>${t.name}</div>
<div>${t.price}</div>`);

}

topping_cards.innerHTML = template
console.log('draw toppings ran');
}

function draw_cones(){
}

function draw_ice_c(){

}

function add_topping(name){

let itemToAdd = toppings.find(t => t.name == name)
console.log(itemToAdd);

}

function add_cone(){

}

function add_ice_c(){
  let main_screen_elm = document.getElementById('main_screen')
  // @ts-ignore
  main_screen_elm.innerText = 'hi'
  console.log(`working`);
  
  }


  // SECTION ON STARTUP

draw_toppings()
draw_cones()
draw_ice_c()