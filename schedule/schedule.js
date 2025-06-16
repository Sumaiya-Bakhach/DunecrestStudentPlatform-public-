

window.onload = function () {
  const studentNameLink = document.querySelector("#student-name a");

  // Set student name dynamically
  const fullName = "Sumaiya Bakhach"; // Replace with dynamic logic
  const email = "sbakhach@dunecrest.ae";
  const studentId = "20250809";
  const gradeLevel = "X"; //should this be a digit or a string?

  studentNameLink.textContent = fullName;

  // Populate table fields
  document.getElementById("full-name").textContent = fullName;
  document.getElementById("email").textContent = email;
  document.getElementById("student-id").textContent = studentId;
  document.getElementById("grade-level").textContent = gradeLevel;
};