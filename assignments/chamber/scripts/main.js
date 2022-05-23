let date = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"});

document.getElementById("current-date").innerText = date;
function openNav() {
    document.getElementById("nav").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("nav").style.width = "0";
  }


document.getElementById('last-modified').textContent = document.lastModified;



