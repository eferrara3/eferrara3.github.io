Chart.defaults.global.defaultFontFamily = 'Barlow Condensed';
Chart.defaults.global.defaultFontColor = '#1C1C1C';

const data2018 = [
  1033,
  1044,
  307,
  329,
  1041,
  953,
  249,
  650,
  876,
  1086,
  1642,
  1039
];

const data2019 = [
    440,
    463,
    530,
    963
];

function cumulativeData(rawList) {
  cumData = [rawList[0]]
  for(let i=1; i < rawList.length; i++){
    cumval = cumData[i-1] + rawList[i]
    cumData = cumData.concat(cumval)
  }
  return cumData
}

const cumulativeData2018 = cumulativeData(data2018)
const cumulativeData2019 = cumulativeData(data2019)

const bookPagesData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [{
    label: '2018',
    backgroundColor: 'rgb(226, 65, 4, 0.5)',
    borderColor: 'rgb(226, 65, 4, 0.5)',
    yAxisID: 'y-axis-1',
    // fill: false,
    // lineTension: 0,
    data: data2018
    } , {
    label: '2018 cumulative',
    type: 'line',
    backgroundColor: '#E24104',
    borderColor: '#E24104',
    fill: false,
    // lineTension: .1,
    yAxisID: 'y-axis-2',
    data: cumulativeData2018
  } , {
    label: '2019',
    backgroundColor: 'rgb(75, 102, 128, 0.5)',
    borderColor: 'rgb(75, 102, 128, 0.5)',
    yAxisID: 'y-axis-1',
    // fill: false,
    // lineTension: 0,
    data: data2019
  } ,  {
    label: '2019 cumulative',
    type: 'line',
    backgroundColor: '#4B6680',
    borderColor: '#4B6680',
    fill: false,
    // lineTension: .1,
    yAxisID: 'y-axis-2',
    data: cumulativeData2019
  }]
};

const ctx = document.getElementById('bookPagesChart').getContext('2d');
const chart = new Chart(ctx, {
  type: 'bar',
  data: bookPagesData,
  options: {
    responsive: true,
    legend: {
      position: 'top',
    },
    tooltips: {
      mode: 'index',
      intersect: false,
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    hover: {
      mode: 'nearest',
      intersect: false
    },
    scales: {
      yAxes: [{
        type: 'linear',
        display: true,
        position: 'left',
        id: 'y-axis-1',
        gridLines: {
          drawOnChartArea: false
        }
      } , {
        type: 'linear',
        display: true,
        position: 'right',
        id: 'y-axis-2',
        gridLines: {
          drawOnChartArea: false
        }
      }]
    }
  }
});
