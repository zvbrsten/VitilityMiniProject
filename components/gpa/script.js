document.addEventListener("DOMContentLoaded", function() {
function calculateGPA() {
    let totalCredits = 0;
    let totalGradePoints = 0;
    
    for (let i = 1; i <= 12; i++) {
        let credits = parseFloat(document.getElementById(`credits${i}-dropdown`).value);
        let grade = document.getElementById(`grade${i}`).value;
        let gradePoints;

        switch (grade) {
            case 'default':
                gradePoints=0;
                break;

                case 'S':
                gradePoints = 10;
                break;
            case 'A':
                gradePoints = 9;
                break;
            case 'B':
                gradePoints = 8;
                break;
            case 'C':
                gradePoints = 7;
                break;
            case 'D':
                gradePoints = 6;
                break;
            case 'E':
                gradePoints = 5;
                break;
            case 'F':
                gradePoints = 0;
                break;
            case 'N':
                
                gradePoints = 0; 
                break;
            default:
                gradePoints = 0;
                break;
        }

      
        totalGradePoints += gradePoints * credits;
        totalCredits += credits;
    }

   
    let gpa = totalGradePoints / totalCredits;

   
    document.getElementById('calculatedGPA').textContent = gpa.toFixed(2);
}
document.getElementById('calculateButton').onclick = calculateGPA;

});
