let house = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint
}

const sortingCard = () =>{
    newString = `<div class="d-flex justify-content-center">
    <form class="text-light bg-secondary w-50 p-3">
    <h2>Enter First Year's Name</h2>
    <div class="form-group d-flex flex-row mx-sm-3 mb-2">
        <label for="studentInput m-top w-33">Student</label>
        <input type="text" class="form-control w-20 p-3 m-3" id="studentInput" placeholder="Enter Name">
    <button type="submit" id="sortButton" class="btn btn-primary w-30">Sort</button>
    </>
    </form>
    </div>`;

    printToDom('sortDiv', newString);
}

const buildStudentCard = (sort) => {
    let newHouse = Math.floor((Math.random() * house.length));
    let domString = `<div class="card w-25 m-2">
        <div class ="card-body">
        <h5 class="card-title">${sort}</h5>
        <p> Your new house is... ${house[newHouse]}</p>
        <button href="#" class="btn btn-danger deleteButton">Expel!</button>
      </div>
      </div>`;

    printToDom('studentCard', domString);
}


document.getElementById('lssBtn').addEventListener('click', function (e) {
    sortingCard();
  });

  document.getElementById('sortDiv').addEventListener('click', function (e) {
    if (e.target.id === 'sortButton') {
        let nameInput = document.getElementById('studentInput');
        buildStudentCard(studentInput.value)
        sortDiv.style.display = 'none';
        // console.log(nameInput);
    }
});
