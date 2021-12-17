const closeAlertButton = document.querySelector('.close-button');
const notificationsLight = document.querySelector('.js-notifications-light');
const bellIcon = document.querySelector('.js-bell');

closeAlertButton.addEventListener('click', () => {
  const alert = document.querySelector('.alert');
  alert.style.display = 'none';
});

bellIcon.addEventListener('mouseover', () => {
  notificationsLight.style.transform = 'scale(1.3)';
});

bellIcon.addEventListener('mouseout', () => {
  notificationsLight.style.transform = 'unset';
});
