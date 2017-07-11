
$.get( "https://www.govtrack.us/api/v2/bill?congress=112&order_by=-current_status_date", function(data){
  console.log(data)
})
