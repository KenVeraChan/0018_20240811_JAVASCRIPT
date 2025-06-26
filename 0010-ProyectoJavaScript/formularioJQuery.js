$(document).ready(()=> {
    $.ajax({
        success: ()=> {
            const formulario = creaFormulario();
            $("#tratamiento").append(formulario);
        },
        error: function(xhr, status, error) {
            console.error("Error en la solicitud:", status, error);
        }
    });
});
function creaFormulario()
{
    //CREANDO EL CONTENIDO DEL FORMULARIO QUE APARECERÁ EN PANTALLA
    const formulario= document.createElement("form");
    formulario.setAttribute("class", "formulario");
   
    //creando el input del usuario
    const nombreUsuario= document.createElement("input");
        nombreUsuario.setAttribute("type", "text");
        nombreUsuario.setAttribute("name", "nombre");
        nombreUsuario.setAttribute("placeholder", "Nombre");

    //creando label del usuario
    const labelNombreUsuario= document.createElement("label");
        labelNombreUsuario.setAttribute("id", "nombre");
        labelNombreUsuario.textContent = "Nombre:";

    //creando el input del apellido
    const apellidoUsuario= document.createElement("input");
        apellidoUsuario.setAttribute("type", "text");
        apellidoUsuario.setAttribute("name", "apellido");
        apellidoUsuario.setAttribute("placeholder", "Apellido");
    
    //creando label del apellido    
    const labelApellidoUsuario= document.createElement("label");
        labelApellidoUsuario.setAttribute("id", "apellido");
        labelApellidoUsuario.textContent = "Apellido:";
    
    //creando el input del correo electrónico
    const emailUsuario= document.createElement("input");
        emailUsuario.setAttribute("type", "email");
        emailUsuario.setAttribute("name", "email");
        emailUsuario.setAttribute("placeholder", "Correo Electrónico");
    
    //creando el label del correo electrónico
    const labelCorreoUsuario= document.createElement("label");
        labelCorreoUsuario.setAttribute("id", "correo");
        labelCorreoUsuario.textContent = "Correo:";

    //creando el boton de carga de datos del usuario
    const botonCargarDatos= document.createElement("button");
        botonCargarDatos.setAttribute("id", "cargarDatos");
        botonCargarDatos.setAttribute("type", "button");
        botonCargarDatos.textContent = "Cargar Datos";

    //AGREGANDO LOS ELEMENTOS CREADOS EN EL FORMULARIO EN EL ORDEN CORRECTO
    //NOMBRE
    formulario.appendChild(labelNombreUsuario);
        Object.assign(labelNombreUsuario.style, {
        fontWeight: "bold",
        marginRight: "10px",
        color: "blue",
        display: "block"
        });
    formulario.appendChild(nombreUsuario);
        Object.assign(nombreUsuario.style, {
        display: "block"
        });
    //APELLIDO
    formulario.appendChild(labelApellidoUsuario);
        Object.assign(labelApellidoUsuario.style, {
        fontWeight: "bold",
        marginRight: "10px",
        color: "blue",
        display: "block"
        });
    formulario.appendChild(apellidoUsuario);
        Object.assign(apellidoUsuario.style, {
        display: "block"
        });
    //EMAIL
    formulario.appendChild(labelCorreoUsuario);
        Object.assign(labelCorreoUsuario.style, {
            fontWeight: "bold",
            marginRight: "10px",
            color: "blue",
            display: "block"
        });
    formulario.appendChild(emailUsuario);
        Object.assign(emailUsuario.style, {
        display: "block"
        });
    formulario.appendChild(botonCargarDatos);
        Object.assign(botonCargarDatos.style, {
        marginTop: "10px",
        padding: "5px 10px",
        backgroundColor: "blue",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
        });
    $("#tratamiento").on("mouseenter","#cargarDatos",function(event){
            $(this).css("background-color", "black");
            event.preventDefault();
        });
    $("#tratamiento").on("mouseleave","#cargarDatos",function(event){
            $("#cargarDatos").css("background-color", "blue");
            event.preventDefault();
        });
    return formulario;

}
/*
    $("#tratamiento form").validate({
        rules: {
            nombre: {
                required: true,
                minlength: 2
            },
            apellido: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            telefono: {
                required: false,
                phoneUS: true
            },
            fecha_nacimiento: {
                required: false,
                date: true
            }
        }, 
    success: function(label){
        label.text('Correcto').addClass('valid');
    },
    });
});
*/