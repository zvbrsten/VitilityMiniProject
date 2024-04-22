function calculateAttendance() {
    var attendedClasses = parseInt(document.getElementById('attended').value);
    var totalClasses = parseInt(document.getElementById('conducted').value);
    var leftClasses = parseInt(document.getElementById('leftclasses').value);

    var currentAttendance = (attendedClasses / totalClasses) * 100;

    var requiredAttendance = 74.1;
    
    var classesToAttend = Math.ceil((requiredAttendance * (totalClasses + leftClasses) / 100) - attendedClasses);
    if (classesToAttend < 0) {
        document.getElementById('attendanceResult').innerText = "You will have 75% attendance without attending any additional classes.";
    } else {
        document.getElementById('attendanceResult').innerText = classesToAttend;
    }
}
