//User Interface
var Alarm= require('./../js/scripts.js').alarmModule;
$(document).ready(function(){
  $('form#timme').submit(function(event){
    event.preventDefault();
    //Collect Variables from the html file
    var times = $('#time').val();

    //var outt = moment(times, 'h:mma');
    //Create a time object
    var myAlarm = new Alarm(times);


    //output the time
    $('.output').text(myAlarm.alarmRing());
    $('.mytime').text(moment());

    });

});
