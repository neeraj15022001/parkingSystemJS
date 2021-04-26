const addCarButton = document.getElementById("add-car-button");
const carEntry = document.getElementById("car-entries");
const details = document.getElementById("details-form");
const searchField = document.getElementById("search-field");
addCarButton.addEventListener("click", (e) => {
  e.preventDefault();
  const owner = document.getElementById("owner-field").value;
  const car = document.getElementById("car-field").value;
  const license = document.getElementById("license-field").value;
  const entryDate = document.getElementById("entry-date-field").value;
  const endDate = document.getElementById("end-date-field").value;
  insertEntry({
    owner: owner,
    car: car,
    license: license,
    entryDate: entryDate,
    endDate: endDate,
  });
  details.reset();
});

function insertEntry({ owner, car, license, entryDate, endDate }) {
  const elementToBeAppended = `
    <tr>
        <td class="owner-name">${owner}</td>
        <td>${car}</td>
        <td>${license}</td>
        <td>${entryDate}</td>
        <td>${endDate}</td>
        <td><button class="btn btn-danger" onclick="removeCell(event)">Remove</button></td>
    </tr>
    `;
  carEntry.innerHTML += elementToBeAppended;
}

function removeCell(e) {
  e.target.parentElement.parentElement.remove();
}

searchField.addEventListener("keyup", (e) => {
  searchElement({ input: e.target.value });
});

function searchElement({ input }) {
  let txtValue;
  const query = input.toUpperCase();
  owners = document.querySelectorAll(".owner-name");
  for (i = 0; i < owners.length; i++) {
    txtValue = owners[i].textContent || owners[i].innerText;
    if (txtValue.toUpperCase().indexOf(query) > -1) {
      owners[i].parentElement.style.display = "";
    } else {
      owners[i].parentElement.style.display = "none";
    }
  }
}
