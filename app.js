const billAmount = document.querySelector("#bill-amt");
const cashReceived = document.querySelector("#cash-received");
const checkButton = document.querySelector("#check-btn");
const errMessage = document.querySelector("#err-message");
const errorMessage = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".noOfNotes");
const nextButton = document.querySelector("#next");
const cashConatiner=document.querySelector(".cash-container");
const changeContainer=document.querySelector(".change-container");

cashConatiner.style.display="none";
changeContainer.style.display="none";
errMessage.style.display="none";

nextButton.addEventListener("click", function nextHandler(){
    errMessage.style.display="none";
    if (billAmount.value > 0){
        cashConatiner.style.display="flex";
    } 
    else {
        errMessage.style.display="block";
        errMessage.innerText = "please enter a valid bill amount";
    }
});


checkButton.addEventListener("click", function validateBillAmount(){
    hideMessage();
    if (billAmount.value >= 0) {
        if (Number(cashReceived.value) >= Number(billAmount.value)) {
            changeContainer.style.display="flex";
            const changeAmount = cashReceived.value - billAmount.value;
            changeAmountHandler(changeAmount);
        } 
        else {
            showMessage("Enter cash amount that is greater than or equal to bill amount");
        }
    } else {
        showMessage("Invalid bill amount")
    }
});

function hideMessage() {
    errorMessage.style.display="none";
}

function showMessage(message) {
    errorMessage.style.display="block";
    errorMessage.innerText = message;
}

const notes= [2000, 500 , 100, 20, 10, 5, 1];

function changeAmountHandler(amount) {
    for (let i=0; i<notes.length; i++) {
        const amountChange = Math.trunc(amount/notes[i])
        amount = amount%notes[i];
        noOfNotes[i].innerText = amountChange; 
    }
}

