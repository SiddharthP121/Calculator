// // Select the element
// const search = document.querySelector('.search');
// const card= document.querySelector(".card")


// search.addEventListener("input", e=> {
//     const value=e.target.value
//     console.log(value)

    
// })


// Add an event listener for the "Enter" key press
let foundMatch = false;

document.getElementById("search").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        searchElements(); // Call the search function when "Enter" is pressed
    }
});

function searchElements() {
    // Get the text entered in the search bar
    const query = document.getElementById("search").value.trim().toLowerCase();

    // Get all elements with the "card" class
    const cards = document.querySelectorAll(".card");

    // Clear previous results
  
    const resultContainer = document.getElementById("resultContainer");
    resultContainer.innerHTML = ""; // Clear the container

    // Initialize a flag to track if any cards match
   

    // Loop through each card and check if it contains the class matching the query
    cards.forEach(card => {
        // let foundMatch = false;
        // Check if the card contains the class that matches the query
        if (card.classList.contains(query)) {
            // Append the matching card to the result container
            resultContainer.appendChild(card.cloneNode(true)); // Clone the card to append it
            // cardContainer.style.display=none 
            foundMatch = true; // Set the flag to true if a match is found
        }
       
    });
    // if (foundMatch==false) {
    //     resultContainer.innerHTML="No Brand found Try our recommended below"
    //         resultContainer.classList.add("noMatch")
    // }

    // // Optional: Display a message if no cards match the query
    // if (!foundMatch) {
    //     resultContainer.innerHTML("No card found with the specified brand name.");
    // }
}


