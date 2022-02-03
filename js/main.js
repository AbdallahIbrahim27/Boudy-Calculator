// let clear = document.getElementById("clear");
// let inputField = document.getElementById("inputField")
// let one = document.getElementById("one")
// let two = document.getElementById("two")
// let plus = document.getElementById("plus")
// let mines = document.getElementById("mines")
// let over = document.getElementById("over")
// let equal = document.getElementById("equal")
// // add event listner to clear button
// clear.addEventListener("click" , function(){
//     inputField.value = ` `; 
// })
// one.addEventListener("click" , function(){
//     inputField.value = 1; 
// })
// two.addEventListener("click" , function(){
//     inputField.value = 2 ; 
// })
// plus.addEventListener("click" , function(){
//     inputField.value = "+" ; 
// })
// mines.addEventListener("click" , function(){
//     inputField.value = `-`; 
// })

// over.addEventListener("click" , function(){
//     inputField.value = `/`; 
// })

// equal.addEventListener("click",function(){
//    let result = inputField.value;
//    inputField.value = result;
//    console.log(result)
// })

// ***********************************************
let clear = document.getElementById("clear");
let over = document.getElementById("over");
let mult = document.getElementById("mult");
let sven = document.getElementById("sven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let mines = document.getElementById("mines");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let plus = document.getElementById("plus");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let zero = document.getElementById("zero");
let lfArrow = document.getElementById("lfArrow");
let dot = document.getElementById("dot");
let equal = document.getElementById("equal");


clear.addEventListener("click", function () {
    document.calc.txt.value = ` `;

})


over.addEventListener("click", function () {
    if (document.calc.txt.value != "" && document.calc.txt.value != " ") {
        document.calc.txt.value += `/`;

    }

})

mult.addEventListener("click", function () {
    if (document.calc.txt.value != "" && document.calc.txt.value != " ") {
        document.calc.txt.value += `*`;

    }



})


sven.addEventListener("click", function () {
    document.calc.txt.value += 7;

})


eight.addEventListener("click", function () {
    document.calc.txt.value += 8;

})


four.addEventListener("click", function () {
    document.calc.txt.value += 4;

})

five.addEventListener("click", function () {
    document.calc.txt.value += 5;

})


six.addEventListener("click", function () {
    document.calc.txt.value += 6;

})


nine.addEventListener("click", function () {
    document.calc.txt.value += 9;

})


mines.addEventListener("click", function () {

  
        document.calc.txt.value += `-`;



})


plus.addEventListener("click", function () {

    if (document.calc.txt.value != "" && document.calc.txt.value != " ") {
        document.calc.txt.value += `+`;

    }


})

one.addEventListener("click", function () {
    document.calc.txt.value += 1;

})


two.addEventListener("click", function () {
    document.calc.txt.value += 2;

})


three.addEventListener("click", function () {
    document.calc.txt.value += 3;

})


zero.addEventListener("click", function () {
    document.calc.txt.value += 0;

})


lfArrow.addEventListener("click", function () {
    var str = document.calc.txt.value;
    if (str != "" && str != " "){
        str = str.substring(0, str.length - 1);
        document.calc.txt.value = str; 
    }
   
    
})


dot.addEventListener("click", function () {
    var str = document.calc.txt.value;


    

        document.calc.txt.value += `.`;
   


})



equal.addEventListener("click", function () {

    if (document.calc.txt.value != "" && document.calc.txt.value != " ") {
        document.calc.txt.value = eval(document.calc.txt.value);

    }

})

