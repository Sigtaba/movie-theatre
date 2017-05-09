//business logic

function Ticket(movies, ages, times) {
  this.movies = movies;
  this.ages = ages;
  this.times = times;
}

Ticket.prototype.getPrice = function() {
    var price = 0;
  if (this.movies === "movie-premium") {
    price += 10;
  }
  if (this.ages === "age-discount") {
    price += 5;
  }
  if (this.times === "time-discount") {
    price += 5;
  }
  return price;
}

//front-end logic

$(document).ready(function() {
  $("#formOne").submit(function(event) {

    var inputtedAge = $("input[name=age]:checked").val();
    var inputtedTime = $("input[name=time]:checked").val();
    var inputtedMovie = $("input[name=movie]:checked").val();

    var newTicket = new Ticket(inputtedMovie, inputtedAge, inputtedTime);

    $("#output").text("Your price is: $" + newTicket.getPrice() + ".00");

    event.preventDefault();
  });
});
