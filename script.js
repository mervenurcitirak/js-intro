
window.addEventListener("load",start);
function start(){

//alert("Hej verden!");
console.log("Hej verden!");


// $.classList.add("tilt");
// $0 virker ikke i vs code: vælg document.querySelector
// for at selecte linjen/funktionen

//document.querySelector("#square").classList.add("tilt");
//document.querySelector("#circle").classList.add("move");
// første del vælger et element - anden del gør noget ved det valgte


// Hvad hvis vi vil have en sekvens til at ske?
// Hvis nu den røde cirkel skal flytte sig op og ændre størrelse, og derefter
//skal det grønne kvadrat tilt'e og så skal den røde cirkel flytte
// sig ned og få normal størrelse, altså noget i retningen af:

document.querySelector("#circle").classList.add("move");
document.querySelector("#circle").classList.add("size");
document.querySelector("#square").classList.remove("tilt");


function normalCircle() {
document.querySelector("#circle").classList.remove("move");
document.querySelector("#circle").classList.remove("size");
}
normalCircle();

function tiltedSquare(){
    document.querySelector("#square").classList.add("tilt");

}

// We're giving the function a name, and when we write the name for the
// function it will activate.

// når man smider dem ind i en funktion er de deaktiveret og aktiveres først ved
//at tilføje funktionens navn nedenunder fx tiltedSquare();

function tiltedSquare(){
    console.log("tiltedSquare");
  // Fjern event listener: .removeEventListener
  // ved at tilføje "remove" gør man at kan klikke på den så mange gange man vil men den registrere kun ET klik.
  // Du kan deaktivere "remove" så du kan klikke på den så mange gange du vil, og der vil stå hvor mange 
  // gange du klikker på den.
  document.querySelector("#square").removeEventListener("click", tiltedSquare);
  document.querySelector("#square").classList.add("tilt");
}
//man kan klikke på firkanten for at aktivere effekten
document.querySelector("#square").addEventListener("click", tiltedSquare);

// addEventlistener (første del af linjen er selectoren) 
// "click navnet på den type event vi vil lytte efter
// tiltedSquare er navnet på den funktion der skal kaldes når eventen indtræffer 
// tiltedSquare uden paranteser, for vi vil ikke kalde funktionen endnu, kun referere til den.
}
