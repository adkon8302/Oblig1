const billettRegistering = [];
function  kjopBillett() {

       const film = document.getElementById("film").value;
       const antall = document.getElementById("Antall").value;
       const fornavn = document.getElementById("fornavn").value;
       const etternavn = document.getElementById("etternavn").value;
       const telefon = document.getElementById("telefon").value;
       const epost = document.getElementById("epost").value;
       const billett = {
           film,antall,fornavn,etternavn,telefon,epost
       };
    billettRegistering.push(billett);

}
function visBillett(){
    
}