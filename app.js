var inputHours = document.getElementById("gethours");
var inputMins = document.getElementById("getmin");
var inputSec = document.getElementById("getsec");
var zero = "";

var hours = document.getElementById("hours");
var mins = document.getElementById("mins");
var sec = document.getElementById("sec");
var interval;
console.log(setHours);


function gettime() {
    
      hours.innerHTML = inputHours.value;
     mins.innerHTML =  inputMins.value ;
     sec.innerHTML = inputSec.value;
     document.getElementById('data').style.display='none';
     document.getElementById('timer').className='';
   
}


function time() {
    inputSec.value--
    sec.innerHTML = inputSec.value;

    if (inputSec.value == 0) {
        inputMins.value--
        mins.innerHTML = inputMins.value;
        inputSec.value = 59;
    } else if (inputMins.value == 0) {
        inputHours.value--
        hours.innerHTML = inputHours.value
        inputMins.value = 59;
    }

}




function start() {
    interval = setInterval(time, 1000)
    document.getElementById('startBtn').style.display='none';
    
}




function pause(){
    clearInterval(interval);
    document.getElementById('startBtn').style.display='inline';
    
}

function stop(){
      pause()      
      hours.innerHTML = 0
      mins.innerHTML =  0
      sec.innerHTML = 0
      document.getElementById('timer').style.display='none';
      document.getElementById('data').style.display='';
      inputHours.value = ''
      inputMins.value = ''
      inputSec.value = ''
}