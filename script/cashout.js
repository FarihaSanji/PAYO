// document.getElementById("cashout-btn").addEventListener("click", function(event)
// {
//     event.preventDefault();
//     const pin= document.getElementById("cashout-pin")
// .value;
// const convertedPin = parseInt(pin);
// const amount = document.getElementById("cashout-amount").value;
// convertedAmount = parseFloat(amount);
// const mainBalance = document.getElementById("main-balance").innerText;
// const convertedMainBalance = parseFloat(mainBalance);

// if(convertedPin === 1234){

//     const sum = convertedMainBalance -  convertedAmount; 
//     document.getElementById ("main-balance").innerText = sum;
// } 

// else { 
//     alert ("enter valid pin") 
// }

// })


document.getElementById("cashout-btn").addEventListener("click", function(event)
{
    event.preventDefault();
    const accountNumber = document.getElementById("Account-number").value ;

    const amount = getInputValueByID("cashout-amount");
    const pinNumber = getInputValueByID("cashout-pin");
    const mainBalance = getInnerTextByID("main-balance");

    console.log(mainBalance)
    const selectBank = document.getElementById("allbank")

    if(amount>mainBalance){
        alert("invalid amount");
        return;
    }


    if( accountNumber.length === 11) { 
if (pinNumber===1234) {
    const sum = mainBalance - amount;
    setInnerTextByIDandValue("main-balance", sum)

    const container = document.getElementById ("transaction-container");

    const p = document.createElement("p");
    p.innerText = `
    cashout ${amount} from this ${accountNumber} account 
        `

        container.appendChild(p)




}
else {
    alert("pin wrong")
}

    }
    else{
        alert("account number not valid")
    }


})