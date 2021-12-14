$(function(){

$.ajax({
  url: "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json",
}).done(function(data) {
  for (var i = 0; i < data.length; i++) {
    $('.sel').prepend('<option data-rate='+ data[i].rate+'>' + data[i].txt + '</option>');
      
  }
});
  $('.sel').on('change', function () {
    var curRate = $(this).children("option:selected").attr('data-rate');
    $(".curRate").text(curRate)
    console.log(curRate);

    
   })
});