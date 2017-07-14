
var mykey= configs.KEY_1;
src = "contactrep.html"
//var getinfo= $('#useraddress').val()
//console.log(getinfo)

$(function(){
  $('#search').click(function(e){
    e.preventDefault()
    var getinfo= $('#useraddress').val()
    $.get('https://www.googleapis.com/civicinfo/v2/representatives?key='+mykey+'&address= '+getinfo+'',function(data){
            console.log(data)
            //$.val('#useraddress')
            var name = data.officials[4].name
            var city = data.officials[4].address[0].city
            var line= data.officials[4].address[0].line1
            var state = data.officials[4].address[0].state
            var zip = data.officials[4].address[0].zip
            var email= data.officials[4].emails[0]
            var party= data.officials[4].party
            var phone = data.officials[4].phones[0]
            var url= data.officials[4].urls
            document.getElementById("contactinfo").innerHTML += "<div> <li> " + city + line + state
            + zip + name + party + phone + email+ url + "</li></div>"


           });
  })
})
