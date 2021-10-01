
const passwordEl = document.querySelector('#length');
const resultEl = document.querySelector('#result');
const uppercaseEl = document.querySelector('#uppercase');
const lowercaseEl = document.querySelector('#lowercase');
const numberEl = document.querySelector('#numbers');
const symbolsEl = document.querySelector('#symbols');
const generateButtonEl = document.querySelector('#generate');
const checkboxes = document.querySelectorAll('input[type=checkbox]');













function generatePassword(){


    
    let arr = [];
    resultEl.innerText = '';

    
    let functions =   [ getRandomSmallLetter , getRandomUppercaseLetter, getRandomNumber , getRandomSymbol];


    


   
    

    let arr3 = validateCheckboxes(functions);


    
    const passwordLength = passwordEl.value;

    

    
    

    for(let i=0; i<passwordLength;i++){


        const randomFunction = Math.floor(Math.random()*arr3.length );
        
        
        arr.push(arr3[randomFunction]());
        

    }


    

    
    
    

    let arr2 = arr.join('');
    
    
    resultEl.innerText = arr2;


    
    
    

}



function validateCheckboxes(functions){


    
    let isCheckedLowercase = lowercaseEl.checked;
    let isCheckedUppercase = uppercaseEl.checked;
    let isCheckedNumbers = numberEl.checked;
    let isCheckedSymbols = symbolsEl.checked;


    let booleanArr = [isCheckedLowercase , isCheckedUppercase , isCheckedNumbers ,isCheckedSymbols];


    

    


    console.log(booleanArr);

    


    let checkedFunctions = [


        [functions[0], booleanArr[0]],
        [functions[1], booleanArr[1]],
        [functions[2], booleanArr[2]],
        [functions[3], booleanArr[3]]


    ];


    



    let newarr = checkedFunctions.filter(([val1,val2]) => {

        if(val2){
      
          return true;
      }
      
      return false;
    
    
    }).map(([val1,val2])=> val1);



    



    

    

    return newarr;
    
   




}


function getRandomSmallLetter(){


    const randomSmallLetter = Math.floor(Math.random()*26) + 96;
    return String.fromCharCode(randomSmallLetter);

}


function getRandomUppercaseLetter(){


    const randomUppercaseLetter = Math.floor(Math.random()*26) + 65;
    return String.fromCharCode(randomUppercaseLetter);

}



function getRandomNumber(){


    const randomNumber = Math.floor(Math.random()*10) + 48;
    return String.fromCharCode(randomNumber);

}


function getRandomSymbol(){


    const randomSymbol = '!@#$&()[]/';
    return randomSymbol[Math.floor(Math.random()*randomSymbol.length)];

}



generateButtonEl.addEventListener('click', generatePassword);