<?php

class DatabaseHelper{
    
    private $db;

    public function __construct($servername, $username, $password, $dbname){
        $this->db = new mysqli($servername, $username, $password, $dbname);
        if($this->db->connect_error){
            die("Connesione fallita al db");
        }
    }

    public function getDb() {
        if ($this->db instanceof mysqli) {
             return $this->db;
        }
    }

    public function addReservation($name, $date, $start, $finish, $service, $wash, $phone) {
        $stmt = $this->db->prepare("INSERT INTO PRENOTAZIONE (Nome, Data, OraInizio, OraFine, Servizio, Lavaggio, Numero) VALUE (?,?,?,?,?, ?, ?)");
        $stmt->bind_param('sssssss', $name, $date, $start, $finish, $service, $wash, $phone);
        $stmt->execute();
    }

    public function getCustomers() {
        $stmt = $this->db->prepare("SELECT * FROM PRENOTAZIONE");
        $stmt->execute();
        $result = $stmt->get_result();

        return $result->fetch_all(MYSQLI_ASSOC);
    }

}

?>
