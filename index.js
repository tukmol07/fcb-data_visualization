console.log("hello world");

const dateElement = document.getElementById('date');
console.log(dateElement);

let currentDate = new Date();
dateElement.innerHTML = currentDate;

let dateOptions = { year: "numeric", month: "long", day: "numeric" };
dateElement.innerHTML = currentDate.toLocaleDateString('en-US', dateOptions);

const url = "https://fakestoreapi.com/products";
const options = {
    // You can add options for the fetch request here if needed
};

fetch(url, options)
    .then(res => res.json())
    .then(data => {
        console.log(data);

        // Compile all the titles per object and store them in the "titles" array
        let titles = data.map(object => object.title);
        console.log(titles);

        // Collect all the ratings per object and store them in the "ratings" array
        let ratings = data.map(object => object.rating.rate);
        console.log(ratings);

        // Get the chart container element
        const myChart = document.getElementById("myChart");

        // Set up the Chart.js bar chart
        let barChart = new Chart(myChart, {
            type: 'bar',
            data: {
                labels: titles, // Set product titles as the labels for the chart
                datasets: [{
                    label: 'Ratings of Products', // Label for the dataset
                    data: ratings, // Product ratings
                    borderWidth: 2,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 205, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(201, 203, 207, 0.2)'
                    ],
                    borderColor: [
                        'rgb(255, 99, 132)',
                        'rgb(255, 159, 64)',
                        'rgb(255, 205, 86)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)',
                        'rgb(201, 203, 207)'
                    ],
                    hoverBackgroundColor: [
                        'rgba(255, 99, 132, 0.4)',
                        'rgba(255, 159, 64, 0.4)',
                        'rgba(255, 205, 86, 0.4)',
                        'rgba(75, 192, 192, 0.4)',
                        'rgba(54, 162, 235, 0.4)',
                        'rgba(153, 102, 255, 0.4)',
                        'rgba(201, 203, 207, 0.4)'
                    ]
                }]
            },
            options: {
                indexAxis: 'x', // Horizontal bars
                scales: {
                    y: {
                        beginAtZero: true // Make sure the y-axis starts at 0
                    }
                }
            }
        });
    })
    .catch(error => console.error('Error fetching data:', error));
