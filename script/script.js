    // Variables
    // var today = new Date();
    // var selectedDay = new selectedDay(today.getDate(), today.getMonth(), today.getFullYear());
    // var prevSelectedDay = today.getDate();
    // var prevSelectedCell;
    // var currentMonth = today.getMonth();
    // var currentYear = today.getFullYear();
    // var selectedMonth = document.getElementById("month");
    // var selectedYear = document.getElementById("year");
    // var calendarHeader = document.getElementById("mandyr");
    // var calendarTable = document.getElementById("calendar");
    // var horizontalCalendar = document.getElementById("calendar-row");

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
    selectDay();
    showCalendar(currentMonth, currentYear);
    getWeatherData();


    // Implementation
    function setDateInHeader() {
        document.getElementById('header-day').appendChild(document.createTextNode(selectedDay.day));
        document.getElementById('header-month').appendChild(document.createTextNode(months[currentMonth]));
        document.getElementById('header-year').appendChild(document.createTextNode(currentYear));
    }

    function changeDateInHeader(day, month, year) {
        document.getElementById('header-day').innerHTML = "";
        document.getElementById('header-month').innerHTML = "";
        document.getElementById('header-year').innerHTML = "";
        document.getElementById('header-day').appendChild(document.createTextNode(day));
        document.getElementById('header-month').appendChild(document.createTextNode(month));
        document.getElementById('header-year').appendChild(document.createTextNode(year));
    }

    function addEvent() {
        let inputs = document.getElementById("add_booking").elements;
        let field = document.querySelector('input[name="field-select"]:checked').value;
        let teacher = $('select[name=select-teacher] option:selected').text();
        let date = inputs[4].value;
        let startTime = inputs[5].value;
        let endTime = inputs[6].value;
        let event = new Event(date, startTime, endTime, field, teacher);
        events.push(event);
        showTimeline();
        showCalendar(currentMonth, currentYear);
    }

    function showTimeline() {
        var timeline = document.getElementById("timeline");
        timeline.innerHTML = "";
        for (let i = 0; i < events.length; i++) {
            if (events[i].day == selectedDay.day && events[i].month == currentMonth && events[i].year == currentYear) {
                todayEvents.push(events[i]);
            }
        }
        if (todayEvents.length == 0) {
            let noEventsForToday = document.createElement("li");
            noEventsForToday.appendChild(document.createTextNode("Non ci sono eventi per oggi."));
            noEventsForToday.classList.add("hours");
            timeline.appendChild(noEventsForToday);
        } else {
            todayEvents.sort(compare);
            for (let j = 0; j < todayEvents.length; j++) {
                console.log(todayEvents[j]);
                let timeEvent = document.createElement("li");

                let titleTime = document.createElement("h5");
                let timeText = document.createTextNode(todayEvents[j].startTime + " - " + todayEvents[j].endTime);
                timeEvent.classList.add("hours");
                titleTime.appendChild(timeText);
                timeEvent.appendChild(titleTime);

                let pCourt = document.createElement("p");
                let courtText = document.createTextNode("Campo " + todayEvents[j].court);
                pCourt.appendChild(courtText);
                timeEvent.appendChild(pCourt)
                
                let pTeacher = document.createElement("p");
                let teacherText = document.createTextNode(todayEvents[j].teacher);
                pTeacher.appendChild(teacherText);
                timeEvent.appendChild(pTeacher)

                timeline.appendChild(timeEvent);
            }
            todayEvents.length = 0;
        }
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
        for (let i = 0; i < horizontalCalendar.cells.length; i++) {
            horizontalCalendar.cells[i].onclick = function() {
                setDay(this.childNodes[2]);
            }
            
        }
    }

    function setDay(cell) {
        selectedDay.day = cell.innerHTML;
        selectedDay.month = currentMonth;
        selectedDay.year = currentYear;
        changeDateInHeader(selectedDay.day, months[currentMonth], currentYear);
        showTimeline();
        showCalendar(currentMonth, currentYear);
        getWeatherData();
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
        // selectedYear.value = year;
        // selectedMonth.value = month;
        var dateforcalendar = 1;

        horizontalCalendar.innerHTML = "";

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

                    // highlight day with event
                    for (let i = 0; i < events.length; i++) {
                        if (dateforcalendar == events[i].day && month == events[i].month && year == events[i].year) {
                            calendarCell.classList.add("bg-danger");
                        }
                    }

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

                    // horizontal calendar

                    var horizontalCell = document.createElement("td");
                    var horizontalCellDay = document.createElement("span");
                    horizontalCellDay.innerHTML = dateforcalendar;

                    var weekDay = days[(new Date(dateforcalendar, month, year).getDay() + 5) % 7];
                    var horizontalCellWeek = document.createElement("span");
                    horizontalCellWeek.innerHTML = weekDay;

                    var br = document.createElement("br");
                    var separator = document.createElement("div");
                    separator.classList.add("separator");

                    horizontalCell.classList.add("calendar-day");

                    // highlight day with event     
                    for (let i = 0; i < events.length; i++) {
                        if (dateforcalendar == events[i].day && month == events[i].month && year == events[i].year) {
                            horizontalCell.classList.add("bg-danger");
                        }
                    }

                    // highlight selected day
                    if (dateforcalendar == selectedDay.day && month == selectedDay.month && year == selectedDay.year) {
                        horizontalCell.classList.add("bg-info");
                    } else {
                        if (horizontalCell.classList.contains("bg-info")) {
                            horizontalCell.classList.remove("bg-info");
                        }
                    }

                    horizontalCell.appendChild(horizontalCellWeek);
                    horizontalCell.appendChild(br);
                    horizontalCell.appendChild(horizontalCellDay);
                    horizontalCalendar.appendChild(horizontalCell);
                    horizontalCalendar.appendChild(separator);

                    dateforcalendar++;
                }
            }
            tbl.appendChild(calendarRows);
        }
        selectDay();
    }

    function compare(a, b) {
        if( a.startTime < b.startTime ) {
            return -1;
        }
        if( a.startTime > b.startTime ) {
            return 1;
        }
        return 0;
    }