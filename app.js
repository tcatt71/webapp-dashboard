const closeAlertButton = document.querySelector('.js-btn-close');
const notificationsLight = document.querySelector('.js-notifications-light');
const bellIcon = document.querySelector('.js-bell');
const trafficNavigation = document.querySelector('.js-traffic-nav');
const trafficCanvas = document.querySelector('#js-traffic-chart');
const dailyTrafficCanvas = document.querySelector('#js-daily-traffic-chart');
const mobileUsersCanvas = document.querySelector('.js-mobile-users');
const bellWrapper = document.querySelector('.js-bell-wrapper');

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

const mobileUsersLabels = ['Desktop', 'Tablet', 'Phones'];

const mobileUsersData = {
  labels: mobileUsersLabels,
  datasets: [{
    label: '# of Users',
    data: [2000, 550, 500],
    borderWidth: 0,
    backgroundColor: ['#7477bf', '#81c98f', '#51b6c8']
  }]
};

const mobileUsersConfig = {
  type: 'doughnut',
  data: mobileUsersData,
  options: {
    aspectRatio: 1.9,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          boxWidth: 20,
          font: {
            weight: 'bold'
          }
        }
      }
    }
  }
};

new Chart(trafficCanvas, trafficConfig);
new Chart(dailyTrafficCanvas, dailyTrafficConfig);
new Chart(mobileUsersCanvas, mobileUsersConfig);

closeAlertButton.addEventListener('click', () => {
  const alert = document.querySelector('.js-hide');
  alert.style.display = 'none';
});
function removeParentElement(event) {
  const parentElementOfTarget = event.target.parentElement;
  parentElementOfTarget.parentElement.removeChild(parentElementOfTarget);
}


bellWrapper.addEventListener('click', () => {
  const header = document.querySelector('.js-header');
  const dropDownMenu = `<ul>
                          <li><div></div><p>You have 6 unread messages</p><p>x</p></li>
                          <li><div></div><p>You have 3 new followers</p><p>x</p></li>
                          <li><div></div><p>Your password expires in 7 days</p><p>x</p></li>
                        </ul>`;
  header.insertAdjacentHTML('afterbegin', dropdownMenu);
});