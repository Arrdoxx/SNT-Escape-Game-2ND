function lime_click() {
    alert("Vous avez finis l'escape game.");
    window.location.href="salle1.html";
}
document.getElementById("lime").onclick = lime_click;










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