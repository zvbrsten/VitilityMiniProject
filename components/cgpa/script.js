function calculateCGPA() {
    var CGPAold = parseFloat(document.getElementById("CGPAold").value);
    var CreditsOld = parseFloat(document.getElementById("CreditsOld").value);
    var ExpectedGPA = parseFloat(document.getElementById("ExpectedGPA").value);
    var CreditsTaken = parseFloat(document.getElementById("CreditsTaken").value);

    var totalCGPA = (CGPAold * CreditsOld + ExpectedGPA * CreditsTaken) / (CreditsOld + CreditsTaken);
    
    document.getElementById("calculatedCGPA").textContent = totalCGPA.toFixed(2);
  }