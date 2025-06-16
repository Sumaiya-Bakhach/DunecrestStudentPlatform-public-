window.onload = function () {
  const studentNameLink = document.querySelector("#student-name a");
  const studentName = "Sumaiya Bakhach";
  studentNameLink.textContent = studentName; // Replace with dynamic logic

  // Adjust calendar height dynamically
  const headerHeight = document.querySelector('.page-header')?.offsetHeight || 0;
  const iframe = document.getElementById('calendar-frame');
  const resizeCalendar = () => {
    const availableHeight = window.innerHeight - headerHeight - 40; // 40 for padding
    iframe.style.height = `${availableHeight}px`;
  };

  resizeCalendar();
  window.addEventListener('resize', resizeCalendar);
};