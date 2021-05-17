(function(){
const second= 1000;
const minute = second*60;
const hour = minute*60;
const day = hour*24;

const finalRun= "September 10, 2021 10:00:00";
const marathonDay= "October 10, 2021 10:00:00";
const finalRaise= "November 12, 2021 00:00:00";

let countdown1= new Date(finalRun).getTime();
let countdown2 = new Date(marathonDay).getTime();
let countdown3 = new Date(finalRaise).getTime();
x = setInterval(function(){

let now = new Date().getTime();

let distance =  countdown2-now;

document.querySelector(".days").innerText = Math.floor(distance / day)
document.querySelector(".hours").innerText = Math.floor(distance % (day)/(hour))
document.querySelector(".minutes").innerText = Math.floor(distance % (hour)/(minute))
document.querySelector(".seconds").innerText = Math.floor(distance % (minute)/(second))

let header= document.querySelector(".header")

if (distance >= countdown1){
    header.innerText="One Month or Less Until the Race Day"
}

else if(distance <= 0){
header.innerText="Final Call for Donations"

}
else if(distance >= countdown3){
    header.innerText="Fundraising has now closed"
}


}, 0)
})()