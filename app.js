const closeButton = document.querySelector('.js-btn-close');
const trafficNavigation = document.querySelector('.js-traffic-nav');
const trafficCanvas = document.querySelector('#js-traffic-chart');
const trafficNavigationLinkHourly = document.querySelector('.js-traffic-nav-link-hourly');
const trafficNavigationLinkDaily = document.querySelector('.js-traffic-nav-link-daily');
const trafficNavigationLinkWeekly = document.querySelector('.js-traffic-nav-link-weekly');
const trafficNavigationLinkMonthly = document.querySelector('.js-traffic-nav-link-monthly');
const dailyTrafficCanvas = document.querySelector('#js-daily-traffic-chart');
const mobileUsersCanvas = document.querySelector('.js-mobile-users');
let headerDropdownMenu = document.querySelector('.js-header-dropdown-menu');
const bellWrapper = document.querySelector('.js-bell-wrapper');
const bodyOfDocument = document.querySelector('body');
let dropdownMenuIsVisible = false;
const notifications = [
  `<li>
     <div class="notification-light"></div>
     <p class="js-notification-text">You have 6 unread messages</p>
     <button type="button" class="btn-close js-btn-close">x</button>
   </li>`,
  `<li>
     <div class="notification-light"></div>
     <p class="js-notification-text">You have 3 new followers</p>
     <button type="button" class="btn-close js-btn-close">x</button>
   </li>`,
  `<li>
     <div class="notification-light"></div>
     <p class="js-notification-text">Your password expires in 7 days</p>
     <button type="button" class="btn-close js-btn-close">x</button>
   </li>`
];

const trafficHourlyLabels = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',];

const trafficHourlyData = {
  labels: trafficHourlyLabels,
  datasets: [{
    data: [25, 30, 15, 35, 20, 45, 20, 15, 35, 15, 20],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
  }]
};

const trafficHourlyConfig = {
  type: 'line',
  data: trafficHourlyData,
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

const trafficDailyLabels = ['Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const trafficDailyData = {
  labels: trafficDailyLabels,
  datasets: [{
    data: [125, 350, 300, 150, 250, 450, 300, 250, 400, 350, 200],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
  }]
};

const trafficDailyConfig = {
  type: 'line',
  data: trafficDailyData,
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

const trafficWeeklyLabels = ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31',];

const trafficWeeklyData = {
  labels: trafficWeeklyLabels,
  datasets: [{
    data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
  }]
};

const trafficWeeklyConfig = {
  type: 'line',
  data: trafficWeeklyData,
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

const trafficMonthlyLabels = ['Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const trafficMonthlyData = {
  labels: trafficMonthlyLabels,
  datasets: [{
    data: [3000, 5000, 4000, 6000, 5000, 7000, 6000, 8000, 7000, 9000, 10000],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
  }]
};

const trafficMonthlyConfig = {
  type: 'line',
  data: trafficMonthlyData,
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

new Chart(dailyTrafficCanvas, dailyTrafficConfig);
new Chart(mobileUsersCanvas, mobileUsersConfig);

let currentChart = new Chart(trafficCanvas, trafficWeeklyConfig);

trafficNavigationLinkHourly.addEventListener('click', () => {
  currentChart.destroy();
  currentChart = new Chart(trafficCanvas, trafficHourlyConfig);
});

trafficNavigationLinkDaily.addEventListener('click', () => {
  currentChart.destroy();
  currentChart = new Chart(trafficCanvas, trafficDailyConfig);
});

trafficNavigationLinkWeekly.addEventListener('click', () => {
  currentChart.destroy();
  currentChart = new Chart(trafficCanvas, trafficWeeklyConfig);
});

trafficNavigationLinkMonthly.addEventListener('click', () => {
  currentChart.destroy();
  currentChart = new Chart(trafficCanvas, trafficMonthlyConfig);
});

closeButton.addEventListener('click', (e) => {
  const parentElementOfTarget = e.target.parentElement;
  parentElementOfTarget.parentElement.removeChild(parentElementOfTarget);
});

function calculateDropdownMenuHeight(arr, ul) {
  const dropdownMenuLIHeight = 4.1;
  let dropdownMenuHeight = dropdownMenuLIHeight * arr.length;
  ul.style.height = `${dropdownMenuHeight}rem`;
}

function createDropdownMenuContent() {
  const alerts = notifications.join('');
  headerDropdownMenu.insertAdjacentHTML('afterbegin', alerts);
}

function addEventListenersToNotificationCloseButtons() {
  let notificationCloseButtons = document.querySelectorAll('.js-header-dropdown-menu .js-btn-close');

  for (const notificationCloseButton of notificationCloseButtons) {
    notificationCloseButton.addEventListener('click', (e) => {
      const message = e.target.parentElement.firstElementChild.nextElementSibling.textContent;
      const parentElementOfTarget = e.target.parentElement;
      const notificationsLight = document.querySelector('.js-notifications-light');

      for (const notification of notifications) {
        if (notification.includes(message)) {
          let index = notifications.indexOf(notification);
          notifications.splice(index, 1);
        }
      }

      parentElementOfTarget.parentElement.removeChild(parentElementOfTarget);
      calculateDropdownMenuHeight(notifications, headerDropdownMenu);

      if (!headerDropdownMenu.hasChildNodes()) {
        notificationsLight.style.display = 'none';
      }
    });
  }
}

createDropdownMenuContent();
addEventListenersToNotificationCloseButtons();

bellWrapper.addEventListener('click', () => {
  calculateDropdownMenuHeight(notifications, headerDropdownMenu);
  headerDropdownMenu.style.visibility = 'visible';
});

trafficNavigation.addEventListener('click', (e) => {
  const trafficNavOptions = document.querySelectorAll('.js-traffic-nav li');
  const navOption = e.target;

  for (const item of trafficNavOptions) {
    item.classList.remove('traffic-nav-selected');
  }
  navOption.classList.add('traffic-nav-selected');
});

bodyOfDocument.addEventListener('click', (e) => {
  const bell = document.querySelector('.js-bell');
  const bellWrapper = document.querySelector('.js-bell-wrapper');
  const notificationsLight = document.querySelector('.js-notifications-light');

  if (e.target != headerDropdownMenu &&
    e.target != bellWrapper &&
    e.target != notificationsLight &&
    e.target != bell &&
    (!e.target.classList.contains('js-btn-close')) &&
    (!e.target.classList.contains('js-notification-text'))) {
    headerDropdownMenu.style.height = '0';
    headerDropdownMenu.style.visibility = 'hidden';
  }
});