const prompt = require('prompt-sync')();

//trips
const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];

//afficher trajets
function AfficherTrajet(){
         console.log("       === TRAJETS DISPONIBLES === ")

        for( let i= 0 ; i<trips.length ; i++){
        console.log(`
        # ${trips[i].id}
        ${trips[i].departure} → ${trips[i].destination}
        -Départ : ${trips[i].departureTime}
        -Arrivée : ${trips[i].arrivalTime}
        -Prix : ${trips[i].price}
        -Places disponibles : ${trips[i].availableSeats} `);
        }
};

// acheter tiket
let seatNumber = 1
let ticketid = 1
const tickets =[];

function acheterTiket(){
    let n = prompt("Nom du passager  :");
    let t = Number(prompt("Identifiant du trajet  :"));


for( let i = 0 ; i < trips.length ; i++){

    if(trips[i].id === t ){


        if (trips[i].availableSeats <= 0){
            console.log("Train complet. ");
            return;
    }

    let ticket = {
        id: ticketid++,
        PassengerName: n,
        TripId: trips[i].id,
        SeatNumber: seatNumber++,
        Price: trips[i].price
};
        trips[i].availableSeats--;
        tickets.push(ticket);
console.log(`
                Ticket acheté avec succès.

                Ticket #${ticket.id}
                Passager : ${ticket.PassengerName}
                Trajet : ${trips[i].departure} → ${trips[i].destination}
                Place : ${ticket.SeatNumber}
                Prix : ${ticket.Price} DH`);

                return ;
        }
   }
        console.log("Trajet introuvable.");
        return;
}
        
//afficher tiket
function AfficherTikets(){
        if ( tickets.length === 0){
                console.log("Aucun ticket enregistré. ")
        }
        if ( tickets.length > 0 ){
                for( let i = 0 ; i < tickets.length ; i++){
                        
                        for( let j = 0 ; j < trips.length ; j++){
                                if(tickets[i].TripId === trips[j].id){

                                console.log("=== TICKETS ===");
                                console.log("Ticket#" + tickets[i].id);
                                console.log("Passager : " + tickets[i].PassengerName);
                                console.log("Trajet : " + trips[j].departure + " → " + trips[j].destination);
                                console.log("Place : " + tickets[i].SeatNumber );
                                console.log("Prix :" + tickets[i].Price + " DH");
                                };
                        }
                        
                }
        }
}

//annuler ticket 
function AnnulerTiket(){

    let annuler = Number(prompt("Identifiant du ticket : "));

    for (let i = 0; i < tickets.length; i++){

        if (annuler === tickets[i].id){

            for (let j = 0; j < trips.length; j++){

                if (tickets[i].TripId === trips[j].id){

                    trips[j].availableSeats++;

                    tickets.splice(i, 1);

                    console.log("Ticket annulé avec succès.");

                    return;
                }
            }
        }
    }

    console.log("Ticket introuvable.");
}

//chercher
function RechercherTicket(){
    let search = prompt("Nom du passager : ")
    for ( let i = 0 ; i < tickets.length ; i++){
        if ( search === tickets[i].PassengerName ){
            console.log("=== TICKETS ===");
            console.log("Ticket#" + tickets[i].id);
            console.log("Passager : " + tickets[i].PassengerName);
            console.log("Trajet : " + trips[i].departure + " → " + trips[i].destination);
            console.log("Place : " + tickets[i].SeatNumber );
            console.log("Prix :" + tickets[i].Price + " DH");
            return;
        }
    }
    console.log( `Aucun tiket sous le nom ${search}`);
}

//filter
function FiltrerTrajets(){
    let filter = prompt(" Ville de départ : ")
    for( let i = 0 ; i < trips.length ; i++){
        if ( filter === trips[i].departure){
            console.log(trips[i].departure + " → " + trips[i].destination + " : " + trips[i].price + " DH")
        }
    }
}

//trier
function TrierTrajets(){
    
    for ( let i = 0 ; i < (trips.length) - 1 ; i++){
        let min = i;
        for ( let j = i + 1 ; j < trips.length ; j++){
            if ( trips[j].price < trips[min].price) {
                min = j;
            }
        }
        if ( min !== i) {
            [trips[i] , trips[min]] = [trips[min] , trips[i]]
        }
    console.log(trips[i].departure + " → " + trips[i].destination +
                 " : " + trips[i].price + " DH")
    }
}

//stats
function Statistiques(){
    console.log("==Total de tickets vendus==");

    console.log( "Nombre total de tickets : " + tickets.length );

    console.log("=Affaires total=")
    let total = 0
    for ( i = 0 ; i < tickets.length ; i++){
        total += tickets[i].Price;
    }
    console.log("Chiffre d'affaires total : " + total + "DH")
};

let choix; 
do{
console.log(`
    ================================= 
            RAILWAY MANAGER 
    ================================= 
    1. Afficher les trajets 
    2. Acheter un ticket 
    3. Afficher les tickets 
    4. Annuler un ticket 
    5. Rechercher un ticket 
    6. Filtrer les trajets 
    7. Trier les trajets 
    8. Statistiques 
    0. Quitter`);

      choix = Number(prompt("choisir de la liste au-dessus  :"))
    if (choix === 1){
            AfficherTrajet();

    }else if (choix === 2){
            acheterTiket();

    }else if (choix === 3){
            AfficherTikets();

    }else if (choix === 4){
            AnnulerTiket();

    }else if (choix === 5){
            RechercherTicket();

    }else if (choix === 6){
            FiltrerTrajets();

    }else if (choix === 7) {
            TrierTrajets();
    }else if ( choix === 0){
            console.log("Au revoir !")    
    }else if (choix === 8) {
            Statistiques();
    }else{
        console.log("Choix non valide !")
    }
} while( choix !== 0);
