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
    <link rel="stylesheet" href="./listino.css">

    <title>Da Lenin Barber Shop</title>

</head>

<body class="bg-dark">
    <div class="container-fluid">

        <?php session_start(); ?>
        <?php require ("./php/topbar.php"); ?>

        <div class="row header">
            <div class="col-md-6 col-xl-4">
                <div class="card m-4">
                    <img src="../res/taglio1.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Shampoo e Taglio</h5>
                        <p class="card-text"></p>
                        <a href="#" class="btn btn-dark">20$</a>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-xl-4">
                <div class="card m-4">
                    <img src="../res/taglio2.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Shampoo Taglio e Barba</h5>
                        <p class="card-text"></p>
                        <a href="#" class="btn btn-dark">25$</a>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-xl-4">
                <div class="card m-4">
                    <img src="../res/barba.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Barba</h5>
                        <p class="card-text"></p>
                        <a href="#" class="btn btn-dark">8$</a>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-xl-4">
                <div class="card m-4">
                    <img src="../res/shampoo.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Shampoo e Pettinata</h5>
                        <p class="card-text"></p>
                        <a href="#" class="btn btn-dark">10$</a>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-xl-4">
                <div class="card m-4">
                    <img src="../res/bambini.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Taglio Bambini</h5>
                        <p class="card-text">Fino a 10 anni</p>
                        <a href="#" class="btn btn-dark">10$</a>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-xl-4">
                <div class="card m-4">
                    <img src="../res/ragazzi.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Taglio Ragazzi</h5>
                        <p class="card-text">11-15 anni</p>
                        <a href="#" class="btn btn-dark">15$</a>
                    </div>
                </div>
            </div>
        </div>

        <?php require("./php/footer.php"); ?>
    </div>

</body>

</html>