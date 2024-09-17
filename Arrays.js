//*Arrays

//Example 1:-


// let marks = [50, 60, 70, 80, 90];
// let marksOutput = "Marks: " + marks + "<br>Length: " + marks.length;

//...................................................................


// //Example 2:-

// let heros = ["Ram", "Sham", "Gopl", "Ramu"];
// let herosOutput = "Heroes: " + heros.join(", ") + "<br>Length: " + heros.length;

// document.getElementById("demo").innerHTML = marksOutput + "<br><br>" + herosOutput;

// ..............................................................


//Looping over an Array:-
//Print all elements over an array:-


// let output = "";

// for (let idx = 0; idx < heros.length; idx++) {
//     output += heros[idx] + "<br>";
// }

// document.getElementById("demo").innerHTML = output;


//.................................................................................

// For-of
//Example 1

// for(let hero of heros)
// {
//     DocumentFragment.getElementById("demo").innerHTML=hero;
// }

//....................................................................


//Example 2
// let cities = ["Pune", "Solapur", "Kolhapur", "Nagpur", "Nashik", "Mumbai"];
// let out_put = "";

// for (let city of cities) {
//     out_put += city + "<br>";
// }

// document.getElementById("demo").innerHTML = out_put;


//.................................................................

//Example 3

// let sub_marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;

// for (let val of sub_marks) {
//     sum += val;
// }

// let avg = sum / sub_marks.length;
// let out_put1 = "Sum: " + sum + "<br>Average marks of the class is: " + avg;

// document.getElementById("demo").innerHTML = out_put1;

//..............................................................
//Arrays Methods
//1) Push():add to end
//2) Pop():delete from end and return
//3) toString():Convert array ot string 

let veggies = ["potato", "tomato", "brinjal", "carrot", "ladyfingure", "pumkin", "raddish"];
veggies.push("bitter guard", "beans", "chilli");

let vegitable = veggies.join("<br>");
document.getElementById("demo").innerHTML = vegitable;

setTimeout(function() {
    veggies.pop();
    let updatedVeggies = veggies.join("<br>");
    document.getElementById("demo").innerHTML = updatedVeggies;
}, 2000);

document.getElementById("demo").innerHTML=veggies.toString();

let marks = [50, 60, 70, 80, 90];
document.getElementById("demo").innerHTML=marks.toString();