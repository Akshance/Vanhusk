// Google Sign-In success function
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
    window.location.href = "features.html";
  });
  
  document.getElementById("tools-link").addEventListener("click", () => {
    window.location.href = "tools.html";
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
    window.location.href = "features.html";
  });
  