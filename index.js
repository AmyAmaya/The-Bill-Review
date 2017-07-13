var mykey= configs.MY_KEY;




$(function(){
  $.ajax({
           url: "https://api.propublica.org/congress/v1/115/house/bills/introduced.json",
           type: "GET",
           dataType: 'json',
           headers: {'X-API-Key':mykey }
         }).done(function(data){
           console.log(data)
           var bills = data.results[0].bills
           for(var i = 0; i < 10; i++){
             var name = bills[i].title
             var summary = bills[i].summary
             document.getElementById("recentbills").innerHTML += "<div> <li> Name of Bill: " + name + "</li><li> Summary of Bill: " + summary + "</li><li>" + " " + "</li></div>"
           }
          })
        })
