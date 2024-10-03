const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const disMsg = document.querySelector('#Msg');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
    if(bmi<18.6){
      disMsg.innerHTML='<span>Under Weight</span>'
    }
    else if(bmi>=18.6 && bmi<=24.9){
      disMsg.innerHTML='<span>Normal Range</span>'
    }
    else{
      disMsg.innerHTML='<span>Over Weight</span>'
    }
  }
});
