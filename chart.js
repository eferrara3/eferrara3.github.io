Chart.defaults.global.defaultFontFamily = 'Barlow Condensed'
Chart.defaults.global.defaultFontColor = '#1C1C1C'

const bookPagesData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [{
    label: '2018',
    backgroundColor: '#E24104',
    borderColor: '#E24104',
    fill: false,
    lineTension: 0,
    data: [
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
    ]
  } , {
    label: '2019',
    backgroundColor: '#4B6680',
    borderColor: '#4B6680',
    fill: false,
    lineTension: 0,
    data: [
      440,
      463,
      530,
      963
    ]
  }]
};

const ctx = document.getElementById('bookPagesChart').getContext('2d');
const chart = new Chart(ctx, {
  type: 'line',
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
    }
  }
});
