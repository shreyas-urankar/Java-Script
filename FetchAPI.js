// The fate's api provides an interface for fetching sending or receiving resources. It uses request and response objects. The fetch() method is used to fetch a resource data.

// Syntax: let promise=fetch(url,[options])

const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

// const getFacts = async () => {
//   console.log("Getting data....");
//   let response = await fetch(URL);
//   if (response.ok) {
//     // Check if the response is successful (status code 200-299)
//     let data = await response.json();
//     factPara.innerText = data[4].text; // Display the first fact
//   } else {
//     console.error(`Error: ${response.status}`);
//   }
// };

function getFacts() {
  fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      factPara.innerText = data[4].text; 
    });
}

btn.addEventListener("click", getFacts);
