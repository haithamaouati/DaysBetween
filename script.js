function calculateDays() {
    var startDate = new Date(document.getElementById('startDate').value);
    var endDate = new Date(document.getElementById('endDate').value);

    var timeDifference = endDate.getTime() - startDate.getTime();
    var daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

    if (isNaN(daysDifference)) {
        document.getElementById('result').innerText = 'Please enter valid dates.';
    } else {
        document.getElementById('result').innerText = 'The number of days between the two dates is: ' + daysDifference;
    }
}
