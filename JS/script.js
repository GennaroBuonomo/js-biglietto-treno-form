// Pulsante dom
const calculate = document.getElementById('calculate')

// creo il click
calculate.addEventListener('click', (e) => {
  e.preventDefault();

  const km = document.getElementById('km').value
  const age = document.getElementById('age').value

  // calcolo prezzo base
  const baseprice = 0.21 * km;
  let finalprice

  if(age < 18){
      finalprice = baseprice *0.8;
  }
  else if(age > 65){
       finalprice = baseprice *0.6; 

  } 
  else{
      finalprice = baseprice
  }

   results.innerText = `Km percorsi: ${km}, età del passeggero: ${age}, prezzo finale: ${finalprice}`
})





