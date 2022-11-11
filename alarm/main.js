console.log('Hello World!');
let remove_btn = document.querySelector("#remove");
let sound = document.querySelector("#sound");
let audio = new Audio('https://freesound.org/data/previews/316/316847_4939433-lq.mp3')
const alarm = document.getElementById('alarm');
let snooze_btn = document.getElementById("snooze");
let set_alram = document.getElementById("set_alram");
let alram_set= false;
let timer = false;

 function setAlram() {
    alarmDate = new Date(alarm.value);
    console.log(`Setting Alarm for ${alarmDate}...`);
    now = new Date();
    let timeToAlarm = alarmDate - now;
    console.log(timeToAlarm);
    if (timeToAlarm >= 0) {
      setTimeout(() => {
        ringBell();
        alert("Ringing now");
        if(timer){
          snooze();
        }
      }, timeToAlarm);
    }
  }

function multisetAlram(count){
  alert(`Ringing now${count+1}`)
}


  function remove() {
    alarm.value = '';
    remove_btn.classList.add('hide');
    snooze_btn.classList.add('hide');
  }
  function snooze() {
    let count = 0;
    let interval = setInterval(() => {
      if (count == 2) {
        clearInterval(interval);
      }
      ringBell()
      multisetAlram(count);
     
      count++;
    }, 300000);
  }
  
 function showHidebutton(){
   if(alram_set){
    remove_btn.classList.remove('hide');
    snooze_btn.classList.remove('hide');
   }else{
     remove_btn.classList.add('hide');
    snooze_btn.classList.add('hide');
   }
  }

  function ringBell(){
    audio.play();
  }

set_alram.addEventListener("click",()=>{
  if(alarm.value!=""){
    alram_set=true;
    setAlram();
    showHidebutton();
  }else{
    alert("Select Date and Time")
  }
});

function snoozeOn(){
  timer = true;
}
remove_btn.addEventListener("click",remove);
snooze_btn.addEventListener("click",snoozeOn);


function currentTime(){
  var t = new Date();
  var show = t.toLocaleTimeString();
 let showCurr =  document.getElementById('current');
 showCurr.innerHTML = show;
}

setInterval(()=>{
  currentTime();
},1000)
