// console.log("hello");

// var name = prompt("what is your name?");

// alert("this is " +name);

var output = document.querySelector("#output");
var principle = document.querySelector("#principle");
var rate = document.querySelector("#rate");
var time = document.querySelector("#time");
var calculate = document.querySelector(".calculate");




console.log(principle);
console.log(rate);
console.log(time);
console.log(calculate);
console.log(output);

calculate.addEventListener('click',function calculate(){
    var SI = (principle.value*rate.value*time.value)/100;
    console.log(principle.value);
    console.log(SI);
    output.innerHTML = "Simple Interest is: " + SI;
});

// function calculate(){
//     var SI = (principle.value*rate.value*time.value)/100;
//     console.log(principle.value);
//     console.log(SI);
//     output.innerHTML = "Simple Interest is: " + SI;
// }



// var output2 = document.querySelector("#output2");
// console.log(output2);