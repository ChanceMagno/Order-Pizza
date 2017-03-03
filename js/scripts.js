
function Pizza(size, toppings){
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.price = function(size, toppings){
  return this.size * this.toppings.length;
}

$(function(){
  $("form#pizzaBuilder").submit(function(){
    event.preventDefault();
    var size = parseInt($("input:radio[name=size]:checked").val());
    console.log(size);
  });
});
