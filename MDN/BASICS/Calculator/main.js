const op1 = document.querySelector('#op1');
const op2 = document.querySelector('#op2');
const notice = document.querySelector(".Notice");
const operationDisplay = document.querySelector(".operationDisplay")
const operation = document.querySelector(".operation");
const submit = document.querySelector(".submit");
const finalAns = document.querySelector(".finalAns");
let op;

operation.addEventListener('click', (e) => {
    op = String(e.target.textContent);
    operationDisplay.textContent = op;
})

function calc()
{
    const x = Number(op1.value);
    const y = Number(op2.value);
    
    if(isNaN(x) || isNaN(y)){
        notice.textContent = "Enter only Numbers"
        return;
    }

    finalAns.textContent = typeof op;

    let ans = 0;
    switch(op){
        case '+': ans = x+y;break;
        case '-': ans = x-y;break;
        case '*': ans = x*y;break;
        case '/': ans = x/y;break;
        default : notice.textContent = "Enter valid opertion";break;
    }

    finalAns.textContent = ans;

}

submit.addEventListener("click",calc);







