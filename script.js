function generateTicket() {

let source = document.getElementById("source").value;
let destination = document.getElementById("destination").value;
let route = document.getElementById("route").value;

let ticketId = Math.floor(Math.random() * 100000);
let date = new Date();

let fare;
let transport;
let distance;
let carbon;

if (route === "Fastest Route") {
    fare = 120;
    transport = "Metro + Cab";
    distance = "18 km";
    carbon = "1.2 kg CO2 Saved";
}
else if (route === "Cheapest Route") {
    fare = 60;
    transport = "Bus + Metro";
    distance = "20 km";
    carbon = "1.5 kg CO2 Saved";
}
else {
    fare = 80;
    transport = "Metro + Electric Bus";
    distance = "19 km";
    carbon = "2.3 kg CO2 Saved";
}

document.getElementById("result").innerHTML =

"<h2>ONE TICKET</h2>" +

"<h3>Ticket Generated Successfully</h3>" +

"<p><b>Ticket ID:</b> " + ticketId + "</p>" +

"<p><b>Date:</b> " + date.toLocaleDateString() + "</p>" +

"<p><b>Time:</b> " + date.toLocaleTimeString() + "</p>" +

"<p><b>Source:</b> " + source + "</p>" +

"<p><b>Destination:</b> " + destination + "</p>" +

"<p><b>AI Recommended Route:</b> " + route + "</p>" +

"<p><b>Transport Mode:</b> " + transport + "</p>" +

"<p><b>Distance:</b> " + distance + "</p>" +

"<p><b>Fare:</b> Rs. " + fare + "</p>" +

"<p><b>Carbon Savings:</b> " + carbon + "</p>" +

"<p><b>Payment Status:</b> Pending</p>" +

"<br>" +

"<img src='https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=" + ticketId + "'>";
}

function payNow() {
    alert("Payment Successful!");
}