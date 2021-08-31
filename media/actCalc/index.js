// console.log("hello");

// var name = prompt("what is your name?");

// alert("this is " +name);

var output = document.querySelector("#output");
var principle = document.querySelector("#principle");
var rate = document.querySelector("#rate");
var time = document.querySelector("#time");
var calculate = document.querySelector(".calculate");



var principle2 = document.querySelector("#principle2");
var rate2= document.querySelector("#rate2");
var time2 = document.querySelector("#time2");
var frequency2 = document.querySelector("#frequency2");
var calculate2 = document.querySelector(".calculate2");
var output2 = document.querySelector("#output2");


console.log(principle);
console.log(rate);
console.log(time);
console.log(calculate);
console.log(output);


console.log(principle2);
console.log(rate2);
console.log(time2);
console.log(frequency2);
console.log(calculate2);
console.log(output2);









calculate.addEventListener('click',function calculate(){
    var SI = (principle.value*rate.value*time.value)/100;
    console.log(principle.value);
    console.log(SI);
    output.innerHTML = "Simple Interest is: " + SI;
});




calculate2.addEventListener('click', function calculate(){
   var Amt = principle2.value*(Math.pow((1+(rate2.value/frequency2.value)), (frequency2.value*time2.value)));
    var CI = (Amt-principle2.value);
    console.log(CI);
    // console.log(output2);
    document.getElementById("output2").innerHTML = "Compound Interest is: " + CI;
});







// function calculate(){
//     var SI = (principle.value*rate.value*time.value)/100;
//     console.log(principle.value);
//     console.log(SI);
//     output.innerHTML = "Simple Interest is: " + SI;
// }




