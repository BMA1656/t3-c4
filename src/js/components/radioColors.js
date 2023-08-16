const decorationToggle = document.getElementById('decorationToggle');
const toggleTextDecoration = document.getElementById('toggleTextDecoration');
const colorToggle = document.getElementById('colorToggle');
const colorOptions = document.getElementById('colorOptions');
const toggleTextColor = document.getElementById('toggleTextColor');

decorationToggle.addEventListener('change', function() {
  if (decorationToggle.checked) {
    toggleTextDecoration.textContent = 'Yes';
  } else {
    toggleTextDecoration.textContent = 'No';
  }
})

colorToggle.addEventListener('change', function() {
  if (colorToggle.checked) {
    colorOptions.style.display = 'block';
    toggleTextColor.textContent = 'Yes';
  } else {
    colorOptions.style.display = 'none';
    toggleTextColor.textContent = 'No';
  }
});






