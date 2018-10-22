$(document).ready(function(){
var cards = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
var suits = ["diamond_list", "heart_list", "club_list", "spade_list"];
suits.forEach(function(suit){
 var text;
 if (suit === "diamond_list"){
   text = "diamond";
  }
 else if (suit === "heart_list"){
    text = "heart";
  }
else if (suit === "club_list"){
    text = "club";
  }
else if (suit === "spade_list"){
    text = "spade";
  }
  cards.forEach(function(card){
      $("ul#" + suit).append("<li>" + card + " of " + text + "</li>");
    });
  });

  $('button').click(function() {
    event.preventDefault();
    if(this.id == 'showdiamond') {
      $("#diamond").show();
        $("#heart").hide();
        $("#club").hide();
        $("#spade").hide();
    }
    else if (this.id == 'showheart') {
      $("#heart").show();
      $("#diamond").hide();
      $("#club").hide();
      $("#spade").hide();
    }
    else if (this.id == 'showclub') {
      $("#club").show();
      $("#diamond").hide();
      $("#heart").hide();
      $("#spade").hide();
    }
    else if  (this.id == 'showspade') {
      $("#spade").show();
      $("#diamond").hide();
      $("#heart").hide();
      $("#club").hide();
    }
  });
});
