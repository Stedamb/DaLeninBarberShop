// Variables
var today = new Date();

var selectedDay = new selectedDay(today.getDate(), today.getMonth(), today.getFullYear());
var prevSelectedDay = today.getDate();
var prevSelectedCell;

var cardHeaderDay = document.getElementById("card-header-day");
var cellStartHour;
var cellEndHour;
var cellContent;
var br = document.createElement("br");

var datePicker = document.getElementById("datepicker");
var timePickerStart = document.getElementById("timepicker-start");
var timePickerEnd = document.getElementById("timepicker-end");

var calendarTable = document.getElementById("calendar");
var horizontalCalendar = document.getElementById("calendar-row");
var currentMonth = today.getMonth();
var currentYear = today.getFullYear();
var calendarHeader = document.getElementById("mandyr");

// Date and time pickers (jQuery)
$(function() {
    $('#datepicker').datepicker({
        dateFormat: 'dd/mm/yy'
    });
});

$(function() {
    $('#timepicker-start').timepicker({
        timeFormat: "H:i",
        minTime: "08",
        maxTime: "21"
    });
});

$(function() {
    $('#timepicker-end').timepicker({
        timeFormat: "H:i",
        minTime: "08",
        maxTime: "21"
    });
});

// Main functions
setDateInHeader();

showCalendar(currentMonth, currentYear);


// Implementation
function setDateInHeader() {
    document.getElementById('header-day').appendChild(document.createTextNode(selectedDay.day));
    document.getElementById('header-month').appendChild(document.createTextNode(months[currentMonth]));
    document.getElementById('header-year').appendChild(document.createTextNode(currentYear));
}

function selectDay(){
    if (calendarTable != null) {
        for (let i = 0; i < calendarTable.rows.length; i++) {
            for (let j = 0; j < calendarTable.rows[i].cells.length; j++)
            calendarTable.rows[i].cells[j].onclick = function () {
                setDay(this);
            };
        }
    }
    // for (let i = 0; i < horizontalCalendar.cells.length; i++) {
    //     horizontalCalendar.cells[i].onclick = function() {
    //         setDay(this.childNodes[2]);
    //     }
        
    // }
}

function setDay(cell) {
    selectedDay.day = cell.innerHTML;
    selectedDay.month = currentMonth;
    selectedDay.year = currentYear;
    changeDateInHeader(selectedDay.day, months[currentMonth], currentYear);
    showCalendar(currentMonth, currentYear);
}

function changeDateInHeader(day, month, year) {
    document.getElementById('header-day').innerHTML = "";
    document.getElementById('header-month').innerHTML = "";
    document.getElementById('header-year').innerHTML = "";
    document.getElementById('header-day').appendChild(document.createTextNode(day));
    document.getElementById('header-month').appendChild(document.createTextNode(month));
    document.getElementById('header-year').appendChild(document.createTextNode(year));
}

// Set card title
cardHeaderDay.innerHTML = days[today.getDay()] + " " + today.getDate() + " " + months[today.getMonth()];

// Set Timeline

var timeline1 = document.getElementById("timeline-morning");
timeline1.innerHTML = "";

for (let i = 8; i < 13;) {
    var cell = document.createElement("td");

    cellStartHour = document.createElement("span");
    if (i < 10) { 
        cellStartHour.innerHTML = "0" + i +":00";
    } else {
        cellStartHour.innerHTML = i +":00";
    }

    cellEndHour = document.createElement("span");
    if (i < 10) { 
        cellEndHour.innerHTML = "0" + i +":30";
    } else {
        cellEndHour.innerHTML = i +":30";
    }

    cellContent = document.createElement("span");
    cellContent.innerHTML = "Libero";

    let br = document.createElement("br");
    let textSeparator = document.createElement("span");
    textSeparator.innerHTML = " ";
    let separator = document.createElement("div");
    separator.classList.add("separator-2");

    cell.classList.add("timeline-hour");

    cell.appendChild(cellStartHour);
    cell.appendChild(textSeparator);
    cell.appendChild(cellEndHour);
    cell.appendChild(br); 
    cell.appendChild(cellContent);
    timeline1.appendChild(cell);
    timeline1.appendChild(separator);

    var cell = document.createElement("td");

    cellStartHour = document.createElement("span");
    if (i < 10) { 
        cellStartHour.innerHTML = "0" + i +":30";
    } else {
        cellStartHour.innerHTML = i +":30";
    }

    i++;

    cellEndHour = document.createElement("span");
    if (i < 10) { 
        cellEndHour.innerHTML = "0" + i +":00";
    } else {
        cellEndHour.innerHTML = i +":00";
    }

    cellContent = document.createElement("span");
    cellContent.innerHTML = "Libero";

    let br2 = document.createElement("br");
    let textSeparator2 = document.createElement("span");
    textSeparator2.innerHTML = " ";
    let separator2 = document.createElement("div");
    separator2.classList.add("separator-2");

    cell.classList.add("timeline-hour");

    cell.appendChild(cellStartHour);
    cell.appendChild(textSeparator2);
    cell.appendChild(cellEndHour);
    cell.appendChild(br2); 
    cell.appendChild(cellContent);
    timeline1.appendChild(cell);
    timeline1.appendChild(separator2);

}
selectCell(timeline1, selectHour);

