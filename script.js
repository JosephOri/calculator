var str='';
var ans=''

function updateDisplay() {
    const calculatorScreen = document.querySelector('.calculator-screen__input');
    calculatorScreen.value = str;
}

function addOperator(num){
    str+=num;
    updateDisplay();
}
function clearScreen(){
    str='';
}
function onEqualButtonPress(){
    str=eval(str);
    updateDisplay();
    ans=str;
    str='';
}
function getAns(){
    addOperator(ans);
}