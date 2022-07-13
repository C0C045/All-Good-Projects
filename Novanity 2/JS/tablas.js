//Funcion para el despliegue de DataTable
$(document).ready( function () {
//Manejo de DataTable en la tabla: tabla_usuarios
 tabla_usuarios = $('#tabla_usuarios').DataTable({
        //Para cambiar el lenguaje a español
        "language": {
          "lengthMenu": "Mostrar _MENU_ registros",
          "zeroRecords": "No se encontraron resultados",
          "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
          "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
          "infoFiltered": "(filtrado de un total de _MAX_ registros)",
          "sSearch": "Buscar:",
          "oPaginate": {
            "sFirst": "Primero",
            "sLast":"Último",
            "sNext":"Siguiente",
            "sPrevious": "Anterior"
          },
          "sProcessing":"Procesando...",
        }

 });

//Manejo del boton editar usuario
$(document).on("click", ".btnEditar", function(){

    $(".modal-header").css("background-color", "#007bff");
    $(".modal-header").css("color", "white");
    $(".modal-title").text("Editar Usuario");
    $("#modalUsuario").modal("show");    
});

//Manejo de DataTable en la tabla: Configuracion Usuarios
tabla_usuarios = $('#tabla_conf_usuarios').DataTable({
  //Agrega los botones de accion a la tabla 
"columnDefs":[{
  "targets": -1,
  "data":null,
  "defaultContent": "<div class='text-center'><div class='btn-group'><button class='btn btn-primary btnEditar'>Editar</button><button class='btn btn-danger btnBorrar'>Borrar</button></div></div>"
             }],
  //Para cambiar el lenguaje a español
  "language": {
    "lengthMenu": "Mostrar _MENU_ registros",
    "zeroRecords": "No se encontraron resultados",
    "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
    "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
    "infoFiltered": "(filtrado de un total de _MAX_ registros)",
    "sSearch": "Buscar:",
    "oPaginate": {
      "sFirst": "Primero",
      "sLast":"Último",
      "sNext":"Siguiente",
      "sPrevious": "Anterior"
    },
    "sProcessing":"Procesando...",
  }

});

//Manejo del boton editar usuario
var fila; //capturar la fila para editar o borrar el registro
$(document).on("click", ".btnEditar", function(){

fila = $(this).closest("tr");
usuario = fila.find('td:eq(0)').text();
nombre = fila.find('td:eq(1)').text();
apellido = fila.find('td:eq(2)').text();
celular = parseInt(fila.find('td:eq(3)').text());
direccion = fila.find('td:eq(4)').text();
correo = fila.find('td:eq(5)').text();
rol = fila.find('td:eq(6)').text();

$("#usuario").val(usuario);
$("#nombre").val(nombre);
$("#apellido").val(apellido);
$("#celular").val(celular);
$("#direccion").val(direccion);
$("#correo").val(correo);

$(".modal-header").css("background-color", "#007bff");
$(".modal-header").css("color", "white");
$(".modal-title").text("Editar Usuario");
$("#modalCRUD").modal("show");    
});

} );

