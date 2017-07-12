var mykey= config.MY_KEY;



  $.ajax({
           url: " https://www.googleapis.com/civicinfo/v2/representatives",
           type: "GET",
           dataType: 'json',
           headers: {'X-API-Key':"UEiZ3kAMRJ2dnxFyTnP0l7GwFm8hitrL4V6Kmn5M" }
         }).done(function(data){
         console.log(data)
         });
})
