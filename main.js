let house = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint
}

const sortingCard = () =>{
    domString = `<div class="d-flex justify-content-center">
    <form class="text-light bg-secondary w-50 p-3">
    <h2>Enter First Year's Name</h2>
    <div class="form-group d-flex flex-row mx-sm-3 mb-2">
        <label for="studentInput m-top w-33">Student</label>
        <input type="text" class="form-control w-20 p-3 m-3" id="studentInput" placeholder="Enter Name">
    <button type="submit" id="sortButton" class="btn btn-primary w-30">Sort</button>
    </>
    </form>
    </div>`;

    printToDom('lssBtn', domString);
}

document.getElementById('lssBtn').addEventListener('click', function () {
    console.log('lssBtn');
  });
