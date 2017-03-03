
function Pizza(size, toppings){
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.price = function(size, toppings){
  return 10 + this.size + this.toppings.length;
}

$(function(){
  $("form#pizzaBuilder").submit(function(){
    event.preventDefault();

    var size = parseInt($("input:radio[name=size]:checked").val());
    var toppings = $("input:radio[name=topping1]:checked").val();
    console.log(toppings);

    var pizza = new Pizza(size, [toppings]);
    $("#price").append("<il>" + pizza.price(size, [toppings]) + "</li>");

  });
});
