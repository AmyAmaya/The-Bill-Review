var mykeys= configs.MY_KEY;

$(function(){
  var number = window.location.search.replace('?H.RES.','').toLowerCase()
  var numbers = window.location.search.replace('?H.R.','').toLowerCase()
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
             var actiondate = bill.latest_major_action_date;
             var action = bill.latest_major_action;
             var number = bill.number;
             var url = bill.govtrack_url;
             document.getElementById("title").innerHTML = name;
             document.getElementById("summary").innerHTML = summary;
             document.getElementById("number").innerHTML = number;
             document.getElementById("action").innerHTML = action;
             document.getElementById("actiondate").innerHTML = actiondate;
             document.getElementById("govtrack_url").innerHTML = url;
       })
     }
     if(numbers){
       $.ajax({
                url: "https://api.propublica.org/congress/v1/115/bills/hr" + numbers + ".json",
                type: "GET",
                dataType: 'json',
                headers: {'X-API-Key':mykeys }
              }).done(function(data){
                console.log(data);
                var bill = data.results[0];
                var name = bill.title;
                var summary = bill.summary;
                var actiondate = bill.latest_major_action_date;
                var action = bill.latest_major_action;
                var number = bill.number;
                var url = bill.govtrack_url;
                document.getElementById("title").innerHTML = name;
                document.getElementById("summary").innerHTML = summary;
                document.getElementById("number").innerHTML = number;
                document.getElementById("action").innerHTML = action;
                document.getElementById("actiondate").innerHTML = actiondate;
                document.getElementById("govtrack_url").innerHTML = url;
          })
        }
    })
