$(document).ready(function() {

//profiles appears
$(".IP").on("click", function(event){
  event.stopPropagation();

  $(".profiles").toggleClass("down");
  $(".view").hide();

if($(".profiles").hasClass("down")) {
      $(".profiles").slideDown();

}else{
        $(".profiles").slideUp();
  }
})

$("body").on("click", function(event){

  if($(event.target).hasClass ("down") ||
  $(event.target).parents().hasClass("down")
) {
return false;
}
$(".view").show();
$(".profiles").slideUp().removeClass("down");
});

//user will click "Signal _name" for request form to appear
$(".sendButton").on("click", function(){
  $(".zebra").show();
  $(".oval").show();

  })

//alert user request has been sent
$(".formSend").on("click", function(){
  $(".zebra, .oval, .profiles").hide();
    // $("#signalForm").hide();
    // $(".profiles").hide();
    // $(".overlay").hide();
    alert("Your signal has been sent! Your instructor will contact you shortly.")

  })

//click out of profiles


//Recent Events Carousel
  $(".next").on("click", function(){
    if(count<images.length-1){
      count++;
    }

$("#dock").attr("src", images[count]);
  });

  $(".back").on("click", function(){
    if(count >= 1){
      count--;

    }
    $("#dock").attr("src", images[count]);
  });

//burger
$(".burger").on("click", function(){
$(".IP").toggleClass("down");
  if($(".IP").hasClass("down")){
  $(".IP").slideDown();
}   else{
  $(".IP").slideUp();
}

  });
});
var images=["images2/dock.jpg","images2/monkey.jpg", "images2/copley.jpg", "images2/seaport.jpg", "images/mereview.jpg"];

var count = 0;
