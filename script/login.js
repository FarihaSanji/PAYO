document.getElementById("login-btn").addEventListener("click", function(event){
    event.preventDefault()

    const accountNumber = document.getElementById("Account-number").value;

    const pinNumber = document.getElementById('pin').value;
const convertedPinNumber = parseInt(pinNumber)



    if (accountNumber.length === 11) { 

      if (convertedPinNumber === 1234) {
        window.location.href = "main.html"
      }

      else {
        alert("pin wrong")
      }
    }

    else {
        alert ("need a valid account number")
    }
   
})  