
var mykey= configs.KEY_1;
var getinfo= document.getElementById("useraddress");
src = "contactrep.js"


$(function(){
  $('#search').click(function(e){
    e.preventDefault()
    $.get('https://www.googleapis.com/civicinfo/v2/representatives?key='+mykey+'&address= '+getinfo+'',function(data){
            console.log(data)
            var city = data.officials[4].address[0].city
            var line= data.officials[4].address[0].line1
            var state = data.officials[4].address[0].state
            var zip = data.officials[4].address[0].zip
            var name = data.officials[4].name
            var party= data.officials[4].party
            var phone = data.officials[4].phones[0]
            var photo = data.officials[4].photoUrl
            document.getElementById("contactinfo").innerHTML += "<div> <li> " + city + line + state
            + zip + name + party + phone + photo + "</li></div>"


           });
  })
})
