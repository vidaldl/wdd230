
fetch('scripts/board.json')
.then(function (response) {
  return response.json();
})
.then(function (jsonObject) {
  console.table(jsonObject);  // temporary checking for valid response and data parsing
  const company = jsonObject;
  company.forEach(displayCompanies);
});

function displayCompanies(member) {  
  // populate grid
  let gridDiv = document.createElement('div');
  gridDiv.classList.add("directory-grid-item")

  let gridImg = document.createElement('img');
  gridImg.setAttribute('src', member.picture);
  gridDiv.appendChild(gridImg);

  let gridP = document.createElement('p');
  gridP.innerHTML = "<strong>" + member.first_name + " " + member.last_name + "</strong>" + " <br> " + member.phone;
  gridDiv.appendChild(gridP);

  let gridA = document.createElement('a');
  gridA.setAttribute('href', "mailto:" + member.email);
  gridA.innerText = member.email;
  gridDiv.appendChild(gridA);

  document.querySelector("#directory-grid").appendChild(gridDiv);


  // Populate #med-list

  let medListTr = document.createElement('tr');

  let medListTd1 = document.createElement('td');
  medListTd1.textContent = member.first_name + " " + member.last_name;
  medListTr.appendChild(medListTd1);

  let medListTd3 = document.createElement('td');
  medListTd3.textContent = member.phone;
  medListTr.appendChild(medListTd3);

  let medListTd4 = document.createElement('td');
  medListTd4.innerHTML = `<a href="mailto:${member.email}">${member.email}</a>`;
  medListTr.appendChild(medListTd4);

  document.querySelector('#med-list-body').appendChild(medListTr);

  // Populate #sm-list
  let smListTr = document.createElement('tr');
  smListTr.innerHTML = `<td>
              ${member.first_name + member.last_name}
              ${member.phone}
              <a href="mailto:${member.email}">${member.email}</a>
          </td>`;

    
  document.querySelector('#sm-list-body').appendChild(smListTr);
}