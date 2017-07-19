var mykeys= configs.MY_KEY;
var name;

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
             name = bill.title;
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

             $("#govtrack_url").click(function(){
               window.open(url, '_blank')
             })
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

                $("#govtrack_url").click(function(){
                  window.open(url, '_blank')
                })
          }).done(
            $.get('https://content.guardianapis.com/search?q='+ name + '&api-key=cb3d2f14-b8dc-4e51-903b-2e5ab699dd6c',function(data){
                  console.log(data)
                  var response = data.response
                  var articles = response.results;
                  for(var i = 0; i < 10; i++){
                    var name = articles[i].webTitle
                    var url = articles[i].webUrl
                    document.getElementById("article").innerHTML += "<div><ul><br><hr>Article Name: " + "<a href = " +url+ ">" + name  + "</a></hr></br></ul></div>"
                  }
                 })

          )
        }
    })
