let date = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"});

document.getElementById("current-date").innerText = date;

//in case form exists
if(document.getElementById("get-today") != null) {
  document.getElementById("get-today").value = date;
}

function getToday() {

  
}

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


// getLastVisited();



// document.getElementById("dir-list").addEventListener("click", showGrid)

function showGrid() {
  document.getElementById("dir-list").style.backgroundColor = "#fff";
  document.getElementById("directory-list").style.display ="none";

  document.getElementById("dir-grid").style.backgroundColor = "#CCCCCC";
  document.getElementById("directory-grid").style.display = "grid";
}

function showList() {
  document.getElementById("dir-grid").style.backgroundColor = "#fff";
  document.getElementById("directory-grid").style.display = "none";


  document.getElementById("dir-list").style.backgroundColor = "#CCCCCC";
  document.getElementById("directory-list").style.display = "block";



}
