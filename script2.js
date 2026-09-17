console.log("This is javascript page 2");

const shoppingList = [];

shoppingList.push("Milk");
shoppingList.push("Eggs");
shoppingList.push("Bread");
shoppingList.push("Apples");
shoppingList.push("Cereal");

shoppingList[2] = "Can of Peas";

shoppingList.splice(0, 2);

shoppingList.reverse();

console.log(`The list contains ${shoppingList.length} items`);
