<!DOCTYPE html>
<html lang="it">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- BOOTSTRAP -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous">
    </script>

    <!-- BOOTSTRAP ICONS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">

    <!-- JQUERY -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>

    <!-- JQUERYUI -->
    <script src="https://code.jquery.com/ui/1.13.1/jquery-ui.min.js"
        integrity="sha256-eTyxS0rkjpLEo16uXTS0uVCS4815lc40K2iVpWDvdSY=" crossorigin="anonymous"></script>
    <link href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css" rel="stylesheet">

    <!-- TIMEPICKER -->
    <script src="https://cdn.jsdelivr.net/npm/timepicker@1.13.18/jquery.timepicker.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/timepicker@1.13.18/jquery.timepicker.min.css" rel="stylesheet">

    <!-- FONT -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Monsieur+La+Doulaise&display=swap" rel="stylesheet">

    <!-- CSS -->
    <link rel="stylesheet" href="./style.css">

    <title>Da Lenin Barber Shop</title>

</head>

<body class="bg-light">
    <div class="container-fluid">

    <?php session_start(); ?>
    <?php require("./php/topbar.php"); ?>
        <!-- HEADER -->
        <div class="row header-prenota">
            <div class="col-lg-10 row">
                <div class="col-lg-3 col-12 text-center text-lg-end d-flex flex-column day-container">
                    <span class="day" id="header-day"></span>
                </div>
                <div class="col-lg-9 col-12 d-flex flex-column">
                    <div class="col-lg-12 col-12 mt-lg-auto text-center text-lg-start order-last order-lg-first">
                        <span class="year" id="header-year"></span>
                    </div>
                    <div
                        class="col-lg-12 col-12 mb-lg-5 mt-3 mt-lg-0 text-center text-lg-start order-first order-lg-last">
                        <span class="month" id="header-month"></span>
                    </div>
                </div>
            </div>
            <div class="col-lg-2 d-flex flex-column"> </div>
        </div>

        <!-- TIMELINE -->
        <div class="row">
            <div class="col-12 col-lg-8">
                <div class="card mt-4">
                    <div class="card-header">
                        <div class="d-flex">
                            <button class="btn flex-fill mx-4" id="prev" onclick="prev()"><</button>
                            <div class="">
                                <h3 class="text-center flex-fill" id="card-header-day"></h3>
                            </div>
                            <button class="btn flex-fill mx-4" id="next" onclick="next()">></button>
                        </div>
                    </div>
                    <span class="mt-3 ms-3">Clicca su un orario per selezionare</span>
                    <span class="mt-3 ms-3">Mattina</span>
                    <div class="horizontal-timeline ms-4">
                        <table class="table-responsive timeline-big">
                            <tbody>
                                <tr id="timeline-morning" class="timeline-row"></tr>
                            </tbody>
                        </table>
                    </div>
                    <span class="mt-3 ms-3">Pomeriggio</span>
                    <div class="horizontal-timeline ms-4">
                        <table class="table-responsive timeline-big">
                            <tbody>
                                <tr id="timeline-afternoon" class="timeline-row"></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

    
            <!-- FORM -->
            <div class="col-12 col-lg-4">
                <div class="col-12">
                    <div class="card mt-4">
                        <form id="add_booking" autocomplete="off">
                            <legend class="card-header text-center h3">Prenota</legend>
                            <div class="card-body">

                                <div class="mb-3">
                                    <label for="datepicker">Data</label>
                                    <input class="form-control" id="datepicker" type="text"
                                        placeholder="inserisci la data in formato gg/mm/aaaa">
                                </div>
                                <div class="mb-3">
                                    <label for="timepicker-start">Ora inizio</label>
                                    <input class="form-control" id="timepicker-start" type="text"
                                        placeholder="inserisci l'ora in formato hh:mm">
                                </div>
                                <div class="mb-3">
                                    <label for="timepicker-end">Ora fine</label>
                                    <input class="form-control" id="timepicker-end" type="text"
                                        placeholder="inserisci l'ora in formato hh:mm">
                                </div>
                                   
                                <span class="mt-3">Servizio</span>
                                <select id="select-master" class="form-select mb-3" name="select-teacher">
                                    <option selected>Seleziona servizio</option>
                                    <option value="1">Taglio Uomo</option>
                                    <option value="2">Taglio Ragazzo</option>
                                    <option value="3">Tinta</option>
                                </select>

                                <div class="form-check form-check-inline">
                                    <input type="radio" id="1" name="field-select" value="1" class="form-check-input">
                                    <label for="1" class="form-check-label ">Con lavaggio</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input type="radio" id="2" name="field-select" value="2" class="form-check-input">
                                    <label for="2" class="form-check-label">Senza lavaggio</label>
                                </div>
        
                                <div class="text-center">
                                    <button type="button" class="btn btn-primary" onclick="addEvent()">Aggiungi</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <!-- CALENDAR -->
                <div class="col-12 mt-4">
                    <div class="card">
                        <div class="card-header">
                            <div class="d-flex">
                                <button class="btn flex-fill mx-4" id="prev" onclick="prev()"><</button> 
                                <div class="">
                                    <h3 class="text-center flex-fill" id="mandyr"></h3>
                                </div>
                                <button class="btn flex-fill mx-4" id="next" onclick="next()">></button>
                            </div>
                        </div>
                    <div class="card-body calendar-body">
                        <table class="table" id="calendar">
                            <thead>
                                <tr class="text-center">
                                    <th>Lun</th>
                                    <th>Mar</th>
                                    <th>Mer</th>
                                    <th>Gio</th>
                                    <th>Ven</th>
                                    <th>Sab</th>
                                    <th>Dom</th>
                                </tr>
                            </thead>
                            <tbody id="calendarBody">
                            </tbody>
                        </table>
                </div>
            </div>
        </div>    
    </div>
    <?php require("./php/footer.php"); ?>

    <!-- SCRIPT -->
    <!-- <script src="../script/variables.js"></script>
    <script src="../script/prenota_script.js"></script> -->
    <!-- <script src="../script/script.js"></script> -->
</body>

</html>