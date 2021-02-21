// dagen sinds vertrek

var ctx = document.getElementById('donut').getContext('2d');
var chart = new Chart(ctx, {
   
    type: 'doughnut',

    data: {
        labels: ['DAGEN SINDS VERTREK', 'DAGEN TOT AANKOMST'],
        datasets: [{
            label: 'dagen sinds vertrek',
            data: [182, 43],
            backgroundColor: [
            'white',
            'grey',
            ],
            borderColor: [
            'white',
            'grey',

            ],
          
        }]
    },

   
    options: {

    }
});



// afstand afgelegd

var ctx = document.getElementById('line').getContext('2d');
var lineChart = new Chart(ctx, {
   
    type: 'line',

    
    data: {
        labels: ['Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September'],
        datasets: [{
            label: 'Afstand per maand in miljoenen',
            borderColor: 'white',
            data: [401, 430, 478, 452, 487, 480, 451]
        }]
    },

    
    options: {}
});




// brandstofverbruik

var ctx = document.getElementById('bar').getContext('2d');
var barchart = new Chart(ctx, {
   
    type: 'bar',

   
    data: {
        labels: ['Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober'],
        datasets: [{
            label: 'Brandstofverbruik in kilos',
            backgroundColor: 'white',
            
            data: [80, 61, 71, 89, 64, 62, 71, 0]
        }]
    },

   
    options: {}
});



// aantal glazen water in de week

var ctx = document.getElementById('barWater').getContext('2d');
var barchart = new Chart(ctx, {
    
    type: 'bar',

    
    data: {
        labels: ['Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag', 'Zondag'],
        datasets: [{
            label: 'Waterinname deze week',
            backgroundColor: 'white',
            
            data: [6, 8, 5, 10, 7, 0, 0]
        }]
    },

   
    options: {}
});



// klok

var vandaagTijd = new Date();

var tijd = vandaagTijd.getHours() + ":" + vandaagTijd.getMinutes();

document.getElementById("tijd").innerHTML = tijd;


// datum

var vandaag = new Date();

var date = vandaag.getDate()+'-'+(vandaag.getMonth()+1)+'-'+vandaag.getFullYear();

document.getElementById("datum").innerHTML = date;


































