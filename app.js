const closeAlertButton = document.querySelector('.js-close-button');
const notificationsLight = document.querySelector('.js-notifications-light');
const bellIcon = document.querySelector('.js-bell');
const trafficNavigation = document.querySelector('.js-traffic-nav');
const trafficCanvas = document.querySelector('#js-traffic-chart');
const dailyTrafficCanvas = document.querySelector('#js-daily-traffic-chart');

trafficNavigation.addEventListener('click', (e) => {
  const trafficNavOptions = document.querySelectorAll('.js-traffic-nav li');
  const navOption = e.target;

  for (const item of trafficNavOptions) {
    item.classList.remove('traffic-nav-selected');
  }

  navOption.classList.add('traffic-nav-selected');
});

const trafficLabels = ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31',];

const trafficData = {
  labels: trafficLabels,
  datasets: [{
    data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
  }]
};

const trafficConfig = {
  type: 'line',
  data: trafficData,
  options: {
    fill: true,
    aspectRatio: 2.5,
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      legend: {
        display: false
      },
    },
    tension: .5
  }
};

const trafficChart = new Chart(trafficCanvas, trafficConfig);
const dailyTrafficLabels = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

const dailyTrafficData = {
  labels: dailyTrafficLabels,
  datasets: [{
    label: '# of Hits',
    data: [75, 115, 175, 125, 225, 200, 100],
    backgroundColor: '#7477bf',
    borderWidth: 1
  }]
};

const dailyTrafficConfig = {
  type: 'bar',
  data: dailyTrafficData,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      legend: {
        display: false
      },
    },
  }
};

new Chart(dailyTrafficCanvas, dailyTrafficConfig);

closeAlertButton.addEventListener('click', () => {
  const alert = document.querySelector('.js-alerts-bar');
  alert.style.display = 'none';
});

bellIcon.addEventListener('mouseover', () => {
  notificationsLight.style.transform = 'scale(1.3)';
});

bellIcon.addEventListener('mouseout', () => {
  notificationsLight.style.transform = 'unset';
});
