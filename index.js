$(function(){
  $.ajax({
           url: "https://api.propublica.org/congress/v1/115/house/bills/introduced.json",
           type: "GET",
           dataType: 'json',
           headers: {'X-API-Key':"UEiZ3kAMRJ2dnxFyTnP0l7GwFm8hitrL4V6Kmn5M" }
         }).done(function(data){
         console.log(data)
         });
})
