

const chat = document.getElementById('barChart')
const barChart = new Chart(chat, {
    
    type: 'bar',
    data: {
      labels: ['0-10 Years', '20-30 Years', '40-50 Years', '60-70 Years', '80-90 Years', '100+'],
      datasets: [{
      backgroundColor: ["red", "green","blue","orange","brown", "yellow"],
        label: '# Population by Age Groups',
        data: [102, 223, 376, 333, 211, 102],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });


const chat1 = document.getElementById('doughnut')
const doughnut = new Chart(chat1, {
    
    type: 'doughnut',
    data: {
      labels: ['Finance', 'Facility Management', 'Energy', 'Education', 'Health', 'Oil and Gas'],
      datasets: [{
      backgroundColor: ["red", "green","blue","orange","brown", "grey", "yellow" ],
        label: '#number of companies per industries',
        data: [20, 19, 10, 18, 14, 13, 22],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });



