function displayTime() {
    var Date = dayjs("08-08-2023");
    $('#Date').text(Date.format('MMM D, YYYY'));
    
    var Time = dayjs();
    $('#Time').text(Time.format('hh:mm:ss'));
}

function readProjectsFromStorage() {
var Projects = localStorage.getItem("Projects");
}

displayTime();
