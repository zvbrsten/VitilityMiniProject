function calculateCGPA() {
    var CGPAold = parseFloat(document.getElementById("CGPAold").value); // CGPA till previous semester 
    var CreditsOld = parseFloat(document.getElementById("CreditsOld").value); // Credits till previous semester
    var DesiredCGPA = parseFloat(document.getElementById("DesiredCGPA").value); // Desired CGPA
    var CreditsTaken = parseFloat(document.getElementById("CreditsTaken").value); // Credits taken this semester

    // Calculate the required GPA in the current semester to achieve the desired CGPA
    var RequiredGPA = (CreditsOld*(DesiredCGPA-CGPAold)+DesiredCGPA*CreditsTaken)/CreditsTaken;

    document.getElementById("RequiredGPA").textContent = RequiredGPA.toFixed(2);
}
