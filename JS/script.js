// Pulsante dom
const calculate = document.getElementById('calculate')
const results = document.getElementById('results')
const annulla = document.getElementById('annulla')
// creo il click
calculate.addEventListener('click', (e) => {
  e.preventDefault();

  const km = document.getElementById('km').value
  const age = document.getElementById('age').value
  const nominativo = document.getElementById('nominativo').value

  // calcolo prezzo base
 const baseprice = 0.21 * km;
 let finalprice;

 if(age < 18) {
    finalprice = baseprice * 0.8;

 } 
 else if(age > 65) {
   finalprice = baseprice * 0.6;

 }
 else { 
  finalprice = baseprice 

 }

  results.innerText = `nominativo: ${nominativo}, Km percorsi: ${km}, età del passeggero: ${age}, prezzo finale: ${finalprice.toFixed(2)}`
})

annulla.addEventListener('click', (e) => {
  e.preventDefault();
  results.innerText = '';
  document.getElementById('km').value = ''; 
  document.getElementById('age').value = ''; 
})





