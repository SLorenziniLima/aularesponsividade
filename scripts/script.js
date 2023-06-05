let menu = document.getElementById("menu_links");
let menu_barras = document.getElementById("menu_barras")

function mostrarMenu(){
    if(window.getComputedStyle(menu).display == "none"){
    // mostre o menu
    menu.style.display= "flex";
    menu_barras.setAttribute("aria-expanded","true")
    menu_barras.setAttribute("aria-label", "Fechar o Menu")
}   else{
    // esconda o menu
    menu.style.display = "none"
    menu_barras.setAttribute("aria-expanded","false")
    menu_barras.setAttribute("aria-label", "Abrir o Menu")
}
}
