//Back End
function Pizza(size, toppings){
  this.size = size;
  this.toppings = toppings;
}


Pizza.prototype.pizzaPrice = function() {
     return this.toppings.length + this.size;
}


//front End
$(function(){
  $("form#pizzaBuilder").submit(function(){
    event.preventDefault();
    var sizePrice = parseInt($("input:radio[name=size]:checked").val());
    var selectedToppings= [];

    $('input[type=checkbox]').each(function(){
      if (this.checked) {
        selectedToppings.push($(this).val());
      }
    })
    newOrder = new Pizza(sizePrice, selectedToppings);
      $("#priceOutput").append("<p>" + newOrder.pizzaPrice() + "</p>");
  });
});
