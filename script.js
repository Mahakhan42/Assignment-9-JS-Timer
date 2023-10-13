//values get in js from ID
var hour = document.getElementById("hour");
var minutes = document.getElementById("minute");
var second = document.getElementById("second");

var startbtn = document.getElementById("start");
var resetbtn = document.getElementById("reset");

var main = document.getElementById("main");

var interval = null;
var Total = 0;

//timer function define or value ko second me change krdy gy
 TotalValue = ()=>{
    Total = Number(hour.value)*3600 + Number(minutes.value)*60 + Number(second.value);
}
// Total value jo bhi ho gi isko kum krny ky liye
Timer = ()=>{ TotalValue()
Total--; //her ek second pr kum ho ga
if(Total >= 0){
var hr = Math.floor(Total/3600);
var mt = Math.floor((Total/60)-(hr*60));
var sc = Total - ((hr*3600)+(mt*60));
hour.value = hr;
minutes.value = mt;
second.value = sc;
}
else{
    main.innerText = "Time Over!";
}
}

startbtn.addEventListener('click',()=>{
    clearInterval(interval); //interval ki value ko clear kr dy gy to is ky bad 
   interval =  setInterval(Timer,1000)  //ye wala function ajye ga
   //timer btn change runtime
   main.innerText = "Timer Started";
});
resetbtn.addEventListener('click',()=>{
clearInterval(interval);
hour.value =0;
minutes.value =0;
second.value =0;
});
