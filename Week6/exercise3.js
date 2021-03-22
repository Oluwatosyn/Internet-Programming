var DEFAULT_DATASET_SIZE = 7;

		var addedCount = 0;
		var color = Chart.helpers.color;
		var chartData = {
			labels: ['Nigeria', 'USA', 'UK', 'Canaada'],
			datasets: [{
				label: 'Population of Countries',
				borderWidth: 1,
				data: [2000000,1500000,3000000,1000000],
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
				]
			}]
		};

		window.onload = function() {
			var ctx = document.getElementById('canvas').getContext('2d');
			window.myChart = new Chart(ctx, {
				type: 'bar',
				data: chartData,
				options: {
					responsive: true,
					scales: {
						yAxes: [{
							ticks: {
								beginAtZero: true
							}
						}]
					}
				}
			});
		};

		document.getElementById('reDrawChart').addEventListener('click', function() {
			console.log("ReDrawOnClick");

			var newDataset = {
				label: 'Updated Values Countries',
				borderWidth: 1,
				data: [2000000,1500000,2000000,1500000],
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
				]
			};
            chartData.datasets[0] = newDataset;
			window.myChart.update();
		});

