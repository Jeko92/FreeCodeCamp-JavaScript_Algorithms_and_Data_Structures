/*
const callStack = [
    "a(): returns 'freeCodeCamp ' + b()",
    "b(): returns 'is ' + c()",
    "c(): returns 'awesome!'",
];
const a = ()=> "freeCodeCamp " + b();
const b = () => "is " + c();
const c = ()=> "awesome!";

console.log(a());
 */

const numberInput = document.getElementById('number-input');
const convertBtn = document.getElementById('convert-btn');
const result = document.getElementById('result');
const animationContainer = document.getElementById('animation-container');

const animationData = [
    {
        inputVal: 5,
        marginTop : 18.75,
        addElDelay: 1000,
        msg: 'decimalToBinary(5) returns "10" + 1 (5 % 2). Then it pops off the stack.',
        showMsgDelay: 15000,
        removeElDelay:20000
    },
    {
        inputVal: 2,
        marginTop : -12.5,
        addElDelay: 1500,
        msg: 'decimalToBinary(2) returns "1" + 0 (2 % 2) and gives that value to the stack below. Then it pops off the stack.',
        showMsgDelay: 10000,
        removeElDelay:15000
    },
    {
        inputVal: 1,
        marginTop : -12.5,
        addElDelay: 2000,
        msg: 'decimalToBinary(1) returns "1" (base case) and gives that value to the stack below. Then it pops off the stack.',
        showMsgDelay: 5000,
        removeElDelay:10000
    },
];

/*
const countDownAndUp = number => {
    console.log(number);

    if (number === 0){
        console.log('Reached base case');
        return;
    }else {
        countDownAndUp(number -1);
        console.log(number);

    }
};

countDownAndUp(3);
*/

/*const decimalToBinary = input => {
    const inputs = [];
    const quotients = [];
    const remainders = [];

    if (input === 0){
        result.innerText = '0';
        return;
    }

    while(input > 0){
        let quotient = Math.floor(input / 2);
        let remainder = input % 2;
        inputs.push(input);
        quotients.push(quotient);
        remainders.push(remainder);
        input = quotient;
    }
    console.log('Inputs: ', inputs);
    console.log('Quotients: ', quotients);
    console.log('Remainders: ', remainders);
    result.innerText = remainders.reverse().join('');
};
*/
/*
 const decimalToBinary = input => {
     let binary = '';

     if (input === 0){
         binary = '0';
     }

     while (input > 0){
         binary = (input % 2) + binary;
         input = Math.floor(input / 2);
     }

     result.innerText = binary;
 }
 */

const decimalToBinary = (input) => {
    if(input === 0 || input ===1){
        return String(input);
    }else {
       return  (decimalToBinary( Math.floor(input / 2)) + (input % 2));
    }
};

const showAnimation = () => {
    result.innerText = 'Call Stack Animation';
    animationData.forEach(obj=>{
        setTimeout(()=>{
            animationContainer.innerHTML += `
             <p id="${obj.inputVal}" style="margin-top:${obj.marginTop}rem" class="animation-frame">decimalToBinary(${obj.inputVal})</p>
            `;
        }, obj.addElDelay);

        setTimeout(()=>{
            document.getElementById(obj.inputVal).textContent = obj.msg;
        }, obj.showMsgDelay);

        setTimeout(()=>{
            document.getElementById(obj.inputVal).remove();
        }, obj.removeElDelay);
    });

    setTimeout(()=>{
        result.textContent = decimalToBinary(5)
    },20000);
};

const checkUserInput = ()=> {
    // console.log(numberInput.value);
    const inputInt = parseInt(numberInput.value);
    if(!numberInput.value || isNaN(inputInt)){
        alert('Please provide a decimal number');
        return;
    }

    if(inputInt === 5){
        showAnimation();
        return;
    }
    result.textContent = decimalToBinary(inputInt);
    numberInput.value = '';

};

convertBtn.addEventListener('click', checkUserInput);
numberInput.addEventListener('keydown', (e)=> {
    if(e.key === 'Enter'){
        checkUserInput();
    }
});