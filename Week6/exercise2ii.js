var element  = document.getElementById('myChart');
var myBarChart = new Chart(element, {
    type: 'bar',
    data: {
        labels: ['Nigeria', 'USA', 'UK', 'Canaada'],
        datasets: [{
            label: 'Population of Countries',
            data:  [2000000,1500000,3000000,1000000],
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});