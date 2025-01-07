// Google Sign-In Success Callback Function
function onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId());
    console.log("Name: " + profile.getName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());
    // Redirect to dashboard on sign-in success
    window.location.href = "dashboard.html";
}

// Navigation and button interactions
document.getElementById("logo").addEventListener("click", () => {
    window.location.href = "index.html";
});

document.getElementById("features-link").addEventListener("click", () => {
    window.location.href = "#features";
});

document.getElementById("tools-link").addEventListener("click", () => {
    window.location.href = "#tools-section";
});

document.getElementById("dashboard-link").addEventListener("click", () => {
    window.location.href = "dashboard.html";
});

document.getElementById("contact-link").addEventListener("click", () => {
    window.location.href = "contact.html";
});

document.getElementById("get-started-btn").addEventListener("click", () => {
    window.location.href = "dashboard.html";
});

document.getElementById("explore-features-btn").addEventListener("click", () => {
    window.location.href = "#tools-section";
});

// Ensure Google API is loaded before initializing the client
document.addEventListener('DOMContentLoaded', function() {
  gapi.load('auth2', function() {
    gapi.auth2.init({
      client_id: 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com'
    });
  });
});

const chatDisplay = document.getElementById('chat-display');

function handleChat(event) {
  if (event.key === 'Enter') {
    sendMessage();
  }
}

function sendMessage() {
  const userInput = document.getElementById('user-input');
  const userMessage = userInput.value;
  if (userMessage.trim() === '') return;

  // Display user message
  const userMessageElem = document.createElement('div');
  userMessageElem.className = 'user-message';
  userMessageElem.textContent = userMessage;
  chatDisplay.appendChild(userMessageElem);

  // Simulate bot response
  const botMessageElem = document.createElement('div');
  botMessageElem.className = 'bot-message';
  botMessageElem.textContent = "This is a simulated response.";
  chatDisplay.appendChild(botMessageElem);

  // Clear input
  userInput.value = '';
  chatDisplay.scrollTop = chatDisplay.scrollHeight;
}