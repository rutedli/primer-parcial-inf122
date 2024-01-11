function mostrarVentanaEmergente() {
    var ventanaEmergente = document.getElementById("ventanaEmergente");
    ventanaEmergente.style.display = "block";
    setTimeout(function() {
        ventanaEmergente.style.display = "none";
    }, 2000); 
}