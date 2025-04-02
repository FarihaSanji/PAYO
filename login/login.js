document.getElementById("login-btn").addEventListener("click", function(event){
    event.preventDefault();
    const accountNumber = document.getElementById("accountNumber").value;

    const pinNumber=document.getElementById("pinNumber").value;
const convertedPin = parseInt(pinNumber)



    if(accountNumber.length === 11) { 

      if (convertedPin === 1234) {
        window.location.href = "./main.html"
      }

      else{
        alert("pin wrong")
      }
    }

    else {
        alert ("need a valid account number")
    }
   
})  