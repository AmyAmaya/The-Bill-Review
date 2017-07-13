$(function(){
  $.ajax({
           url: "https://www.googleapis.com/civicinfo/v2/representatives",
           type: "GET",
           dataType: 'json',
         }).done(function(data){
         console.log(data)
         });
})
