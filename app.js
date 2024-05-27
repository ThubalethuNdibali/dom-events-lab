/*-------------------------------- Constants --------------------------------*/
const calculator = document.querySelector('#calculator');
console.log(calculator);

const displayElement = document.querySelector('.display');
/*-------------------------------- Variables --------------------------------*/
let num1 = "";
let num2 = "";
let operator = "";
let result = "";

/*------------------------ Cached Element References ------------------------*/


/*-------------------------------- Functions --------------------------------*/
function addNumbers(a, b) {
    return a + b;
  }
  
  

  let resultElement = addNumbers(5, 3);
  console.log(result); 



/*----------------------------- Event Listeners -----------------------------*/

calculator.addEventListener('click', (event) => {

    console.log(event.target.innerText);
  
    if (event.target.classList.contains('number')) {
     
        num1 = event.target.innerText;
        displayElement.textContent =num1;
    } else{ displayElement.textContent = "";
        num2 = event.target.innerText;
        displayElement.textContent = num2;
    }
})

calculator.addEventListener('click', (event) => {

    console.log(event.target.innerText);
  

    if (event.target.classList.contains('operator')) {
      operator = event.target.innerText;
      displayElement.textContent= " C";
 
      displayElement.textContent = " "}
})
  
 calculator.addEventListener('click', (event) => {

    console.log(event.target.innerText);
  
                    
    if (event.target.classList.contains('result')) {
     // "1 + 1 = 2".event.target.innerText;
      displayElement.textContent= "2";
      result. event.target.innerText;
      displayElement.textContent = "2 "}
})   
 
calculator.addEventListener('click', (event) => {

    console.log(event.target.innerText);
  
                    
    if (event.target.classList.contains('clear')) {
      "C".event.target.innerText;
      displayElement.textContent= "";
      clear. event.target.innerText;
      displayElement.textContent = ""}
})   


    