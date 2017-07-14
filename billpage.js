var mykeys= configs.MY_KEY;

$(function(){
  var number = window.location.search.replace('?H.RES.', '').toLowerCase()
  if(number){
    $.ajax({
             url: "https://api.propublica.org/congress/v1/115/bills/hres" + number + ".json",
             type: "GET",
             dataType: 'json',
             headers: {'X-API-Key':mykeys }
           }).done(function(data){
             console.log(data);
             var bill = data.results[0];
             var name = bill.title;
             var summary = bill.summary;
             document.getElementById("title").innerHTML = name;
             document.getElementById("summary").innerHTML = summary;
       })
     }
    })
