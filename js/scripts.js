//Back End
function Pizza(size, toppings){
  this.size = size;
  this.toppings = toppings;
}


Pizza.prototype.pizzaPrice = function() {
     return this.toppings.length *1.5 + this.size;
}


//front End
$(function(){
  $("form#pizzaBuilder").submit(function(){
    $("#priceOutput").empty();
    $("#toppingsList").empty();
    event.preventDefault();
    var sizePrice = parseInt($("input:radio[name=size]:checked").val());
    var selectedToppings= [];
    $('input[type=checkbox]').each(function(){
      if (this.checked) {
        selectedToppings.push($(this).val());
      }
    })
    newOrder = new Pizza(sizePrice, selectedToppings);
      $("#priceOutput").append("<p> Your Total is $" + newOrder.pizzaPrice() + "</p>");
      selectedToppings.forEach(function(selectedtopping){
        $("#toppingsList").append("<li>" + selectedtopping + "</li>");

      })
  });
});
