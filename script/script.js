function télé_click(){
    openImage("ass/télé.png")
}
document.getElementById("télé").onclick = télé_click;

function journal_click(){
    openImage("ass/journal.png")
}
document.getElementById("journal").onclick = journal_click;

function code_click(){
    openImage("ass/code.png")
}
document.getElementById("code").onclick = code_click;

function quent_click(){
    openImage("ass/quent.png")
}
document.getElementById("quent").onclick = quent_click;


//clic sur la porte
function fenetre_click() {
    let value = prompt("Quel est le code ?");

    if (value == "Working...") {
        window.location.href="fenetre.html";
    } else {
        if (value != undefined) {
            alert("Ce n'est pas le code.");
        }
    }
}
document.getElementById("fenetre").onclick = fenetre_click;


























function openModal() {
    document.getElementById("modal").style.display = "block";
}
function openImage(link) {
    let img = document.createElement("img");
    img.setAttribute("id","myImg");
    img.setAttribute("src",link);
    document.getElementById("modal-content").appendChild(img);
    openModal();
}
function closeModal() {
    let img = document.getElementById("myImg");
    document.getElementById("modal-content").removeChild(img);
    document.getElementById("modal").style.display = "none";
}