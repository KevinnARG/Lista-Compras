let listaCosas = [];

const objCosa = {
    cosa: "",
    cantidad: ""
}

let editando = false;

const formulario = document.querySelector("#formulario");
const cosaInput = document.querySelector("#cosa");
const cantidadInput = document.querySelector("#cantidad")
const btnAgregar = document.querySelector("#btnAgregar");

btnAgregar.addEventListener("click", validarFormulario );

function validarFormulario(e) {
    e.preventDefault();

    if (cosaInput.value === "" || cantidad.value === "") {
        alert("Todos los campos son obligatorios.");
        return;
    }

    if (editando) {
        // editarCosa();
        editando = false;
    } else {
        objCosa.cosa = cosaInput.value;
        objCosa.cantidad = cantidadInput.value;
    
        agregarCosa();
    }
}

function agregarCosa() {
    listaCosas.push({...objCosa})

    mostrarCosas();

    formulario.reset();

}

function mostrarCosas() {

    const divCosas = document.querySelector(".div-cosas");

    // listaCosas.forEach( _cosa => {

    //     const parrafo = document.createElement("h2");
    //     parrafo.textContent = `${objCosa.cosa} - ${objCosa.cantidad} -`

    //     const eliminarBoton = document.createElement("button");
    //     // eliminarBoton.onclick = () => eliminarCosa(id);
    //     eliminarBoton.textContent = "Eliminar";
    //     eliminarBoton.classList.add("btn", "btn-eliminar");
    //     parrafo.append(eliminarBoton)

    //     const hr = document.createElement("hr");

    //     divCosas.appendChild(parrafo);
    //     divCosas.appendChild(hr);
    // })

    const parrafo = document.createElement("h2");
    parrafo.textContent = `${objCosa.cosa} - ${objCosa.cantidad}`

    const eliminarBoton = document.createElement("button")
    eliminarBoton.textContent = "Eliminar";
    eliminarBoton.classList.add("btn-eliminar");
    parrafo.append(eliminarBoton)

    eliminarBoton.style.backgroundColor = "red"
    eliminarBoton.style.marginLeft = "86vh"
    eliminarBoton.style.width = "60px"
    eliminarBoton.style.height = "20px"
    eliminarBoton.style.position = "absolute"
    eliminarBoton.style.marginTop = "1vh"

    eliminarBoton.onclick = () => {

    const divCosas = document.querySelector(".div-cosas");

    while (parrafo.firstChild) {
        parrafo.removeChild(parrafo.firstChild);
        parrafo.remove()
        hr.remove()
        
    }
}



    parrafo.style.justifyContent = "center"
    parrafo.style.display = "flex"
    parrafo.style.marginLeft = "auto"
    parrafo.style.marginRight = "auto"

    const hr = document.createElement("hr")

    hr.style.width = "100%"
    hr.style.height = "100%"

    divCosas.appendChild(parrafo)
    divCosas.appendChild(hr)

}

function limpiarLista() {

    const divCosas = document.querySelector(".div-cosas");

    while (divCosas.firstChild) {
        divCosas.removeChild(divCosas.firstChild);
      }
}
