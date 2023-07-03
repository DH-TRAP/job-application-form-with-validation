import './App.css';

function App() {
  // Reset Form validation
  function refreshform() {
    document.getElementById('fName').style.borderColor = 'black';
    document.getElementById('lName').style.borderColor = 'black';
    document.getElementById('date').style.borderColor = 'black';
    document.getElementById('age').style.borderColor = 'rgba(209, 209, 209, 0.8)';
    document.getElementById('numericSalary').style.borderColor = 'black';
  }
  // Validate First Name and Last Name
  function nameHandler(nameType) {
    const selectName = document.getElementById(nameType)
    let letters = /^[a-zA-Z ]*$/;
    let name = selectName.value
    if (name === '') { selectName.style.borderColor = 'red'; }
    else if (!name.match(letters)) { selectName.style.borderColor = 'red'; }
    else {
      selectName.style.borderColor = 'green'
      selectName.value = selectName.value.toUpperCase();
    }
  }
  // Calculate Age
  let age = '';
  function dateHandler() {
    const selectDate = document.getElementById('date');
    const selectAge = document.getElementById('age');
    var currentDate = new Date();
    let dob = new Date(selectDate.value);
    let date = selectDate.value;
    age = Math.ceil((currentDate - dob) / (365 * 1000 * 60 * 60 * 24));
    age = age > 0 ? age : ''
    document.getElementById('age').value = age;
    if (date === '') { selectDate.style.borderColor = 'red'; selectAge.style.borderColor = 'red' }
    if (dob > currentDate) { selectDate.style.borderColor = 'red'; selectAge.style.borderColor = 'red' }
    else {
      selectDate.style.borderColor = 'green';
      if (age > 0 && age < 150 || age !== '') { selectAge.style.borderColor = 'green' };
    }
  }

  let salary = 5000;
  function salaryHandler(x) {
    const selectRangeSalary = document.getElementById('rangeSalary');
    const selectNumericSalary = document.getElementById('numericSalary');
    !selectNumericSalary.value ? selectRangeSalary.value = 0 : x ? selectNumericSalary.value = selectRangeSalary.value : selectRangeSalary.value = selectNumericSalary.value;
    salary = selectNumericSalary.value;
    if (salary >= 5000 && salary <= 150000 && salary % 5000 == 0) { selectNumericSalary.style.borderColor = 'green' }
    else { selectNumericSalary.style.borderColor = 'red' }
  }

  return (
    <div className="App" onReset={function () { refreshform() }}>
      <header className="App-header">
        Job Application From
      </header>
      <section className='form-section'>
        <form className='form-body'>
          <div className='labels'>
            <label htmlFor='fName'>Name </label>
            <label htmlFor='date'>Date of Birth</label>
            <label htmlFor='age'>Age</label>
            <label htmlFor='numericSalary'>Salary</label>
            <label htmlFor='upload'>Upload Resume</label>
          </div>
          <div className='fields'>
            <div className='nameField'>
              <input type='text' id='fName' onChange={function () { nameHandler('fName') }} placeholder='First Name' />
              <input type='text' id='lName' onChange={function () { nameHandler('lName') }} placeholder='Last Name' />
            </div>
            <input type='date' id='date' onChange={function () { dateHandler() }} placeholder='DD/MM/YYYY' />
            <input type='number' id='age' value={age} disabled />
            <div className='salary'>
              <input type='range' id='rangeSalary' defaultValue={salary} step={5000} min='5000' max='150000' onChange={function () { salaryHandler(1) }} />
              <input type='number' id='numericSalary' defaultValue={salary} step={5000} min={5000} max={150000} onChange={function () { salaryHandler(0) }} />
            </div>
            <input type='file' accept='.doc,.docx' id='upload' />
            <button type='submit' id='submit' name='submit'>SUBMIT</button>
            <button type='reset' id='reset' name='reset'>RESET</button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default App;