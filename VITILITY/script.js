document.addEventListener("DOMContentLoaded", function () {
    var cards = document.querySelectorAll(".card");
    cards.forEach(function(card) {
        card.addEventListener("click", function () {
            var cardId = card.id;
            // Depending on the card clicked, redirect to the respective page
            switch (cardId) {
                case "gpaCalculator":
                    window.location.href = "./components/gpa/index.html";
                    break;
                case "cgpaCalculator":
                    window.location.href = "./components/cgpa/index.html";
                    break;
                case "attendanceCalculator":
                    window.location.href = "./components/attendance/index.html";
                    break;
                case "gpaNeeded":
                    window.location.href = "./components/gpaneeded/index.html";
                    break;
                case "gradeCalculator":
                    window.location.href = "./components/grades/index.html";
                    break;
                case "courseMaterials":
                    window.location.href = "./components/pdfs/index.html";
                    break;
                case "recommendedBooks":
                    window.location.href = "./components/books/index.html";
                    break;
                case "blockAllocation":
                    window.location.href = "./components/hostel/index.html";
                    break;
                // Add more cases for other cards if needed
            }
        });
    });
});