var timeline2 = document.getElementById("timeline-afternoon");
timeline2.innerHTML = "";

for (let i = 13; i < 20;) {
    var cell = document.createElement("td");

    cellStartHour = document.createElement("span");
    if (i < 10) { 
        cellStartHour.innerHTML = "0" + i +":00";
    } else {
        cellStartHour.innerHTML = i +":00";
    }

    cellEndHour = document.createElement("span");
    if (i < 10) { 
        cellEndHour.innerHTML = "0" + i +":30";
    } else {
        cellEndHour.innerHTML = i +":30";
    }

    cellContent = document.createElement("span");
    cellContent.innerHTML = "Libero";

    let br = document.createElement("br");
    let textSeparator = document.createElement("span");
    textSeparator.innerHTML = " ";
    let separator = document.createElement("div");
    separator.classList.add("separator-2");

    cell.classList.add("timeline-hour");

    cell.appendChild(cellStartHour);
    cell.appendChild(textSeparator);
    cell.appendChild(cellEndHour);
    cell.appendChild(br); 
    cell.appendChild(cellContent);
    timeline2.appendChild(cell);
    timeline2.appendChild(separator);

    var cell = document.createElement("td");

    cellStartHour = document.createElement("span");
    if (i < 10) { 
        cellStartHour.innerHTML = "0" + i +":30";
    } else {
        cellStartHour.innerHTML = i +":30";
    }

    i++;

    cellEndHour = document.createElement("span");
    if (i < 10) { 
        cellEndHour.innerHTML = "0" + i +":00";
    } else {
        cellEndHour.innerHTML = i +":00";
    }

    cellContent = document.createElement("span");
    cellContent.innerHTML = "Libero";

    let br2 = document.createElement("br");
    let textSeparator2 = document.createElement("span");
    textSeparator2.innerHTML = " ";
    let separator2 = document.createElement("div");
    separator2.classList.add("separator-2");

    cell.classList.add("timeline-hour");

    cell.appendChild(cellStartHour);
    cell.appendChild(textSeparator2);
    cell.appendChild(cellEndHour);
    cell.appendChild(br2); 
    cell.appendChild(cellContent);
    timeline2.appendChild(cell);
    timeline2.appendChild(separator2);
}
selectCell(timeline2, selectHour);


function selectHour(cell) { 
    console.log(cell);
    if (selectedDay.day < 10 && selectedDay.month < 10) { 
        datePicker.value = '0' + selectedDay.day + '/' + '0' + selectedDay.month + '/' + selectedDay.year;
    } else if (selectedDay.day < 10 && selectedDay.month >= 10) { 
        datePicker.value = '0' + selectedDay.day + '/' + selectedDay.month + '/' + selectedDay.year;
    } else if (selectedDay.month < 10 && selectedDay.day >= 10) { 
        datePicker.value = selectedDay.day + '/' + '0' + selectedDay.month + '/' + selectedDay.year;
    } else { 
        datePicker.value = selectedDay.day + '/' + selectedDay.month + '/' + selectedDay.year;
    }
    timePickerStart.value = cell.firstChild.innerHTML;
    timePickerEnd.value = cell.childNodes[2].innerHTML;
}

function prev() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}

function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}

function jump() {
    currentYear = parseInt(selectedYear.value);
    currentMonth = parseInt(selectedMonth.value);
    showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {
    var firstDay = (new Date(year, month)).getDay();
    var daysInMonth = 32 - new Date(year, month, 32).getDate();
    var tbl = document.getElementById("calendarBody"); // body of the calendar
    tbl.innerHTML = "";
    calendarHeader.innerHTML = months[month] + " " + year;
    var dateforcalendar = 1;

    for (var i = 0; i < 6; i++) {
        var calendarRows = document.createElement("tr");
        for (var j = 0; j < 7; j++) {
            if (i == 0 && j < firstDay-1) {
                // cells before the first day
                var calendarCell = document.createElement("td");
                calendarRows.appendChild(calendarCell);
            } else if (dateforcalendar > daysInMonth) {
                break;
            } else {
                // create cell node
                var calendarCell = document.createElement("td");
                var cellText = document.createTextNode(dateforcalendar);

                // highlight selected day
                if (dateforcalendar == selectedDay.day && month == selectedDay.month && year == selectedDay.year) {
                    calendarCell.classList.add("bg-info");
                } else {
                    if (calendarCell.classList.contains("bg-info")) {
                        calendarCell.classList.remove("bg-info");
                    }
                }

                // add cell to calendar
                calendarCell.classList.add("text-center");
                calendarCell.classList.add("calendar-cell");

                calendarCell.appendChild(cellText);
                calendarRows.appendChild(calendarCell);

                dateforcalendar++;
            }
        }
        tbl.appendChild(calendarRows);
    }
    selectDay();
}
