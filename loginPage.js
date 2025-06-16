document.getElementById('loginForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  // Validate basic format
  if (!email.endsWith("@dunecrest.ae")) {
    alert("Please use your Dunecrest email.");
    return;
  }

  //alert("Login successful! Redirecting...");
  //keep for future testing
  window.location.href = "../homepage/homepage.html";

});


/*
// API call placeholder: authenticate student
  try {
    const response = await fetch("https://your-api-endpoint.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (response.ok) {
      // Login success - retrieve student dashboard info
      // Example: redirect to student dashboard
      // location.href = "/dashboard.html";
      alert("Login successful! Redirecting...");
      window.location.href = "../homepage/homepage.html";
    } else {
      // Handle login failure
      alert(data.message || "Invalid credentials.");
    }
  } catch (error) {
    console.error("API login error:", error);
    alert("Unable to connect to the server.");
  }



 // When you establish the APIs, this is where you'd call them
    document.getElementById('loginForm').addEventListener('submit', function (e) {
      e.preventDefault();
      
      // TODO: Replace this section with an API call when ready

      // Temporary navigation to homepage.html
      window.location.href = "../homepage/homepage.html";
    });

    */