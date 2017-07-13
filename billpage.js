var mykeys= configs.MY_KEY;

$(function(){
  $.ajax({
           url: "https://api.propublica.org/congress/v1/115/house/bills/introduced.json",
           type: "GET",
           dataType: 'json',
           headers: {'X-API-Key':mykeys }
         }).done(function(data){
           console.log(data);
           var bills = data.results[0].bills;
           for(var i = 0; i < bills.length; i++){
             var name = bills[i].title;
             var summary = bills[i].summary;
             document.getElementById("title").innerHTML = name;
             document.getElementById("summary").innerHTML = summary;

           }
         })
        })
