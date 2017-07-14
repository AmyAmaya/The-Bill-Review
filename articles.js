var mykeys= configs.MY_KEY;

$(function(){
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
             document.getElementById("title").innerHTML = name;
             document.getElementById("summary").innerHTML = summary;
             document.getElementById("number").innerHTML = number;
             document.getElementById("action").innerHTML = action;
             document.getElementById("actiondate").innerHTML = actiondate;
       })
    })
