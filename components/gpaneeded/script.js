function calculateCGPA() {
    var CGPAold = parseFloat(document.getElementById("CGPAold").value); 
    var CreditsOld = parseFloat(document.getElementById("CreditsOld").value); 
    var DesiredCGPA = parseFloat(document.getElementById("DesiredCGPA").value); 
    var CreditsTaken = parseFloat(document.getElementById("CreditsTaken").value); 

    var RequiredGPA = (CreditsOld*(DesiredCGPA-CGPAold)+DesiredCGPA*CreditsTaken)/CreditsTaken;

    document.getElementById("RequiredGPA").textContent = RequiredGPA.toFixed(2);
}
