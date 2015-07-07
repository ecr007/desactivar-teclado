function sinTeclado(event){
      event.preventDefault();
}

//USO
$('.fecha1,.fecha2').keydown(function(event){
    sinTeclado(event);
});
