// Función del evento click
document.getElementById("btn_open").addEventListener("click", open_menu)

// variables

var sidebar = document.getElementById("sidebar");
var btn_open = document.getElementById("btn_open");
var body = document.getElementById("body");

//


// Mostrar y Ocultar Menu
function open_menu(){
    body.classList.toggle("body_move");
    sidebar.classList.toggle("sidebar_move");
}
