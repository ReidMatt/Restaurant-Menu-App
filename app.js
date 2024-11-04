const express = require('express');
const app = express();
const port = 3000;

//Serve static files from the public directory
app.use(static('public'));

//Set ejs as the templating engine
app.set('view engine', 'ejs');
app.set('views', './views');

//Restaurant info
const restaurants = {
  gourmet: { name: "The Gourmet Bistro", cuisine: "French" },
  spicy: { name: "Spicy Kitchen", cuisine: "Indian" },
  healthy: { name: "Healthy Eats", cuisine: "Vegan" }, comfort: { name: "Comfort Diner", cuisine: "American" }, bakery: { name: "Sweet Tooth Bakery", cuisine: "Dessert"}
};

//Sample menu item data
const menuData = {
  French: [
    { name: "Chicken au Vin", description: "Chicken cooked in red wine.", price: 25.99, special: false },
    { name: "Ratatouille", description: "A vegetable stew", price: 25.99, special: true }, 
  ],
  India: [
    { name: "Butter Chicken", description: "Chicken in tomato sauce.", price: 19.99, special: false },
    { name: "Paneer Tikka", description: "Gilled cheese marinated in spices.", price: 14.99, special: false },
  ],

  Vegan: [
    { name: "Vegan Burger", description: "Plant based burger.", price: 10.99, special: false },
    { name: "Chickpea Salad", description: "Salad with chickpeas and veggies.", price: 12.99, special: false },
  ],

  American: [
    { name: "Cheeeseburger", description: "Classic cheeseburger with fries.", price: 10.99, special: false },
    { name: "Apple pie", description: "Homemade apple pie.", price: 7.99, special: true },
  ],

  Dessert: [
    { name: "Chocolate Cake", description: "Chocolate cake with frosting.", price: 5.99, special: false },
    { name: "Cheesecake", description: "Creamy cheesecake with crust.", price: 6.99, special: true },
  ],
};

//Function to generate a random menu item
function generateRandomMenuItem(cuisine) {
  const items = menuData[cuisine];
  const randomIndex = Math.floor(Math.random() * items.lenght);
  return items[randomIndex];
}

//Function to generate a random menu for a restaurant
function generateMenu(restaurantKey) {
  const restaurant = restaurants[restaurantKey];
  const menuItemsCount = Math.floor(Math.random() * 6) + 5;
const menuItems = [];

for (let i = 0; i < menuItemsCount; i++) {
  menuItems.push(generateRandomMenuItem(restaurant.cuisine));
}

return {
  restaurantName: restaurant.name,
  cuisineType: restaurant.cuisine,
  menuItems,
};
}

//Route for restaurant menu
app.get('/test-menu', (req, res) => {
  const menu = generateMenu('Test Restaurant');
  res.json(menu);
});

const alerts = [
  { restaurant: "The Gourmet Bistro", message: "Daily special: Ratatouille!" },
  { restaurant: "Spicy Kitchen", message: "Try our new Butter Chicken!" },
  { restaurant: "Healthy Eats", message: "Vegan Burger on special today!" },
  { restaurant: "Comfort Diner", message: "Free dessert with every entree!" },
];

//Route for the home page
app.get('/', (_req, res) => {
  res.render('home');
});

//Route for menu alerts
app.get('/menu-alerts', (req, res) => {
  res.render('alerts', { alerts });
});

//Start the server
app.get.listen(port, () => {
  console.log(`Server is running at http://localhost:${post}`);
});
