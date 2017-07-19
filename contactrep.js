
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
            //var zip = data.officials[4].address[0].zip
          //  var email= data.officials[4].emails[0]
            var party= data.officials[4].party
          //  var phone = data.officials[4].phones[0]
            var url= data.officials[4].urls
<<<<<<< HEAD
            if ( data.officials[4].phones && data.officials[4].photoUrl && data.officials[4].emails){
              var email= data.officials[4].emails[0]
              var phone = data.officials[4].phones[0]
              var profilePhoto = data.officials[4].photoUrl
=======

              document.getElementById("contactinfo").innerHTML += "<div><center><ul> Name: " +name+ "</ul><ul> Address: "+ line + ", "+ city+ " " + state +"</ul><ul> Party: " + party +"</ul><ul> Website: "  + url+ "</ul></center></div>"

            if (data.officials[4].emails[0]){
>>>>>>> bb849a0188cf373acaa20770c49deacbb14db2fa
              document.getElementById("contactinfo").innerHTML += "<div><center><li> Name: " +name+ "</li><li> Address: "+ line + ", "+ city+ " " + state +"</li><li>"
              +email+"</li><li>" +phone+"</li><li>"+ name +"</li><li> Party: " + party +"</li><li> Website: "  + url+ "</li></center></div>";
              $("#photo").html
              document.getElementById("photo").innerHTML="<img src='"+profilePhoto+"'>"

            }
            else {
              document.getElementById("contactinfo").innerHTML += "<div><center><li> Name: " +name+ "</li><li> Address: "+ line + ", "+ city+ " " + state +"</li><li>"
               + name +"</li><li> Party: " + party +"</li><li> Website: "  + url+ "</li></center></div>";
            }




           });
  })
})
