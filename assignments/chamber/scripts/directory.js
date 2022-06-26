fetch('scripts/data.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const company = jsonObject;
    company.forEach(displayCompanies);
  });

  function displayCompanies(company) {  
    // populate grid
    let gridDiv = document.createElement('div');
    gridDiv.classList.add("directory-grid-item")

    let gridImg = document.createElement('img');
    gridImg.setAttribute('src', company.image);
    gridDiv.appendChild(gridImg);

    let gridP = document.createElement('p');
    gridP.innerHTML = "<strong>" + company.business_name + "</strong>" + " <br> " + company.address + " <br> " + company.phone;
    gridDiv.appendChild(gridP);

    let gridA = document.createElement('a');
    gridA.setAttribute('href', "#");
    gridA.innerText = company.site;
    gridDiv.appendChild(gridA);

    document.querySelector("#directory-grid").appendChild(gridDiv);


    // Populate #med-list

    let medListTr = document.createElement('tr');

    let medListTd1 = document.createElement('td');
    medListTd1.textContent = company.business_name;
    medListTr.appendChild(medListTd1);

    let medListTd2 = document.createElement('td');
    medListTd2.textContent = company.address;
    medListTr.appendChild(medListTd2);

    let medListTd3 = document.createElement('td');
    medListTd3.textContent = company.phone;
    medListTr.appendChild(medListTd3);

    let medListTd4 = document.createElement('td');
    medListTd4.innerHTML = `<a href="#">${company.site}</a>`;
    medListTr.appendChild(medListTd4);

    document.querySelector('#med-list-body').appendChild(medListTr);

    // Populate #sm-list
    let smListTr = document.createElement('tr');
    smListTr.innerHTML = `<td>
                ${company.business_name}
                ${company.address}
                ${company.phone}
                <a href="#">${company.site}</a>
            </td>`;
    
    
    document.querySelector('#sm-list-body').appendChild(smListTr);
  }