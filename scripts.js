// When the page loads
console.log("Web app loaded successfully!");

// Get button and output elements
const button = document.getElementById("greetBtn");
const output = document.getElementById("output");

// Add click event listener
button.addEventListener("click", () => {
  const now = new Date();
  output.textContent = `Hello! The current time is ${now.toLocaleTimeString()}.`;
});
