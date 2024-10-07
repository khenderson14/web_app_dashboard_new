// ALERT NOTIFICATION //

const alertElement = document.getElementById('alert');
const closeAlertButton = document.querySelector('.close-alert');

function closeAlert() {
    alertElement.style.display = 'none'; 
}

closeAlertButton.addEventListener('click', closeAlert);

// TRAFFIC CHART //

const trafficCanvas = document.getElementById('traffic-chart');
const data = {
     labels: ['16-22', '23-29','30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
     datasets: [{
            data: [700, 1200, 1000, 2000, 1500, 1700, 1200, 1800, 2200, 1500, 2500],
            backgroundColor: ['rgb(221, 222, 237)'],
            borderWidth: 1,
            tension: 0.5,
    }]
};

const trafficOptions = {
    fill: true,
    scales: {
        y: {
            beginAtZero: true
        }
    },

    plugins: {
        legend: {
            display: false
        }
    }

};

const trafficChart = new Chart (trafficCanvas, {
    type: 'line',
    data: data,
    options: trafficOptions

});

// DAILY TRAFFIC //

const dailyCanvas = document.getElementById('daily-chart');

const dailyData = {
    labels: ['S', 'M', 'T', 'W', 'TH', 'F', 'S'],
    datasets: [{
        label: '# of Hits',
        data: [75, 110, 175, 125, 225, 200, 100],
        backgroundColor: '#7477BF',
        borderWidth: 1
    }]
};

const dailyOptions = {
    responsive: true, 
    maintainAspectRatio: false, 
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};

const dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

// MOBILE TRAFFIC //

const mobileCanvas = document.getElementById('mobile-chart');

const mobileData = {
    labels: ['Desktop', 'Tablet', 'Phones'],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#51B6C8'
        ]
    }],
}

const mobileOptions = {
    aspectRatio: 1.9,
    plugins: {
        legend: {
            position: 'right',
            labels: {
                boxWidth: 20,
                fontStyle: 'bold'
            }
        }
    }
};

const mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});

// RESIZING CHARTS FOR MEDIA QUERIES //

function beforePrintHandler () {
    for (let id in Chart.instances) {
        Chart.instances[id].resize();
    }
}

window.addEventListener('beforeprint', () => {
    myChart.resize(600, 600);
  });
  window.addEventListener('afterprint', () => {
    myChart.resize();
  });

// SEND BUTTON // 

document.getElementById('message-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const formData = new FormData(this);

    this.reset();

});

// ERROR MESSAGE //

const user = document.getElementById('user');
const message = document.getElementById('message-for-user');
const send = document.getElementById('send');

send.addEventListener('click', () => {
    if (user.value === '' && message.value === '') {
        alert('Please fill out user and message fields');
    } else if (user.value === '') {
        alert('Please fill out user field');
    } else if (message.value === '') {
        alert('Please fill out message field');
    } else {
        alert(`Message successfully sent!`);
    }
});