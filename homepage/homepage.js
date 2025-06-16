document.querySelectorAll('.sidebar li').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelector('.sidebar li.active')?.classList.remove('active');
    item.classList.add('active');
  });
});

window.onload = function () {
  const studentNameLink = document.querySelector("#student-name a");
  const studentName = "Sumaiya Bakhach";
  studentNameLink.textContent = studentName; // Replace with dynamic logic

  // Open external and PDF links in a new tab
  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    const isExternal = href.startsWith('http');
    const isPDF = href.endsWith('.pdf');

    if (isExternal || isPDF) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });
};