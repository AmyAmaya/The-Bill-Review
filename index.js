var mykeys= configs.MY_KEY;




$(function(){
  $.ajax({
           url: "https://api.propublica.org/congress/v1/115/house/bills/introduced.json",
           type: "GET",
           dataType: 'json',
           headers: {'X-API-Key':mykeys }
         }).done(function(data){
           console.log(data)
           var bills = data.results[0].bills
           for(var i = 0; i < 10; i++){
             var name = bills[i].title
             var summary = bills[i].summary
             var url = bills[i].bill_uri
             var number=bills[i].number
<<<<<<< HEAD
             document.getElementById("recentbills").innerHTML += "<div><li>Name of Bill: <a href= 'billpage.html?" + number+"' data-id="+number+" >"+ name + "</a></li><li> Summary of Bill: " + summary + "</li></div>"
=======
             document.getElementById("recentbills").innerHTML += "<div><li>Name of Bill: <a href='billpage.html?" + number+"' data-id="+number+" >"+ name + "</a></li><li> Summary of Bill: " + summary + "</li></div>"
>>>>>>> 5ea01798f92b3d79a434f2a1b35ac39fa2eda0e7

           }
          })
      })
