// // document.getElementById("add-money").style.display = "block";
// document.getElementById("cash-out").style.display = "none";



// 
// document.getElementById("add-money-box").addEventListener("click", function() 
// {
    // console.log("hello") 
    // document.getElementById("cash-out").style.display = "none";
    // document.getElementById("add-money").style.display = "block";

// }) 

// document.getElementById("cash-out-box").addEventListener("click", function ()
// {
//     document.getElementById("cash-out").style.display = "block" ;
//     document.getElementById("add-money").style.display = "none" ;

// })


document.getElementById("cash-out").style.display = "none";
handleToggle("transaction-history", "none")

document.getElementById("add-money-box").addEventListener("click", 
        function() { 
handleToggle("add-money", "block")
handleToggle("cash-out", "none") 
handleToggle("transaction-history","none")

})

document.getElementById("cash-out-box").addEventListener("click", function (){
    handleToggle("add-money", "none")
handleToggle("cash-out", "block")
handleToggle("transaction-history","none")

})

function handleToggle(id,status){
    document.getElementById(id).style.display = status;
}