let date = new Date();

let year = date.getFullYear();
console.log(date);

document.getElementById('fullYear').textContent = year;

document.getElementById('lastUpdate').textContent = "Last Update: " + document.lastModified;



