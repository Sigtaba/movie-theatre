//business logic

function Ticket(movies, ages, times) {
  this.movies = movies;
  this.ages = ages;
  this.times = times;
}

Ticket.prototype.price = function() {
  return this.movies + this.ages + this.times;
}


//front-end logic

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var inputtedAge = $("input[name=age]:checked").val();
    var inputtedTime = $("input[name=time]:checked").val();
    var inputtedMovie = $("input[name=movie]:checked").val();

    var newTicket = new Ticket(inputtedMovie, inputtedAge, inputtedTime);

    console.log(newTicket);

    event.preventDefault();
  });
});
