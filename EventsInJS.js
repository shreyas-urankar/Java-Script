document.addEventListener("DOMContentLoaded", () => {
    let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", (evt) => {
  document.getElementById("demo").innerHTML = "<br>" + evt.type;
  document.getElementById("demo").innerHTML += "<br>" + evt.target;
  document.getElementById("demo").innerHTML +=
    "<br> btn1 was clicked! - handler 1";
});

btn1.addEventListener("click", () => {
  document.getElementById("demo").innerHTML +=
    "<br> btn1 was clicked! - handler 2.";
});

const handler3 = () => {
  document.getElementById("demo").innerHTML +=
    "<br> btn1 was clicked! - handler 3.";
};
btn1.addEventListener("click", handler3);

btn1.addEventListener("click", () => {
  document.getElementById("demo").innerHTML +=
    "<br> btn1 was clicked! - handler 4.";
});

btn1.removeEventListener("click", handler3);

let box = document.querySelector("div");
box.onmouseover = () => { // Use box.onmouseover instead of dispatchEvent
  document.getElementById("demo").innerHTML += "You are inside div.";
};

let modeBtn = document.querySelector("#mode");
let currMode = "light"; // Initial mode
let cody = document.querySelector("body"); // Keep the variable name consistent

modeBtn.addEventListener("click", () => {
  document.getElementById("demo").innerHTML = "You are trying to change mode.";

  if (currMode === "light") {
    currMode = "dark";
    cody.classList.add("dark"); // Use cody instead of body
    cody.classList.remove("light");
  } else {
    currMode = "light";
    cody.classList.add("light"); // Use cody instead of body
    cody.classList.remove("dark");
  }

  document.getElementById("demo").innerHTML += " Current mode: " + currMode; // Append current mode
});

});