
 var mykey= config.MY_KEY;
 //var use
//var useraddress="user_input"


$(function(){
  $('#search').click(function(e){
    e.preventDefault()
    $.get('https://www.googleapis.com/civicinfo/v2/representatives?key='+mykey+'&address=1263%20Pacific%20Ave.%20Kansas%20City%20KS', function(data){
            console.log(data)
           });
  })
})