let userFrom = document.getElementById("user-from");
let userEntries = [];

// Function to retrieve user entries from local storage
const retrieveUserEntries = () => {
  const storedEntries = localStorage.getItem("user-entries");

  if (storedEntries) {
    userEntries = JSON.parse(storedEntries);
  }
};

// Function to display retrieved entries (for demonstration purposes)
const displayUserEntries = () => {
  console.log("User Entries:", userEntries);
};

// Call the retrieve function when the script loads
retrieveUserEntries();

// Add event listener to the form
userFrom.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const dob = document.getElementById("dob").value;
  const acceptedTermsAndCondition = document.getElementById(
    "terms and conditions"
  ).checked;

  const entry = {
    name,
    email,
    password,
    dob,
    acceptedTermsAndCondition,
  };

  userEntries.push(entry);

  // Update local storage with the new entries
  localStorage.setItem("user-entries", JSON.stringify(userEntries));

  // For demonstration purposes, display the retrieved entries
  displayUserEntries();
});
