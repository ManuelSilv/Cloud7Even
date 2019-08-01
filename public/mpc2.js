$(window).on("load resize",function(e){
  var widthP = $("#padgrid").width(); 
  var width_diff = (widthP - 60) / 4;
  $('.pad').css({ width : width_diff + "px", height : width_diff + "px",  }); 
  console.log(width_diff);
});