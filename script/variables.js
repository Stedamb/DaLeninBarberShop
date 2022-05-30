    // Arrays
    const days = ['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom'];
    const months = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre",
        "Ottobre", "Novembre", "Dicembre"];
    const events = [];
    const todayEvents = [];

    // Key OpenWeather API
    const API_KEY ='84fc1d8c1f861c77227c28329cf2f904';

    // Event object
    function Event(date, startTime, endTime, court, teacher) {
        this.date = date;
        this.startTime = startTime;
        this.endTime = endTime;
        this.court = court;
        this.teacher = teacher;
        this.day = this.date.split("/")[0];
        this.month = this.date.split("/")[1]-1;
        this.year = this.date.split("/")[2];
    }

    // Selected day object
    function selectedDay(day, month ,year) { 
        this.day = day;
        this.month = month;
        this.year = year;
    }

    function selectCell(table, fun){
        for (let i = 0; i < table.cells.length; i++) {
            timeline.cells[i].onclick = function() { 
                fun(timeline.cells[i]);
            }
        }
    }
