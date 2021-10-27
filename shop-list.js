var database = firebase.database().ref();
var proj_ref = document.getElementById("list-currency");

var shop;

if(shop == 'bills') {
    database.child("Bill").get().then((snapshot) => { 
        
    });
} else if (shop == 'coins') {
    database.child("Coins").get().then((snapshot) => { 

    });
}