function Pizza(size, toppings){
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.price = function(size, toppings){
  return this.size * this.toppings.length;
}
