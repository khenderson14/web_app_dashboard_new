// ALERT NOTIFICATION //

const alertElement = document.getElementById('alert');
const closeAlertButton = document.querySelector('.close-alert');

function closeAlert() {
    alertElement.style.display = 'none'; 
}

closeAlertButton.addEventListener('click', closeAlert);

// TRAFFIC CHART //

const trafficCanvas = document.getElementById('traffic-chart');
let trafficData = {
     labels: ['16-22', '23-29','30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
     datasets: [{
            data: [700, 1200, 1000, 2000, 1500, 1700, 1200, 1800, 2200, 1500, 2500],
            backgroundColor: ['rgb(221, 222, 237)'],
            borderWidth: 1,
    }]
};

let trafficOptions = {
    fill: true,
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

let trafficChart = new Chart (trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions

});






 