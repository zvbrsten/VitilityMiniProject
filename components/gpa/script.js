document.addEventListener("DOMContentLoaded", function() {
function calculateGPA() {
    let totalCredits = 0;
    let totalGradePoints = 0;
    
    // Iterate over each course
    for (let i = 1; i <= 12; i++) {
        let credits = parseFloat(document.getElementById(`credits${i}-dropdown`).value);
        let grade = document.getElementById(`grade${i}`).value;
        let gradePoints;

        // Assign grade points based on the grade
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
                // Handle N/A grade as needed
                gradePoints = 0; // Example: Considered as 0 grade points
                break;
            default:
                gradePoints = 0;
                break;
        }

        // Accumulate total grade points and credits
        totalGradePoints += gradePoints * credits;
        totalCredits += credits;
    }

    // Calculate GPA
    let gpa = totalGradePoints / totalCredits;

    // Display GPA
    document.getElementById('calculatedGPA').textContent = gpa.toFixed(2);
}
document.getElementById('calculateButton').onclick = calculateGPA;

});