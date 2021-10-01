let objPersona =[
    {id:0, nombre: "David", edad: 34, colorCabello: "Negro", oficio: "Contador Público", mascotaFavorita:"Perros y gatos", hobby:"Programar", pais:"México"}
]

let contadorId = 0
let intruducirDatos= (e)=>{
    e.preventDefault()
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let cabello = document.getElementById("cabello").value;
    let oficio = document.getElementById("oficio").value;
    let mascota = document.getElementById("mascota").value;
    let hobby = document.getElementById("hobby").value;
    let pais = document.getElementById("pais").value;
    
    if(nombre =='' || edad == '' || cabello == '' || oficio == '' || mascota == '' || hobby == '' || pais == ''){
    // if(nombre ==''){
        alert("No puedes dejar campos vacios")
    }else{
        let dic = {
            id : ++contadorId,
            nombre: nombre,
            edad: edad,
            colorCabello: cabello,
            oficio: oficio,
            mascotaFavorita: mascota, 
            hobby: hobby, 
            pais: pais
        }
        
        objPersona.push(dic)
        
        // console.log(objPersona);
        
        recargar()

        //Eliminar los datos del formulario
        let formDatos = document.getElementById("form");
        formDatos.reset();
    }
    
}


let recargar = () => {
    let reload = document.getElementById("tBody")
    reload.remove()
    inicioPersonas()
    // setTimeout(function(){
    //     inicioPersonas()
    // }, 3000)
    
    
}

let inicioPersonas = () => {
    let newtBody = document.createElement("tbody");
    newtBody.id = "tBody"
    document.getElementById("tablaGrande").appendChild(newtBody);
    objPersona.forEach(item =>{
        let newElement = document.createElement("tr");
        newElement.id = item.id
        document.getElementById("tBody").appendChild(newElement);

        let tdNombre = document.createElement("td");
        let tdEdad = document.createElement("td");
        let tdColorCabello = document.createElement("td");
        let tdOficio = document.createElement("td");
        let tdMascotaFavorita = document.createElement("td");
        let tdHobby = document.createElement("td");
        let tdPais = document.createElement("td");
        let tdAccion = document.createElement("td");
        tdAccion.id = `action ${item.id}` 
        tdAccion.classList = "accion"
        let buttonCancelar = document.createElement("button");
        buttonCancelar.id = item.id
        buttonCancelar.classList = "buttonCancelar"
        buttonCancelar.addEventListener("click", () => {
        let algo = document.getElementById(buttonCancelar.id).id
        let idCancelar = objPersona.findIndex(item => item.id == algo)
        // console.log("idcancelar ", idCancelar)
        //Esto es por que si no encuentra el item.id regresaria -1, no se ocupa en este caso pero es util saberlo
        if (idCancelar >= 0){
            objPersona.splice(idCancelar,1)
            console.log(objPersona)
            recargar()
        }
        }, false);
        
        
        let buttonEditar = document.createElement("button");
        buttonEditar.id = item.id
        buttonEditar.classList = "buttonEditar"
        
        buttonEditar.addEventListener("click", () => {
            let algo2 = parseInt(document.getElementById(buttonEditar.id).id)
            let idEditar = objPersona.findIndex(item => item.id == algo2)
            console.log(algo2)
            let changue = prompt(`Ingresa para editar:
              (n) para Nombre
              (e) para Edad
              (c) para Color de cabello
              (o) para Oficio
              (m) para Mascota favorita
              (h) para Hobby
              (p) para Pais de residencia
            `)
            let edit = prompt("Favor de introducir el dato nuevo")
            objetoEditar = objPersona[idEditar]
           
            switch (changue) {
                case "n":
                    objetoEditar.nombre = edit
                    break;
                case "e":
                    objetoEditar.edad = edit
                    break;
                case "c":
                    objetoEditar.colorCabello= edit
                    break;
                case "o":
                    objetoEditar.oficio = edit
                    break;
                case "m":
                    objetoEditar.mascotaFavorita = edit
                    break;
                case "h":
                    objetoEditar.hobby = edit
                    break;
                case "p":
                    objetoEditar.pais = edit
                    break;
                default:
                    break;
            }
            recargar()


            }, false);

        
        tdNombre.innerHTML = item.nombre
        tdEdad.innerHTML = item.edad
        tdColorCabello.innerHTML = item.colorCabello
        tdOficio.innerHTML = item.oficio
        tdMascotaFavorita.innerHTML = item.mascotaFavorita
        tdHobby.innerHTML = item.hobby
        tdPais.innerHTML = item.pais
        buttonCancelar.innerHTML = "Delete"
        buttonEditar.innerHTML = "Edit"
    
        document.getElementById(newElement.id).appendChild(tdNombre);
        document.getElementById(newElement.id).appendChild(tdEdad);
        document.getElementById(newElement.id).appendChild(tdColorCabello);
        document.getElementById(newElement.id).appendChild(tdOficio);
        document.getElementById(newElement.id).appendChild(tdMascotaFavorita);
        document.getElementById(newElement.id).appendChild(tdHobby);
        document.getElementById(newElement.id).appendChild(tdPais);
        document.getElementById(newElement.id).appendChild(tdAccion);
        document.getElementById(tdAccion.id).appendChild(buttonEditar);
        if(item.id > 0){ 
            document.getElementById(tdAccion.id).appendChild(buttonCancelar);
        }
        
                
    })
}

inicioPersonas()