var timeline = document.getElementById("timeline-row");
var cellStartHour;
var cellEndHour;
var cellContent;
var br = document.createElement("br");
var today = new Date();
var cardHeaderDay = document.getElementById("card-header-day");
var timePickerStart = document.getElementById("timepicker-start");
var timePickerEnd = document.getElementById("timepicker-end");

var currentMonth = today.getMonth();
var currentYear = today.getFullYear();
var calendarHeader = document.getElementById("mandyr");

cardHeaderDay.innerHTML = days[today.getDay()] + " " + today.getDate() + " " + months[today.getMonth()];

for (let i = 1; i <= 3; i++) {
    var timeline = document.getElementById("timeline-row-" + i);
    timeline.innerHTML = "";

    for (let i = 8; i < 20;) {
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
        textSeparator.innerHTML = " - ";
        let separator = document.createElement("div");
        separator.classList.add("separator-2");

        cell.classList.add("timeline-hour");

        cell.appendChild(cellStartHour);
        cell.appendChild(textSeparator);
        cell.appendChild(cellEndHour);
        cell.appendChild(br); 
        cell.appendChild(cellContent);
        timeline.appendChild(cell);
        timeline.appendChild(separator);

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
        textSeparator2.innerHTML = " - ";
        let separator2 = document.createElement("div");
        separator2.classList.add("separator-2");

        cell.classList.add("timeline-hour");

        cell.appendChild(cellStartHour);
        cell.appendChild(textSeparator2);
        cell.appendChild(cellEndHour);
        cell.appendChild(br2); 
        cell.appendChild(cellContent);
        timeline.appendChild(cell);
        timeline.appendChild(separator2);

    }
    selectCell(timeline, selectHour);
}

function selectHour(cell) { 
    timePickerStart.value = cell.firstChild.innerHTML;
    timePickerEnd.value = cell.childNodes[2].innerHTML;
}

showCalendar()

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
}

showCalendar(currentMonth, currentYear);
