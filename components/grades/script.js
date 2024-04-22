function calculateGrade() {
   
    var marks = parseFloat(document.getElementById("marks").value);
    var mean = parseFloat(document.getElementById("mean").value);

    console.log("Marks:", marks);
    console.log("Mean:", mean);
    
    var sdRange = getStandardDeviation();
    var totalMarks = marks;
    var grade;

    console.log("SD Range:", sdRange);

    if (totalMarks >= mean + 1.5 * sdRange.max) {
        grade = 'S';
    } else if (totalMarks >= mean + 0.5 * sdRange.min && totalMarks < mean + 1.5 * sdRange.max) {
        grade = 'A';
    } else if (totalMarks >= mean - 0.5 * sdRange.min && totalMarks < mean + 0.5 * sdRange.min) {
        grade = 'B';
    } else if (totalMarks >= mean - 1.0 * sdRange.min && totalMarks < mean - 0.5 * sdRange.min) {
        grade = 'C';
    } else if (totalMarks >= mean - 1.5 * sdRange.max && totalMarks < mean - 1.0 * sdRange.min) {
        grade = 'D';
    } else if (totalMarks >= mean - 2.0 * sdRange.max && totalMarks < mean - 1.5 * sdRange.max) {
        grade = 'E';
    } else {
        grade = 'F';
    }

    console.log("Grade:", grade);

    var result = document.getElementById("result");
    result.style.display = "block";
    document.getElementById("grade").innerText = grade;
}

function getStandardDeviation() {
    
    var marksType = document.getElementById("marksType").value;
    var sdType = document.getElementById("sd").value;
    
    switch(marksType) {
        case 'CAT':
            switch(sdType) {
                case 'High':
                    return { min: 8, max: 11 }; 
                case 'medium':
                    return { min: 6, max: 8 }; 
                case 'low':
                    return { min: 0, max: 6 }; 
                
            }
        case 'FAT':
        case 'Total Marks':
            switch(sdType) {
                case 'high':
                    return { min: 15, max: 20 };
                case 'medium':
                    return { min: 10, max: 15 }; 
                case 'low':
                    return { min: 0, max: 10 }; 
            }
        default:
            return { min: 0, max: 0 };
    }
}

function selectMarksType(marksType) {
    
    var marksInput = document.getElementById("marksInput");
    var meanInput = document.getElementById("meanInput");
    var sdInput = document.getElementById("sdInput");
    var result = document.getElementById("result");

    marksInput.style.display = "block";
    meanInput.style.display = "block";
    sdInput.style.display = "block";
    result.style.display = "none";

    switch(marksType) {
        case 'CAT':
            document.getElementById("marks").placeholder = "Enter CAT Marks";
            document.getElementById("mean").placeholder = "Enter Class avg.";
            break;
        case 'FAT':
            document.getElementById("marks").placeholder = "Enter FAT marks";
            document.getElementById("mean").placeholder = "Enter Class avg.";
            break;
        case 'Total Marks':
            document.getElementById("marks").placeholder = "Enter Total Marks";
            document.getElementById("mean").placeholder = "Enter Class Average";
            break;
    }
}
