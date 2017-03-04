
function Pizza(size, toppings){
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.price = function(size, toppings){
  return 10 + this.size + this.toppings;
}

$(function(){
  $("form#pizzaBuilder").submit(function(){
    event.preventDefault();
    debugger;
    var size = parseInt($("input:radio[name=size]:checked").val());
    var toppings =
    parseInt($("input:checkbox[name=topping1]:checked").val()) + parseInt($("input:checkbox[name=topping2]:checked").val()) + parseInt($("input:checkbox[name=topping3]:checked").val()) + parseInt($("input:checkbox[name=topping4]:checked").val()) +
    parseInt($("input:checkbox[name=topping5]:checked").val()) +
    parseInt($("input:checkbox[name=topping6]:checked").val()) +
    parseInt($("input:checkbox[name=topping7]:checked").val()) +
    parseInt($("input:checkbox[name=topping8]:checked").val()) +
    parseInt($("input:checkbox[name=topping9]:checked").val()) +
    parseInt($("input:checkbox[name=topping10]:checked").val());
    var pizza = new Pizza(size, toppings);
    $("#priceOutput").append("<p>" + pizza.price(size, toppings) + "</p>");
  });
});
