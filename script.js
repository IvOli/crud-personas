//Array de tareas
let tareas = []

//iniciadores de Id 
listId = 0


function dataIn(e){
    //Bloque la recarga de la pagina al darle click en el input.
    e.preventDefault()
    //Se obtiene el valor capturado en el input tarea
    let tarea = document.getElementById("tarea").value
    //La tarea se agrega al array de tareas
    tareas.push(tarea)
    //Se crea un elemento lista
    let newElement = document.createElement("li");
    //Se le agrega un ID
    newElement.id = listId++
    //Se le agrega una clase
    newElement.className = "li-new"
    //Al elemento se le asigna el valor de la tarea
    newElement.innerHTML = tarea
    

    //Se crea un boton de borrar y se le asigna un ID
    let newButton = document.createElement("button");
    newButton.innerHTML = `Borrar`;
    //Se crea un Event Listener que funciona para borrar
    newButton.addEventListener("click", function() {
        
        tareas.splice(newElement.id,1, "deleted");
        document.getElementById(newElement.id).innerHTML = tareas[newElement.id]
    }, false);
    
    //Se crea un boton de editar
    let newEdit = document.createElement("button");  
    newEdit.innerHTML = `Editar`;
    //Se crea un Event Listener que funciona para editar
    newEdit.addEventListener("click", function () {
        changue = prompt("Que dato quieres introducir")
        tareas.splice(newElement.id,1, changue);
        document.getElementById(newElement.id).innerHTML = tareas[newElement.id]
    }, false);

//Se agregan los elementos en el DOM
    document.getElementById("lista").appendChild(newElement);
    document.getElementById("lista").appendChild(newButton);
    document.getElementById("lista").appendChild(newEdit);
    console.log(tareas)
   }
    
