//Welcome message variables
var greeting = 'Howdy ';
var name = 'Molly';
var message = ', please check your order:';

//Concatenate the tree variable to create the greeting
var welcome = greeting + name + message;

//Create variable to hold details about the sign
var sign = 'Montague House';
var tiles = sign.length * 5;
var shipping = 7;
var subTotal = tiles * 5;
var grandTotal = subTotal + shipping;

//Get the element that has an id of greeting
var el = document.getElementById('greeting');
//Replace the content of that element with the personalized welcome message
el.textContent = welcome;

// Get the element that has an id of userSign then update its contents
var elSign = document.getElementById('userSign');
elSign.textContent = sign;

// Get the element that has an id of userSign then update its contents
var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;


//Get the element that has an id of subTotal then update its content
var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = '$' + subTotal;

//Get the element that has an id of shipping then update its content
var elSubTotal = document.getElementById('shipping');
elSubTotal.textContent = '$' + shipping;

//Get the element that has an id of grandTotal then update its content
var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = '$' + grandTotal;