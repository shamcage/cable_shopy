
const mainContent = document.getElementById("main");

function changeBackgroundColor() {
  mainContent.style.backgroundColor = "lightblue";
}
const headingElement = document.getElementById("myHeading");

headingElement.style.color = "red"; 

const changeColorButton = document.getElementById("changeColorButton");
changeColorButton.addEventListener("click", changeBackgroundColor);

export async function fetchData() {
  const response = await fetch('https://api.example.com/data'); // Replace with your API endpoint
  const data = await response.json();
  // Process the fetched data and update the content
  const dataContainer = document.getElementById("data-container");
  dataContainer.innerHTML = `
    <h2>Fetched Data</h2>
    <p>${data.message}</p>
  `;
}
