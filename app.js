const closeAlertButton = document.querySelector('.close-button');

closeAlertButton.addEventListener('click', () => {
  const alert = document.querySelector('.alert');
  alert.style.display = 'none';
});