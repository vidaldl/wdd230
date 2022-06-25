let date = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"});

document.getElementById("current-date").innerText = date;
function openNav() {
    document.getElementById("nav").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("nav").style.width = "0";
  }


document.getElementById('last-modified').textContent = document.lastModified;


if(date.includes("Monday") || date.includes("Tuesday")) {
  document.getElementById("banner").style.display = 'flex';
}


function getLastVisited() {
  const today = new Date();

  const todayDisplay = document.getElementById("last-visit");
 
// get the stored value in localStorage
let lastDate;

if(window.localStorage.getItem("visits-last") === null) {
  lastDate = new Date();
} else {
  lastDate = new Date(window.localStorage.getItem("visits-last"));
}

let dayDiff = Math.abs(today - lastDate);
let diffDays = Math.ceil(dayDiff/(1000 * 60 * 60 * 24));
console.log(diffDays)
todayDisplay.innerText = diffDays + " days ago";


// store the new number of visits value
localStorage.setItem("visits-last", today);
}


getLastVisited();



