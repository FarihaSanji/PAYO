
// // document.getElementById('add-money').addEventListener('click', function(event) {
// //     event.preventDefault(); 

// //    const amount=document.getElementById("amount").value;
// //    const convertedAmount = parseFloat(amount);
// //    const pin = document.getElementById("pin").value; 
// //    const convertedPin = parseInt(pin);
// //    const mainBalance = document.getElementById("main-balance").innerText; 
// //    const convertedMainBalance = parseFloat(mainBalance); 


// //    if (convertedPin === 1234){
// // const sum = convertedMainBalance + convertedAmount;
// // document.getElementById("main-balance").innerText = sum;
  
// //    } 

// //    else {
// //     console.log("pin wrong") 
// //    }

// // })






// document.getElementById("cash-out").style.display = "none";
// document.getElementById("add-money").style.display = "block";

// document.getElementById("add-money-box").addEventListener("click", 
//    function() {

  
//    document.getElementById("add-money").style.display = "block";
//    document.getElementById("cash-out").style.display = "none";
 
// }
// )

// document.getElementById("cash-out-box").addEventListener("click", function ()
// {
 
//     document.getElementById("add-money").style.display = "none" ;
//     document.getElementById("cash-out").style.display = "block" ;

// })

// document.getElementById("add-money").addEventListener('click', function(event)
// {
//    event.preventDefault;
//    const accountNumber = document.getElementById("Account-number").value;
//    const pinNumber = document.getElementById("pin").value;
//    const convertedPinNumber =  parseInt(pinNumber);
//    const amount = document.getElementById("amount").value;
// const mainBalance = document.getElementById("main-balance").innerText;
// const convertedMainBalance = parseFloat (mainBalance)

//    if (accountNumber.length === 11 ){
//       if (convertedPinNumber === 1234) {
//    const sum = convertedMainBalance + convertedAmount ;
//    document.getElementById('main-balance').innerText = sum; 

//       } 
//      }

//      else {
//       alert("account number wrong") 
//      }

// })


document.getElementById("add-money") .addEventListener("click", function (event)
{
   event.preventDefault();
 const amount = getInputValueByID("Amount");
 const pin = getInputValueByID("pin"); 
// console.log (amount,pin)

const account = document.getElementById("Account-number").value ;
const mainBalance = getInnerTextByID("main-balance")
console.log(mainBalance) 
const selectbank = document.getElementById("allbank").value;
console.log(selectBank)
if(amount<0){
   alert("give positive number")
   return; 
}





if(accountNumber.length === 11) {
   if(pin=== 1234) {
           const sum = mainBalance + amount ;
         //   document. getElementById ("main-balance").innerText = sum; 
           setInnerTextByIDandValue ("main-balance", sum)

           const container = document.getElementById("transaction-container");

        const div = document.createElement("div");
        div.classList.add("bg-red-400")

        div.innerHTML = `
        
        <h1 class= "text-yellow-300">Added Money</h1>
        <h3>${amount}</h3>
        <p>account number: ${account}</p>

        `

        container.appendChild(div)

// const container = getElementById("transaction-container")
// const p = document.createElement("p");
// p.innerText = `
// added ${amount} from ${account} account
// `
// container.appendChild(p)




   }

   else{
      console.log("pin wrong")
      
   }
}
 else{
   console.log("account number wrong") 
 }


   
})


