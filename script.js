let inputis = document.querySelectorAll('input');

inputis.forEach(function(i){
    i.addEventListener("keypress", function onEvent(event){
        if (event.key === "Enter"){
            icon.click();
        }
    });
});





icon.addEventListener('click', myFunction);



function myFunction() {

//input.value as new Date(z.value, y.value, x.value)

var x = document.getElementById('dia');

var y = document.getElementById('mes');

var z = document.getElementById('any');

var dia = x.value;

var mes = y.value-1;


var any = z.value;

var cumple = new Date(any, mes, dia);



//today without time

const today = new Date();
today.setHours(0, 0, 0, 0);

//today and birthday as miliseconds

const cumpleMil = cumple.getTime();

const todayMil = today.getTime();

//and the diference between

const resta = todayMil - cumpleMil;


//getting the days, the months, the years

var days = resta/(1000 /*to seconds*/ * 60 /*to minutes*/ * 60 /*to hours*/ * 24 /*to days*/);

var months = resta/(1000 * 60 * 60 * 24 * 30.4167/*to months*/);

var year = resta / (1000 * 60 * 60 * 24 * 30.4167 * 12 /*to years*/);


//converting the year in a whole number to get the resulting year

var yearEnt = Math.floor(year);

 

//getting the rest of the year 

var yearResto = year - yearEnt;

//multiplying the rest of the year in 12 months to get the resulting number of months

var mesesResto = yearResto * 12;

//converting this cipher in a whole number
var mesesRestoEnt = Math.floor(mesesResto);

//getting the rest of the months to find the days

var diasResto = mesesResto - mesesRestoEnt;

//multiplying this cipher (rest of months) in the number of days in a month, to get the days

var diasRestoFinal = diasResto * 30.4167;

//converting this number in a whole number

var diasRestoEnt = Math.floor(diasRestoFinal);





//giving the final result 

let icon = document.getElementById('icon');

let yearOutput = document.getElementById('yearOut');

let monthOutput = document.getElementById('monthOut');

let dayOutput = document.getElementById('daysOut');

let mensajerror = document.getElementById('warning');

//an array to do a for

let inputi = document.getElementsByClassName('inputi');


let inputiAr = Array.from(inputi);

let emptyMg = document.getElementsByClassName('empty-message');

let emptyMgAr = Array.from(emptyMg);

//getting some ids to costumize
let diaL = document.getEL


    
    
    for (let i = 0; i < 3; i++) {
        if(inputiAr[i].value == ''){
            emptyMgAr[i].style.visibility = 'visible';
            inputiAr[i].style.border = '2px solid #ff2851';
        }
    }


    if(resta <= 0){
        warning.textContent = 'it must be in the past';
        warning.style.visibility = 'visible';
        inputiAr[0].style.border = '2px solid #ff000080';
        inputiAr[1].style.border = '2px solid #ff000080';
        inputiAr[2].style.border = '2px solid #ff000080';
    }   else if (((y.value == '2' && x.value > '29') || (y.value < 8 &&  y.value % 2 == '0' && x.value > 30) || (y.value > 7 && (!y.value % 2 == '0') && x.value >30) || (x.value > 31 && y.value !== '') || (x.value <= 0 && y.value !== '')) && (z.value !== '')  )  {
            
            warning.textContent = 'a valid day and month is required';
            warning.style.visibility = 'visible';
            inputiAr[0].style.border = '2px solid #ff000080';
            inputiAr[1].style.border = '2px solid #ff000080';
            inputiAr[2].style.border = '2px solid #ff000080';
        }   else if (((y.value == '2' && x.value < '29') || (y.value < 8 &&  y.value % 2 == '0' && x.value <= 30) || (y.value > 7 && (!y.value % 2 == '0') && x.value <= 30) || (x.value <= 31 && y.value !== '') || (x.value > 0 && y.value !== '')) && (z.value !== '')){

                 yearOutput.textContent = yearEnt;
                 monthOutput.textContent = mesesRestoEnt;
                 dayOutput.textContent = diasRestoEnt;
            } if( yearEnt > 99 || mesesRestoEnt > 99 || diasResto > 99){
                
            }
 



}







    






   
