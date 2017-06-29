//Business logic
function Alarm(a){
this.a = a;
}

//Lets create a prototype
Alarm.prototype.alarmRing = function () {
  if(this.a === moment().format('h:mma')){
    return "Alarm is on";
  }else{
    return "Alarm is off";
  }
};
exports.alarmModule = Alarm;
