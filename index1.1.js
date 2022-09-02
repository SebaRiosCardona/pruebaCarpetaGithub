class Usuario {
    constructor(nombre, apellido, edad, id) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.id = id;
    }
}

let contador = 0; 
const usuarios = [];
let option = 0;
do {
    option = parseInt(
        prompt(
            "ingrese 1 para agrega, 2 para ver todos, 3 para operaciones, 0 para salir"
        )
    );
    switch (option) {
        case 1:
            agregarUsuario(usuarios);
            break;
        case 2:
            verTodosLosUsuarios(usuarios);
            break;
        case 3:
            suma(usuarios);
            break;
        default:
            verTodosLosUsuarios(usuarios);
            break;
    }
} while (option != 0);

//agregar
function agregarUsuario(usuarios) {
    let nombre = prompt("Ingrese nombre");
    let apellido = prompt ("ingrese apellido");
    let edad = parseInt(prompt("ingrese edad"));
    let newUser = new Usuario(nombre, apellido, edad, usuarios.length +1);
    usuarios.push(newUser);
    console.log("Se agrego el usuario ", newUser);
}

//Ver todos
function verTodosLosUsuarios(usuarios) {
    for (const usuario of usuarios) {
        console.log(usuario);
    }
}

//operaciones
function suma(usuarios) {
    contador = contador + 1;
    if (contador == 1) {
        console.log("se suscribio",contador ,"persona");
    } else {console.log("se suscribieron",contador ,"personas");} 
}