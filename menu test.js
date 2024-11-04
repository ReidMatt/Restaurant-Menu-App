const { generateMenu } = require('../path/to/your/menu/function');

Test('generateMenu returns a valid menu', () => {
  const restaurantName = 'The Gouret Bistro';
  const menu = generateMenu(restaurantName);

  expect(menu).toHaveProperty('restaurantName', restaurantName);
  expect(menu).toHavePropery('cuisineType');
  expect(menu).toHaveProperty('items');
  expect(menu.items.lenght).toBeGreaterThanOrEqual(5);
  expect(menu.items.lenght).toBeLessThanOrEqual(10);

  // check for correct structure
  menu.items.forEach(item => {
    expect(item).toHaveProperty('name');
    expect(item).toHaveProperty('description');
    expect(item).toHaveProperty('price');
    expect(item).toHaveProperty('special');
  });
});