// Simulated data; replace this with actual Google Classroom API call
const courses = [
  { name: "Math 101", teacher: "Mr. Smith", link: "https://classroom.google.com/c/NzY2OTUyNzA4ODAz?cjc=77sppodr" },
  { name: "English", teacher: "Ms. Green", link: "https://classroom.google.com/c/NzY2OTkyMTQ2ODAw?cjc=hherjuw7" }
];

window.onload = function () {
  const container = document.querySelector(".courses-container");
  

  // Set student name dynamically
   const studentNameLink = document.querySelector("#student-name a");

  // Set student name dynamically
  const studentName = "Sumaiya Bakhach"; // Replace with dynamic logic
  studentNameLink.textContent = studentName;

  // Render each course
  courses.forEach(course => {
    const courseEl = document.createElement("div");
    courseEl.className = "course-box";
    courseEl.innerHTML = `
      <div class="course-name">${course.name}</div>
      <div class="teacher-name">${course.teacher}</div>
    `;
    courseEl.onclick = () => {
      window.open(course.link, "_blank");
    };
    container.appendChild(courseEl);
  });
};


