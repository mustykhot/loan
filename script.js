function intrest(){
    let loan = document.getElementById("loan").value;
    let intrest = document.getElementById("intrest").value;
    let time = document.getElementById("months").value;

    //calculation
    let ans=(((loan*intrest)/100)/time) + (loan/time) ;

    //conversion
    let finalAns= ans.toFixed(2);
 
    document.getElementById("answer").innerHTML = "Monthly Payment = $" + finalAns;
}